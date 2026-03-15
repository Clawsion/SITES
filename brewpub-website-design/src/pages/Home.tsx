import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReservaModal from '../components/ReservaModal';



const featuredBeers = [
  {
    name: 'Golden Weiss',
    style: 'Trigo Alemã',
    abv: '5.2%',
    ibu: 12,
    desc: 'Refrescante e suave, com notas de banana e cravo. Perfeita para os dias quentes.',
    color: '#f59e0b',
    flag: '🇩🇪',
    path: '/cervejas/alemas',
  },
  {
    name: 'Dubbel Monge',
    style: 'Abadia Belga',
    abv: '7.8%',
    ibu: 22,
    desc: 'Rica e complexa, com caramelo, frutos escuros e toque especiado no final.',
    color: '#92400e',
    flag: '🇧🇪',
    path: '/cervejas/belgas',
  },
  {
    name: 'Bohemian Pilsner',
    style: 'Pilsner Checa',
    abv: '4.8%',
    ibu: 38,
    desc: 'Cristalina e amarga, com lúpulo Saaz autêntico e corpo macio.',
    color: '#d97706',
    flag: '🇨🇿',
    path: '/cervejas/checas',
  },
  {
    name: 'Tejo IPA',
    style: 'IPA Portuguesa',
    abv: '6.5%',
    ibu: 55,
    desc: 'Lupulada e aromática, com cítricos tropicais e um amargor assertivo.',
    color: '#b45309',
    flag: '🇵🇹',
    path: '/cervejas/portuguesas',
  },
];

const beerStyles = [
  { name: 'Belgas', icon: '🇧🇪', desc: 'Abadias, Tripels, Saisons & mais', path: '/cervejas/belgas', count: 8 },
  { name: 'Alemãs', icon: '🇩🇪', desc: 'Weiss, Märzen, Bock & mais', path: '/cervejas/alemas', count: 10 },
  { name: 'Checas', icon: '🇨🇿', desc: 'Pilsners, Lagers, Dark & mais', path: '/cervejas/checas', count: 6 },
  { name: 'Americanas', icon: '🇺🇸', desc: 'IPAs, Stouts, Pale Ales & mais', path: '/cervejas/americanas', count: 9 },
  { name: 'Portuguesas', icon: '🇵🇹', desc: 'Craft nacionais & exclusivas', path: '/cervejas/portuguesas', count: 7 },
];

const events = [
  { date: '28 Jun', title: 'Noite Belga', desc: 'Degustação guiada de Trappists e Abadias com maridagem de queijos.', tag: 'Degustação' },
  { date: '12 Jul', title: 'Festival de Verão', desc: 'Música ao vivo, 30 torneiras em destaque e food trucks no pátio.', tag: 'Festival' },
  { date: '19 Jul', title: 'Masterclass de Cerveja', desc: 'Aprende a diferenciar estilos com o nosso head brewer João Ferreira.', tag: 'Workshop' },
];

