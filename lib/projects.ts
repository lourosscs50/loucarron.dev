export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  architecture: string[]
  diagram: string[]
  stack: string[]
  status?: string
  github?: string
}

export const projects: Project[] = [
  {
    slug: "beaconflow",
    title: "BeaconFlow",
    tagline: "Reliable event ingestion for modern backend systems.",
    description:
      "BeaconFlow is an event ingestion system designed to accept, validate, and persist incoming events for downstream processing.",
    problem:
      "Modern systems need reliable event intake pipelines that can receive structured event data and preserve it safely for later processing, analytics, or orchestration.",
    solution:
      "BeaconFlow provides a clean backend foundation for event ingestion using strong architectural boundaries, API endpoints, and test-backed implementation.",
    architecture: [
      "API layer for receiving event requests",
      "Application layer for orchestration and use cases",
      "Domain layer for core event models and rules",
      "Infrastructure layer for persistence and repository implementations"
    ],
    diagram: [
      "Client / Producer",
      "BeaconFlow API",
      "Application Layer",
      "Domain Layer",
      "Infrastructure Layer",
      "PostgreSQL / Storage"
    ],
    stack: ["C#", ".NET", "REST API", "xUnit", "Clean Architecture"],
    status: "Completed",
    github: "https://github.com/lourosscs50/BeaconFlow"
  },
  {
    slug: "chronoflow",
    title: "ChronoFlow",
    tagline: "Event-driven workflow orchestration with strict boundaries.",
    description:
      "ChronoFlow is a workflow orchestration platform built to coordinate actions around event streams without letting domain logic leak into the core.",
    problem:
      "As backend systems grow, workflow coordination becomes messy when orchestration rules, business rules, and infrastructure concerns get mixed together.",
    solution:
      "ChronoFlow uses a modular monolith structure and strict internal boundaries to keep orchestration clean, deterministic, and extensible.",
    architecture: [
      "Modular monolith architecture",
      "Identity module for authentication and access",
      "Events module for ingestion and stream retrieval",
      "PostgreSQL persistence for durable storage",
      "Application services separated from domain rules"
    ],
    diagram: [
      "Client / API Consumer",
      "ChronoFlow API",
      "Identity Module",
      "Events Module",
      "Workflow Orchestration Core",
      "PostgreSQL"
    ],
    stack: ["C#", ".NET", "PostgreSQL", "JWT", "Modular Monolith"],
    status: "Completed",
    github: "https://github.com/lourosscs50/ChronoFlow"
  },
  {
    slug: "signalforge",
    title: "SignalForge",
    tagline: "Signal detection built on top of event streams.",
    description:
      "SignalForge is designed to detect meaningful patterns and actionable signals from incoming event streams.",
    problem:
      "Raw events alone are not enough. Systems need a way to identify when combinations of events become meaningful and worth acting on.",
    solution:
      "SignalForge separates detection logic from orchestration logic so signal analysis stays focused, maintainable, and scalable.",
    architecture: [
      "Signal detection pipeline",
      "Event pattern evaluation",
      "Separation from workflow orchestration",
      "Extensible detection rules"
    ],
    diagram: [
      "Event Stream",
      "SignalForge Intake",
      "Pattern Detection Engine",
      "Rule Evaluation Layer",
      "Signal Output"
    ],
    stack: ["C#", ".NET", "Event Processing", "Detection Engine"],
    status: "Completed",
    github: "https://github.com/lourosscs50/SignalForge"
  },
  {
    slug: "clientforge",
    title: "ClientForge",
    tagline: "A multi-tenant platform foundation for real SaaS systems.",
    description:
      "ClientForge is a modular multi-tenant backend platform for tenant-aware authentication, user management, and future business modules.",
    problem:
      "Building SaaS products without proper tenancy boundaries creates security risk, messy scaling, and painful rewrites later.",
    solution:
      "ClientForge establishes tenant-aware architecture early, with authentication, modular services, and clear separation between platform layers.",
    architecture: [
      "Tenant-aware request handling",
      "Identity module with JWT authentication",
      "Infrastructure support for PostgreSQL",
      "Modular backend design for future expansion"
    ],
    diagram: [
      "Tenant User",
      "ClientForge API",
      "Tenant Resolution Layer",
      "Identity Module",
      "Business Modules",
      "PostgreSQL"
    ],
    stack: ["C#", ".NET", "PostgreSQL", "JWT", "Multi-Tenant SaaS"],
    status: "Completed",
    github: "https://github.com/lourosscs50/ClientForge"
  }
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}