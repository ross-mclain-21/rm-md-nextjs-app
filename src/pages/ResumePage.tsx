import { Download } from "lucide-react";
import { resumeHighlights, siteMeta } from "@/content/site";
import { usePageMeta } from "@/lib/usePageMeta";

export const ResumePage = () => {
  const resumeViewerPath = `${siteMeta.resumePath}#navpanes=0&pagemode=none`;

  usePageMeta({
    title: "Resume | Ross McLain",
    description: "Resume and highlights for Ross McLain, Senior Full Stack Engineer.",
    path: "/resume"
  });

  return (
    <>
      <section className="section-spacing">
        <header className="section-header">
          <p className="section-label">RESUME</p>
          <h1>Current resume</h1>
        </header>
        <ul className="outcomes-list">
          {resumeHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="primary-button mt-4" href={siteMeta.resumePath} download>
          <Download size={16} />
          Download Resume
        </a>
      </section>

      <section className="section-spacing">
        <div className="resume-frame-wrap">
          <iframe
            src={resumeViewerPath}
            title="Ross McLain Resume"
            className="resume-frame"
          />
        </div>
      </section>
    </>
  );
};
