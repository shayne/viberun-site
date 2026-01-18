import Head from "next/head";
import Image from "next/image";
import s from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>viberun | Agent-native app hosting</title>
        <meta
          name="description"
          content="Viberun is a CLI-first, agent-native app host. Run viberun <app> to drop into an AI agent session inside a persistent container with ports ready to go."
        />
        <meta property="og:title" content="viberun" />
        <meta
          property="og:description"
          content="CLI-first agent-native app hosting. One command to start an AI agent session with persistent containers and web ports ready."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/viberun-logo.png" />
      </Head>
      <main className={s.page}>
        <div className={s.bgGlow} />
        <div className={s.sun} />
        <div className={s.grid} />

        <div className={s.content}>
          <header className={s.header}>
            <span className={s.headerKicker}>
              CLI-first • Agent-native • Persistent
            </span>
            <span className={s.headerTitle}>viberun</span>
          </header>

          <section className={s.heroGrid}>
            <div className={s.heroCopy}>
              <p className={s.kicker}>Run agent-native apps in one command.</p>
              <h1>Drop into an AI agent session with your app already wired.</h1>
              <p className={s.subtitle}>
                Viberun is a developer tool that spins up a persistent container
                per app, starts the agent inside a real PTY, and maps ports so you
                can build, run, and iterate fast.
              </p>
              <div className={s.actions}>
                <a
                  className={s.primaryButton}
                  href="https://github.com/shayne/viberun"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
                <a className={s.secondaryButton} href="#install">
                  Install
                </a>
              </div>
              <div className={s.heroMeta}>
                <span>viberun &lt;app&gt; to start</span>
                <span>Agent providers built-in</span>
                <span>Containers keep state</span>
              </div>
            </div>

            <div className={s.heroPanel} id="install">
              <div className={s.panelHeader}>Install in seconds</div>
              <div className={s.panelSubheader}>One line. No setup docs.</div>
              <pre className={s.codeBlock}>
                <code>curl -fsSL https://viberun.sh | sh</code>
              </pre>
              <div className={s.panelFooter}>
                This site is the teaser. The deep technical details live on
                GitHub.
              </div>
              <a
                className={s.panelLink}
                href="https://github.com/shayne/viberun"
                target="_blank"
                rel="noreferrer"
              >
                Go deeper on GitHub →
              </a>
            </div>
          </section>

          <section className={s.features}>
            <div className={s.featureCard}>
              <h3>CLI + daemon + container</h3>
              <p>
                A clear three-part architecture: client CLI, host daemon, and an
                Ubuntu-based agent runtime.
              </p>
            </div>
            <div className={s.featureCard}>
              <h3>Persistent app state</h3>
              <p>
                Containers live with your app. Reconnect, snapshot, and keep
                iterating without re-provisioning.
              </p>
            </div>
            <div className={s.featureCard}>
              <h3>Ports already mapped</h3>
              <p>
                Web apps come up on predictable ports so you can hit localhost
                immediately.
              </p>
            </div>
          </section>

          <section className={s.logoFooter}>
            <Image
              src="/viberun-logo.png"
              alt="Viberun logo"
              className={s.logo}
              width={1024}
              height={1024}
            />
          </section>
        </div>
      </main>
    </>
  );
}
