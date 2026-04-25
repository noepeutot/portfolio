export function Cover() {
  return (
    <div
      className="flex aspect-2/1 select-none items-center justify-center border-x border-line screen-line-top screen-line-bottom before:-top-px after:-bottom-px sm:aspect-3/1"
      style={{
        backgroundImage:
          "radial-gradient(color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 0)",
        backgroundSize: "10px 10px",
        backgroundPosition: "center",
      }}
    >
      <span className="text-5xl font-bold tracking-tight sm:text-7xl">NP</span>
    </div>
  );
}
