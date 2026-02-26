import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "introduction",
    "getting-started",
    {
      type: "category",
      label: "User Guide",
      link: { type: "doc", id: "user-guide/index" },
      items: [
        "user-guide/getting-started",
        "user-guide/agents",
        "user-guide/vector-stores",
        "user-guide/evaluation",
        "user-guide/cloud-storage",
        "user-guide/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Developer Guide",
      link: { type: "doc", id: "developer-guide/index" },
      items: [
        "developer-guide/getting-started",
        "developer-guide/architecture",
        "developer-guide/core-concepts",
        "developer-guide/agents",
        "developer-guide/llm-gateways",
        "developer-guide/chat-history",
        "developer-guide/vector-pipelines",
        "developer-guide/search",
        "developer-guide/configuration",
        "developer-guide/tracking",
        "developer-guide/environment",
      ],
    },

    {
      type: "category",
      label: "Contributing",
      items: [
        "contributing/code-of-conduct",
        "contributing/development",
        "contributing/documentation",
      ],
    },
  ],
};

export default sidebars;
