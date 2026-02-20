import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "introduction",
    "getting-started",
    "user-guide",
    "developer-guide",

    {
      type: "category",
      label: "Reference Guide",
      items: [
        "references/core",
        "references/cli",
        "references/agent",
        "references/vectorstore",

        {
          type: "category",
          label: "Tools",
          items: ["references/tools/evaluation", "references/tools/s3-utils"],
        },
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
