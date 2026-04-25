import Markdown from "react-markdown";

export function MarkdownContent({ children }: { children: string }) {
  return (
    <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none font-mono text-foreground">
      <Markdown
        components={{
          a: ({ children, href, ...props }) => (
            <a
              href={href}
              target="_blank"
              rel="nofollow noopener"
              className="underline underline-offset-4"
              {...props}
            >
              {children}
            </a>
          ),
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
