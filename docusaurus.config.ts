import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const orgName = "Rakam-AI";
const repoName = "rakam_systems";
const repoUrl = "https://github.com/Rakam-AI/rakam_systems";
const docsPath = "docs";

const config: Config = {
  title: "Rakam Systems",
  tagline: "Core Modules • SDKs • Developer Console • Solutions",
  favicon: "img/favicon.svg",

  url: process.env.DOCS_URL ?? "http://localhost",
  baseUrl: process.env.DOCS_BASEURL ?? "/",
  organizationName: orgName,
  projectName: repoName,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],
  markdown: { mermaid: true, hooks: { onBrokenMarkdownLinks: "throw" } },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          path: docsPath,

          // lastVersion: "current",
          versions: {
            current: { label: "v0.3.0" },
          },

          editUrl: `${repoUrl}/edit/main/${docsPath}/`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: "rakam-systems-beta",
      content:
        '⭐️ <b>Rakam Systems Docs</b> — This portal is versioned. Use the version dropdown to switch releases. <a href="https://github.com/Rakam-AI/rakam_systems/issues/new/choose">Report an issue</a>.',
      backgroundColor: "#0b1220",
      textColor: "#ffffff",
      isCloseable: true,
    },

    navbar: {
      hideOnScroll: true,
      style: "dark",
      // title: "Rakam Systems",
      logo: {
        alt: "Rakam Systems",
        src: "img/logo.svg",
      },
      items: [
        { to: "/introduction", label: "Docs", position: "left" },
        // { to: "/overview/quickstart", label: "Quickstart", position: "left" },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: `${repoUrl}/issues/new/choose`,
          label: "Create issue",
          position: "right",
        },
        {
          href: repoUrl,
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",

      copyright: `Copyright © ${new Date().getFullYear()} ${orgName}`,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    prism: {
      additionalLanguages: ["bash", "json", "yaml", "python", "typescript"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
