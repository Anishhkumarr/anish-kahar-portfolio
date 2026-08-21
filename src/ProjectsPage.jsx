import { useState } from "react";
import { featuredProject, projects } from "./data/portfolio";
import { useRevealOnScroll } from "./hooks/usePortfolioEffects";
import {
  ContactSection,
  ProjectCard,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "./components/PortfolioParts";

function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useRevealOnScroll();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <SiteHeader
        activeSection="projects"
        currentPage="projects"
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        setMenuOpen={setMenuOpen}
      />

      <main className="projects-page">
        <section className="section section-first">
          <SectionHeading
            label="Featured Project"
            title={featuredProject.title}
            description={featuredProject.description}
          />

          <article className="feature-card" data-reveal>
            <div className="feature-copy">
              <p className="project-date">{featuredProject.date}</p>
              <div className="badge-list">
                {featuredProject.stack.map((item) => (
                  <span className="badge-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <span className="button button-primary button-disabled" aria-disabled="true">
                  Live Demo
                </span>
                <span className="button button-secondary button-disabled" aria-disabled="true">
                  GitHub
                </span>
              </div>
            </div>

            <div className="feature-preview" aria-hidden="true">
              <span>{featuredProject.previewLabel}</span>
            </div>
          </article>
        </section>

        <section className="section">
          <SectionHeading
            label="Projects"
            title="Selected projects with stronger structure, clearer stack details, and consistent presentation."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}

export default ProjectsPage;
