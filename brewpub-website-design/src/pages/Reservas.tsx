import { useState } from 'react';
import { Link } from 'react-router-dom';

type Table = {
  id: number;
  x: number;
  y: number;
  seats: number;
  shape: 'round' | 'rect';
  zone: 'bar' | 'main' | 'terrace' | 'private';
  label: string;
};

const tables: Table[] = [
  // Bar area
  { id: 1, x: 8,  y: 12, seats: 2, shape: 'round',  zone: 'bar',     label: 'B1' },
  { id: 2, x: 19, y: 12, seats: 2, shape: 'round',  zone: 'bar',     label: 'B2' },
  { id: 3, x: 30, y: 12, seats: 2, shape: 'round',  zone: 'bar',     label: 'B3' },

  // Main room
  { id: 4, x: 8,  y: 36, seats: 4, shape: 'rect',   zone: 'main',    label: 'M1' },
  { id: 5, x: 24, y: 36, seats: 4, shape: 'rect',   zone: 'main',    label: 'M2' },
  { id: 6, x: 40, y: 36, seats: 4, shape: 'rect',   zone: 'main',    label: 'M3' },
  { id: 7, x: 56, y: 36, seats: 4, shape: 'rect',   zone: 'main',    label: 'M4' },
  { id: 8, x: 8,  y: 54, seats: 6, shape: 'rect',   zone: 'main',    label: 'M5' },
  { id: 9, x: 30, y: 54, seats: 6, shape: 'rect',   zone: 'main',    label: 'M6' },
  { id: 10,x: 52, y: 54, seats: 6, shape: 'rect',   zone: 'main',    label: 'M7' },

  // Terrace
  { id: 11,x: 72, y: 36, seats: 4, shape: 'round',  zone: 'terrace', label: 'T1' },
  { id: 12,x: 86, y: 36, seats: 4, shape: 'round',  zone: 'terrace', label: 'T2' },
  { id: 13,x: 72, y: 55, seats: 4, shape: 'round',  zone: 'terrace', label: 'T3' },
  { id: 14,x: 86, y: 55, seats: 4, shape: 'round',  zone: 'terrace', label: 'T4' },

  // Private room
  { id: 15,x: 72, y: 10, seats: 10, shape: 'rect', zone: 'private',  label: 'P1' },
];

const zoneColors: Record<Table['zone'], { bg: string; border: string; label: string }> = {
  bar:     { bg: '#92400e', border: '#d97706', label: 'Bar' },
  main:    { bg: '#292524', border: '#b45309', label: 'Salão Principal' },
  terrace: { bg: '#1c3a1c', border: '#4ade80', label: 'Esplanada' },
  private: { bg: '#1a1a4e', border: '#818cf8', label: 'Sala Privada' },
};

// Randomly mark some tables as occupied for demo
const occupied = new Set([2, 5, 9, 13]);

