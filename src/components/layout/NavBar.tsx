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
}
