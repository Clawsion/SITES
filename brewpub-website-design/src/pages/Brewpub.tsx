const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#d97706' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6l1 4H8L9 3zM8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v1a2 2 0 002 2h2M16 7h2a2 2 0 012 2v1a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: 'Produção Própria',
    desc: 'Produzimos as nossas cervejas nas instalações do brewpub. Podes ver o processo em tempo real.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#d97706' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Música ao Vivo',
    desc: 'Todas as sextas e sábados temos bandas e artistas ao vivo. Consulta a nossa agenda.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#d97706' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 10h18M5 6V4a1 1 0 011-1h12a1 1 0 011 1v2M5 20h14a2 2 0 002-2v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Cozinha Aberta',
    desc: 'A nossa cozinha funciona até à 1h da manhã, para que nunca fiques sem comer ao lado de uma boa cerveja.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#d97706' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Espaço Reservado',
    desc: 'Temos zonas privadas para grupos e eventos corporativos. Capacidade até 150 pessoas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#d97706' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Master Brewer',
    desc: 'O João Ferreira, o nosso head brewer, conduz visitas guiadas à produção às quartas-feiras.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#d97706' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Esplanada Exterior',
    desc: 'Um pátio acolhedor com aquecimento exterior para os dias mais frescos de Lisboa.',
  },
];

