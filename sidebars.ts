import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Overview",
      link: { type: "doc", id: "overview/index" },
      items: [
        "overview/quickstart",
        "overview/installation",
        "overview/concepts",
        "overview/glossary"
      ]
    },
    {
      type: "category",
      label: "Core AI Modules Library",
      link: { type: "doc", id: "core/index" },
      items: [
        "core/modules",
        "core/pipelines",
        "core/configuration",
        "core/observability"
      ]
    },
    {
      type: "category",
      label: "SDK",
      link: { type: "doc", id: "sdk/index" },
      items: [
        "sdk/quickstart",
        "sdk/authentication",
        "sdk/clients",
        "sdk/apis",
        "sdk/versioning"
      ]
    },
    {
      type: "category",
      label: "Developer Console",
      link: { type: "doc", id: "console/index" },
      items: [
        "console/getting-started",
        "console/registry",
        "console/governance",
        "console/rbac",
        "console/audit"
      ]
    },
    {
      type: "category",
      label: "Templates & Off-the-Shelf Solutions",
      link: { type: "doc", id: "solutions/index" },
      items: [
        "solutions/templates",
        "solutions/turnkey",
        "solutions/customization"
      ]
    },
    {
      type: "category",
      label: "Architecture",
      link: { type: "doc", id: "architecture/index" },
      items: [
        "architecture/system-overview",
        "architecture/runtime",
        "architecture/diagrams"
      ]
    },
    {
      type: "category",
      label: "Operations",
      link: { type: "doc", id: "operations/index" },
      items: [
        "operations/deployment",
        "operations/environments",
        "operations/troubleshooting"
      ]
    },
    {
      type: "category",
      label: "Security & Compliance",
      link: { type: "doc", id: "security/index" },
      items: [
        "security/threat-model",
        "security/data-handling",
        "security/compliance",
        "security/secure-development"
      ]
    },
    {
      type: "category",
      label: "Release & Maintenance",
      link: { type: "doc", id: "release/index" },
      items: [
        "release/versioning",
        "release/lifecycle",
        "release/deprecation",
        "release/changelog",
        "release/support"
      ]
    },
    {
      type: "category",
      label: "Contributing",
      link: { type: "doc", id: "contributing/index" },
      items: [
        "contributing/code-of-conduct",
        "contributing/development",
        "contributing/documentation"
      ]
    }
  ]
};

export default sidebars;
