:root {
  --bg: #070d18;
  --bg-soft: #0e1628;
  --panel: rgba(17, 24, 39, 0.72);
  --panel-strong: rgba(12, 18, 29, 0.96);
  --elevated: rgba(21, 31, 47, 0.9);
  --border: rgba(148, 163, 184, 0.18);
  --text: #edf6ff;
  --muted: #b4c2d4;
  --primary: #8b5cf6;
  --secondary: #3b82f6;
  --accent: #22d3ee;
  --cyan: #7dd3fc;
  --shadow: 0 30px 70px rgba(7, 13, 24, 0.6);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 110px 0;
  position: relative;
  z-index: 1;
}

.page-bg {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(circle at center, black 35%, transparent 100%);
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(22px);
  opacity: 0.55;
  animation: drift 16s ease-in-out infinite alternate;
}

.orb-1 {
  width: 420px;
  height: 420px;
  top: 8%;
  left: -80px;
  background: rgba(139, 92, 246, 0.35);
}

.orb-2 {
  width: 360px;
  height: 360px;
  top: 30%;
  right: -60px;
  background: rgba(59, 130, 246, 0.32);
  animation-delay: 2s;
}

.orb-3 {
  width: 500px;
  height: 500px;
  bottom: -120px;
  left: 18%;
  background: rgba(34, 211, 238, 0.22);
  animation-delay: 4s;
}

.particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(125, 211, 252, 0.8);
  animation: twinkle 9s linear infinite;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(7, 13, 24, 0.52);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  z-index: 10;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #08131d;
  box-shadow: 0 14px 30px rgba(139, 92, 246, 0.45);
  font-weight: 900;
}

.brand-name {
  font-size: 1rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.main-nav a {
  color: var(--muted);
  font-size: 0.96rem;
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--border);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  padding: 12px 10px;
}

.nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 99px;
  margin: 5px 0;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #061520;
  box-shadow: 0 18px 35px rgba(34, 211, 238, 0.2);
}

.button-secondary,
.button-ghost {
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--border);
  color: var(--text);
}

.nav-button {
  padding-block: 0.8rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 40px;
  min-height: 720px;
}

.eyebrow {
  margin: 0 0 18px;
  color: var(--cyan);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.07em;
  max-width: 680px;
}

.typewriter-wrap {
  display: inline-block;
  min-width: 260px;
  color: var(--cyan);
}

.typewriter {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid rgba(125, 211, 252, 0.9);
  vertical-align: middle;
  animation: blink 0.8s step-end infinite;
}

.lead {
  max-width: 620px;
  font-size: 1.08rem;
  color: var(--muted);
  margin: 22px 0 0;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
}

.stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0;
  margin: 40px 0 0;
}

.stats li {
  min-width: 150px;
  background: rgba(148, 163, 184, 0.03);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px 18px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.stats strong {
  display: block;
  margin-bottom: 4px;
  font-size: 1.08rem;
}

.stats span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.glass-card {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(10, 15, 26, 0.8));
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.profile-card {
  width: min(100%, 440px);
  padding: 26px 22px 18px;
  position: relative;
  transform: rotate(-1.5deg);
}

.profile-card::before {
  content: "";
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(125, 211, 252, 0.12);
  border-radius: 22px;
  pointer-events: none;
}

.card-topline {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.chip {
  border-radius: 999px;
  background: rgba(139, 92, 246, 0.12);
  color: var(--cyan);
  border: 1px solid rgba(125, 211, 252, 0.3);
  padding: 7px 11px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.profile-row {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 0 22px;
  border-bottom: 1px solid var(--border);
}

.avatar {
  width: 78px;
  height: 78px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #08131d;
  font-weight: 900;
  font-size: 1.5rem;
  box-shadow: 0 16px 30px rgba(139, 92, 246, 0.32);
}

.profile-row h2 {
  margin: 0 0 6px;
  font-size: 1.2rem;
}

.profile-row p {
  margin: 0;
  color: var(--muted);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 14px;
  padding-top: 20px;
}

.mini-metric {
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px 12px;
}

.mini-metric span {
  display: block;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.mini-metric strong {
  font-size: 0.96rem;
}

.section-heading {
  margin-bottom: 34px;
}

.section-heading h2 {
  margin: 0;
  max-width: 760px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
}

.content-card {
  padding: 30px 28px;
}

.content-card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.8;
}

.content-card p:last-child {
  margin-bottom: 0;
}

.accent-card {
  background: linear-gradient(180deg, rgba(110, 96, 176, 0.18), rgba(13, 19, 28, 0.9));
}

.accent-card h3 {
  margin: 0 0 14px;
  font-size: 1.5rem;
}

.skills-grid,
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.skill-card,
.project-card {
  padding: 26px 22px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.skill-card:hover,
.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(125, 211, 252, 0.32);
  box-shadow: 0 28px 60px rgba(16, 24, 39, 0.5);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.skill-card h3,
.project-card h3 {
  margin: 0 0 10px;
  font-size: 1.22rem;
}

.skill-card p,
.project-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.mini-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(125, 211, 252, 0.08);
  color: var(--cyan);
  border: 1px solid rgba(125, 211, 252, 0.2);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mini-tag.alt {
  background: rgba(139, 92, 246, 0.08);
  color: #d7c7ff;
  border-color: rgba(139, 92, 246, 0.28);
}

.contact-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  padding: 28px 30px;
}

.contact-shell h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.06em;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

@keyframes drift {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(15px, -18px, 0) scale(1.08);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.4);
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@media (max-width: 980px) {
  .hero-grid,
  .about-grid,
  .skills-grid,
  .projects-grid,
  .contact-shell {
    grid-template-columns: 1fr;
    display: grid;
  }

  .hero-grid {
    min-height: auto;
    padding-top: 32px;
  }

  .skills-grid,
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .main-nav {
    position: absolute;
    top: 100%;
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(10, 15, 26, 0.96);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 18px 20px;
    box-shadow: var(--shadow);
  }

  .main-nav.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .nav-button {
    display: none;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 88px 0;
  }

  .hero-copy h1 {
    font-size: 2.7rem;
  }

  .skills-grid,
  .projects-grid,
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .contact-shell {
    padding: 24px 20px;
  }

  .contact-actions {
    width: 100%;
  }

  .contact-actions .button {
    width: 100%;
  }
}
