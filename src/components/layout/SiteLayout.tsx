import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteMeta } from "@/content/site";
import Galaxy from "@/components/visual/Galaxy";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/labs", label: "Labs" }
];

export const SiteLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="background-layer">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={2.3}
          glowIntensity={0.18}
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
                onClick={() => setIsOpen(false)}
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
          Built with React + Vite. Designed and coded by {siteMeta.name}.
        </p>
      </footer>
    </div>
  );
};
