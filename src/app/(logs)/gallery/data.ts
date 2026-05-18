export interface Artifact {
  id: string;
  title: string;
  mermaid: string;
  insight: string;
  bullets: string[];
}

export const artifacts: Artifact[] = [
  {
    id: "client-server",
    title: "Client → Server",
    mermaid: `graph TB
    subgraph Local Development
        Client[Client<br/>Browser]
        Server[Server]
    end

    Client -->|HTTP Request| Server
    Server -->|HTTP Response| Client

    style Client fill:#3b82f6,stroke:#1e40af,color:#fff
    style Server fill:#10b981,stroke:#059669,color:#fff`,
    insight: "Project begins.",
    bullets: [
      "LOCAL = where work begins",
      "REQUEST/RESPONSE = the interaction loop",
      "CLIENT + SERVER = the 2 primitives"
    ]
  }
];

export function getArtifactById(id: string): Artifact | undefined {
  return artifacts.find((artifact) => artifact.id === id);
}

export function getAllArtifacts(): Artifact[] {
  return artifacts;
}
