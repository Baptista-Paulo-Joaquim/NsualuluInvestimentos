import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Truck } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-800/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-500 flex items-center justify-center">
            <Truck size={22} className="text-white" />
          </div>
          <div className="leading-tight">
            <span
              className="text-white text-xl font-display font-900 tracking-widest uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
              }}
            >
              NSUALULU INVESTIMENTOS
            </span>
            <p
              className="text-brand-500 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Transportes & Logística
            </p>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-5 py-2 text-base tracking-widest uppercase transition-all duration-200 ${
                  isActive ? "text-[#0a99ff]" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `px-5 py-2 text-base tracking-widest uppercase transition-all duration-200 ${
                isActive ? "text-brand-500" : "text-gray-300 hover:text-white"
              }`
            }
          >
            Pedir Orçamento
          </NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "#0d1117" }}
      >
        <nav className="px-6 py-4 flex flex-col gap-1 border-t border-white/10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `py-3 text-lg tracking-widest uppercase border-b border-white/5 ${
                  isActive ? "text-brand-500" : "text-gray-300"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            className="btn-primary mt-3 justify-center text-base"
          >
            Pedir Orçamento
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
