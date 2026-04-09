import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegacyRedirect } from "@/components/layout/LegacyRedirect";
import { HomePage } from "@/pages/HomePage";
import { WorkPage } from "@/pages/WorkPage";
import { WorkDetailPage } from "@/pages/WorkDetailPage";
import { ResumePage } from "@/pages/ResumePage";
import { LabsPage } from "@/pages/LabsPage";
import { LabDetailPage } from "@/pages/LabDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { legacyRouteRedirects } from "@/lib/legacy-routes";

const legacyRoutes = Object.entries(legacyRouteRedirects).map(([path, to]) => ({
  path,
  element: <LegacyRedirect to={to} />
}));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "work", element: <WorkPage /> },
      { path: "work/:slug", element: <WorkDetailPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "labs", element: <LabsPage /> },
      { path: "labs/:slug", element: <LabDetailPage /> },
      { path: "404", element: <NotFoundPage /> },
      ...legacyRoutes,
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);
