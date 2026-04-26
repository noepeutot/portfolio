"use client";

import {
  Clock1Icon,
  Clock2Icon,
  Clock3Icon,
  Clock4Icon,
  Clock5Icon,
  Clock6Icon,
  Clock7Icon,
  Clock8Icon,
  Clock9Icon,
  Clock10Icon,
  Clock11Icon,
  Clock12Icon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { IconBadge } from "./icon-badge";
import { Tooltip } from "./tooltip";

const CLOCK_ICONS = [
  Clock12Icon,
  Clock1Icon,
  Clock2Icon,
  Clock3Icon,
  Clock4Icon,
  Clock5Icon,
  Clock6Icon,
  Clock7Icon,
  Clock8Icon,
  Clock9Icon,
  Clock10Icon,
  Clock11Icon,
];

function getZoneOffsetMinutes(timeZone: string, at: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(at);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUTC = Date.UTC(
    get("year"),
    get("month") - 1,
    get("day"),
    get("hour") % 24,
    get("minute"),
    get("second"),
  );
  return Math.round((asUTC - at.getTime()) / 60000);
}

function formatDiff(timeZone: string, now: Date): string {
  const diff = getZoneOffsetMinutes(timeZone, now) + now.getTimezoneOffset();
  if (diff === 0) return " // même heure";
  const direction = diff > 0 ? "en avance" : "en retard";
  const abs = Math.abs(diff);
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;
  const formatted =
    minutes === 0 ? `${hours}h` : `${hours}h${String(minutes).padStart(2, "0")}`;
  return ` // ${formatted} ${direction}`;
}

function computeTime(timeZone: string) {
  const now = new Date();
  const timeString = now.toLocaleTimeString("fr-FR", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
  });
  const hour24 = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      hour12: false,
    }).format(now),
  );
  return { now, timeString, hour12: hour24 % 12 };
}

export function CurrentLocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState(() => computeTime(timeZone));
  const [diffText, setDiffText] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const next = computeTime(timeZone);
      setTime(next);
      setDiffText(formatDiff(timeZone, next.now));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const ClockIcon = CLOCK_ICONS[time.hour12];

  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <IconBadge icon={ClockIcon} />
      <p className="text-balance">
        <Tooltip content={timeZone}>
          <span className="tabular-nums">{time.timeString}</span>
        </Tooltip>
        {diffText && (
          <span className="text-muted-foreground" aria-hidden>
            {diffText}
          </span>
        )}
      </p>
    </div>
  );
}
