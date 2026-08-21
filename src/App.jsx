import { useState } from "react";
import {
  certifications,
  education,
  experience,
  profile,
  skillGroups,
  statistics,
} from "./data/portfolio";
import { useActiveSection, useRevealOnScroll } from "./hooks/usePortfolioEffects";
import {
  ContactSection,
  SectionHeading,
  SiteFooter,
  SiteHeader,
  SkillCard,
  SocialIcon,
  StatCard,
} from "./components/PortfolioParts";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(
    ["about", "skills", "projects", "contact"],
    "about",
  );

  useRevealOnScroll();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <SiteHeader
        activeSection={activeSection}
        currentPage="home"
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <section className="hero section-first" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Software Engineer Portfolio</p>
            <h1 id="hero-title">Hey, I&apos;m {profile.name}</h1>
            <p className="hero-role">{profile.heroSubtitle}</p>
            <p className="hero-summary">{profile.heroDescription}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="./projects.html">
                View Projects
              </a>
              <a
                className="button button-secondary"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-socials" aria-label="Social links">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  className="hero-social-link"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <span className="social-icon">
                    <SocialIcon icon={social.icon} />
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <img
              src={profile.heroImage}
              alt="Illustration of software development and problem solving"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading
            label="About Me"
            title="Backend-focused full-stack developer with a practical engineering mindset."
            description="I enjoy building software that is scalable, maintainable, and grounded in real product needs."
          />

          <div className="about-card" data-reveal>
            <img
              className="profile-image"
              src={profile.avatar}
              alt={`${profile.name} portrait`}
              loading="lazy"
              decoding="async"
            />

            <div className="about-copy">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeading
            label="Experience"
            title="Professional experience focused on backend architecture and product delivery."
          />

          <div className="experience-list">
            {experience.map((item) => (
              <article className="timeline-card" data-reveal key={item.role}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <p className="timeline-role">{item.role}</p>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-duration">{item.duration}</p>
                  </div>

                  <ul className="timeline-list">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            label="Skills"
            title="Structured around the technologies I use most across backend, frontend, data, and tooling."
          />

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section className="skill-group" data-reveal key={group.name}>
                <div className="skill-group-header">
                  <h3>{group.name}</h3>
                </div>

                <div className="skill-list">
                  {group.items.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            label="Statistics"
            title="A quick snapshot of my current portfolio and learning journey."
            align="center"
          />

          <div className="stats-grid">
            {statistics.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="action-panel works-panel" data-reveal>
            <div>
              <div className="section-heading">
                <span className="section-line" />
                <p>Works</p>
              </div>
              <h2>Explore selected work and hosted portfolio projects.</h2>
              <p className="panel-copy">
                You can see some of my work here, and explore the full project
                collection on a dedicated page with improved project cards.
              </p>
            </div>

            <a className="button button-primary card-action-button" href="./projects.html">
              View Projects
            </a>
          </div>
        </section>

        <section className="section">
          <SectionHeading
            label="Education"
            title="Academic background that supports my software engineering foundation."
          />

          <div className="info-grid">
            {education.map((item) => (
              <article className="info-card" data-reveal key={item.degree}>
                <p className="info-kicker">{item.duration}</p>
                <h3>{item.degree}</h3>
                {item.school ? <p>{item.school}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            label="Certifications"
            title="Professional training that complements my project and internship experience."
          />

          <div className="info-grid">
            {certifications.map((item) => (
              <article className="info-card" data-reveal key={item.title}>
                <p className="info-kicker">{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section resume-section">
          <div className="action-panel resume-panel" data-reveal>
            <div>
              <div className="section-heading">
                <span className="section-line" />
                <p>Resume</p>
              </div>

              <h2>Download my resume to learn more about my experience and skills.</h2>
            </div>

            <a
              className="button button-primary card-action-button"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}

export default App;
