import { Link } from 'react-router-dom';

const styles = [
  {
    name: 'Belgas',
    flag: '🇧🇪',
    path: '/cervejas/belgas',
    desc: 'A Bélgica é o berço das cervejas mais complexas e diversificadas do mundo. Abadias, Tripels, Saisons, Lambics — cada estilo é uma obra de arte fermentada.',
    img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',
    count: 8,
    highlight: 'Tripel, Dubbel, Saison',
  },
  {
    name: 'Alemãs',
    flag: '🇩🇪',
    path: '/cervejas/alemas',
    desc: 'A tradição alemã, regida pela Reinheitsgebot desde 1516, oferece pureza, precisão e carácter. Weiss, Märzen, Bock — cerveja de rigor.',
    img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80',
    count: 10,
    highlight: 'Weiss, Märzen, Bock',
  },
  {
    name: 'Checas',
    flag: '🇨🇿',
    path: '/cervejas/checas',
    desc: 'A República Checa inventou a Pilsner. Com lúpulo Saaz aromático e malte dourado, as cervejas checas são puras, amargas e inconfundíveis.',
    img: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=600&q=80',
    count: 6,
    highlight: 'Pilsner, Tmavé, Polotmavé',
  },
  {
    name: 'Americanas',
    flag: '🇺🇸',
    path: '/cervejas/americanas',
    desc: 'Os EUA reinventaram a cerveja artesanal. De West Coast IPAs a pastry stouts — a criatividade não tem limites na cena craft americana.',
    img: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&q=80',
    count: 9,
    highlight: 'IPA, DIPA, Imperial Stout',
  },
  {
    name: 'Portuguesas',
    flag: '🇵🇹',
    path: '/cervejas/portuguesas',
    desc: 'A cena craft portuguesa está a crescer com força. Cervejas com ingredientes locais — cortiça, caju, mel do Alentejo — que contam a nossa história.',
    img: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=600&q=80',
    count: 7,
    highlight: 'Craft Nacional, Hopcraft Exclusivo',
  },
];

export default function Cervejas() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#292524' }}>
        <div className="bg-pattern absolute inset-0 opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">A Nossa Carta</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            As Nossas<br /><span style={{ color: '#d97706' }}>Cervejas</span>
          </h1>
          <div className="divider-center mb-6" />
          <p className="opacity-70 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#fef3c7' }}>
            Mais de 40 cervejas em rotação, organizadas por tradição e país de origem. Encontra o teu estilo favorito.
          </p>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {styles.map((style, i) => (
              <Link
                key={style.name}
                to={style.path}
                className={`card-hover group relative overflow-hidden flex flex-col md:flex-row ${i === 0 ? 'lg:col-span-2' : ''}`}
                style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.3)' }}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'md:w-1/2 h-64 md:h-auto' : 'md:w-2/5 h-56 md:h-auto'}`}>
                  <img
                    src={style.img}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent, rgba(41,37,36,0.3))' }} />
                  <div className="absolute top-4 left-4 text-4xl">{style.flag}</div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <span className="section-label mb-2">{style.count} cervejas</span>
                  <h2 className="text-3xl md:text-4xl font-black mb-3 group-hover:text-amber-400 transition-colors" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                    Cervejas {style.name}
                  </h2>
                  <div className="divider mb-4" />
                  <p className="text-sm opacity-60 leading-relaxed mb-4" style={{ color: '#fef3c7' }}>
                    {style.desc}
                  </p>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#d97706' }}>
                    {style.highlight}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold" style={{ color: '#d97706' }}>
                    Explorar Estilo
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#292524' }}>
        <h2 className="text-3xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
          Não sabes por onde começar?
        </h2>
        <p className="opacity-60 mb-8 text-sm" style={{ color: '#fef3c7' }}>O nosso staff ajuda-te a escolher a cerveja perfeita para o teu paladar.</p>
        <Link to="/reservas" className="btn-primary">Reservar e Provar</Link>
      </section>
    </div>
  );
}
