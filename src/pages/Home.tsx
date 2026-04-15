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
  Star,
  Quote,
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
    desc: "Parcerias estratégicas para empresas que precisam de transporte frequente com tarifas customizadas.",
  },
];

const stats = [
  { value: "10", label: "Camiões na Frota" },
  { value: "500+", label: "Entregas Realizadas" },
  { value: "98%", label: "Taxa de Pontualidade" },
  { value: "5+", label: "Anos de Experiência" },
];

const testimonials = [
  {
    name: "António Machava",
    company: "Distribuidora Central, Lda",
    text: "A NSUALULU INVESTIMENTOS transformou a nossa logística. Pontualidade impecável e carga sempre em perfeito estado.",
    stars: 5,
  },
  {
    name: "Maria Fernanda",
    company: "Construtora Futura",
    text: "Parceiros de confiança para o transporte dos nossos materiais de construção. Recomendo fortemente.",
    stars: 5,
  },
  {
    name: "Carlos Nhantumbo",
    company: "AgroExport Moçambique",
    text: "Serviço profissional, preço justo e comunicação transparente. A escolha certa para a nossa empresa.",
    stars: 5,
  },
];

export default function Home() {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
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
              "linear-gradient(hsla(228, 100%, 52%, 0.30) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 186, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orange glow */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(10, 120, 255, 0.07)" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(10, 112, 255, 0.04)" }}
        />

        {/* Big decorative text */}
        <div
          className="absolute right-0 bottom-0 select-none pointer-events-none hidden lg:block"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "22rem",
            color: "rgba(0, 136, 255, 0.58)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          CARGO
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 border border-brand-500/40 bg-brand-500/10 px-4 py-2 mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-brand-400 text-sm font-medium tracking-wider uppercase">
                Frota disponível · Beira, Moçambique
              </span>
            </div>

            <h1
              className="uppercase leading-none mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 9vw, 5rem)",
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
              Empresa de transporte de carga em crescimento, com frota de{" "}
              <strong className="text-white">10 camiões modernos</strong>,
              cobertura nacional e compromisso absoluto com a pontualidade e
              segurança da sua carga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-white">
              <Link to="/contacto" className="btn-primary">
                Pedir Orçamento <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="btn-outline">
                Conhecer a Empresa <ChevronRight size={18} />
              </Link>
            </div>

            {/* Quick trust indicators */}
            <div className="flex flex-wrap gap-6 mt-12">
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

      <section style={{ background: "#0a99ff" }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="animate-on-scroll">
                <div
                  className="text-white uppercase"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "3rem",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-white/80 text-sm tracking-wider uppercase mt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
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
                  style={{ background: "rgba(10, 59, 255, 0.12)" }}
                >
                  <s.icon size={24} className="text-brand-500" />
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
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1117, #1a0a00)" }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent, rgba(10, 100, 255, 0.04))",
          }}
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-3 animate-on-scroll"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Por que nos escolher
            </p>
            <h2
              className="uppercase text-white leading-none mb-6 animate-on-scroll"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              A Diferença{" "}
              <span style={{ color: "#0a99ff" }}>NSUALULU INVESTIMENTOS</span>
            </h2>
            <p
              className="text-gray-300 leading-relaxed mb-8 animate-on-scroll"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Não somos apenas mais uma empresa de transporte. Somos parceiros
              no crescimento do seu negócio, com foco absoluto na fiabilidade,
              comunicação transparente e cuidado com cada carga que
              transportamos.
            </p>

            <div className="space-y-4 animate-on-scroll">
              {[
                {
                  title: "Frota Moderna & Mantida",
                  desc: "10 veículos em manutenção preventiva regular, prontos para qualquer rota.",
                },
                {
                  title: "Motoristas Experientes",
                  desc: "Equipa treinada, com conhecimento das rotas nacionais e protocolos de segurança.",
                },
                {
                  title: "Rastreamento de Carga",
                  desc: "Saiba sempre onde está a sua mercadoria em tempo real.",
                },
                {
                  title: "Suporte 24/7",
                  desc: "Equipa disponível a qualquer hora para responder às suas necessidades urgentes.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="w-1.5 shrink-0 mt-1"
                    style={{
                      background: "#0a99ff",
                      height: "auto",
                      minHeight: "24px",
                    }}
                  />
                  <div>
                    <h4
                      className="text-white font-semibold text-base mb-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-gray-400 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="animate-on-scroll relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-brand-500/20"
              style={{ zIndex: 0 }}
            />
            <div
              className="relative p-10"
              style={{
                background: "#161b22",
                border: "1px solid rgba(255,255,255,0.05)",
                zIndex: 1,
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "10", label: "Camiões", sub: "Frota própria" },
                  {
                    val: "98%",
                    label: "Pontualidade",
                    sub: "Entregas a tempo",
                  },
                  { val: "24/7", label: "Suporte", sub: "Sempre disponível" },
                  { val: "0", label: "Perdas", sub: "Carga em segurança" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 border border-white/5"
                    style={{ background: "#0d1117" }}
                  >
                    <div
                      className="text-[#0a99ff]"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: "2.5rem",
                        lineHeight: 1,
                      }}
                    >
                      {item.val}
                    </div>
                    <div
                      className="text-white text-sm font-semibold mt-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-gray-500 text-xs mt-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 p-5 border-l-4 border-brand-500"
                style={{ background: "rgba(255,124,10,0.06)" }}
              >
                <p
                  className="text-gray-300 text-sm italic"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  "A nossa missão é simples: a sua carga parte a tempo, chega em
                  segurança."
                </p>
                <p
                  className="text-[#0a99ff] text-xs mt-2 tracking-wider uppercase"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  — Direcção NSUALULU INVESTIMENTOS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p
              className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Clientes Satisfeitos
            </p>
            <h2
              className="uppercase text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              O que dizem de <span style={{ color: "#0a99ff" }}>Nós</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="animate-on-scroll p-7 border border-white/5 relative"
                style={{
                  background: "#161b22",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <Quote
                  size={32}
                  className="text-brand-500/20 absolute top-5 right-5"
                />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="#0a99ff"
                      className="text-brand-500"
                    />
                  ))}
                </div>
                <p
                  className="text-gray-300 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{t.text}"
                </p>
                <div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-brand-500 text-xs tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0a00, #0d1117)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,124,10,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,124,10,0.06) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative animate-on-scroll">
          <h2
            className="uppercase text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
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
