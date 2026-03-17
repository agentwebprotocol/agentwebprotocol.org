import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Web Protocol — The Open Standard for Agent-Ready Web Surfaces",
  description:
    "AWP defines how websites declare themselves agent-ready via agent.json. What robots.txt did for crawlers, agent.json does for AI agents.",
  openGraph: {
    title: "Agent Web Protocol",
    description:
      "The open standard for declaring any web surface as agent-ready.",
    url: "https://agentwebprotocol.org",
    siteName: "Agent Web Protocol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Web Protocol",
    description:
      "The open standard for declaring any web surface as agent-ready.",
  },
  metadataBase: new URL("https://agentwebprotocol.org"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
