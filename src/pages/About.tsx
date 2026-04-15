import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const team = [
  {
    name: "Xavier Chale",
    role: "Director Geral",
    desc: "Fundador com visão de criar a maior transportadora de Sofala.",
  },
  {
    name: "Ivone Joaquim",
    role: "Directora Operacional",
    desc: "Especialista em logística com 8 anos de experiência no sector.",
  },
  {
    name: "Baptista Joaquim",
    role: "Chefe de Frota",
    desc: "Responsável pela manutenção e operação dos 10 veículos da empresa.",
  },
  {
    name: "Elsa Joaquim",
    role: "Gestora Comercial",
    desc: "Cuida das relações com clientes e desenvolvimento de novos negócios.",
  },
];

const values = [
  {
    icon: Target,
    title: "Missão",
    text: "Fornecer soluções de transporte e logística fiáveis, seguras e eficientes, contribuindo para o crescimento económico de Moçambique.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser a empresa de transporte de referência em Moçambique até 2030, com frota de 50+ veículos e cobertura nacional completa.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Pontualidade, Integridade, Segurança e Comprometimento com o cliente — estes são os pilares que guiam cada decisão.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Fundação",
    desc: "TRANSMAX nasce com 2 camiões e grande ambição.",
  },
  {
    year: "2020",
    title: "Primeiros Contratos",
    desc: "Parcerias com empresas locais de distribuição.",
  },
  {
    year: "2022",
    title: "Expansão",
    desc: "Frota cresce para 6 veículos. Abertura do segundo depósito.",
  },
  {
    year: "2024",
    title: "Crescimento",
    desc: "10 camiões operacionais, cobertura em 3 províncias.",
  },
  {
    year: "2026",
    title: "Hoje",
    desc: "Reconhecida como referência em transporte em Sofala.",
  },
];

export default function About() {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #080c10 0%, #1a0a00 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,124,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,124,10,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <p
            className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-4 animate-on-scroll"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Sobre Nós
          </p>
          <h1
            className="text-white uppercase leading-none mb-6 animate-on-scroll"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              maxWidth: "14ch",
            }}
          >
            A Nossa <span style={{ color: "#0a99ff" }}>História</span> é
            Construída na Estrada
          </h1>
          <p
            className="text-gray-300 text-lg max-w-2xl leading-relaxed animate-on-scroll"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fundada com a determinação de transformar o transporte de carga em
            Moçambique, a TRANSMAX cresceu de 2 para 10 camiões em poucos anos —
            e não temos intenção de parar.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="animate-on-scroll p-8 border border-white/5 hover:border-brand-500/30 transition-all duration-300"
                style={{
                  background: "#161b22",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,124,10,0.12)" }}
                >
                  <v.icon size={24} className="text-brand-500" />
                </div>
                <h3
                  className="text-white text-2xl uppercase mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1117, #1a0a00)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p
              className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              A Nossa Evolução
            </p>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Marcos do nosso{" "}
              <span style={{ color: "#0a99ff" }}>Crescimento</span>
            </h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #0a99ff, transparent)",
              }}
            />

            <div className="space-y-8 lg:space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`animate-on-scroll flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div
                      className="p-6 border border-white/5 inline-block w-full lg:max-w-sm"
                      style={{ background: "#161b22" }}
                    >
                      <span
                        className="text-brand-500 text-4xl"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 900,
                        }}
                      >
                        {m.year}
                      </span>
                      <h4
                        className="text-white font-semibold text-base mt-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {m.title}
                      </h4>
                      <p
                        className="text-gray-400 text-sm mt-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-5 h-5 rounded-full border-2 border-brand-500 bg-dark-900 shrink-0 relative z-10" />

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 animate-on-scroll">
            <p
              className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quem Somos
            </p>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              A nossa <span style={{ color: "#0a99ff" }}>Equipa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="animate-on-scroll group p-6 border border-white/5 hover:border-brand-500/40 transition-all duration-300"
                style={{
                  background: "#161b22",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-display text-brand-500"
                  style={{
                    background: "rgba(255,124,10,0.1)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-brand-500 text-xs tracking-wider uppercase mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {member.role}
                </p>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6" style={{ background: "#161b22" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <p
                className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Conquistas
              </p>
              <h2
                className="text-white uppercase mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                Números que <span style={{ color: "#0a99ff" }}>falam</span> por
                si
              </h2>
              <p
                className="text-gray-400 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Cada kilómetro percorrido, cada carga entregue a tempo, cada
                cliente satisfeito — são estes os indicadores que medem o nosso
                sucesso e nos motivam a continuar a crescer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              {[
                { icon: Users, val: "50+", label: "Clientes Activos" },
                { icon: Award, val: "98%", label: "Taxa de Satisfação" },
                { icon: TrendingUp, val: "5x", label: "Crescimento da Frota" },
                { icon: Target, val: "3", label: "Províncias Cobertas" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 border border-white/5 text-center"
                  style={{ background: "#0d1117" }}
                >
                  <item.icon
                    size={24}
                    className="text-brand-500 mx-auto mb-3"
                  />
                  <div
                    className="text-brand-500"
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
                    className="text-gray-400 text-sm mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#0a99ff" }}>
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2
            className="text-white uppercase leading-none mb-5"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Pronto para ser o nosso próximo parceiro?
          </h2>
          <p
            className="text-white/80 mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Junte-se a mais de 50 empresas que confiam na TRANSMAX para as suas
            necessidades de transporte.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-brand-600 font-display font-700 tracking-wider uppercase px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
            }}
          >
            Entrar em Contacto <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
