// React router
import { Link } from "react-router-dom";

// Constants
import { navLinks } from "@/app/config/constants/constants";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1 group">
        <img
          src="/public/logo-azias-fc.jpg"
          alt="Logo da equipa FC Azias"
          className="w-14 h-14 rounded-full"
        />
        <span className="font-bold text-xl text-gray-900">Azias FC</span>
      </Link>

      {/* ---------- Desktop Nav ---------- */}
      <div className="hidden md:flex items-center gap-2">
        <div className="flex items-center gap-1">
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={id}
              to={href}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-white/50 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-transparent hover:border-emerald-200/50"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
