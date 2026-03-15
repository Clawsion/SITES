import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ReservaModal from './ReservaModal';

const beerCategories = [
  {
    label: 'Belgas',
    path: '/cervejas/belgas',
    flag: '🇧🇪',
    desc: 'Tripels, Dubbels, Saisons',
    color: '#d97706',
    styles: ['Tripel', 'Dubbel', 'Saison', 'Witbier', 'Quadrupel'],
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=900&q=85',
    tagline: 'Arte monástica em cada copo',
    count: 8,
  },
  {
    label: 'Alemãs',
    path: '/cervejas/alemas',
    flag: '🇩🇪',
    desc: 'Weiss, Märzen, Bock',
    color: '#f59e0b',
    styles: ['Hefeweizen', 'Märzen', 'Bock', 'Dunkel', 'Kölsch'],
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=900&q=85',
    tagline: 'Pureza desde 1516',
    count: 10,
  },
  {
    label: 'Checas',
    path: '/cervejas/checas',
    flag: '🇨🇿',
    desc: 'Pilsners, Lagers, Dark',
    color: '#b45309',
    styles: ['Bohemian Pilsner', 'Světlý Ležák', 'Tmavé', 'Polotmavé', 'Ležák Premium'],
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=900&q=85',
    tagline: 'O berço da Pilsner desde 1842',
    count: 6,
  },
  {
    label: 'Americanas',
    path: '/cervejas/americanas',
    flag: '🇺🇸',
    desc: 'IPAs, Stouts, Pale Ales',
    color: '#92400e',
    styles: ['West Coast IPA', 'NEIPA', 'Double IPA', 'Imperial Stout', 'Pale Ale'],
    image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=900&q=85',
    tagline: 'Revolução craft sem limites',
    count: 9,
  },
  {
    label: 'Portuguesas',
    path: '/cervejas/portuguesas',
    flag: '🇵🇹',
    desc: 'Craft nacionais & exclusivas',
    color: '#78350f',
    styles: ['Tejo IPA', 'Mel do Alentejo', 'Ginja Sour', 'Lisboa Lager', 'Douro Stout'],
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=900&q=85',
    tagline: 'Alma portuguesa em cada gole',
    count: 7,
  },
];

