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
              `font-semibold text-md hover:text-primary hover:bg-gradient-to-r from-white to-white/50 px-6 py-3 w-full ease-in-out duration-500 ${
                isActive
                  ? "bg-gradient-to-r from-white to-white/50 text-primary"
                  : "text-white"
              }`
            }
          >
            {label.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
