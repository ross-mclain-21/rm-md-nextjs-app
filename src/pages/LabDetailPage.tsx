import { Link, Navigate, useParams } from "react-router-dom";
import { useUnityContext, Unity } from "react-unity-webgl";
import { ArrowLeft } from "lucide-react";
import { labRuntimes } from "@/content/labs";
import { usePageMeta } from "@/lib/usePageMeta";

export const LabDetailPage = () => {
  const { slug } = useParams();
  const lab = labRuntimes.find((item) => item.slug === slug);
  const activeLab = lab ?? labRuntimes[0];

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: activeLab.loaderUrl,
    dataUrl: activeLab.dataUrl,
    frameworkUrl: activeLab.frameworkUrl,
    codeUrl: activeLab.codeUrl
  });

  if (!lab) {
    return <Navigate to="/404" replace />;
  }

  usePageMeta({
    title: `${lab.title} | Labs`,
    description: lab.description,
    path: `/labs/${lab.slug}`
  });

  return (
    <>
      <section className="section-spacing">
        <Link className="inline-link" to="/labs">
          <ArrowLeft size={16} />
          Back to labs
        </Link>
        <header className="section-header mt-4">
          <p className="section-label">ARCHIVE GAME</p>
          <h1>{lab.title}</h1>
          <p className="section-intro">{lab.description}</p>
        </header>

        {!isLoaded ? (
          <p className="section-intro">
            Loading build... {Math.round(loadingProgression * 100)}%
          </p>
        ) : null}

        <div className="unity-wrap">
          <Unity
            unityProvider={unityProvider}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>
    </>
  );
};
