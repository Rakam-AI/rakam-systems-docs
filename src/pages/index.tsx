import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const Card = ({
  title,
  to,
  children
}: {
  title: string;
  to: string;
  children: React.ReactNode;
}) => (
  <div className="kubeCard">
    <h3>{title}</h3>
    <p>{children}</p>
    <Link className="button button--primary" to={to}>
      Explore
    </Link>
  </div>
);

const Pill = ({ to, label }: { to: string; label: string }) => (
  <Link className="kubePill" to={to}>
    {label}
  </Link>
);

export default function Home(): JSX.Element {
  return (
    <Layout title="Docs" description="Rakam Systems Documentation">
      <main>
        <section className="kubeHero">
          <div className="kubeHeroInner">
            <div>
              <h1 className="kubeTitle">Rakam Systems</h1>
              <p className="kubeSubtitle">
                A versioned, scalable documentation portal for Core AI Modules, SDKs, Developer Console, and Solutions —
                designed for enterprise governance and open-source contributions.
              </p>

              <div className="kubeCtas">
                <Link className="button button--primary" to="/overview/quickstart">
                  Get started
                </Link>
                <Link className="button button--secondary" to="/architecture/system-overview">
                  Architecture
                </Link>
                <a className="button button--secondary" href="https://github.com/Rakam-AI/rakam_systems">
                  View on GitHub
                </a>
              </div>

              <div className="kubeSection" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="kubeSectionLead">
                  Quick links
                </div>
                <div className="kubeQuickLinks">
                  <Pill to="/core/" label="Core library" />
                  <Pill to="/sdk/" label="SDK" />
                  <Pill to="/console/" label="Developer Console" />
                  <Pill to="/solutions/" label="Solutions" />
                  <Pill to="/security/" label="Security & Compliance" />
                  <Pill to="/release/" label="Release & Maintenance" />
                  <a className="kubePill" href="https://github.com/Rakam-AI/rakam_systems/issues/new/choose">Create issue</a>
                </div>
              </div>
            </div>

            <div className="kubeHeroCard">
              <img
                src="img/portal-illustration.svg"
                alt="Platform overview"
                style={{ width: "100%", height: "auto", borderRadius: 14 }}
              />
            </div>
          </div>
        </section>

        <section className="kubeSection">
          <h2>Navigate by domain</h2>
          <div className="kubeSectionLead">
            Clear separation between platform domains while keeping cross-cutting guidance (architecture, operations,
            security, and release management) consistent.
          </div>

          <div className="kubeGrid">
            <Card title="Overview" to="/overview/">
              Concepts, onboarding, glossary, and your quickest path to production.
            </Card>
            <Card title="Core AI Modules Library" to="/core/">
              Module lifecycle, composition patterns, runtime expectations, observability.
            </Card>
            <Card title="SDK" to="/sdk/">
              Clients, authentication, API usage patterns, and versioning policies.
            </Card>
            <Card title="Developer Console" to="/console/">
              Registry, governance, RBAC, audit, and enterprise controls.
            </Card>
            <Card title="Solutions" to="/solutions/">
              Templates and off-the-shelf solutions — customize and deploy quickly.
            </Card>
            <Card title="Release & Maintenance" to="/release/">
              SemVer rules, lifecycle stages, deprecation windows, LTS support, changelogs.
            </Card>
          </div>
        </section>

        <section className="kubeSection">
          <h2>Operational readiness</h2>
          <div className="kubeSectionLead">
            From day one: deployment guidance, environment promotion, and security/compliance baselines.
          </div>
          <div className="kubeQuickLinks">
            <Pill to="/operations/deployment" label="Deployment" />
            <Pill to="/operations/environments" label="Environments" />
            <Pill to="/operations/troubleshooting" label="Troubleshooting" />
            <Pill to="/security/threat-model" label="Threat model" />
            <Pill to="/security/data-handling" label="Data handling" />
            <Pill to="/contributing/" label="Contributing" />
          </div>
        </section>

        <div className="kubeFooterNote">
          Tip: keep examples and APIs version-aligned. When you tag releases, publish a new docs version so users always
          see the right instructions for their SDK/runtime.
        </div>
      </main>
    </Layout>
  );
}
