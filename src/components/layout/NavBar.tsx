// React router
import { Link, NavLink } from "react-router-dom";

// Constants
import { navLinks } from "@/config/constants/constants";

export function Navbar() {
  return (
    <nav className="h-full w-full flex flex-col items-center">
      {/* ---------- Logo ---------- */}
      <Link to="/">
        <img
          src="/azias-fc-logo.png"
          alt="Logo da equipa FC Azias"
          className="w-48 h-48 rounded-full"
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
    font-semibold text-md
    px-6 py-3 w-full
    rounded
    transition-all duration-300 ease-out
    hover:text-primary
    hover:bg-gradient-to-r hover:from-white hover:to-white/60
    hover:translate-x-1
    ${
      isActive
        ? "bg-gradient-to-r from-white to-white/60 text-primary translate-x-1"
        : "text-white"
    }
    `
            }
          >
            {label.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
