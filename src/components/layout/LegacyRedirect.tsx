import { Navigate } from "react-router-dom";

interface LegacyRedirectProps {
  to: string;
}

export const LegacyRedirect = ({ to }: LegacyRedirectProps) => {
  return <Navigate to={to} replace />;
};
