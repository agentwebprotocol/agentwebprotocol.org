"use client";

import { useState } from "react";

interface Action {
  id: string;
  description: string;
  method: string;
  endpoint: string;
  auth_required: boolean;
}

const EMPTY_ACTION: Action = {
  id: "",
  description: "",
  method: "GET",
  endpoint: "",
  auth_required: false,
};

function generateJson(
  domain: string,
  intent: string,
  actions: Action[],
  authType: string
) {
  const obj: Record<string, unknown> = {
    awp_version: "0.1",
    domain: domain || "yourdomain.com",
    intent: intent || "Describe what your site does",
  };

  const validActions = actions.filter((a) => a.id && a.endpoint);
  if (validActions.length > 0) {
    obj.actions = validActions.map((a) => {
      const action: Record<string, unknown> = {
        id: a.id,
        description: a.description || `Perform ${a.id}`,
        method: a.method,
        endpoint: a.endpoint,
        auth_required: a.auth_required,
      };
      return action;
    });
  }

  if (authType !== "none") {
    obj.auth = { type: authType };
  }

  return JSON.stringify(obj, null, 2);
}

function FieldLabel({
  label,
  hint,
}: {
  label: string;
  hint: string;
}) {
  return (
    <div className="mb-1.5">
      <label className="text-sm font-medium text-text-primary">{label}</label>
      <span className="text-xs text-text-muted ml-2">{hint}</span>
    </div>
  );
}

function ValidationStatus({ json }: { json: string }) {
  try {
    const parsed = JSON.parse(json);
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!parsed.awp_version) errors.push("Missing awp_version");
    if (!parsed.domain) errors.push("Missing domain");
    if (!parsed.intent) errors.push("Missing intent");
    if (!parsed.actions || parsed.actions.length === 0)
      errors.push("No actions defined");

    if (parsed.actions) {
      for (const a of parsed.actions) {
        if (!a.id) errors.push("Action missing id");
        if (!a.endpoint) errors.push("Action missing endpoint");
        if (!a.description) warnings.push(`Action "${a.id}" has no description`);
      }
    }

    if (errors.length === 0 && warnings.length === 0) {
      return (
        <div className="flex items-center gap-2 text-green text-xs font-mono">
          <div className="glow-dot" />
          Valid agent.json
        </div>
      );
    }

    return (
      <div className="space-y-1">
        {errors.map((e, i) => (
          <div key={i} className="text-red-400 text-xs font-mono">
            ✗ {e}
          </div>
        ))}
        {warnings.map((w, i) => (
          <div key={i} className="text-yellow-400 text-xs font-mono">
            △ {w}
          </div>
        ))}
      </div>
    );
  } catch {
    return (
      <div className="text-red-400 text-xs font-mono">✗ Invalid JSON</div>
    );
  }
}

