import Link from "next/link";

function CodeBlock() {
  return (
    <div className="rounded-lg border border-border bg-bg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
        </div>
        <span className="font-mono text-xs text-text-muted ml-2">
          /.well-known/agent.json
        </span>
      </div>
      <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
        <code className="font-mono">
          <span className="text-text-muted">{"{"}</span>
          {"\n"}
          <span className="text-text-muted">{"  "}</span>
          <span className="text-accent">{'"protocol"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"awp/1.0"'}</span>
          <span className="text-text-muted">,</span>
          {"\n"}
          <span className="text-text-muted">{"  "}</span>
          <span className="text-accent">{'"agent_ready"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">true</span>
          <span className="text-text-muted">,</span>
          {"\n"}
          <span className="text-text-muted">{"  "}</span>
          <span className="text-accent">{'"capabilities"'}</span>
          <span className="text-text-muted">{": {"}</span>
          {"\n"}
          <span className="text-text-muted">{"    "}</span>
          <span className="text-accent">{'"actions"'}</span>
          <span className="text-text-muted">: [</span>
          <span className="text-green">{'"search"'}</span>
          <span className="text-text-muted">, </span>
          <span className="text-green">{'"book"'}</span>
          <span className="text-text-muted">, </span>
          <span className="text-green">{'"purchase"'}</span>
          <span className="text-text-muted">],</span>
          {"\n"}
          <span className="text-text-muted">{"    "}</span>
          <span className="text-accent">{'"auth"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"oauth2"'}</span>
          {"\n"}
          <span className="text-text-muted">{"  }"}</span>
          {"\n"}
          <span className="text-text-muted">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}

function Feature({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-bg-elevated hover:border-border-bright transition-colors">
      <div className="font-mono text-xs text-accent mb-3 tracking-wider uppercase">
        {label}
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-glow/50 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="glow-dot" />
            <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
              Open Standard — Draft v1.0
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-text-primary">
              Declare any web surface
            </span>
            <br />
            <span className="text-accent">agent-ready.</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            Agent Web Protocol defines{" "}
            <code className="font-mono text-accent bg-bg-hover px-1.5 py-0.5 rounded text-base border border-border">
              agent.json
            </code>{" "}
            — a machine-readable file that tells AI agents what a website can do,
            how to authenticate, and what actions are available. What{" "}
            <code className="font-mono text-text-muted bg-bg-hover px-1.5 py-0.5 rounded text-base border border-border">
              robots.txt
            </code>{" "}
            did for crawlers, agent.json does for agents.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <Link
              href="/spec"
              className="px-5 py-2.5 bg-accent text-white rounded-md font-medium text-sm hover:bg-accent-dim transition-colors"
            >
              Read the Spec
            </Link>
            <a
              href="https://github.com/agentwebprotocol/spec"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
            >
              View on GitHub
            </a>
            <a
              href="https://agent-json.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
            >
              agent.json Reference
            </a>
          </div>

          <CodeBlock />
        </div>
      </section>

      <div className="glow-line" />

      {/* The Pattern */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="font-mono text-xs text-text-muted tracking-wider uppercase mb-4">
          The Pattern
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          A familiar evolution
        </h2>
        <p className="text-text-secondary max-w-2xl mb-12 leading-relaxed">
          Every era of the web introduced a simple, declarative file that unlocked
          a new layer of machine interaction. AWP continues this pattern for the
          age of AI agents.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-lg border border-border bg-bg-elevated">
            <div className="font-mono text-xs text-text-muted mb-3">1994</div>
            <div className="font-mono text-sm text-text-secondary mb-1">
              robots.txt
            </div>
            <div className="text-xs text-text-muted">
              Told crawlers where they could go
            </div>
          </div>
          <div className="p-5 rounded-lg border border-border bg-bg-elevated">
            <div className="font-mono text-xs text-text-muted mb-3">2011</div>
            <div className="font-mono text-sm text-text-secondary mb-1">
              schema.org
            </div>
            <div className="text-xs text-text-muted">
              Told search engines what things meant
            </div>
          </div>
          <div className="p-5 rounded-lg border border-accent/30 bg-accent-glow">
            <div className="font-mono text-xs text-accent mb-3">2026</div>
            <div className="font-mono text-sm text-accent mb-1">agent.json</div>
            <div className="text-xs text-text-secondary">
              Tells AI agents what they can do
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="font-mono text-xs text-text-muted tracking-wider uppercase mb-4">
          Why AWP
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-12">
          What the protocol defines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature
            label="Discovery"
            title="Well-known endpoint"
            description="Agents discover capabilities via /.well-known/agent.json — no scraping, no guessing, no prompt injection."
          />
          <Feature
            label="Capabilities"
            title="Structured actions"
            description="Declare what actions are available — search, book, purchase, submit — with typed parameters and descriptions."
          />
          <Feature
            label="Auth"
            title="Secure by default"
            description="Supports OAuth 2.0, API keys, and session-based auth with explicit scope declarations."
          />
          <Feature
            label="Schema"
            title="Machine-readable"
            description="JSON schema-based format that's easy for agents to parse and for humans to write and review."
          />
          <Feature
            label="Middleware"
            title="Injester layer"
            description="Injester.com provides a middleware layer that can generate agent.json for existing websites automatically."
          />
          <Feature
            label="Open"
            title="Community-driven"
            description="MIT-licensed, open-source specification. Built in public, governed by the community."
          />
        </div>
      </section>

      <div className="glow-line" />

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          The agentic web starts with a file.
        </h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">
          Add{" "}
          <code className="font-mono text-accent bg-bg-hover px-1.5 py-0.5 rounded text-sm border border-border">
            agent.json
          </code>{" "}
          to your site and let AI agents understand what you offer.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/spec"
            className="px-5 py-2.5 bg-accent text-white rounded-md font-medium text-sm hover:bg-accent-dim transition-colors"
          >
            Read the Specification
          </Link>
          <a
            href="https://github.com/agentwebprotocol/spec"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
          >
            Contribute on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
