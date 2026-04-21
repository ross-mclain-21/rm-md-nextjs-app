import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/content/projects";
import { preferredTechStack, siteMeta, techLens } from "@/content/site";
import { timelineMilestones } from "@/content/timeline";
import { ProjectCard } from "@/components/work/ProjectCard";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { usePageMeta } from "@/lib/usePageMeta";

export const HomePage = () => {
  const handleCenteredScroll = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center"
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  usePageMeta({
    title: `${siteMeta.name} | Portfolio`,
    description: siteMeta.headline,
    path: "/"
  });

  return (
    <>
      <section className="hero-section section-spacing">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <TypewriterText text="WHO AM I" speed={42} />
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {siteMeta.name}
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {siteMeta.role}
        </motion.p>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
        >
          {siteMeta.headline}
        </motion.p>

        <motion.div
          className="hero-quick-links"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          <a className="hero-quick-link" href={`mailto:${siteMeta.email}`}>
            <Mail size={14} />
            {siteMeta.email}
          </a>
          <a className="hero-quick-link" href={siteMeta.github} target="_blank" rel="noreferrer">
            <Github size={14} />
            ross-mclain-br
          </a>
          <a className="hero-quick-link" href={siteMeta.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={14} />
            rossmclain21
          </a>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.36 }}
        >
          <Link className="primary-button" to="/work">
            View Portfolio <ArrowRight size={16} />
          </Link>
          <a className="pink-button" href="#work-with-me" onClick={handleCenteredScroll("work-with-me")}>
            Work with me <ArrowRight size={16} />
          </a>
          <a className="secondary-button" href="#journey">
            See my journey <ArrowDown size={16} />
          </a>
        </motion.div>

        <p className="section-label hero-stack-label">TECH STACK</p>

        <motion.div
          className="hero-stack-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.46 }}
        >
          {preferredTechStack.map((tech) => (
            <a
              key={tech.name}
              className="hero-stack-card"
              href={tech.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${tech.name} official site`}
            >
              <img
                src={tech.logoUrl}
                alt={`${tech.name} logo`}
                loading="lazy"
              />
              <span>{tech.name}</span>
            </a>
          ))}
        </motion.div>
      </section>

      <section id="work-with-me" className="section-spacing callout-panel">
        <p className="section-label">WORK WITH ME</p>
        <h2>Let me handle the technical solutions while you focus on what matters most.</h2>
        <p>{siteMeta.shortBio}</p>
        <div className="contact-links">
          <a href={`mailto:${siteMeta.email}`}>
            <Mail size={16} />
            {siteMeta.email}
          </a>
          <a href={siteMeta.github} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </section>

      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">FEATURED PORTFOLIO</p>
          <h2>Recent portfolio work</h2>
        </header>
        <div className="project-grid">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="journey" className="section-spacing">
        <header className="section-header">
          <p className="section-label">JOURNEY</p>
          <h2>Milestones</h2>
        </header>
        <div className="timeline-grid">
          {timelineMilestones.map((milestone) => (
            <article key={milestone.id} className="timeline-item">
              <p className="timeline-year">{milestone.year}</p>
              <h3>{milestone.title}</h3>
              {milestone.organization ? (
                <p className="timeline-org">{milestone.organization}</p>
              ) : null}
              <p className="timeline-summary">{milestone.summary}</p>
              <div className="project-tags">
                {milestone.techHighlights.map((tech) => (
                  <span key={`${milestone.id}-${tech}`} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">TECH LENS</p>
          <h2>Current focus</h2>
        </header>
        <div className="tech-lens-list">
          {techLens.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
    </>
  );
};
