# loucarron.dev

Personal developer portfolio showcasing backend architecture and system design projects.

This site highlights several systems focused on event processing, workflow orchestration, and scalable backend platform design.

🌐 Live site: https://loucarron.dev

---

## Featured Systems

### BeaconFlow
Event ingestion infrastructure designed to accept, validate, and persist incoming events for downstream processing.

Core ideas:
- Reliable event intake pipeline
- Clean architecture layering
- REST API ingestion endpoints
- Test-backed implementation

Tech stack:
- C#
- .NET
- REST API
- xUnit
- Clean Architecture


### ChronoFlow
Event-driven workflow orchestration platform designed to coordinate actions around event streams without letting domain logic leak into the core.

Core ideas:
- Modular monolith architecture
- Deterministic workflow coordination
- Event stream orchestration
- Strict internal system boundaries

Tech stack:
- C#
- .NET
- PostgreSQL
- JWT Authentication


### SignalForge
Signal detection engine built to analyze event streams and identify meaningful patterns and actionable signals.

Core ideas:
- Event pattern detection
- Signal generation
- Separation between detection and orchestration logic
- Extensible rule evaluation

Tech stack:
- C#
- .NET
- Event processing


### ClientForge
Multi-tenant backend platform foundation designed for SaaS systems that require tenant-aware authentication and modular services.

Core ideas:
- Tenant-aware architecture
- Authentication and identity management
- Modular service boundaries
- SaaS platform foundation

Tech stack:
- C#
- .NET
- PostgreSQL
- JWT Authentication

---

## Architecture Approach

This portfolio emphasizes **system design and architectural clarity**, focusing on:

- Event-driven systems
- Modular monolith architecture
- Clean separation of concerns
- Backend platform foundations
- Scalable SaaS system design

Each project is presented as a **case study** covering:

- Problem
- Solution
- Architecture
- System flow
- Technology stack

---

## Tech Stack

The portfolio site itself is built using:

- Next.js
- TypeScript
- React
- TailwindCSS
- Vercel deployment

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/lourosscs50/loucarron.dev.git
