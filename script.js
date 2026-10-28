:root {
  --bg: #07111f;
  --bg-soft: #0d1b2a;
  --panel: rgba(17, 26, 40, 0.8);
  --panel-strong: #111f30;
  --card: rgba(15, 23, 36, 0.75);
  --line: rgba(148, 163, 184, 0.18);
  --text: #e5eefb;
  --muted: #a7b7d2;
  --primary: #71e0ff;
  --primary-2: #8f7dff;
  --accent: #6ef0b0;
  --shadow: 0 30px 80px rgba(15, 17, 30, 0.5);
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
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(113, 224, 255, 0.18), transparent 20%),
    radial-gradient(circle at bottom right, rgba(143, 125, 255, 0.18), transparent 25%),
    var(--bg);
}

img {
  max-width: 100%;
  display: block;
}

button,
a {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px 70px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 18px;
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: rgba(7, 17, 31, 0.5);
  border: 1px solid var(--line);
  border-radius: 18px;
  margin-top: 10px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #08131d;
  font-weight: 900;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.3rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #061621;
  box-shadow: 0 12px 40px rgba(92, 219, 255, 0.35);
}

.button.secondary,
.button.ghost {
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--line);
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  align-items: center;
  gap: 48px;
  min-height: 78vh;
  padding: 56px 0 22px;
}

.hero-copy {
  max-width: 670px;
}

.eyebrow {
  margin: 0 0 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.intro {
  font-size: 1.08rem;
  line-height: 1.75;
  margin-top: 22px;
  color: var(--muted);
  max-width: 620px;
}

.cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.mini-stats {
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.mini-stats li {
  min-width: 130px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.mini-stats strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.88rem;
}

.hero-visual {
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(12px);
  opacity: 0.75;
  animation: float 8s ease-in-out infinite;
}

.orb-one {
  width: 300px;
  height: 300px;
  right: 50px;
  top: 40px;
  background: radial-gradient(circle, rgba(113, 224, 255, 0.8), rgba(113, 224, 255, 0));
}

.orb-two {
  width: 240px;
  height: 240px;
  left: 40px;
  bottom: 10px;
  background: radial-gradient(circle, rgba(143, 125, 255, 0.75), rgba(143, 125, 255, 0));
  animation-delay: 1.5s;
}

.panel {
  position: relative;
  z-index: 1;
  width: min(100%, 430px);
  background: linear-gradient(180deg, rgba(17, 31, 48, 0.9), rgba(10, 18, 28, 0.86));
  border: 1px solid var(--line);
  border-radius: 26px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.badge-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.badge {
  padding: 8px 12px;
  border: 1px solid rgba(113, 224, 255, 0.25);
  background: rgba(113, 224, 255, 0.08);
  border-radius: 999px;
  font-size: 0.75rem;
  color: var(--primary);
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 0 20px;
  border-bottom: 1px solid var(--line);
}

.avatar {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #08131d;
  font-weight: 900;
  font-size: 1.5rem;
}

.profile-card h3 {
  margin: 0 0 6px;
  font-size: 1.2rem;
}

.profile-card p {
  margin: 0;
  color: var(--muted);
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 16px;
  padding-top: 22px;
}

.metric-grid div {
  padding: 16px 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.metric-label {
  display: block;
  color: var(--muted);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.section {
  padding-top: 60px;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 30px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 20px;
}

.text-card,
.skill-card,
.project-card,
.contact-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 26px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.14);
}

.text-card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 1.02rem;
}

.text-card p:last-child {
  margin-bottom: 0;
}

.highlight-card h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.skill-card {
  min-height: 210px;
}

.icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.skill-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.skill-card p {
  margin: 0;
  line-height: 1.7;
  color: var(--muted);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.project-card {
  min-height: 230px;
}

.project-top {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.project-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(113, 224, 255, 0.08);
  color: var(--primary);
  border: 1px solid rgba(113, 224, 255, 0.2);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-tag.alt {
  background: rgba(143, 125, 255, 0.08);
  color: #cabaef;
  border-color: rgba(143, 125, 255, 0.25);
}

.project-card h3 {
  margin: 0 0 12px;
  font-size: 1.4rem;
}

.project-card p {
  margin: 0;
  line-height: 1.7;
  color: var(--muted);
}

.contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 30px;
}

.contact-card h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.7rem);
  letter-spacing: -0.05em;
}

.contact-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-18px);
  }
}

@media (max-width: 920px) {
  .hero,
  .about-grid,
  .skills-grid,
  .projects-grid,
  .contact-card {
    grid-template-columns: 1fr;
    display: grid;
  }

  .hero {
    min-height: auto;
    padding-top: 38px;
  }

  .nav {
    display: none;
  }

  .contact-card {
    padding: 22px;
  }
}

@media (max-width: 640px) {
  .page-shell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .topbar {
    padding: 18px 12px;
  }

  .hero h1 {
    font-size: 2.8rem;
  }

  .metric-grid {
    grid-template-columns: 1fr;
  }

  .contact-actions {
    width: 100%;
  }

  .contact-actions .button {
    width: 100%;
  }
}
