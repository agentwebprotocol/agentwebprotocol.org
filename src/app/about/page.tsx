export const metadata = {
  title: "About — Agent Web Protocol",
  description: "The origin and mission of the Agent Web Protocol standard.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="glow-dot" />
        <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
          About
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
        About Agent Web Protocol
      </h1>

      <div className="space-y-6 text-text-secondary leading-relaxed">
        <p>
          Agent Web Protocol (AWP) is an open standard that defines how websites
          declare themselves as agent-ready. At its core is{" "}
          <code className="font-mono text-accent bg-bg-hover px-1.5 py-0.5 rounded text-sm border border-border">
            agent.json
          </code>
          , a machine-readable file placed at{" "}
          <code className="font-mono text-text-muted bg-bg-hover px-1.5 py-0.5 rounded text-sm border border-border">
            /.well-known/agent.json
          </code>{" "}
          that tells AI agents what a website can do, how to authenticate, and what
          actions are available.
        </p>

        <p>
          The web was built for humans, then adapted for search engines with{" "}
          <code className="font-mono text-text-muted bg-bg-hover px-1.5 py-0.5 rounded text-sm border border-border">
            robots.txt
          </code>{" "}
          and structured data. Now, as AI agents become the primary way users
          interact with online services, the web needs a new primitive — a
          standard way for sites to declare their capabilities to autonomous
          software agents.
        </p>

        <div className="glow-line my-8" />

        <h2 className="text-xl font-semibold text-text-primary !mt-0">
          Origin
        </h2>

        <p>
          AWP was conceived and prototyped at the{" "}
          <strong className="text-text-primary">Nebius hackathon in March 2026</strong>,
          where it won first place. The core insight was simple: every major era
          of machine-web interaction started with a small, declarative file.
          The agentic era deserves the same.
        </p>

        <p>
          What began as a hackathon project quickly became a serious standards
          effort. The specification is developed in the open, with community
          input driving every major decision.
        </p>

        <div className="glow-line my-8" />

        <h2 className="text-xl font-semibold text-text-primary !mt-0">
          The Ecosystem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <a
            href="https://github.com/agentwebprotocol/spec"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-border bg-bg-elevated hover:border-border-bright transition-colors block"
          >
            <div className="font-mono text-xs text-accent mb-2 tracking-wider uppercase">
              Specification
            </div>
            <div className="text-sm text-text-primary font-medium mb-1">
              AWP Spec
            </div>
            <div className="text-xs text-text-muted">
              The core protocol specification on GitHub
            </div>
          </a>

          <a
            href="https://agent-json.org"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-border bg-bg-elevated hover:border-border-bright transition-colors block"
          >
            <div className="font-mono text-xs text-accent mb-2 tracking-wider uppercase">
              File Format
            </div>
            <div className="text-sm text-text-primary font-medium mb-1">
              agent-json.org
            </div>
            <div className="text-xs text-text-muted">
              Complete reference for the agent.json schema
            </div>
          </a>

          <div className="p-5 rounded-lg border border-border bg-bg-elevated">
            <div className="font-mono text-xs text-accent mb-2 tracking-wider uppercase">
              Middleware
            </div>
            <div className="text-sm text-text-primary font-medium mb-1">
              Synthetic Generation
            </div>
            <div className="text-xs text-text-muted">
              Middleware tools can generate a synthetic agent.json for any URL on demand
            </div>
          </div>

          <div className="p-5 rounded-lg border border-border bg-bg-elevated">
            <div className="font-mono text-xs text-accent mb-2 tracking-wider uppercase">
              Contact
            </div>
            <div className="text-sm text-text-primary font-medium mb-1">
              Get Involved
            </div>
            <a
              href="mailto:spec@agentwebprotocol.org"
              className="text-xs text-accent hover:underline"
            >
              spec@agentwebprotocol.org
            </a>
          </div>
        </div>

        <div className="glow-line my-8" />

        <h2 className="text-xl font-semibold text-text-primary !mt-0">
          Design Principles
        </h2>

        <ul className="space-y-3 list-none p-0">
          {[
            {
              title: "Simplicity first",
              desc: "A minimal agent.json should be 5 lines. Complexity is opt-in.",
            },
            {
              title: "Secure by default",
              desc: "Auth requirements are explicit. No ambient authority.",
            },
            {
              title: "Crawl → Walk → Run",
              desc: "Start with discovery, add actions when ready, layer in auth and payments over time.",
            },
            {
              title: "Web-native",
              desc: "Built on JSON, HTTP, OAuth, and well-known URIs. No new transport required.",
            },
            {
              title: "Agent-agnostic",
              desc: "Works with any agent framework, any LLM, any orchestration layer.",
            },
          ].map((principle) => (
            <li
              key={principle.title}
              className="pl-4 border-l-2 border-border hover:border-accent transition-colors"
            >
              <div className="text-sm font-medium text-text-primary">
                {principle.title}
              </div>
              <div className="text-sm text-text-muted">{principle.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
