import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getSpec(): Promise<string> {
  const res = await fetch(
    "https://raw.githubusercontent.com/agentwebprotocol/spec/main/SPEC.md",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return "# Specification\n\nThe live specification could not be loaded. Please visit [GitHub](https://github.com/agentwebprotocol/spec/blob/main/SPEC.md) for the latest version.";
  }

  return res.text();
}

export const metadata = {
  title: "Specification — Agent Web Protocol",
  description: "The AWP specification for agent.json and agent-ready web surfaces.",
};

export default async function SpecPage() {
  const spec = await getSpec();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="glow-dot" />
          <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
            Specification
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/agentwebprotocol/spec/blob/main/SPEC.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-accent transition-colors font-mono"
          >
            View on GitHub ↗
          </a>
          <span className="text-border">·</span>
          <a
            href="https://github.com/agentwebprotocol/spec/edit/main/SPEC.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-accent transition-colors font-mono"
          >
            Suggest edit ↗
          </a>
        </div>
      </div>

      <div className="glow-line mb-10" />

      <article className="spec-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{spec}</ReactMarkdown>
      </article>
    </div>
  );
}
