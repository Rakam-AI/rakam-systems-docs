import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",

    {
      type: "category",
      label: "AI Components",
      link: { type: "doc", id: "ai-components/agents/index" },
      items: ["ai-components/agents/index", "ai-components/vectorstore/index"],
    },

    {
      type: "category",
      label: "Tools",
      link: { type: "doc", id: "tools/evaluation" },
      items: ["tools/evaluation", "tools/s3-utils"],
    },
    {
      type: "category",
      label: "CLI",
      link: { type: "doc", id: "cli/index" },
      items: [],
    },
    {
      type: "category",
      label: "Console",
      link: { type: "doc", id: "console/index" },
      items: [
        "console/getting-started",
        "console/registry",
        "console/governance",
        "console/rbac",
        "console/audit",
      ],
    },

    {
      type: "category",
      label: "Contributing",
      link: { type: "doc", id: "contributing/index" },
      items: [
        "contributing/code-of-conduct",
        "contributing/development",
        "contributing/documentation",
      ],
    },
  ],
};

export default sidebars;
