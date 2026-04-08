import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

export const NotFoundPage = () => {
  usePageMeta({
    title: "404 | Ross McLain",
    description: "Page not found.",
    path: "/404"
  });

  return (
    <>
      <section className="section-spacing not-found">
        <p className="section-label">404</p>
        <h1>Page not found</h1>
        <p>
          The route you requested does not exist in portfolio v2. Use the main
          navigation to continue.
        </p>
        <Link className="primary-button" to="/">
          Return Home
        </Link>
      </section>
    </>
  );
};
