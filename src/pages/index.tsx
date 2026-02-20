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
                A platform designed to industrialize the construction, deployment,
                and operation of enterprise-grade AI systems.
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
          <h2>Documentation Guides</h2>
          <div className="kubeSectionLead">
            Explore Rakam Systems documentation organized by your use case and
            level of expertise.
          </div>

          <div className="kubeGrid">
            <Card title="Introduction" to="/intro/">
              Platform overview, origins, target users, and core components.
              Start here to understand what Rakam Systems is and how it can help you.
            </Card>
            <Card title="Getting Started Guide" to="/getting-started">
              Quick start with installation, evaluation, and observability.
              Get up and running in minutes.
            </Card>
            <Card title="User Guide" to="/user-guide">
              Comprehensive documentation for development and deployment.
              Learn how to build production-ready AI systems.
            </Card>
            <Card title="Developer Guide" to="/developer-guide">
              In-depth development information, architecture patterns, and
              advanced topics for contributors.
            </Card>
            <Card title="Reference Guide" to="/references/core">
              Component-by-component API reference with detailed specifications
              for all modules and tools.
            </Card>
          </div>
        </section>
      </main>
    </Layout>
  );
}