const navItems = [
  { label: 'Início', path: '/' },
  { label: 'Cervejas', path: '/cervejas', hasMega: true },
  { label: 'Menu', path: '/menu' },
  { label: 'Brewpub', path: '/brewpub' },
  { label: 'Eventos', path: '/eventos' },
  { label: 'Contacto', path: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBeersOpen, setMobileBeersOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredBeer, setHoveredBeer] = useState(beerCategories[0]);
  const [reservaOpen, setReservaOpen] = useState(false);

  const location = useLocation();
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  const openMega = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    leaveTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const handleHoverBeer = (cat: typeof beerCategories[0]) => {
    setHoveredBeer(cat);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || megaOpen
            ? 'bg-[#1a1a1a]/97 backdrop-blur-md shadow-2xl py-3'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Logo size={80} />
            </div>
            <div className="leading-tight">
              <span
                className="block font-black tracking-wide text-2xl"
                style={{ color: '#d97706', fontFamily: "'Playfair Display', serif", letterSpacing: '0.04em' }}
              >
                Hopcraft
              </span>
              <span
                className="block text-[0.6rem] tracking-[0.38em] uppercase"
                style={{ color: '#fef3c7', opacity: 0.55 }}
              >
                Brewpub
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) =>
              item.hasMega ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                >
                  <Link
                    to={item.path}
                    className={`nav-link flex items-center gap-1.5 ${
                      location.pathname.startsWith(item.path) ? 'active' : ''
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 mt-0.5 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <button onClick={() => setReservaOpen(true)} className="btn-primary text-xs ml-2">
              Reservar Mesa
            </button>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-60"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber-400 transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: '#1a1a1a', borderTop: '1px solid #292524' }}
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasMega ? (
                  <>
                    <button
                      className="nav-link flex items-center justify-between w-full py-3 border-b border-stone-800"
                      onClick={() => setMobileBeersOpen(!mobileBeersOpen)}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${mobileBeersOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        mobileBeersOpen ? 'max-h-80' : 'max-h-0'
                      }`}
                    >
                      <div className="pl-4 py-2 grid grid-cols-1 gap-1 border-l-2 border-amber-700 ml-2 mt-1">
                        <Link
                          to="/cervejas"
                          className="text-xs uppercase tracking-widest py-1.5 text-amber-400 hover:text-amber-300 font-semibold"
                        >
                          → Ver todas
                        </Link>
                        {beerCategories.map((cat) => (
                          <Link
                            key={cat.path}
                            to={cat.path}
                            className="flex items-center gap-3 py-2 group"
                          >
                            <span className="text-lg">{cat.flag}</span>
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-cream group-hover:text-amber-400 transition-colors" style={{color:'#fef3c7'}}>
                                {cat.label}
                              </span>
                              <span className="text-[0.65rem] opacity-50">{cat.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link block py-3 border-b border-stone-800 ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button onClick={() => setReservaOpen(true)} className="btn-primary text-center mt-4 w-full">
              Reservar Mesa
            </button>
          </div>
        </div>
      </nav>

      {/* ── MEGA DROPDOWN ── */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ease-out ${
          megaOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        style={{
          paddingTop: scrolled ? '58px' : '68px',
          background: '#111111f8',
          borderBottom: '1px solid rgba(146,64,14,0.35)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-0">
          <div className="flex" style={{ minHeight: '340px' }}>

            {/* ── LEFT: Category list ── */}
            <div
              className="flex flex-col justify-center gap-0.5 py-8 pr-8"
              style={{ minWidth: '220px', borderRight: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-[0.58rem] tracking-[0.32em] uppercase mb-5" style={{ color: '#d97706', opacity: 0.85 }}>
                Estilos de Cerveja
              </p>
              {beerCategories.map((cat) => (
                <div
                  key={cat.path}
                  onMouseEnter={() => handleHoverBeer(cat)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded cursor-pointer transition-all duration-200 group ${
                    hoveredBeer.path === cat.path
                      ? 'bg-white/5 border-l-2 border-amber-500'
                      : 'border-l-2 border-transparent hover:bg-white/3'
                  }`}
                >
                  <span className="text-xl leading-none">{cat.flag}</span>
                  <div className="flex-1 min-w-0">
                    <span
                      className="block text-[0.78rem] font-semibold uppercase tracking-wider transition-colors duration-200 truncate"
                      style={{
                        color: hoveredBeer.path === cat.path ? '#d97706' : '#fef3c7',
                        opacity: hoveredBeer.path === cat.path ? 1 : 0.75,
                      }}
                    >
                      {cat.label}
                    </span>
                    <span className="block text-[0.62rem] opacity-40 truncate" style={{ color: '#fef3c7' }}>
                      {cat.count} cervejas · {cat.desc}
                    </span>
                  </div>
                  <svg
                    className={`w-3.5 h-3.5 flex-shrink-0 transition-all duration-200 ${
                      hoveredBeer.path === cat.path ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ color: '#d97706' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}

              <Link
                to="/cervejas"
                className="mt-5 flex items-center gap-2 px-4 py-2.5 text-[0.65rem] uppercase tracking-widest transition-colors group"
                style={{ color: '#d97706', opacity: 0.7 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              >
                Ver carta completa
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ── RIGHT: Big visual panel ── */}
            <div className="flex-1 flex overflow-hidden">

              {/* Image */}
              <div className="relative overflow-hidden" style={{ width: '340px', flexShrink: 0 }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{
                    backgroundImage: `url('${hoveredBeer.image}')`,
                    filter: 'brightness(0.55) saturate(1.15)',
                    transform: 'scale(1.04)',
                  }}
                />
                {/* gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, transparent 60%, #111111f8 100%)' }}
                />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs uppercase tracking-widest font-semibold mb-2"
                    style={{ background: `${hoveredBeer.color}30`, border: `1px solid ${hoveredBeer.color}60`, color: hoveredBeer.color }}
                  >
                    {hoveredBeer.flag} {hoveredBeer.count} cervejas
                  </div>
                  <p className="text-sm font-light italic" style={{ color: '#fef3c7', opacity: 0.7 }}>
                    "{hoveredBeer.tagline}"
                  </p>
                </div>
              </div>

              {/* Info panel */}
              <div className="flex-1 flex flex-col justify-center px-10 py-8">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{hoveredBeer.flag}</span>
                    <div>
                      <h3
                        className="text-3xl font-black leading-none"
                        style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}
                      >
                        Cervejas{' '}
                        <span style={{ color: hoveredBeer.color }}>{hoveredBeer.label}</span>
                      </h3>
                      <p className="text-xs uppercase tracking-widest mt-1" style={{ color: '#fef3c7', opacity: 0.4 }}>
                        {hoveredBeer.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Style pills — clickable */}
                <div className="mb-8">
                  <p className="text-[0.6rem] tracking-[0.25em] uppercase mb-3" style={{ color: '#fef3c7', opacity: 0.4 }}>
                    Estilos disponíveis
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {hoveredBeer.styles.map((style) => (
                      <Link
                        key={style}
                        to={hoveredBeer.path}
                        className="px-3.5 py-1.5 rounded-full text-[0.68rem] uppercase tracking-wider transition-all duration-200"
                        style={{
                          border: `1px solid ${hoveredBeer.color}50`,
                          color: '#fef3c7cc',
                          background: `${hoveredBeer.color}10`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${hoveredBeer.color}30`;
                          e.currentTarget.style.color = '#fef3c7';
                          e.currentTarget.style.borderColor = hoveredBeer.color;
                          e.currentTarget.style.transform = 'scale(1.04)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${hoveredBeer.color}10`;
                          e.currentTarget.style.color = '#fef3c7cc';
                          e.currentTarget.style.borderColor = `${hoveredBeer.color}50`;
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {style}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={hoveredBeer.path}
                  className="inline-flex items-center gap-3 group w-fit"
                  style={{ color: hoveredBeer.color }}
                >
                  <span className="text-sm font-semibold uppercase tracking-widest">
                    Explorar {hoveredBeer.label}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                    style={{ background: `${hoveredBeer.color}20`, border: `1px solid ${hoveredBeer.color}50` }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>

                {/* Quick-links row */}
                <div className="mt-auto pt-6 flex gap-3 flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {beerCategories
                    .filter((c) => c.path !== hoveredBeer.path)
                    .slice(0, 4)
                    .map((cat) => (
                      <Link
                        key={cat.path}
                        to={cat.path}
                        onMouseEnter={() => handleHoverBeer(cat)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-200 text-[0.65rem] uppercase tracking-wider"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: '#fef3c7',
                          opacity: 0.55,
                          textDecoration: 'none',
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '0.55';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                        }}
                      >
                        <span>{cat.flag}</span>
                        <span>{cat.label}</span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── OVERLAY ── */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 pointer-events-none transition-opacity duration-300"
        />
      )}

      {/* ── RESERVA MODAL ── */}
      <ReservaModal open={reservaOpen} onClose={() => setReservaOpen(false)} />
    </>
  );
}
