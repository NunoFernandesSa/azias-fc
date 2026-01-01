// React router
import { Link, NavLink } from "react-router-dom";

// Constants
import { navLinks } from "@/config/constants/constants";

// Hooks
import { useIsMobile } from "@/hooks/useIsMobile";

export function Navbar() {
  const isMobile = useIsMobile();

  const desktopNavbar = (
    <nav className="h-full w-full flex flex-col items-center">
      {/* ---------- Logo ---------- */}
      <Link to="/">
        <img
          src="/azias-fc-logo.png"
          alt="Logo da equipa FC Azias"
          className="w-40 h-40 rounded-full"
        />
      </Link>

      {/* ---------- Desktop Nav ---------- */}
      <div className="flex flex-col items-center justify-center gap-2 mt-6">
        {navLinks.map(({ href, label, id }) => (
          <NavLink
            key={id}
            to={href}
            className={({ isActive }) =>
              `
    relative overflow-hidden
    font-semibold text-md
    px-6 py-3 w-full
    rounded-lg

    transition-colors duration-300 ease-out

    ${isActive ? "text-primary bg-white/90" : "text-white"}

    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-white before:to-white/60
    before:transition-transform before:duration-300 before:ease-out
    before:-z-10
    before:translate-x-[-100%]

    hover:before:translate-x-0
    hover:text-primary

    ${isActive ? "before:translate-x-0" : ""}
    `
            }
          >
            <span className="relative z-10">{label.toUpperCase()}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );

  const mobileNavbar = (
    <nav className="h-full w-full flex items-center justify-between px-4">
      {/* ---------- Logo ---------- */}
      <Link to="/">
        <img
          src="/azias-fc-logo.png"
          alt="Logo da equipa FC Azias"
          className="w-16 h-16 rounded-full"
        />
      </Link>

      {/* ---------- Menu Hamburger ---------- */}
      <button
        className="text-white p-2"
        onClick={() => {
          // Ici tu peux gérer l'ouverture d'un menu latéral
          console.log("Ouvrir menu mobile");
        }}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );

  return isMobile ? mobileNavbar : desktopNavbar;
}
