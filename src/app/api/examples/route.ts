import { NextResponse } from "next/server";

const examples = [
  {
    name: "Minimal",
    description: "The simplest possible agent.json",
    agent_json: {
      protocol: "awp/1.0",
      agent_ready: true,
    },
  },
  {
    name: "E-commerce",
    description: "An online store with search, cart, and checkout",
    agent_json: {
      protocol: "awp/1.0",
      agent_ready: true,
      intent: "Online marketplace for consumer electronics",
      capabilities: {
        actions: [
          { name: "search_products", method: "GET", endpoint: "/api/products/search" },
          { name: "add_to_cart", method: "POST", endpoint: "/api/cart/add" },
          { name: "checkout", method: "POST", endpoint: "/api/checkout" },
        ],
        auth: "oauth2",
      },
    },
  },
  {
    name: "SaaS API",
    description: "A SaaS platform exposing its API to agents",
    agent_json: {
      protocol: "awp/1.0",
      agent_ready: true,
      intent: "Project management and task tracking platform",
      capabilities: {
        actions: [
          { name: "list_projects", method: "GET", endpoint: "/api/v1/projects" },
          { name: "create_task", method: "POST", endpoint: "/api/v1/tasks" },
          { name: "update_status", method: "PATCH", endpoint: "/api/v1/tasks/:id" },
        ],
        auth: "api_key",
      },
    },
  },
  {
    name: "Content Site",
    description: "A read-only content site with search",
    agent_json: {
      protocol: "awp/1.0",
      agent_ready: true,
      intent: "Technical documentation and knowledge base",
      capabilities: {
        actions: [
          { name: "search", method: "GET", endpoint: "/api/search" },
          { name: "get_article", method: "GET", endpoint: "/api/articles/:slug" },
        ],
        auth: "none",
      },
    },
  },
];

export async function GET() {
  return NextResponse.json(examples, {
    headers: {
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
