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
        "developer-guide/core",
        "developer-guide/agents",
        "developer-guide/vectorstore",
        "developer-guide/configuration",
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
