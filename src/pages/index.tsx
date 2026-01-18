import Head from "next/head";
import Image from "next/image";
import s from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>viberun | self-hosted vibecoding runtime</title>
        <meta
          name="description"
          content="Viberun is a self-hosted vibecoding runtime. Run viberun <app> to drop into your favorite agent inside a persistent container, ready to build and run."
        />
        <meta property="og:title" content="viberun" />
        <meta
          property="og:description"
          content="Self-hosted vibecoding runtime. One command drops you into your agent in a persistent container, ready to build and run."
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
              Self-hosted • Vibecoding • Personal software
            </span>
            <span className={s.headerTitle}>viberun</span>
          </header>

          <section className={s.heroGrid}>
            <div className={s.heroCopy}>
              <p className={s.kicker}>Build and run in one interface.</p>
              <h1>Your agent, your container, ready to vibe.</h1>
              <p className={s.subtitle}>
                Run <strong>viberun my-cool-app</strong> and you land inside your
                favorite agent in a persistent sandbox that’s already wired to
                run your app. Our skills handle the service setup so you can
                focus on building.
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
                <span>Codex, Claude Code, Gemini</span>
                <span>One container per app</span>
              </div>
            </div>

            <div className={s.heroPanel} id="install">
              <div className={s.panelHeader}>Install the client</div>
              <div className={s.panelSubheader}>curl it and go.</div>
              <pre className={s.codeBlock}>
                <code>curl -fsSL https://viberun.sh | sh</code>
              </pre>
              <div className={s.panelFooter}>
                Docs, roadmap, and technical details live on GitHub.
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
              <h3>One command to start</h3>
              <p>
                Spin up a fresh app environment and jump straight into your
                agent without wrangling infra.
              </p>
            </div>
            <div className={s.featureCard}>
              <h3>Persistent sandboxes</h3>
              <p>
                Each app gets its own long‑lived container so you can pick up
                where you left off.
              </p>
            </div>
            <div className={s.featureCard}>
              <h3>Local access, zero fuss</h3>
              <p>
                Visit your app locally while it runs on your own hardware, no
                extra wiring required.
              </p>
            </div>
          </section>

          <section className={s.faq}>
            <div className={s.faqHeader}>
              <h2>FAQ</h2>
              <p>Short answers for the obvious questions.</p>
            </div>
            <div className={s.faqGrid}>
              <div className={s.faqCard}>
                <h3>Is this for production?</h3>
                <p>
                  Not yet. Viberun is for prototyping and personal software.
                  Think “build fast,” then eject when you’re ready to scale.
                </p>
              </div>
              <div className={s.faqCard}>
                <h3>Where does it run?</h3>
                <p>
                  On your own hardware or VM. You bring the compute; Viberun
                  keeps everything inside a container per app.
                </p>
              </div>
              <div className={s.faqCard}>
                <h3>How many apps can I run?</h3>
                <p>
                  As many as your box can handle. No per‑app pricing, no hosted
                  limits.
                </p>
              </div>
              <div className={s.faqCard}>
                <h3>Can I use external services?</h3>
                <p>
                  Yep. Keep everything inside the container or connect to
                  managed services when you want.
                </p>
              </div>
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
