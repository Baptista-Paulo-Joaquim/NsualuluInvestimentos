import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "+258 84 000 0000",
    sub: "Seg–Sex, 07h–18h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "xavier@nsualulu.co.mz",
    sub: "Resposta em até 2h",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Beira, Sofala",
    sub: "Moçambique",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "07:00 – 18:00",
    sub: "Segunda a Sábado",
  },
];

interface FormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  servico: string;
  origem: string;
  destino: string;
  mensagem: string;
}

const initialForm: FormData = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  servico: "",
  origem: "",
  destino: "",
  mensagem: "",
};

export default function Contact() {
  useScrollAnimation();
  const [form, setForm] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  const inputClass = `w-full px-4 py-3 text-white text-sm border border-white/10 focus:border-brand-500 focus:outline-none transition-colors duration-200`;
  const inputStyle = {
    background: "#161b22",
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-40 pb-20 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080c10, #1a0a00)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,124,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,124,10,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative">
          <p
            className="text-brand-500 tracking-[0.3em] uppercase text-sm mb-4 animate-on-scroll"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fale connosco
          </p>
          <h1
            className="text-white uppercase leading-none mb-5 animate-on-scroll"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 6rem)",
            }}
          >
            Solicite o seu <span style={{ color: "#0a99ff" }}>Orçamento</span>
          </h1>
          <p
            className="text-gray-300 text-lg max-w-xl mx-auto animate-on-scroll"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Preencha o formulário abaixo e a nossa equipa responde em menos de 2
            horas com a melhor proposta para a sua necessidade.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((c, i) => (
              <div
                key={c.label}
                className="animate-on-scroll p-5 border border-white/5 hover:border-brand-500/30 transition-all"
                style={{
                  background: "#161b22",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <c.icon size={20} className="text-blue-500 mb-3" />
                <p
                  className="text-gray-500 text-xs uppercase tracking-wider mb-1"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {c.label}
                </p>
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {c.value}
                </p>
                <p
                  className="text-gray-500 text-xs mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div
              className="p-8 border border-white/5"
              style={{ background: "#161b22" }}
            >
              <h2
                className="text-white uppercase text-3xl mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  letterSpacing: "0.05em",
                }}
              >
                Formulário de <span style={{ color: "#0a99ff" }}>Contacto</span>
              </h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={56} className="text-green-400 mb-4" />
                  <h3
                    className="text-white text-2xl uppercase mb-2"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                    }}
                  >
                    Pedido Enviado!
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Recebemos o seu pedido. A nossa equipa entrará em contacto
                    em breve.
                  </p>
                  <button
                    className="mt-6 btn-outline text-sm py-2"
                    onClick={() => {
                      setSent(false);
                      setForm(initialForm);
                    }}
                  >
                    Novo Pedido
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Nome *
                      </label>
                      <input
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        placeholder="O seu nome"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Empresa
                      </label>
                      <input
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="email@empresa.co.mz"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Telefone *
                      </label>
                      <input
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        required
                        placeholder="+258 84 000 0000"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Tipo de Serviço
                    </label>
                    <select
                      name="servico"
                      value={form.servico}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Seleccione um serviço</option>
                      <option>Transporte de Carga Geral</option>
                      <option>Logística Integrada</option>
                      <option>Distribuição Regional</option>
                      <option>Solução Empresarial</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Origem
                      </label>
                      <input
                        name="origem"
                        value={form.origem}
                        onChange={handleChange}
                        placeholder="Cidade / Localidade"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Destino
                      </label>
                      <input
                        name="destino"
                        value={form.destino}
                        onChange={handleChange}
                        placeholder="Cidade / Localidade"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Mensagem / Detalhes
                    </label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Descreva a sua necessidade: tipo de carga, volume, urgência..."
                      className={inputClass}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        A enviar...
                      </span>
                    ) : (
                      <>
                        Enviar Pedido <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2 flex flex-col gap-5 animate-on-scroll">
            <div
              className="p-7 border border-white/5"
              style={{ background: "#161b22" }}
            >
              <h3
                className="text-white text-xl uppercase mb-4"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                Resposta Rápida
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                A nossa equipa comercial responde a todos os pedidos em menos de
                2 horas em dias úteis. Para urgências, ligue directamente.
              </p>
              <a
                href="tel:+258840000000"
                className="btn-primary text-white text-sm py-3 w-full justify-center"
              >
                <Phone size={16} />
                Ligar Agora
              </a>
            </div>
            <div
              className="p-7 border border-white/5"
              style={{ background: "#161b22" }}
            >
              <h3
                className="text-white text-xl uppercase mb-3"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                Localização
              </h3>
              <div
                className="flex items-start gap-3 text-gray-400 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MapPin size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Sede Principal</p>
                  <p className="mt-1">
                    Beira, Sofala
                    <br />
                    Moçambique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
