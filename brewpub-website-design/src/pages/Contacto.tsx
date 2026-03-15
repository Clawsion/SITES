import { useState } from 'react';

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#292524' }}>
        <div className="bg-pattern absolute inset-0 opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Fala Connosco</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            Contacto
          </h1>
          <div className="divider-center mb-6" />
          <p className="opacity-70 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#fef3c7' }}>
            Tem perguntas? Quer organizar um evento privado? Estamos aqui para ajudar.
          </p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <p className="section-label mb-4">Informações</p>
            <h2 className="text-3xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Contacta-nos
            </h2>
            <div className="divider mb-8" />

            <div className="space-y-6 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  title: 'Morada',
                  value: 'Rua das Flores, 42\n1200-192 Lisboa, Portugal',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  ),
                  title: 'Telefone',
                  value: '+351 213 456 789',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ),
                  title: 'Email',
                  value: 'hello@hopcraft.pt',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  ),
                  title: 'Horário',
                  value: 'Seg–Sex: 17h00 – 02h00\nSáb–Dom: 14h00 – 02h00',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.3)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#d97706' }}>{item.title}</p>
                    <p className="text-sm opacity-70 whitespace-pre-line leading-relaxed" style={{ color: '#fef3c7' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#d97706' }}>Redes Sociais</p>
              <div className="flex gap-3">
                {['@hopcraft.lisboa', '@hopcraft_brew', 'Hopcraft BrewPub'].map((s, i) => (
                  <a key={s} href="#" className="w-10 h-10 border border-amber-800 flex items-center justify-center hover:border-amber-500 transition-colors duration-300" style={{ color: '#fef3c7', opacity: 0.7 }}>
                    {i === 0 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex items-center justify-center text-center p-12 border border-amber-700 border-opacity-50" style={{ background: '#292524' }}>
                <div>
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                    Mensagem Enviada!
                  </h2>
                  <div className="divider-center mb-4" />
                  <p className="opacity-60 text-sm leading-relaxed mb-8" style={{ color: '#fef3c7' }}>
                    Obrigado pelo contacto! Responderemos em até 24 horas.
                  </p>
                  <button className="btn-outline" onClick={() => setSent(false)}>
                    Enviar Nova Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 p-8 border border-amber-900 border-opacity-30" style={{ background: '#292524' }}>
                <h3 className="text-xl font-bold mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                  Envia-nos uma Mensagem
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Nome *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="O teu nome" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@exemplo.pt" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Assunto *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Selecciona o assunto</option>
                    <option value="reserva">Reserva / Evento Privado</option>
                    <option value="info">Informações Gerais</option>
                    <option value="beer">Questão sobre Cervejas</option>
                    <option value="media">Media / Imprensa</option>
                    <option value="parceria">Parcerias e Colaborações</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Mensagem *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Escreve a tua mensagem aqui..." rows={6} required />
                </div>
                <button type="submit" className="btn-primary w-full mt-4">
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ background: '#1a1a1a' }}>
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="border border-amber-900 border-opacity-30 overflow-hidden">
            <iframe
              title="Hopcraft BrewPub — Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0!2d-9.1393!3d38.7107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934!2sRua%20das%20Flores%2042%2C%201200-192%20Lisboa!5e0!3m2!1spt!2spt!4v1700000000000!5m2!1spt!2spt"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block', filter: 'grayscale(40%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-xs mt-4 opacity-40" style={{ color: '#fef3c7' }}>
            Rua das Flores, 42 · 1200-192 Lisboa · Portugal
          </p>
        </div>
      </section>
    </div>
  );
}
