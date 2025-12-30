// React router
import { Link, NavLink } from "react-router-dom";

// Constants
import { navLinks } from "@/config/constants/constants";

export function Navbar() {
  return (
    <nav className="h-full w-full flex flex-col items-center">
      {/* ----- Logo ----- */}
      <Link to="/">
        <img
          src="/azias-fc-logo.png"
          alt="Logo da equipa FC Azias"
          className="w-48 h-48 rounded-full"
        />
        {/* <span className="font-bold text-xl text-gray-900">Azias FC</span> */}
      </Link>

      {/* ---------- Desktop Nav ---------- */}

      <div className="flex flex-col items-center justify-center gap-6">
        {navLinks.map(({ href, label, id }) => (
          <NavLink
            key={id}
            to={href}
            className={({ isActive }) =>
              `font-semibold text-md hover:text-primary hover:bg-white px-3 py-3 w-full ease-in-out duration-500 rounded ${
                isActive ? "bg-background text-primary" : "text-white"
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