const team = [
  { name: 'João Ferreira', role: 'Head Brewer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', desc: 'Formado em Ciências da Fermentação em Berlim. 12 anos a produzir cerveja artesanal.' },
  { name: 'Ana Costa', role: 'Gerente & Sommelier de Cerveja', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', desc: 'Certificada pelo Instituto Cicerone. Especialista em harmonização de cerveja e gastronomia.' },
  { name: 'Miguel Santos', role: 'Chef Executivo', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', desc: 'Ex-cozinheiro no Noma, traz criatividade nórdica à mesa portuguesa com alma local.' },
];

export default function Brewpub() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1538488881038-e252a119ace7?w=1600&q=85')` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto w-full">
          <p className="section-label mb-4">O Nosso Espaço</p>
          <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            O <span style={{ color: '#d97706' }}>Brewpub</span>
          </h1>
          <p className="opacity-70 max-w-xl text-sm leading-relaxed" style={{ color: '#fef3c7' }}>
            Mais do que um bar. Uma experiência completa de cerveja artesanal no coração de Lisboa.
          </p>
        </div>
      </section>

      {/* A Nossa História — brewery bar image */}
      <section className="py-24 px-6" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1555658636-6e4a36218be7?w=900&q=85"
              alt="Brewery Bar Hopcraft"
              className="w-full h-[420px] object-cover"
              style={{ filter: 'brightness(0.8) saturate(1.2)' }}
            />
            <div
              className="absolute -bottom-5 -right-5 p-6 w-44"
              style={{ background: '#d97706' }}
            >
              <p className="text-4xl font-black" style={{ color: '#1a1a1a', fontFamily: "'Playfair Display', serif" }}>2018</p>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1a1a1a' }}>Fundado em</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="section-label mb-4">A Nossa História</p>
            <h2 className="text-4xl font-black mb-6 leading-tight" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              De hobby a<br /><span style={{ color: '#d97706' }}>paixão partilhada</span>
            </h2>
            <div className="divider mb-6" />
            <p className="opacity-70 leading-loose text-sm mb-4" style={{ color: '#fef3c7' }}>
              Em 2018, um grupo de amigos apaixonados por cerveja artesanal decidiu transformar o seu hobby em missão. Com um espaço alugado no Chiado e duas cubas de fermentação emprestadas, nasceu o Hopcraft.
            </p>
            <p className="opacity-70 leading-loose text-sm mb-6" style={{ color: '#fef3c7' }}>
              Hoje temos mais de 20 torneiras activas, produzimos as nossas próprias cervejas e somos o ponto de encontro de quem acredita que uma boa cerveja merece um bom espaço.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[{ num: '6', label: 'Anos de história' }, { num: '40+', label: 'Cervejas em rotação' }, { num: '5⭐', label: 'Avaliação média' }].map((s) => (
                <div key={s.label} className="border border-amber-900 border-opacity-30 py-4 px-2">
                  <p className="text-2xl font-black mb-1" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
                  <p className="text-[0.6rem] uppercase tracking-widest opacity-60" style={{ color: '#fef3c7' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">A Nossa Filosofia</p>
            <h2 className="text-4xl font-black mb-6 leading-tight" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Onde nasce<br /><span style={{ color: '#d97706' }}>a cerveja</span>
            </h2>
            <div className="divider mb-6" />
            <p className="opacity-70 leading-loose text-sm mb-6" style={{ color: '#fef3c7' }}>
              A nossa fábrica é o coração do Hopcraft. É aqui, entre cubas de fermentação, tanques de maturação e o aroma intenso de lúpulo fresco, que cada receita ganha vida — do grão ao copo.
            </p>
            <p className="opacity-70 leading-loose text-sm mb-8" style={{ color: '#fef3c7' }}>
              Cada lote é produzido em pequena escala, com controlo rigoroso de temperatura e fermentação. Visível do salão principal, a fábrica faz parte da experiência — podes ver, cheirar e provar o que está a ser produzido.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { num: '350m²', label: 'Espaço Total' },
                { num: '80', label: 'Lugares Sentados' },
                { num: '20', label: 'Torneiras Activas' },
              ].map((s) => (
                <div key={s.label} className="border border-amber-900 border-opacity-30 py-4">
                  <p className="text-2xl font-black mb-1" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
                  <p className="text-xs uppercase tracking-widest opacity-60" style={{ color: '#fef3c7' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="https://www.microbrewerysystem.com/uploads/Brewery%20Images/Brewery%20equipment/2022110802/1000L%20Brite%20Tank.jpg"
              alt="Fábrica de Cerveja Hopcraft"
              className="w-full h-[480px] object-cover"
              style={{ filter: 'brightness(0.72) saturate(1.15)' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #1a1a1a 0%, transparent 50%)' }} />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px" style={{ background: '#d97706' }} />
                <p className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: '#d97706' }}>Fábrica Hopcraft — Lisboa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">O Que Oferecemos</p>
            <h2 className="text-4xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>Uma Experiência Completa</h2>
            <div className="divider-center mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-hover p-8 border border-amber-900 border-opacity-30 hover:border-amber-500 transition-all duration-300" style={{ background: '#1a1a1a' }}>
                <div className="mb-5 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)' }}>{f.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed" style={{ color: '#fef3c7' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">As Pessoas</p>
            <h2 className="text-4xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>A Nossa Equipa</h2>
            <div className="divider-center mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card-hover text-center group">
                <div className="relative mb-6 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.8), transparent)' }} />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>{member.name}</h3>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#d97706' }}>{member.role}</p>
                <p className="text-sm opacity-60 leading-relaxed" style={{ color: '#fef3c7' }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">Como Chegar</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>Encontra-nos</h2>
            <div className="divider mb-8" />
            <div className="space-y-6 text-sm" style={{ color: '#fef3c7' }}>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(217,119,6,0.2)', border: '1px solid #d97706' }}>
                  <svg className="w-4 h-4" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#fef3c7' }}>Morada</p>
                  <p className="opacity-60">Rua das Flores, 42 · 1200-192 Lisboa</p>
                  <p className="opacity-60">Próximo do Chiado e Cais do Sodré</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(217,119,6,0.2)', border: '1px solid #d97706' }}>
                  <svg className="w-4 h-4" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#fef3c7' }}>Horário</p>
                  <p className="opacity-60">Segunda a Sexta: 17h00 – 02h00</p>
                  <p className="opacity-60">Sábado e Domingo: 14h00 – 02h00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(217,119,6,0.2)', border: '1px solid #d97706' }}>
                  <svg className="w-4 h-4" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#fef3c7' }}>Metro</p>
                  <p className="opacity-60">Cais do Sodré (Linha Verde)</p>
                  <p className="opacity-60">Chiado (Linha Azul/Verde)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 overflow-hidden relative" style={{ background: '#1a1a1a', border: '1px solid rgba(146,64,14,0.3)' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-sm opacity-60" style={{ color: '#fef3c7' }}>Rua das Flores, 42</p>
                <p className="text-xs opacity-40" style={{ color: '#fef3c7' }}>Lisboa, Portugal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
