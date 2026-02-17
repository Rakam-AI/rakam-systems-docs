import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    "getting-started",
    "user-guide",
    "developer-guide",

    {
      type: "category",
      label: "Reference Guide",
      link: { type: "doc", id: "references/core" },
      items: [
        "references/core",
        "references/cli",
        "references/agent",
        "references/vectorstore",

        {
          type: "category",
          label: "Tools",
          link: { type: "doc", id: "references/tools/evaluation" },
          items: ["references/tools/evaluation", "references/tools/s3-utils"],
        },
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
