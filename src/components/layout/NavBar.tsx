import { navLinks } from "@/config/constants/constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`
      ${
        isMobile
          ? "fixed top-0 left-0 right-0 bg-primary z-50 shadow-lg"
          : "lg:h-screen lg:w-48 bg-primary lg:fixed top-0 left-0"
      }
    `}
    >
      {isMobile ? (
        //---------- Mobile Nav ----------
        <div className="container mx-auto">
          <nav className="flex items-center justify-between p-4">
            <Link to="/">
              <img
                src="/azias-fc-logo.png"
                alt="Logo da equipa FC Azias"
                className="w-16 h-16 rounded-full"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {isMenuOpen && (
            <div className="px-4 pb-4">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                {navLinks.map(({ href, label, id }) => (
                  <NavLink
                    key={id}
                    to={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 mb-2 rounded-lg font-semibold transition-colors
                      ${
                        isActive
                          ? "bg-white text-primary"
                          : "text-white hover:bg-white/20"
                      }`
                    }
                  >
                    {label.toUpperCase()}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // ---------- Desktop Nav ----------
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
      )}
    </header>
  );
}
