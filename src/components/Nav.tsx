"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/quickstart", label: "Quick Start" },
  { href: "/spec", label: "Spec" },
  { href: "/about", label: "About" },
];

const externalLinks = [
  { href: "https://github.com/agentwebprotocol/spec", label: "GitHub" },
  { href: "https://agent-json.org", label: "agent.json" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border sticky top-0 z-50 bg-bg/80 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="font-mono text-sm font-semibold text-text-primary tracking-tight">
            AWP
          </span>
          <span className="text-border-bright font-light">|</span>
          <span className="text-text-muted text-sm hidden sm:inline">
            Agent Web Protocol
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                pathname === link.href
                  ? "text-text-primary bg-bg-hover"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="w-px h-4 bg-border mx-2" />
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              {link.label}
              <span className="text-[10px] ml-0.5 opacity-50">↗</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
