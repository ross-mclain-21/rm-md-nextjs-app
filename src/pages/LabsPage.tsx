import { Link } from "react-router-dom";
import { labRuntimes } from "@/content/labs";
import { usePageMeta } from "@/lib/usePageMeta";

export const LabsPage = () => {
  usePageMeta({
    title: "Labs | Ross McLain",
    description: "Archived interactive game experiments built by Ross McLain.",
    path: "/labs"
  });

  return (
    <>
      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">LABS</p>
          <h1>Interactive archive projects</h1>
          <p className="section-intro">
            Legacy game builds preserved as playable web experiments.
          </p>
        </header>
        <div className="related-grid">
          {labRuntimes.map((lab) => (
            <Link key={lab.slug} className="related-card" to={`/labs/${lab.slug}`}>
              <img src={lab.screenshot} alt={`${lab.title} screenshot`} />
              <div>
                <h2>{lab.title}</h2>
                <p>{lab.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
