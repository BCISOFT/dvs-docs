import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/">
            🚀 Commencer
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/intro"
            style={{marginLeft: '1rem'}}>
            📖 Voir la documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation DevSpaces - Environnements de développement instantanés">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4 margin-vert--md">
                <div className="card">
                  <div className="card__header">
                    <h3>🚀 Rapide</h3>
                  </div>
                  <div className="card__body">
                    <p>Lancez un environnement de développement complet avec une seule commande.</p>
                  </div>
                </div>
              </div>
              <div className="col col--4 margin-vert--md">
                <div className="card">
                  <div className="card__header">
                    <h3>🔒 Sécurisé</h3>
                  </div>
                  <div className="card__body">
                    <p>Certificats SSL automatiques pour tous vos services locaux.</p>
                  </div>
                </div>
              </div>
              <div className="col col--4 margin-vert--md">
                <div className="card">
                  <div className="card__header">
                    <h3>📦 Simple</h3>
                  </div>
                  <div className="card__body">
                    <p>Interface CLI intuitive, aucune configuration complexe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('container padding-vert--lg')}>
          <h2 className="text--center margin-bottom--lg">Installation en une seule commande</h2>
          <div className="text--center">
            <div className="card margin-vert--md" style={{backgroundColor: 'var(--ifm-color-emphasis-100)'}}>
              <div className="card__body" style={{padding: '1rem'}}>
                <code style={{fontSize: '1.2rem', color: 'var(--ifm-color-content)', fontFamily: 'monospace'}}>
                  curl -fsSL https://devspaces.cloud/setup.sh | bash
                </code>
              </div>
            </div>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Guide d'installation complet →
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
