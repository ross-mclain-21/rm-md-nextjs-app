import { Link } from "react-router-dom";
import { labRuntimes } from "@/content/labs";
import { usePageMeta } from "@/lib/usePageMeta";

export const LabsPage = () => {
  usePageMeta({
    title: "Labs | Ross McLain",
    description: "Interactive projects built by Ross McLain.",
    path: "/labs"
  });

  return (
    <>
      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">LABS</p>
          <p className="section-intro">
            Labs is where I share interactive projects and experiments.
          </p>
        </header>
        <div className="related-grid">
          {labRuntimes.map((lab) => {
            if (!lab.isAvailable) {
              return (
                <article key={lab.slug} className="related-card related-card-disabled" aria-disabled="true">
                  <img src={lab.screenshot} alt={`${lab.title} screenshot`} />
                  <div>
                    <p className="project-year">{lab.year}</p>
                    <h2>{lab.title}</h2>
                    <p>{lab.description}</p>
                    <p className="related-status-note">Temporarily unavailable</p>
                  </div>
                </article>
              );
            }

            return (
              <Link key={lab.slug} className="related-card" to={`/labs/${lab.slug}`}>
                <img src={lab.screenshot} alt={`${lab.title} screenshot`} />
                <div>
                  <p className="project-year">{lab.year}</p>
                  <h2>{lab.title}</h2>
                  <p>{lab.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};
