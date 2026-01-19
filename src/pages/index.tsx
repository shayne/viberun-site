import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import s from "./Home.module.css";

export default function Home() {
  const installCommand = "curl -fsSL https://viberun.sh | sh";
  const [isCopied, setIsCopied] = useState(false);
  const [installPulse, setInstallPulse] = useState(false);
  const installPulseTimeoutRef = useRef<number | null>(null);

  const copyToClipboard = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(installCommand);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = installCommand;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1200);
    } catch {
      // Ignore clipboard errors.
    }
  }, [installCommand]);

  const triggerInstallPulse = useCallback(() => {
    if (installPulseTimeoutRef.current) {
      window.clearTimeout(installPulseTimeoutRef.current);
    }
    setInstallPulse(false);
    window.requestAnimationFrame(() => {
      setInstallPulse(true);
      installPulseTimeoutRef.current = window.setTimeout(
        () => setInstallPulse(false),
        1400
      );
    });
  }, []);

  useEffect(() => {
    if (window.location.hash === "#install") {
      triggerInstallPulse();
    }
    return () => {
      if (installPulseTimeoutRef.current) {
        window.clearTimeout(installPulseTimeoutRef.current);
      }
    };
  }, [triggerInstallPulse]);

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
                <a
                  className={s.secondaryButton}
                  href="#install"
                  onClick={triggerInstallPulse}
                >
                  Install
                </a>
              </div>
              <div className={s.heroMeta}>
                <span>viberun &lt;app&gt; to start</span>
                <span>Codex, Claude Code, Gemini</span>
                <span>One container per app</span>
              </div>
            </div>

            <div
              className={`${s.heroPanel} ${
                installPulse ? s.heroPanelPulse : ""
              }`}
              id="install"
            >
              <div className={s.panelHeader}>Install the client</div>
              <div className={s.panelSubheader}>curl it and go.</div>
              <pre className={s.codeBlock}>
                <code>{installCommand}</code>
                <button
                  className={`${s.copyButton} ${
                    isCopied ? s.copyButtonSuccess : ""
                  }`}
                  type="button"
                  aria-label={isCopied ? "Copied!" : "Copy command"}
                  onClick={copyToClipboard}
                >
                  {isCopied ? (
                    <svg
                      className={s.copyIcon}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M9.55 17.3 5.5 13.25l1.4-1.4 2.65 2.65L17.1 6.95l1.4 1.4Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className={s.copyIcon}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h9v14Z"
                      />
                    </svg>
                  )}
                </button>
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
