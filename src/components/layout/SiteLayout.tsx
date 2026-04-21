import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteMeta } from "@/content/site";
import Galaxy from "@/components/visual/Galaxy";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/labs", label: "Labs" }
];

export const SiteLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    if (href === "/" && location.pathname === "/") {
      event.preventDefault();
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <div className="site-shell">
      <div className="background-layer">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={2.3}
          glowIntensity={0.12}
          saturation={0.15}
          hueShift={150}
          speed={2.5}
          twinkleIntensity={0.12}
          rotationSpeed={0.01}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          transparent
          starSpeed={0.75}
        />
      </div>

      <header className="main-header">
        <div className="layout-container header-content">
          <Link className="brandmark" to="/">
            {siteMeta.name}
          </Link>
          <button
            className="mobile-nav-toggle"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <nav className={`main-nav ${isOpen ? "open" : ""}`} aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                end={item.href === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="layout-container main-content">
        <Outlet />
      </main>

      <footer className="layout-container site-footer">
        <p>
          Designed and developed by {siteMeta.name}.
        </p>
      </footer>
    </div>
  );
};
