import { useEffect, useRef, useState } from "react";
import { profile, site } from "../data/portfolio";
import { useCountUp } from "../hooks/usePortfolioEffects";

export function SectionHeading({ label, title, description, align = "left" }) {
  return (
    <div className={`section-intro section-intro-${align}`} data-reveal>
      <div className="section-heading">
        <span className="section-line" />
        <p>{label}</p>
      </div>

      {title ? <h2>{title}</h2> : null}
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export function SocialIcon({ icon }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.88 1.52 2.31 1.08 2.87.82.09-.65.35-1.08.63-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.43.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.69-4.58 4.94.36.31.68.91.68 1.83v2.72c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.6 9.72h2.67V18H5.6V9.72Zm4.34 0h2.56v1.13h.04c.36-.68 1.22-1.4 2.51-1.4 2.68 0 3.18 1.76 3.18 4.06V18h-2.67v-3.98c0-.95-.02-2.17-1.32-2.17-1.32 0-1.52 1.03-1.52 2.1V18H9.94V9.72Z"
        />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.5v.19l9 5.96 9-5.96V7H3Zm18 10V8.96l-8.59 5.69a.75.75 0 0 1-.82 0L3 8.96V17h18Z"
        />
      </svg>
    );
  }

  if (icon === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.5A6.5 6.5 0 0 0 5.5 9c0 4.93 5.4 11.18 5.63 11.44a1.13 1.13 0 0 0 1.74 0C13.1 20.18 18.5 13.93 18.5 9A6.5 6.5 0 0 0 12 2.5Zm0 9A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
        />
      </svg>
    );
  }

  if (icon === "opportunities") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M9 3.5h6a2 2 0 0 1 2 2V7h2a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 19H5A2.5 2.5 0 0 1 2.5 16.5v-7A2.5 2.5 0 0 1 5 7h2V5.5a2 2 0 0 1 2-2Zm0 3.5h6V5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V7Zm10.5 5.14-6.42 2.3a3.18 3.18 0 0 1-2.16 0L4.5 12.14v4.36a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.36ZM5 8.5a1 1 0 0 0-1 1v1.05l7.43 2.66a1.7 1.7 0 0 0 1.14 0L20 10.55V9.5a1 1 0 0 0-1-1H5Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}

function ActionLink({ href, label, variant = "primary", disabled = false, ariaLabel }) {
  const className = `button button-${variant}${disabled ? " button-disabled" : ""}`;

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {label}
      </span>
    );
  }

  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.includes("drive.google");

  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel ?? label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export function SkillCard({ skill }) {
  return (
    <article className="skill-card" data-reveal>
      <div className="skill-icon-shell" aria-hidden="true">
        {skill.image ? (
          <img loading="lazy" decoding="async" src={skill.image} alt="" />
        ) : (
          <span>{skill.badge}</span>
        )}
      </div>
      <h3>{skill.name}</h3>
    </article>
  );
}

export function StatCard({ stat }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value ?? 0, visible && typeof stat.value === "number");

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <article className="stat-card" data-reveal ref={ref}>
      <p className="stat-label">{stat.label}</p>
      <h3 className="stat-value">
        {typeof stat.value === "number" ? `${count}${stat.suffix ?? ""}` : stat.valueText}
      </h3>
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-preview" aria-hidden="true">
        <span>{project.previewLabel}</span>
      </div>

      <div className="project-content">
        <p className="project-date">{project.date}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="badge-list">
          {project.stack.map((item) => (
            <span className="badge-chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <ActionLink
            href={project.liveUrl || "#"}
            label="Live Demo"
            variant="primary"
            disabled={!project.liveUrl}
            ariaLabel={`Open live demo for ${project.title}`}
          />
          <ActionLink
            href={project.sourceUrl || "#"}
            label="GitHub"
            variant="secondary"
            disabled={!project.sourceUrl}
            ariaLabel={`Open GitHub repository for ${project.title}`}
          />
        </div>
      </div>
    </article>
  );
}

export function SiteHeader({
  activeSection = "about",
  currentPage = "home",
  menuOpen,
  closeMenu,
  setMenuOpen,
}) {
  const homeLink = "./index.html";
  const navItems = [
    {
      id: "about",
      label: "About",
      href: currentPage === "home" ? "#about" : `${homeLink}#about`,
    },
    {
      id: "skills",
      label: "Skills",
      href: currentPage === "home" ? "#skills" : `${homeLink}#skills`,
    },
    {
      id: "projects",
      label: "Projects",
      href: "./projects.html",
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="site-header" id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href={homeLink} onClick={closeMenu}>
          <span className="brand-mark">&lt; / &gt;</span>
          {profile.brand}
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <div
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          id="site-navigation"
        >
          {navItems.map((item) => {
            const isActive =
              currentPage === "projects"
                ? activeSection === item.id
                : activeSection === item.id;

            return (
              <a
                key={item.id}
                className={isActive ? "is-active" : ""}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel" data-reveal>
        <SectionHeading
          label="Contact"
          title="Let's Connect."
          description="I am open to backend, full-stack, and software engineering opportunities where I can contribute to real products and keep learning."
        />

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-header">
              <SocialIcon icon="email" />
              <h3>Email</h3>
            </div>
            <a className="contact-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-header">
              <SocialIcon icon="location" />
              <h3>Location</h3>
            </div>
            <p>{site.location}</p>
          </div>

          <div className="contact-card">
            <div className="contact-card-header">
              <SocialIcon icon="opportunities" />
              <h3>Available For</h3>
            </div>
            <ul className="availability-list">
              {site.availability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="social-links social-links-contact">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              className="social-link"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <span className="social-icon">
                <SocialIcon icon={social.icon} />
              </span>
              <span className="social-label">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer-bar">
      <p>© 2026 Anish Kahar</p>
      <p>Made with care by Anish Kahar</p>

      <div className="footer-links">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            {social.label}
          </a>
        ))}
        <a href="#top" aria-label="Back to top">
          Back to Top
        </a>
      </div>
    </footer>
  );
}
