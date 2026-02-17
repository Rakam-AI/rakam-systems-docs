import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const Card = ({
  title,
  to,
  children,
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
                A versioned, scalable documentation portal for Core AI Modules,
                SDKs, Developer Console, and Solutions — designed for enterprise
                governance and open-source contributions.
              </p>

              <div className="kubeCtas">
                <Link className="button button--primary" to="/intro">
                  Docs
                </Link>

                <a
                  className="button button--secondary"
                  href="https://github.com/Rakam-AI/rakam_systems"
                >
                  View on GitHub
                </a>
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
            Clear separation between platform domains while keeping
            cross-cutting guidance (architecture, operations, security, and
            release management) consistent.
          </div>

          <div className="kubeGrid">
            <Card title="Overview" to="/intro/">
              Concepts, onboarding, glossary, and your quickest path to
              production.
            </Card>
            <Card title="Core AI Modules Library" to="/core/">
              Module lifecycle, composition patterns, runtime expectations,
              observability.
            </Card>
            <Card title="SDK" to="/references/tools/evaluation">
              Clients, authentication, API usage patterns, and versioning
              policies.
            </Card>
            <Card title="Developer Console" to="/console/">
              Registry, governance, RBAC, audit, and enterprise controls.
            </Card>
            <Card title="Solutions" to="/ai-components/agents/">
              Templates and off-the-shelf solutions — customize and deploy
              quickly.
            </Card>
            <Card title="Release & Maintenance" to="">
              SemVer rules, lifecycle stages, deprecation windows, LTS support,
              changelogs.
            </Card>
          </div>
        </section>

        <section className="kubeSection">
          <h2>Operational readiness</h2>
          <div className="kubeSectionLead">
            From day one: deployment guidance, environment promotion, and
            security/compliance baselines.
          </div>
          <div className="kubeQuickLinks">
            <Pill to="" label="Deployment" />
            <Pill to="" label="Environments" />
            <Pill to="" label="Troubleshooting" />
            <Pill to="" label="Threat model" />
            <Pill to="" label="Data handling" />
            <Pill to="" label="Contributing" />
          </div>
        </section>

        <div className="kubeFooterNote">
          Tip: keep examples and APIs version-aligned. When you tag releases,
          publish a new docs version so users always see the right instructions
          for their SDK/runtime.
        </div>
      </main>
    </Layout>
  );
}
