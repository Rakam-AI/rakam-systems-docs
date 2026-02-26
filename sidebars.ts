import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    "getting-started",
    "user-guide",
    "developer-guide",

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
