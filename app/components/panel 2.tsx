import { cn } from "@/lib/utils";

export function Panel({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "screen-line-top screen-line-bottom border-x border-line",
        className
      )}
    >
      {children}
    </section>
  );
}

export function PanelHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <header className={cn("screen-line-bottom px-4", className)}>
      {children}
    </header>
  );
}

export function PanelTitle({
  className,
  children,
  count,
}: {
  className?: string;
  children: React.ReactNode;
  count?: number;
}) {
  return (
    <h2 className={cn("text-3xl font-semibold tracking-tight", className)}>
      {children}
      {count !== undefined && (
        <sup className="-top-[0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground">
          ({count})
        </sup>
      )}
    </h2>
  );
}

export function PanelDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "py-4 font-mono text-sm text-balance text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PanelContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-4", className)}>{children}</div>;
}
