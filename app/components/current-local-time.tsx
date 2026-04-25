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

const CLOCK_ICONS: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Clock1Icon,
  2: Clock2Icon,
  3: Clock3Icon,
  4: Clock4Icon,
  5: Clock5Icon,
  6: Clock6Icon,
  7: Clock7Icon,
  8: Clock8Icon,
  9: Clock9Icon,
  10: Clock10Icon,
  11: Clock11Icon,
  12: Clock12Icon,
};

function computeClock(timeZone: string) {
  const now = new Date();

  const timeString = now.toLocaleTimeString("fr-FR", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
  });

  const hour = parseInt(
    now.toLocaleString("en-US", { timeZone, hour: "numeric", hour12: false })
  );
  const hour12 = hour % 12 || 12;

  const targetDateStr = now.toLocaleString("en-US", { timeZone });
  const targetDate = new Date(targetDateStr);
  const localDateStr = now.toLocaleString("en-US");
  const localDate = new Date(localDateStr);
  const minutesDiff = Math.round((targetDate.getTime() - localDate.getTime()) / 60000);

  let diffText: string;
  if (Math.abs(minutesDiff) < 30) {
    diffText = " // même heure";
  } else {
    const hours = Math.round(Math.abs(minutesDiff) / 60);
    const isAhead = minutesDiff > 0;
    diffText = ` // ${hours}h ${isAhead ? "en avance" : "en retard"}`;
  }

  return { timeString, hour12, diffText };
}

export function CurrentLocalTime({ timeZone }: { timeZone: string }) {
  const [clock, setClock] = useState(() => computeClock(timeZone));

  useEffect(() => {
    const update = () => setClock(computeClock(timeZone));
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const ClockIcon = CLOCK_ICONS[clock.hour12];

  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <IconBadge icon={ClockIcon} />
      <p className="text-balance">
        <Tooltip content={timeZone}>
          {clock.timeString}
        </Tooltip>
        <span className="text-muted-foreground" aria-hidden>
          {clock.diffText}
        </span>
      </p>
    </div>
  );
}
