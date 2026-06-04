import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Truck,
  Package,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: Truck,
    title: "Transporte de Carga",
    desc: "Frota de 10 camiões modernos para cargas de grande volume. Cobertura nacional com rotas optimizadas.",
  },
  {
    icon: Package,
    title: "Logística Integrada",
    desc: "Gestão completa da cadeia de abastecimento, do carregamento à entrega final, com rastreamento em tempo real.",
  },
  {
    icon: MapPin,
    title: "Distribuição Regional",
    desc: "Entregas rápidas e seguras em toda a região de Sofala e províncias adjacentes.",
  },
  {
    icon: BarChart3,
    title: "Soluções Empresariais",
    desc: "Parcerias estratégicas para empresas com necessidade de transporte frequente e tarifas customizadas.",
  },
];

export default function Home() {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #080c10 0%, #0d1117 50%, #081323 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,153,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,153,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(10, 120, 255, 0.07)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-8"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                border: "2px solid #0a99ff",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span className="text-white text-sm font-medium tracking-wider uppercase">
                Frota disponível · Beira, Moçambique
              </span>
            </div>

            <h1
              className="uppercase leading-none mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3rem, 8vw, 3rem)",
                letterSpacing: "-0.01em",
                color: "white",
              }}
            >
              Movemos o que <span style={{ color: "#0a99ff" }}>Importa</span>
              <br />
              com Precisão
            </h1>

            <p
              className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Empresa de transporte de carga com frota de{" "}
              <strong className="text-white">10 camiões modernos</strong>,
              cobertura nacional e compromisso com a pontualidade e segurança da
              sua carga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-white mb-12">
              <Link to="/contacto" className="btn-primary">
                Pedir Orçamento <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="btn-outline">
                Conhecer a Empresa <ChevronRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: ShieldCheck, text: "Carga Segurada" },
                { icon: Clock, text: "Entrega Pontual" },
                { icon: MapPin, text: "Cobertura Nacional" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-gray-400"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Icon size={16} className="text-brand-500" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #080c10)",
          }}
        />
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-on-scroll">
            <p
              className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              O que fazemos
            </p>
            <h2
              className="uppercase text-white leading-none"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 3rem)",
              }}
            >
              Serviços de <span style={{ color: "#0a99ff" }}>Excelência</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="animate-on-scroll group p-7 border border-white/5 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#161b22",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5"
                  style={{ background: "#0a99ff" }}
                >
                  <s.icon size={24} className="text-white" />
                </div>
                <h3
                  className="text-white text-xl uppercase mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: "#080c10" }}
      >
        <div className="max-w-4xl mx-auto text-center relative animate-on-scroll">
          <h2
            className="uppercase text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 3rem)",
            }}
          >
            Pronto para Movimentar a
            <br />
            sua <span style={{ color: "#0a99ff" }}>Carga?</span>
          </h2>
          <p
            className="text-gray-300 text-lg mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fale connosco hoje mesmo e receba um orçamento personalizado sem
            compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-primary text-lg px-10 py-4 text-white"
            >
              Pedir Orçamento Agora <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+258840000000"
              className="btn-outline text-lg px-10 py-4 text-white"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
