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
          <span className="text-accent">{'"awp_version"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"0.2"'}</span>
          <span className="text-text-muted">,</span>
          {"\n"}
          <span className="text-text-muted">{"  "}</span>
          <span className="text-accent">{'"domain"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"example.com"'}</span>
          <span className="text-text-muted">,</span>
          {"\n"}
          <span className="text-text-muted">{"  "}</span>
          <span className="text-accent">{'"intent"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"Online store with search and checkout"'}</span>
          <span className="text-text-muted">,</span>
          {"\n"}
          <span className="text-text-muted">{"  "}</span>
          <span className="text-accent">{'"actions"'}</span>
          <span className="text-text-muted">{": ["}</span>
          {"\n"}
          <span className="text-text-muted">{"    { "}</span>
          <span className="text-accent">{'"id"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"search"'}</span>
          <span className="text-text-muted">, </span>
          <span className="text-accent">{'"method"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"GET"'}</span>
          <span className="text-text-muted">, </span>
          <span className="text-accent">{'"endpoint"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"\/api\/search"'}</span>
          <span className="text-text-muted">{" },"}</span>
          {"\n"}
          <span className="text-text-muted">{"    { "}</span>
          <span className="text-accent">{'"id"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"purchase"'}</span>
          <span className="text-text-muted">, </span>
          <span className="text-accent">{'"method"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"POST"'}</span>
          <span className="text-text-muted">, </span>
          <span className="text-accent">{'"endpoint"'}</span>
          <span className="text-text-muted">: </span>
          <span className="text-green">{'"\/api\/purchase"'}</span>
          <span className="text-text-muted">{" }"}</span>
          {"\n"}
          <span className="text-text-muted">{"  ]"}</span>
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
              Open Standard — Draft v0.2
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-text-primary">One manifest.</span>
            <br />
            <span className="text-accent">Every protocol.</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-6">
            Agent Web Protocol defines{" "}
            <code className="font-mono text-accent bg-bg-hover px-1.5 py-0.5 rounded text-base border border-border">
              agent.json
            </code>{" "}
            — a single machine-readable file at the root of any website that
            tells agents what it does, how to authenticate, and — new in v0.2 —
            which agent protocols it speaks (MCP, A2A, AP2, x402, and more).
          </p>

          <p className="text-base text-text-muted max-w-2xl leading-relaxed mb-10">
            What{" "}
            <code className="font-mono text-text-muted bg-bg-hover px-1 py-0.5 rounded border border-border">
              robots.txt
            </code>{" "}
            did for crawlers, agent.json does for agents. One URL, every
            capability, no guessing.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <Link
              href="/quickstart"
              className="px-5 py-2.5 bg-accent text-white rounded-md font-medium text-sm hover:bg-accent-dim transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/spec"
              className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
            >
              Read the Spec
            </Link>
            <a
              href="https://laclawclaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-accent/40 bg-accent-glow text-accent rounded-md font-medium text-sm hover:border-accent transition-colors"
            >
              Live example → LaClawClaw
            </a>
            <a
              href="https://github.com/agentwebprotocol/spec"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
            >
              View on GitHub
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
            label="New in v0.2"
            title="Speaks every agent protocol"
            description="Declare every sibling agent standard — A2A, MCP, ACP, AP2, x402, Skyfire — in one manifest. AWP is the front door; the protocols block tells agents every room they can enter."
          />
          <Feature
            label="Discovery"
            title="Well-known endpoint"
            description="Agents discover capabilities via /.well-known/agent.json — no scraping, no guessing, no prompt injection."
          />
          <Feature
            label="Capabilities"
            title="Structured actions"
            description="Declare what actions are available — search, book, purchase, submit — with typed parameters and descriptions. Route actions through any declared protocol via the new `via` field."
          />
          <Feature
            label="Auth"
            title="Secure by default"
            description="OAuth 2.0, API keys, bearer tokens, and session-based auth with explicit scope declarations per action."
          />
          <Feature
            label="Schema"
            title="Machine-readable"
            description="JSON schema-based format easy for agents to parse and humans to write. Validates against agent-json@0.2.1, zero external deps."
          />
          <Feature
            label="Tooling"
            title="npx agent-json"
            description="Generate with `npx agent-json init`, validate local files or remote URLs with `npx agent-json validate <file-or-url>`. Claude Code support via the AWP MCP server."
          />
          <Feature
            label="Open"
            title="Community-driven"
            description="MIT-licensed, open-source specification. Spec, validator, reference implementation — all developed in public on github.com/agentwebprotocol."
          />
        </div>
      </section>

      <div className="glow-line" />

      {/* In the wild */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="font-mono text-xs text-text-muted tracking-wider uppercase mb-4">
          In the wild
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          See AWP v0.2 running.
        </h2>
        <p className="text-text-secondary max-w-2xl mb-10 leading-relaxed">
          <a
            href="https://laclawclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LaClawClaw
          </a>{" "}
          is the first live commerce deployment of AWP v0.2 — an
          agent-only Shopify store declaring MCP, A2A, and Stripe payment in
          a single manifest. Fetch it, validate it, shop it.
        </p>

        <div className="rounded-lg border border-border bg-bg overflow-hidden mb-6">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated">
            <span className="font-mono text-xs text-text-muted">
              $ npx -y agent-json@latest validate https://laclawclaw.com/.well-known/agent.json
            </span>
          </div>
          <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
            <code className="font-mono">
              <span className="text-text-muted">Validating: </span>
              <span className="text-text-secondary">https://laclawclaw.com/.well-known/agent.json</span>
              {"\n  "}
              <span className="text-green">✓ Valid agent.json — no issues found.</span>
            </code>
          </pre>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://laclawclaw.com/.well-known/agent.json"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
          >
            View the live manifest →
          </a>
          <a
            href="https://laclawclaw.com/how-it-works"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
          >
            How it works
          </a>
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
            href="/quickstart"
            className="px-5 py-2.5 bg-accent text-white rounded-md font-medium text-sm hover:bg-accent-dim transition-colors"
          >
            Generate yours now
          </Link>
          <Link
            href="/spec"
            className="px-5 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
          >
            Read the Specification
          </Link>
        </div>
      </section>
    </div>
  );
}
