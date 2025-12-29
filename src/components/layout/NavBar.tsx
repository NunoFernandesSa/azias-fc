// React router
import { Link } from "react-router-dom";

// Constants
import { navLinks } from "@/config/constants/constants";

export function Navbar() {
  return (
    <nav className="container flex items-center justify-between w-full">
      {/* ----- Logo ----- */}
      <Link to="/" className="flex items-center gap-1 group">
        <img
          src="/azias-fc-logo.png"
          alt="Logo da equipa FC Azias"
          className="w-24 h-24 rounded-full"
        />
        {/* <span className="font-bold text-xl text-gray-900">Azias FC</span> */}
      </Link>

      {/* ---------- Desktop Nav ---------- */}
      <div className="hidden lg:flex items-center gap-2">
        <div className="flex items-center gap-6">
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={id}
              to={href}
              className="font-semibold text-md text-white px-3 py-1"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