export default function Reservas() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredTable, setHoveredTable] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTableSelect = (table: Table) => {
    if (occupied.has(table.id)) return;
    setSelectedTable(table);
    setStep(2);
    window.scrollTo({ top: document.getElementById('form-section')?.offsetTop ?? 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setStep(3);
  };

  const resetAll = () => {
    setSubmitted(false);
    setSelectedTable(null);
    setStep(1);
    setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: '' });
  };

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#1a1a1a' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555658636-6e4a36218be7?w=1600&q=80')` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #1a1a1a60, #1a1a1a)' }} />
        <div className="relative z-10 py-24 px-6 max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Reservas</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            Escolhe<br /><span style={{ color: '#d97706' }}>a tua mesa</span>
          </h1>
          <div className="divider-center mb-6" />
          <p className="opacity-70 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#fef3c7' }}>
            Selecciona a mesa directamente no nosso mapa interactivo. Vê a disponibilidade em tempo real e escolhe a zona que preferes.
          </p>

          {/* Steps */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {[
              { n: 1, label: 'Escolher Mesa' },
              { n: 2, label: 'Dados da Reserva' },
              { n: 3, label: 'Confirmação' },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={{
                      background: step >= s.n ? '#d97706' : 'rgba(255,255,255,0.08)',
                      color: step >= s.n ? '#1a1a1a' : '#fef3c7aa',
                      border: step >= s.n ? '2px solid #d97706' : '2px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    {step > s.n ? '✓' : s.n}
                  </div>
                  <span className="text-xs uppercase tracking-widest hidden sm:block" style={{ color: step >= s.n ? '#d97706' : '#fef3c7aa' }}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className="w-12 h-px" style={{ background: step > s.n ? '#d97706' : 'rgba(255,255,255,0.12)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEAT MAP */}
      <section className="py-16 px-4 md:px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* MAP */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="section-label mb-1">Planta do Espaço</p>
                  <h2 className="text-2xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                    Selecciona a tua Mesa
                  </h2>
                </div>
                {/* Legend */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#4ade80' }} />
                    <span className="text-[0.65rem] uppercase tracking-wider" style={{ color: '#fef3c7aa' }}>Livre</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
                    <span className="text-[0.65rem] uppercase tracking-wider" style={{ color: '#fef3c7aa' }}>Ocupada</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#d97706' }} />
                    <span className="text-[0.65rem] uppercase tracking-wider" style={{ color: '#fef3c7aa' }}>Seleccionada</span>
                  </div>
                </div>
              </div>

              {/* SVG Floor Plan */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  background: '#111',
                  border: '1px solid rgba(146,64,14,0.3)',
                  borderRadius: '4px',
                }}
              >
                <svg viewBox="0 0 100 80" className="w-full" style={{ minHeight: '340px' }}>

                  {/* Floor zones */}
                  {/* Bar zone */}
                  <rect x="4" y="4" width="40" height="24" rx="1" fill="#92400e" opacity="0.08" stroke="#d97706" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="6" y="7.5" fontSize="2.2" fill="#d97706" opacity="0.6" fontFamily="sans-serif" fontWeight="bold">BAR</text>

                  {/* Bar counter */}
                  <rect x="44" y="4" width="2" height="24" rx="0.5" fill="#d97706" opacity="0.3" />
                  <text x="45.5" y="16" fontSize="1.6" fill="#d97706" opacity="0.5" fontFamily="sans-serif" transform="rotate(90, 45.5, 16)">BALCÃO</text>

                  {/* Main hall */}
                  <rect x="4" y="30" width="66" height="46" rx="1" fill="#fef3c7" opacity="0.02" stroke="#b45309" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="6" y="33.5" fontSize="2.2" fill="#b45309" opacity="0.6" fontFamily="sans-serif" fontWeight="bold">SALÃO PRINCIPAL</text>

                  {/* Terrace */}
                  <rect x="72" y="30" width="24" height="34" rx="1" fill="#4ade80" opacity="0.03" stroke="#4ade80" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="74" y="33.5" fontSize="2.2" fill="#4ade80" opacity="0.6" fontFamily="sans-serif" fontWeight="bold">ESPLANADA</text>

                  {/* Private room */}
                  <rect x="72" y="4" width="24" height="24" rx="1" fill="#818cf8" opacity="0.04" stroke="#818cf8" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="74" y="7.5" fontSize="2.2" fill="#818cf8" opacity="0.6" fontFamily="sans-serif" fontWeight="bold">PRIVADA</text>

                  {/* Door */}
                  <path d="M4 65 L4 68" stroke="#fef3c7" strokeWidth="0.5" opacity="0.3" />
                  <path d="M4 68 Q8 68 8 64" stroke="#fef3c7" strokeWidth="0.3" fill="none" opacity="0.3" strokeDasharray="0.5,0.5" />
                  <text x="1.5" y="71" fontSize="1.8" fill="#fef3c7" opacity="0.3" fontFamily="sans-serif">ENTRADA</text>

                  {/* Tables */}
                  {tables.map((table) => {
                    const isOccupied = occupied.has(table.id);
                    const isSelected = selectedTable?.id === table.id;
                    const isHovered = hoveredTable === table.id;
                    const zoneColor = zoneColors[table.zone];

                    let fill = isOccupied
                      ? '#3b0f0f'
                      : isSelected
                      ? '#92400e'
                      : isHovered
                      ? '#292524'
                      : '#1f1614';

                    let stroke = isOccupied
                      ? '#ef4444'
                      : isSelected
                      ? '#d97706'
                      : isHovered
                      ? zoneColor.border
                      : zoneColor.border;

                    let opacity = isOccupied ? 0.6 : 1;

                    if (table.shape === 'round') {
                      const r = table.seats <= 2 ? 4 : 5;
                      return (
                        <g
                          key={table.id}
                          style={{ cursor: isOccupied ? 'not-allowed' : 'pointer' }}
                          onClick={() => handleTableSelect(table)}
                          onMouseEnter={() => setHoveredTable(table.id)}
                          onMouseLeave={() => setHoveredTable(null)}
                          opacity={opacity}
                        >
                          <circle
                            cx={table.x + r}
                            cy={table.y + r}
                            r={r}
                            fill={fill}
                            stroke={stroke}
                            strokeWidth={isSelected ? 0.8 : 0.5}
                          />
                          <text
                            x={table.x + r}
                            y={table.y + r + 0.7}
                            textAnchor="middle"
                            fontSize="2.4"
                            fill={isOccupied ? '#ef4444' : isSelected ? '#d97706' : '#fef3c7'}
                            fontFamily="sans-serif"
                            fontWeight="bold"
                          >
                            {table.label}
                          </text>
                          <text
                            x={table.x + r}
                            y={table.y + r + 3}
                            textAnchor="middle"
                            fontSize="1.8"
                            fill={isOccupied ? '#ef4444' : '#fef3c7'}
                            fontFamily="sans-serif"
                            opacity="0.55"
                          >
                            {table.seats}px
                          </text>
                          {/* Seat dots around */}
                          {Array.from({ length: Math.min(table.seats, 6) }).map((_, i) => {
                            const angle = (i / Math.min(table.seats, 6)) * Math.PI * 2 - Math.PI / 2;
                            const sx = table.x + r + Math.cos(angle) * (r + 1.5);
                            const sy = table.y + r + Math.sin(angle) * (r + 1.5);
                            return (
                              <circle key={i} cx={sx} cy={sy} r="1.2"
                                fill={isOccupied ? '#ef444440' : isSelected ? '#d9770640' : '#fef3c720'}
                                stroke={isOccupied ? '#ef4444' : isSelected ? '#d97706' : stroke}
                                strokeWidth="0.3"
                              />
                            );
                          })}
                        </g>
                      );
                    }

                    // rect table
                    const w = table.seats <= 4 ? 14 : 18;
                    const h = table.seats <= 4 ? 8 : 10;
                    return (
                      <g
                        key={table.id}
                        style={{ cursor: isOccupied ? 'not-allowed' : 'pointer' }}
                        onClick={() => handleTableSelect(table)}
                        onMouseEnter={() => setHoveredTable(table.id)}
                        onMouseLeave={() => setHoveredTable(null)}
                        opacity={opacity}
                      >
                        <rect
                          x={table.x} y={table.y} width={w} height={h} rx="0.8"
                          fill={fill} stroke={stroke} strokeWidth={isSelected ? 0.8 : 0.5}
                        />
                        <text
                          x={table.x + w / 2} y={table.y + h / 2 + 0.8}
                          textAnchor="middle" fontSize="2.4"
                          fill={isOccupied ? '#ef4444' : isSelected ? '#d97706' : '#fef3c7'}
                          fontFamily="sans-serif" fontWeight="bold"
                        >
                          {table.label}
                        </text>
                        <text
                          x={table.x + w / 2} y={table.y + h / 2 + 3.5}
                          textAnchor="middle" fontSize="1.8"
                          fill={isOccupied ? '#ef4444' : '#fef3c7'}
                          fontFamily="sans-serif" opacity="0.55"
                        >
                          {table.seats}px
                        </text>
                        {/* Seat dots top/bottom */}
                        {Array.from({ length: table.seats <= 4 ? 2 : 3 }).map((_, i) => {
                          const spacing = w / (table.seats <= 4 ? 3 : 4);
                          const sx = table.x + spacing + i * spacing;
                          return (
                            <g key={i}>
                              <circle cx={sx} cy={table.y - 1.5} r="1.1"
                                fill={isOccupied ? '#ef444430' : isSelected ? '#d9770630' : '#fef3c715'}
                                stroke={isOccupied ? '#ef4444' : isSelected ? '#d97706' : stroke} strokeWidth="0.3"
                              />
                              <circle cx={sx} cy={table.y + h + 1.5} r="1.1"
                                fill={isOccupied ? '#ef444430' : isSelected ? '#d9770630' : '#fef3c715'}
                                stroke={isOccupied ? '#ef4444' : isSelected ? '#d97706' : stroke} strokeWidth="0.3"
                              />
                            </g>
                          );
                        })}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Zone legend row */}
              <div className="flex flex-wrap gap-4 mt-4">
                {Object.entries(zoneColors).map(([zone, c]) => (
                  <div key={zone} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ background: c.bg, border: `1px solid ${c.border}` }} />
                    <span className="text-[0.65rem] uppercase tracking-wider" style={{ color: '#fef3c7aa' }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:w-80 flex-shrink-0 space-y-4">
              {/* Selected table info */}
              {selectedTable ? (
                <div className="p-5 border" style={{ background: '#292524', borderColor: '#d97706' }}>
                  <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: '#d97706' }}>Mesa Seleccionada</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded flex items-center justify-center text-lg font-black"
                      style={{ background: '#d9770620', border: '2px solid #d97706', color: '#d97706', fontFamily: "'Playfair Display', serif" }}
                    >
                      {selectedTable.label}
                    </div>
                    <div>
                      <p className="font-bold text-lg" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                        Mesa {selectedTable.label}
                      </p>
                      <p className="text-xs opacity-60" style={{ color: '#fef3c7' }}>
                        {zoneColors[selectedTable.zone].label} · {selectedTable.seats} lugares
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center py-2 border" style={{ borderColor: 'rgba(146,64,14,0.3)' }}>
                      <p className="text-xl font-black" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>{selectedTable.seats}</p>
                      <p className="text-[0.6rem] uppercase tracking-widest opacity-60" style={{ color: '#fef3c7' }}>Lugares</p>
                    </div>
                    <div className="text-center py-2 border" style={{ borderColor: 'rgba(146,64,14,0.3)' }}>
                      <p className="text-xl font-black" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>✓</p>
                      <p className="text-[0.6rem] uppercase tracking-widest opacity-60" style={{ color: '#fef3c7' }}>Disponível</p>
                    </div>
                  </div>
                  <button
                    className="w-full text-xs uppercase tracking-widest py-2 transition-all duration-200"
                    style={{ border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7aa' }}
                    onClick={() => { setSelectedTable(null); setStep(1); }}
                  >
                    Mudar Mesa
                  </button>
                </div>
              ) : (
                <div className="p-5 border border-dashed" style={{ borderColor: 'rgba(146,64,14,0.4)', background: '#292524' }}>
                  <div className="text-center py-4">
                    <div className="text-4xl mb-3">🪑</div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#fef3c7' }}>Nenhuma mesa seleccionada</p>
                    <p className="text-xs opacity-50" style={{ color: '#fef3c7' }}>Clica numa mesa disponível no mapa</p>
                  </div>
                </div>
              )}

              {/* Info cards */}
              {[
                { icon: '⏰', title: 'Horário', lines: ['Seg–Sex: 17h–02h', 'Sáb–Dom: 14h–02h'] },
                { icon: '👥', title: 'Grupos 10+', lines: ['Contacta-nos directamente', '+351 213 456 789'] },
                { icon: '🍺', title: 'Política', lines: ['Reserva garantida 15 min', 'Cancel. grátis até 24h antes'] },
              ].map((info) => (
                <div key={info.title} className="flex gap-3 p-4 border" style={{ background: '#1a1a1a', borderColor: 'rgba(146,64,14,0.25)' }}>
                  <span className="text-xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: '#fef3c7' }}>{info.title}</h3>
                    {info.lines.map((l) => (
                      <p key={l} className="text-xs opacity-55" style={{ color: '#fef3c7' }}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM / CONFIRMATION */}
      <section id="form-section" className="py-24 px-6" style={{ background: '#292524' }}>
        <div className="max-w-3xl mx-auto">

          {step === 3 || submitted ? (
            /* STEP 3 — CONFIRMATION */
            <div className="text-center p-12 border" style={{ background: '#1a1a1a', borderColor: '#d97706' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#d9770620', border: '2px solid #d97706' }}>
                <span className="text-3xl">🍺</span>
              </div>
              <h2 className="text-4xl font-black mb-2" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                Reserva Confirmada!
              </h2>
              <div className="divider-center my-4" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 text-center">
                {[
                  { label: 'Mesa', val: selectedTable ? selectedTable.label : '—' },
                  { label: 'Data', val: form.date || '—' },
                  { label: 'Hora', val: form.time || '—' },
                  { label: 'Pessoas', val: form.guests },
                ].map((d) => (
                  <div key={d.label} className="py-3 border" style={{ borderColor: 'rgba(146,64,14,0.4)' }}>
                    <p className="text-xl font-black" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>{d.val}</p>
                    <p className="text-[0.6rem] uppercase tracking-widest opacity-60 mt-1" style={{ color: '#fef3c7' }}>{d.label}</p>
                  </div>
                ))}
              </div>
              <p className="opacity-60 text-sm leading-relaxed mb-8" style={{ color: '#fef3c7' }}>
                Obrigado, <strong style={{ color: '#d97706' }}>{form.name}</strong>! Irás receber a confirmação em <strong style={{ color: '#d97706' }}>{form.email}</strong> em breve.<br />
                Até já no Hopcraft! 🎉
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-outline" onClick={resetAll}>
                  Nova Reserva
                </button>
                <Link to="/" className="btn-primary">
                  Voltar ao Início
                </Link>
              </div>
            </div>
          ) : (
            /* STEP 2 — FORM */
            <div>
              <div className="text-center mb-10">
                <p className="section-label mb-3">Passo 2</p>
                <h2 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                  Dados da Reserva
                </h2>
                {selectedTable && (
                  <p className="text-sm opacity-60 mt-2" style={{ color: '#fef3c7' }}>
                    Mesa <span style={{ color: '#d97706' }}>{selectedTable.label}</span> · {zoneColors[selectedTable.zone].label} · {selectedTable.seats} lugares
                  </p>
                )}
                {!selectedTable && (
                  <p className="text-sm mt-2" style={{ color: '#d97706' }}>
                    ⚠ Selecciona uma mesa no mapa acima antes de prosseguir
                  </p>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 border"
                style={{ background: '#1a1a1a', borderColor: 'rgba(146,64,14,0.35)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Nome *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="O teu nome completo" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@exemplo.pt" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Telefone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+351 9XX XXX XXX" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Nº de Pessoas *</label>
                    <select name="guests" value={form.guests} onChange={handleChange} required>
                      {['1','2','3','4','5','6','7','8','9'].map((n) => (
                        <option key={n} value={n}>{n} {n === '1' ? 'pessoa' : 'pessoas'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Data *</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Hora *</label>
                    <select name="time" value={form.time} onChange={handleChange} required>
                      <option value="">Selecciona uma hora</option>
                      {['17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00'].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Ocasião</label>
                  <select name="occasion" value={form.occasion} onChange={handleChange}>
                    <option value="">Selecciona (opcional)</option>
                    <option value="birthday">Aniversário 🎂</option>
                    <option value="bachelor">Despedida de Solteiro/a 🎉</option>
                    <option value="corporate">Evento Corporativo 💼</option>
                    <option value="date">Jantar Romântico ❤️</option>
                    <option value="friends">Saída com Amigos 🍻</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-60" style={{ color: '#fef3c7' }}>Notas Adicionais</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Alergénios, pedidos especiais, preferências de lugar..."
                    rows={3}
                  />
                </div>

                {/* Summary before submit */}
                {selectedTable && form.date && form.time && (
                  <div className="p-4 border" style={{ background: '#292524', borderColor: 'rgba(217,119,6,0.3)' }}>
                    <p className="text-xs uppercase tracking-widest mb-3 opacity-60" style={{ color: '#d97706' }}>Resumo da Reserva</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      {[
                        { label: 'Mesa', val: selectedTable.label },
                        { label: 'Zona', val: zoneColors[selectedTable.zone].label },
                        { label: `${form.date}`, val: form.time },
                        { label: 'Pessoas', val: form.guests },
                      ].map((d) => (
                        <div key={d.label}>
                          <p className="text-sm font-bold" style={{ color: '#d97706' }}>{d.val}</p>
                          <p className="text-[0.6rem] uppercase tracking-widest opacity-50 mt-0.5" style={{ color: '#fef3c7' }}>{d.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full mt-2"
                  style={{ opacity: !selectedTable ? 0.5 : 1, cursor: !selectedTable ? 'not-allowed' : 'pointer' }}
                  disabled={!selectedTable}
                >
                  {!selectedTable ? '← Selecciona uma mesa primeiro' : 'Confirmar Reserva →'}
                </button>
                <p className="text-xs opacity-40 text-center" style={{ color: '#fef3c7' }}>
                  Receberás confirmação por email em até 2 horas.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
