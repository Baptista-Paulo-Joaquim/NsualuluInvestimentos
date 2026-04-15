import { NavLink } from "react-router-dom";
import { Truck, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080c10",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-500 flex items-center justify-center">
                <Truck size={20} className="text-white" />
              </div>
              <div>
                <p
                  className="font-display text-xl text-white tracking-widest uppercase"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  NSUALULU INVESTIMENTOS
                </p>
                <p
                  className="text-brand-500 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Transportes & Logística
                </p>
              </div>
            </div>
            <p
              className="text-gray-400 text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Movemos o que importa. Com frota moderna, equipa dedicada e
              compromisso com a pontualidade, garantimos que a sua carga chega
              sempre em segurança e no prazo.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:border-brand-500 hover:text-brand-500 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-display font-700 text-white tracking-widest uppercase text-sm mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Navegação
            </h4>
            <ul
              className="space-y-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {[
                { to: "/", label: "Home" },
                { to: "/sobre", label: "Sobre Nós" },
                { to: "/contacto", label: "Contacto" },
                { to: "/contacto", label: "Pedir Orçamento" },
              ].map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    className="text-gray-400 hover:text-brand-500 text-sm transition-colors"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h4
              className="font-display font-700 text-white tracking-widest uppercase text-sm mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contacto
            </h4>
            <ul
              className="space-y-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={15} className="text-brand-500 mt-0.5 shrink-0" />
                <span>+258 84 000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={15} className="text-brand-500 mt-0.5 shrink-0" />
                <span>xavier@nsualulu.co.mz</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={15} className="text-brand-500 mt-0.5 shrink-0" />
                <span>
                  Beira, Sofala
                  <br />
                  Moçambique
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} NSUALULU INVESTIMENTOS Transportes &
            Logística. Todos os direitos reservados.
          </p>
          <p
            className="text-gray-700 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Desenvolvido pelo Eng. Baptista P. Joaquim em Moçambique
          </p>
        </div>
      </div>
    </footer>
  );
}
