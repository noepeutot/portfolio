"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  inside: boolean;
  jit: number; // per-dot jitter to soften the directional front (no hard bar)
  c: number; // grid column index
  r: number; // grid row index
};

const TEXT = "Sabaï dii";

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));
const frac = (n: number) => ((n % 1) + 1) % 1;

/**
 * Banner animation — "Sabaï dii" (hello in Lao) rendered as a dot matrix on the
 * portfolio's blueprint grid. Dots light up point-by-point from left to right,
 * hold, then clear from right to left. Stays in the DA (10px dot grid, semantic
 * colors). Zero dependency, canvas 2D, theme-aware, reduced-motion safe.
 */
export function Cover() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let dpr = 1;
    let W = 0;
    let H = 0;
    let dots: Dot[] = [];
    let GRID = 8; // dot spacing in px — adaptive (finer on small screens)
    let amb = 1; // ambient faint-grid stride (keeps it ≈8px whatever GRID is)

    const FADE = 0.22; // per-dot fade window (fraction of a stage)
    const litStagger = (key: number, p: number) =>
      clamp((p - key * (1 - FADE)) / FADE, 0, 1);
    // Appearance front sweeps left → right.
    const keyLTR = (d: Dot) => clamp(d.x / W + (d.jit - 0.5) * 0.16, 0, 1);
    // Disappearance front sweeps right → left.
    const keyRTL = (d: Dot) => clamp(1 - d.x / W + (d.jit - 0.5) * 0.16, 0, 1);

    const build = () => {
      const fam =
        getComputedStyle(canvas).fontFamily ||
        "ui-sans-serif, system-ui, sans-serif";
      let fontSize = H * 0.6;
      ctx.font = `700 ${fontSize}px ${fam}`;
      const maxW = W * 0.84;
      const measured = ctx.measureText(TEXT).width;
      if (measured > maxW) fontSize *= maxW / measured;

      // Natural-size mask for clean per-point membership sampling.
      const nat = document.createElement("canvas");
      nat.width = Math.max(1, Math.floor(W));
      nat.height = Math.max(1, Math.floor(H));
      const nctx = nat.getContext("2d", { willReadFrequently: true })!;
      nctx.font = `700 ${fontSize}px ${fam}`;
      nctx.textAlign = "center";
      nctx.textBaseline = "middle";
      nctx.fillStyle = "#fff";
      nctx.fillText(TEXT, W / 2, H / 2);
      const data = nctx.getImageData(0, 0, nat.width, nat.height).data;

      // Adaptive grid: keep a roughly constant dot resolution across screen
      // sizes (≈8px on desktop, ≈4px on mobile) so the word stays legible when
      // the banner — and thus the font — shrinks.
      GRID = Math.max(4, Math.min(8, Math.round(fontSize / 19)));
      amb = Math.max(1, Math.round(8 / GRID));
      const cells: Dot[] = [];
      const insideAt = new Set<string>();
      let r = 0;
      for (let y = GRID / 2; y < H; y += GRID, r++) {
        let c = 0;
        for (let x = GRID / 2; x < W; x += GRID, c++) {
          const px = Math.min(nat.width - 1, Math.floor(x));
          const py = Math.min(nat.height - 1, Math.floor(y));
          const inside = data[(py * nat.width + px) * 4 + 3] > 128;
          const jit = frac(Math.sin(x * 7.131 + y * 21.74) * 9123.17);
          cells.push({ x, y, inside, jit, c, r });
          if (inside) insideAt.add(`${c},${r}`);
        }
      }

      // Trim protruding "tips" — lone dots hanging off the letterforms (e.g. the
      // bottom point of the "S"). A tip has ≤1 of its 4 cardinal neighbours and
      // few neighbours overall. Only do this when strokes are thick enough
      // (≈ desktop); at small sizes strokes are ~1 dot wide and trimming would
      // fragment them, so those renders are left untouched.
      if (fontSize / GRID > 14) {
        const has = (c: number, r: number) => insideAt.has(`${c},${r}`);
        for (const cell of cells) {
          if (!cell.inside) continue;
          const { c, r } = cell;
          const cardinal =
            (has(c, r - 1) ? 1 : 0) +
            (has(c, r + 1) ? 1 : 0) +
            (has(c - 1, r) ? 1 : 0) +
            (has(c + 1, r) ? 1 : 0);
          let total = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if ((dx || dy) && has(c + dx, r + dy)) total++;
            }
          }
          if (cardinal <= 1 && total <= 3) cell.inside = false;
        }
      }

      dots = cells;
    };

    const draw = (litOf: (d: Dot) => number) => {
      const ink = getComputedStyle(canvas).color;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = ink;
      // Radius scales with the grid so a lit dot is ~0.62×GRID wide and keeps a
      // clear gap from its neighbours — a fixed radius would merge the dots into
      // blobs on the fine (mobile) grid.
      const rMax = GRID * 0.31;
      const rMin = GRID * 0.13;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        // Ambient faint dots sit on a coarser ≈8px lattice so a fine GRID
        // (mobile) doesn't turn the background into dense fog. Glyph dots use
        // the full GRID and only show the ambient floor when on that lattice —
        // so when unlit they melt back into the uniform grid (no ghost word).
        const onLattice = d.c % amb === 0 && d.r % amb === 0;
        let alpha: number;
        let radius: number;
        if (d.inside) {
          const lit = litOf(d);
          alpha = lit * 0.65 + (onLattice ? 0.07 : 0);
          radius = rMin + lit * (rMax - rMin);
        } else {
          if (!onLattice) continue;
          alpha = 0.07;
          radius = rMin;
        }
        if (alpha <= 0.001) continue;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const setup = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = Math.max(1, Math.floor(rect.width));
      H = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const start = performance.now();
    const loop = (now: number) => {
      const t = now - start;
      const IN = 2600;
      const HOLD = 2400;
      const OUT = 2600;
      const GAP = 500;
      const CYCLE = IN + HOLD + OUT + GAP;
      const cyc = t % CYCLE;

      if (cyc < IN) {
        const p = cyc / IN; // appear: left → right
        draw((d) => litStagger(keyLTR(d), p));
      } else if (cyc < IN + HOLD) {
        draw(() => 1);
      } else if (cyc < IN + HOLD + OUT) {
        const q = (cyc - IN - HOLD) / OUT; // disappear: right → left
        draw((d) => 1 - litStagger(keyRTL(d), q));
      } else {
        draw(() => 0);
      }

      raf = requestAnimationFrame(loop);
    };

    // Reduced motion: show the assembled word statically, no animation loop.
    const renderStatic = () => draw(() => 1);

    setup();
    if (reduced) renderStatic();
    else raf = requestAnimationFrame(loop);

    const handleResize = () => {
      cancelAnimationFrame(raf);
      setup();
      if (reduced) renderStatic();
      else raf = requestAnimationFrame(loop);
    };
    window.addEventListener("resize", handleResize);

    // With the loop stopped (reduced motion) the dots keep their painted colour,
    // so redraw on theme switches (<html> class change) to follow light/dark.
    let themeObserver: MutationObserver | null = null;
    if (reduced) {
      themeObserver = new MutationObserver(renderStatic);
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      themeObserver?.disconnect();
    };
  }, []);

  return (
    <div
      className="relative aspect-2/1 select-none overflow-hidden border-x border-line screen-line-top screen-line-bottom before:-top-px after:-bottom-px sm:aspect-3/1"
      style={{
        backgroundImage:
          "radial-gradient(color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 0)",
        backgroundSize: "10px 10px",
        backgroundPosition: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full text-foreground"
        aria-label="Sabaï dii"
      />
      <span className="pointer-events-none absolute right-3 bottom-2 font-mono text-[10px] text-muted-foreground sm:text-xs">
        * bonjour en laotien
      </span>
    </div>
  );
}