export default function QuickstartPage() {
  const [domain, setDomain] = useState("");
  const [intent, setIntent] = useState("");
  const [authType, setAuthType] = useState("none");
  const [actions, setActions] = useState<Action[]>([{ ...EMPTY_ACTION }]);
  const [copied, setCopied] = useState(false);

  const json = generateJson(domain, intent, actions, authType);

  const updateAction = (index: number, field: keyof Action, value: string | boolean) => {
    setActions((prev) =>
      prev.map((a, i) => (i === index ? { ...a, [field]: value } : a))
    );
  };

  const addAction = () => {
    setActions((prev) => [...prev, { ...EMPTY_ACTION }]);
  };

  const removeAction = (index: number) => {
    if (actions.length > 1) {
      setActions((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "agent.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="glow-dot" />
          <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
            Quick Start
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
          Generate your agent.json
        </h1>
        <p className="text-text-secondary max-w-2xl leading-relaxed">
          Build a spec-compliant agent.json for your website in under a minute.
          Everything runs in your browser — your data never leaves this page.
        </p>
      </div>

      {/* Trust bar */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted font-mono mb-10 pb-6 border-b border-border">
        <span className="flex items-center gap-1.5">
          <span className="text-green">●</span> Client-side only
        </span>
        <span className="text-border">·</span>
        <span>No tracking</span>
        <span className="text-border">·</span>
        <span>No account required</span>
        <span className="text-border">·</span>
        <span>MIT licensed</span>
        <span className="text-border">·</span>
        <a
          href="https://github.com/agentwebprotocol/spec"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          View spec source
        </a>
      </div>

      {/* How it works */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-5 rounded-lg border border-border bg-bg-elevated">
          <div className="font-mono text-xs text-accent mb-2">Step 1</div>
          <div className="text-sm font-medium text-text-primary mb-1">
            Describe your site
          </div>
          <div className="text-xs text-text-muted">
            Enter your domain, what your site does, and what auth it uses.
          </div>
        </div>
        <div className="p-5 rounded-lg border border-border bg-bg-elevated">
          <div className="font-mono text-xs text-accent mb-2">Step 2</div>
          <div className="text-sm font-medium text-text-primary mb-1">
            Define your actions
          </div>
          <div className="text-xs text-text-muted">
            Add the API endpoints agents can call — search, create, update,
            delete.
          </div>
        </div>
        <div className="p-5 rounded-lg border border-border bg-bg-elevated">
          <div className="font-mono text-xs text-accent mb-2">Step 3</div>
          <div className="text-sm font-medium text-text-primary mb-1">
            Deploy the file
          </div>
          <div className="text-xs text-text-muted">
            Download and place at{" "}
            <code className="text-accent">/.well-known/agent.json</code> on your
            server. Done.
          </div>
        </div>
      </div>

      <div className="glow-line mb-12" />

      {/* Install the CLI */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="glow-dot" />
          <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
            CLI
          </span>
        </div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Or use the CLI
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          Generate an agent.json from your terminal in seconds:
        </p>

        <div className="rounded-lg border border-border bg-bg overflow-hidden mb-4">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
            </div>
            <span className="font-mono text-xs text-text-muted ml-2">
              terminal
            </span>
          </div>
          <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
            <code className="font-mono text-text-secondary">npx agent-json init</code>
          </pre>
        </div>

        <p className="text-sm text-text-secondary mb-4">
          Validate an existing file:
        </p>

        <div className="rounded-lg border border-border bg-bg overflow-hidden mb-4">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
            </div>
            <span className="font-mono text-xs text-text-muted ml-2">
              terminal
            </span>
          </div>
          <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
            <code className="font-mono text-text-secondary">npx agent-json validate agent.json</code>
          </pre>
        </div>

        <p className="text-sm text-text-muted">
          Zero dependencies. Runs instantly via npx.
        </p>
      </div>

      <div className="glow-line mb-12" />

      {/* Add to Claude Code */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="glow-dot" />
          <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
            Claude Code
          </span>
        </div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Native Claude Code support
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          Add AWP tools to Claude Code by adding this to{" "}
          <code className="font-mono text-accent bg-bg-hover px-1.5 py-0.5 rounded text-xs border border-border">
            ~/.claude/mcp.json
          </code>
          :
        </p>

        <div className="rounded-lg border border-border bg-bg overflow-hidden mb-4">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
            </div>
            <span className="font-mono text-xs text-text-muted ml-2">
              ~/.claude/mcp.json
            </span>
          </div>
          <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
            <code className="font-mono text-text-secondary">{`{
  "mcpServers": {
    "awp": {
      "command": "npx",
      "args": ["awp-mcp-server"]
    }
  }
}`}</code>
          </pre>
        </div>

        <p className="text-sm text-text-muted">
          Then ask Claude Code: &quot;Generate an agent.json for my API&quot; — it knows the spec natively.
        </p>
      </div>

      <div className="glow-line mb-12" />

      {/* Builder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Configure
          </h2>

          {/* Domain */}
          <div>
            <FieldLabel
              label="Domain"
              hint="Your website's domain name"
            />
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="example.com"
              className="w-full px-3 py-2 bg-bg border border-border rounded-md text-sm text-text-primary font-mono placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Intent */}
          <div>
            <FieldLabel
              label="Intent"
              hint="One sentence: what does your site do?"
            />
            <input
              type="text"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              placeholder="E-commerce platform for handmade goods"
              className="w-full px-3 py-2 bg-bg border border-border rounded-md text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Auth */}
          <div>
            <FieldLabel
              label="Auth type"
              hint="How do agents authenticate?"
            />
            <select
              value={authType}
              onChange={(e) => setAuthType(e.target.value)}
              className="w-full px-3 py-2 bg-bg border border-border rounded-md text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
            >
              <option value="none">None — public endpoints</option>
              <option value="api_key">API Key</option>
              <option value="oauth2">OAuth 2.0</option>
              <option value="bearer">Bearer Token</option>
            </select>
          </div>

          {/* Actions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <FieldLabel label="Actions" hint="What can agents do?" />
            </div>

            <div className="space-y-3">
              {actions.map((action, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-border bg-bg-elevated space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-text-muted">
                      Action {i + 1}
                    </span>
                    {actions.length > 1 && (
                      <button
                        onClick={() => removeAction(i)}
                        className="text-xs text-text-muted hover:text-red-400 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-text-muted mb-1 block">
                        ID
                      </label>
                      <input
                        type="text"
                        value={action.id}
                        onChange={(e) => updateAction(i, "id", e.target.value)}
                        placeholder="search_products"
                        className="w-full px-2.5 py-1.5 bg-bg border border-border rounded text-sm text-text-primary font-mono placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-text-muted mb-1 block">
                        Method
                      </label>
                      <select
                        value={action.method}
                        onChange={(e) =>
                          updateAction(i, "method", e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 bg-bg border border-border rounded text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
                      >
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>PATCH</option>
                        <option>DELETE</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-text-muted mb-1 block">
                      Endpoint
                    </label>
                    <input
                      type="text"
                      value={action.endpoint}
                      onChange={(e) =>
                        updateAction(i, "endpoint", e.target.value)
                      }
                      placeholder="/api/products/search"
                      className="w-full px-2.5 py-1.5 bg-bg border border-border rounded text-sm text-text-primary font-mono placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-text-muted mb-1 block">
                      Description
                    </label>
                    <input
                      type="text"
                      value={action.description}
                      onChange={(e) =>
                        updateAction(i, "description", e.target.value)
                      }
                      placeholder="Search the product catalog"
                      className="w-full px-2.5 py-1.5 bg-bg border border-border rounded text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={action.auth_required}
                      onChange={(e) =>
                        updateAction(i, "auth_required", e.target.checked)
                      }
                      className="rounded border-border accent-accent"
                    />
                    <span className="text-xs text-text-muted">
                      Requires authentication
                    </span>
                  </label>
                </div>
              ))}
            </div>

            <button
              onClick={addAction}
              className="mt-3 px-4 py-2 border border-dashed border-border-bright text-text-muted text-sm rounded-md hover:border-accent hover:text-accent transition-colors w-full"
            >
              + Add action
            </button>
          </div>
        </div>

        {/* Right: Preview */}
        <div>
          <div className="sticky top-20">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-text-primary">
                Preview
              </h2>
              <ValidationStatus json={json} />
            </div>

            <div className="rounded-lg border border-border bg-bg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border-bright" />
                  </div>
                  <span className="font-mono text-xs text-text-muted ml-2">
                    /.well-known/agent.json
                  </span>
                </div>
              </div>
              <pre className="p-5 text-sm leading-relaxed overflow-x-auto max-h-[500px] overflow-y-auto">
                <code className="font-mono text-text-secondary">{json}</code>
              </pre>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={copyToClipboard}
                className="flex-1 px-4 py-2.5 bg-accent text-white rounded-md font-medium text-sm hover:bg-accent-dim transition-colors"
              >
                {copied ? "Copied!" : "Copy to clipboard"}
              </button>
              <button
                onClick={downloadFile}
                className="flex-1 px-4 py-2.5 border border-border text-text-secondary rounded-md font-medium text-sm hover:border-border-bright hover:text-text-primary transition-colors"
              >
                Download agent.json
              </button>
            </div>

            {/* Validate link */}
            <a
              href="https://agent-json.org/validate"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-text-muted hover:text-accent transition-colors mt-3 font-mono"
            >
              Validate at agent-json.org ↗
            </a>
          </div>
        </div>
      </div>

      <div className="glow-line my-12" />

      {/* After deploy */}
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold text-text-primary mb-6">
          After you deploy
        </h2>

        <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
          <div className="pl-4 border-l-2 border-border">
            <div className="font-medium text-text-primary mb-1">
              Where to place the file
            </div>
            <div>
              Serve it at{" "}
              <code className="font-mono text-accent bg-bg-hover px-1.5 py-0.5 rounded border border-border text-xs">
                https://yourdomain.com/.well-known/agent.json
              </code>{" "}
              with <code className="font-mono text-text-muted bg-bg-hover px-1.5 py-0.5 rounded border border-border text-xs">Content-Type: application/json</code>.
              Most frameworks and hosting providers support the{" "}
              <code className="font-mono text-text-muted bg-bg-hover px-1.5 py-0.5 rounded border border-border text-xs">.well-known</code> directory natively.
            </div>
          </div>

          <div className="pl-4 border-l-2 border-border">
            <div className="font-medium text-text-primary mb-1">
              What happens next
            </div>
            <div>
              AI agents that support AWP will discover your file automatically
              via the well-known endpoint. They&apos;ll read your declared actions
              and can begin interacting with your API according to the
              capabilities you&apos;ve published.
            </div>
          </div>

          <div className="pl-4 border-l-2 border-border">
            <div className="font-medium text-text-primary mb-1">
              Security: what agent.json does and doesn&apos;t do
            </div>
            <div>
              <code className="font-mono text-accent bg-bg-hover px-1.5 py-0.5 rounded border border-border text-xs">agent.json</code>{" "}
              only <em>declares</em> capabilities — it does not grant access.
              Your existing auth, rate limiting, and access controls still apply.
              Publishing agent.json does not open any new attack surface. It&apos;s
              a static file, like robots.txt — remove it and agents stop
              discovering your site.
            </div>
          </div>

          <div className="pl-4 border-l-2 border-border">
            <div className="font-medium text-text-primary mb-1">
              No lock-in
            </div>
            <div>
              agent.json is a static JSON file you control. There&apos;s no service
              dependency, no SDK, no vendor. Delete the file and it&apos;s as if it
              was never there. The spec is MIT-licensed and open source.
            </div>
          </div>
        </div>
      </div>

      <div className="glow-line my-12" />

      {/* Claude Code prompt */}
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Or generate it from your codebase
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          If you use Claude Code, run this prompt in your project root. It will
          scan your routes, endpoints, and middleware to generate a compliant
          agent.json automatically.
        </p>

        <div className="rounded-lg border border-border bg-bg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated">
            <span className="font-mono text-xs text-text-muted">
              Claude Code prompt
            </span>
          </div>
          <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
            <code className="font-mono text-text-secondary">
{`Analyze this codebase and generate a /.well-known/agent.json
file following the Agent Web Protocol spec (v0.1).

Scan for API routes, endpoints, and handlers. For each action,
determine: id, description, HTTP method, endpoint path, and
whether auth is required.

Output a valid agent.json with awp_version, domain, intent,
and actions array. Place it at the correct well-known path.

Spec reference: https://agentwebprotocol.org/spec`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