export default function Home() {
  const [reservaOpen, setReservaOpen] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero — artisanal craft beer pint glass */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1920&q=90')`,
            filter: 'brightness(0.30) saturate(1.9)',
          }}
        />
        {/* Gradient overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1a1a1aee 0%, #1a1a1a88 40%, #92400e22 70%, #1a1a1acc 100%)',
          }}
        />
        {/* Amber vignette bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: 'linear-gradient(to top, #1a1a1a, transparent)',
          }}
        />

        {/* Tap counter strip — decorative */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, transparent, #d97706, #92400e, #d97706, transparent)' }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label mb-6 animate-fade-in-up" style={{letterSpacing:'0.35em'}}>
            Lisboa · Desde 2018
          </p>
          <h1
            className="text-6xl md:text-9xl font-black leading-none mb-6 animate-fade-in-up delay-100"
            style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif", textShadow:'0 4px 40px rgba(0,0,0,0.6)' }}
          >
            A Cerveja
            <br />
            <span style={{ color: '#d97706', textShadow:'0 0 60px #d9770644' }}>que mereces</span>
          </h1>
          <div className="divider-center animate-fade-in-up delay-200" />
          <p
            className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300"
            style={{ color: '#fef3c7' }}
          >
            Mais de <strong style={{color:'#d97706'}}>20 torneiras</strong> em rotação. Cervejas belgas, alemãs, checas,
            americanas e as nossas exclusivas artesanais portuguesas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link to="/cervejas" className="btn-primary text-base px-10 py-4">
              Explorar Cervejas
            </Link>
            <button
              onClick={() => setReservaOpen(true)}
              className="btn-outline text-base px-10 py-4"
            >
              Reservar Mesa
            </button>
          </div>

          {/* Tap icons row */}
          <div className="flex items-center justify-center gap-8 mt-14 animate-fade-in-up delay-400 opacity-70">
            {['🇧🇪 Belgas','🇩🇪 Alemãs','🇨🇿 Checas','🇺🇸 Americanas','🇵🇹 Portuguesas'].map((c) => (
              <span key={c} className="text-xs uppercase tracking-widest hidden sm:block" style={{color:'#fef3c7aa'}}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#fef3c7' }}>Scroll</span>
          <div className="w-0.5 h-12 bg-amber-500 animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '40+', label: 'Cervejas em Rotação' },
              { num: '5', label: 'Países de Inspiração' },
              { num: '6', label: 'Torneiras Próprias' },
              { num: '2018', label: 'Fundado em' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
                <p className="text-xs uppercase tracking-widest opacity-60" style={{ color: '#fef3c7' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEER STYLES */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">A Nossa Carta</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Estilos de Cerveja
            </h2>
            <div className="divider-center" />
            <p className="mt-4 opacity-60 max-w-md mx-auto text-sm" style={{ color: '#fef3c7' }}>
              Da Bélgica às margens do Tejo, cada estilo conta a sua história.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {beerStyles.map((style) => (
              <Link
                key={style.name}
                to={style.path}
                className="card-hover group relative border border-amber-900 border-opacity-30 p-6 text-center hover:border-amber-500 transition-all duration-300"
                style={{ background: '#292524' }}
              >
                <div className="text-5xl mb-4">{style.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                  {style.name}
                </h3>
                <p className="text-xs opacity-60 mb-4 leading-relaxed" style={{ color: '#fef3c7' }}>{style.desc}</p>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1" style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}>
                  {style.count} cervejas
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BEERS */}
      <section className="py-24 px-6" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <p className="section-label mb-3">Em Destaque</p>
              <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                Cervejas da Semana
              </h2>
              <div className="divider mt-4" />
            </div>
            <Link to="/cervejas" className="btn-outline mt-6 md:mt-0 self-start md:self-auto">
              Ver Todas
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBeers.map((beer) => (
              <Link
                key={beer.name}
                to={beer.path}
                className="card-hover group relative overflow-hidden"
                style={{ background: '#1a1a1a', border: '1px solid rgba(146,64,14,0.3)' }}
              >
                {/* Color band */}
                <div className="h-1 w-full" style={{ background: beer.color }} />
                {/* Beer visual */}
                <div className="h-48 flex items-center justify-center" style={{ background: `${beer.color}15` }}>
                  <div className="text-center">
                    <div className="text-5xl mb-2">{beer.flag}</div>
                    <div className="w-8 h-24 mx-auto rounded-full border-2 flex items-end overflow-hidden" style={{ borderColor: beer.color }}>
                      <div className="w-full rounded-b-full" style={{ background: beer.color, height: '70%', opacity: 0.8 }} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest opacity-60 mb-1 block" style={{ color: '#d97706' }}>{beer.style}</span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                    {beer.name}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-60 mb-4" style={{ color: '#fef3c7' }}>{beer.desc}</p>
                  <div className="flex justify-between text-xs border-t pt-3" style={{ borderColor: 'rgba(146,64,14,0.3)', color: '#d97706' }}>
                    <span>{beer.abv} ABV</span>
                    <span>{beer.ibu} IBU</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">A Nossa História</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Cerveja com alma,<br /><span style={{ color: '#d97706' }}>feita com paixão</span>
            </h2>
            <div className="divider mb-6" />
            <p className="opacity-70 leading-relaxed mb-4 text-sm" style={{ color: '#fef3c7' }}>
              Em 2018, um grupo de amigos apaixonados por cerveja decidiu transformar um hobby em missão. Hoje, o Hopcraft é o ponto de encontro de quem aprecia uma cerveja bem feita.
            </p>
            <p className="opacity-70 leading-relaxed mb-8 text-sm" style={{ color: '#fef3c7' }}>
              Produzimos directamente nas nossas instalações em Lisboa, inspirados nas grandes tradições cervejeiras da Europa — com um toque português único.
            </p>
            <Link to="/brewpub" className="btn-primary">
              Conhecer o Brewpub
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&q=85"
              alt="Cerveja Artesanal"
              className="w-full h-96 object-cover"
              style={{ filter: 'brightness(0.85) saturate(1.2)' }}
            />
            <div
              className="absolute -bottom-6 -left-6 p-6 w-40"
              style={{ background: '#d97706' }}
            >
              <p className="text-4xl font-black" style={{ color: '#1a1a1a', fontFamily: "'Playfair Display', serif" }}>6</p>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1a1a1a' }}>Anos de craft</p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 px-6" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Agenda</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Próximos Eventos
            </h2>
            <div className="divider-center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((ev) => (
              <div key={ev.title} className="card-hover border border-amber-900 border-opacity-30 hover:border-amber-500 transition-all duration-300 p-8" style={{ background: '#1a1a1a' }}>
                <span className="section-label text-xs mb-4 block">{ev.tag}</span>
                <div className="text-3xl font-black mb-4" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>{ev.date}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>{ev.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-6" style={{ color: '#fef3c7' }}>{ev.desc}</p>
                <Link to="/eventos" className="text-xs uppercase tracking-widest font-semibold hover:text-amber-400 transition-colors" style={{ color: '#d97706' }}>
                  Saber Mais →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/eventos" className="btn-outline">Ver Todos os Eventos</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-32 px-6 text-center relative overflow-hidden"
        style={{ background: '#92400e' }}
      >
        <div className="bg-pattern absolute inset-0 opacity-20" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="section-label mb-4" style={{ color: '#fef3c7' }}>Reserva Já</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            A tua mesa<br />está à espera
          </h2>
          <p className="opacity-80 mb-10 text-sm leading-relaxed" style={{ color: '#fef3c7' }}>
            Reserva online e garante o teu lugar no melhor brewpub de Lisboa. Grupos a partir de 10 pessoas têm menu exclusivo.
          </p>
          <button
            onClick={() => setReservaOpen(true)}
            className="btn-primary"
            style={{ background: '#fef3c7', color: '#1a1a1a', borderColor: '#fef3c7' }}
          >
            Fazer Reserva
          </button>
        </div>
      </section>

      {/* Reserva Modal */}
      <ReservaModal open={reservaOpen} onClose={() => setReservaOpen(false)} />
    </div>
  );
}
