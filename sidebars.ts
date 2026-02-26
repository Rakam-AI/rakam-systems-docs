import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "introduction",
    "getting-started",
    "user-guide",
    "developer-guide",

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
