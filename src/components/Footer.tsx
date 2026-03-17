export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm text-text-muted">
          <span className="font-mono">AWP</span>
          <span className="text-border">·</span>
          <a
            href="mailto:spec@agentwebprotocol.org"
            className="hover:text-text-secondary transition-colors"
          >
            spec@agentwebprotocol.org
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm text-text-muted">
          <a
            href="https://github.com/agentwebprotocol/spec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://agent-json.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            agent.json
          </a>
          <a
            href="https://injester.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            Injester
          </a>
        </div>
      </div>
    </footer>
  );
}
