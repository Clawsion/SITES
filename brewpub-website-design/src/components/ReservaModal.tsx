import { useState, useEffect } from 'react';

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
  { id: 1,  x: 8,  y: 12, seats: 2,  shape: 'round', zone: 'bar',     label: 'B1' },
  { id: 2,  x: 19, y: 12, seats: 2,  shape: 'round', zone: 'bar',     label: 'B2' },
  { id: 3,  x: 30, y: 12, seats: 2,  shape: 'round', zone: 'bar',     label: 'B3' },
  { id: 4,  x: 8,  y: 36, seats: 4,  shape: 'rect',  zone: 'main',    label: 'M1' },
  { id: 5,  x: 24, y: 36, seats: 4,  shape: 'rect',  zone: 'main',    label: 'M2' },
  { id: 6,  x: 40, y: 36, seats: 4,  shape: 'rect',  zone: 'main',    label: 'M3' },
  { id: 7,  x: 56, y: 36, seats: 4,  shape: 'rect',  zone: 'main',    label: 'M4' },
  { id: 8,  x: 8,  y: 54, seats: 6,  shape: 'rect',  zone: 'main',    label: 'M5' },
  { id: 9,  x: 30, y: 54, seats: 6,  shape: 'rect',  zone: 'main',    label: 'M6' },
  { id: 10, x: 52, y: 54, seats: 6,  shape: 'rect',  zone: 'main',    label: 'M7' },
  { id: 11, x: 72, y: 36, seats: 4,  shape: 'round', zone: 'terrace', label: 'T1' },
  { id: 12, x: 86, y: 36, seats: 4,  shape: 'round', zone: 'terrace', label: 'T2' },
  { id: 13, x: 72, y: 55, seats: 4,  shape: 'round', zone: 'terrace', label: 'T3' },
  { id: 14, x: 86, y: 55, seats: 4,  shape: 'round', zone: 'terrace', label: 'T4' },
  { id: 15, x: 72, y: 10, seats: 10, shape: 'rect',  zone: 'private', label: 'P1' },
];

const occupied = new Set([2, 5, 9, 13]);

const zoneColor: Record<Table['zone'], string> = {
  bar: '#d97706',
  main: '#b45309',
  terrace: '#4ade80',
  private: '#818cf8',
};

const zoneLabel: Record<Table['zone'], string> = {
  bar: 'Bar',
  main: 'Salão Principal',
  terrace: 'Esplanada',
  private: 'Sala Privada',
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ReservaModal({ open, onClose }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [hoveredTable, setHoveredTable] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: ''
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // reset on close
      setTimeout(() => {
        setStep(1);
        setSelectedTable(null);
        setConfirmed(false);
        setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' });
      }, 300);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTableClick = (t: Table) => {
    if (occupied.has(t.id)) return;
    setSelectedTable(t);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setStep(3);
  };

  const getTableColor = (t: Table) => {
    if (occupied.has(t.id)) return '#ef4444';
    if (selectedTable?.id === t.id) return '#d97706';
    if (hoveredTable === t.id) return '#fbbf24';
    return zoneColor[t.zone];
  };

  const today = new Date().toISOString().split('T')[0];

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl"
        style={{ background: '#1a1a1a', border: '1px solid rgba(217,119,6,0.3)' }}
      >
        {/* Top amber line */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, #d97706, #92400e, #d97706, transparent)' }} />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: '#d97706' }}>Hopcraft Brewpub</p>
            <h2 className="text-2xl font-black mt-0.5" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Reservar Mesa
            </h2>
          </div>
          {/* Steps */}
          <div className="hidden sm:flex items-center gap-3">
            {[{ n: 1, label: 'Mesa' }, { n: 2, label: 'Dados' }, { n: 3, label: 'Confirmação' }].map((s, i) => (
              <div key={s.n} className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: step >= s.n ? '#d97706' : 'rgba(255,255,255,0.06)',
                      color: step >= s.n ? '#1a1a1a' : '#fef3c755',
                      border: step >= s.n ? '2px solid #d97706' : '2px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {step > s.n ? '✓' : s.n}
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-widest" style={{ color: step >= s.n ? '#d97706' : '#fef3c744' }}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && <div className="w-8 h-px" style={{ background: step > s.n ? '#d97706' : 'rgba(255,255,255,0.1)' }} />}
              </div>
            ))}
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#fef3c7', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">

          {/* ── STEP 1: Floor map ── */}
          {step === 1 && (
            <div>
              <div className="flex flex-wrap gap-4 mb-5 items-center justify-between">
                <p className="text-sm opacity-60" style={{ color: '#fef3c7' }}>
                  Clica numa mesa disponível para seleccioná-la
                </p>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { color: '#4ade80', label: 'Livre' },
                    { color: '#ef4444', label: 'Ocupada' },
                    { color: '#d97706', label: 'Seleccionada' },
                  ].map(l => (
                    <div key={l.label} className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                      <span className="text-[0.65rem] uppercase tracking-wider" style={{ color: '#fef3c766' }}>{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zone legend */}
              <div className="flex gap-3 flex-wrap mb-4">
                {(Object.entries(zoneLabel) as [Table['zone'], string][]).map(([z, lbl]) => (
                  <div key={z} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.6rem] uppercase tracking-wider"
                    style={{ background: `${zoneColor[z]}15`, border: `1px solid ${zoneColor[z]}40`, color: zoneColor[z] }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: zoneColor[z] }} />
                    {lbl}
                  </div>
                ))}
              </div>

              {/* SVG Map */}
              <div
                className="w-full overflow-hidden rounded-sm"
                style={{ background: '#111', border: '1px solid rgba(146,64,14,0.25)' }}
              >
                <svg viewBox="0 0 100 80" className="w-full" style={{ minHeight: '300px' }}>
                  {/* Zone backgrounds */}
                  <rect x="4" y="4" width="40" height="24" rx="1" fill="#92400e" opacity="0.07" stroke="#d97706" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="6" y="7.5" fontSize="2" fill="#d97706" opacity="0.5" fontFamily="sans-serif" fontWeight="bold">BAR</text>
                  <rect x="44" y="4" width="2" height="24" rx="0.5" fill="#d97706" opacity="0.25" />

                  <rect x="4" y="30" width="66" height="46" rx="1" fill="#fef3c7" opacity="0.015" stroke="#b45309" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="6" y="33.5" fontSize="2" fill="#b45309" opacity="0.5" fontFamily="sans-serif" fontWeight="bold">SALÃO PRINCIPAL</text>

                  <rect x="72" y="30" width="24" height="34" rx="1" fill="#4ade80" opacity="0.025" stroke="#4ade80" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="74" y="33.5" fontSize="2" fill="#4ade80" opacity="0.5" fontFamily="sans-serif" fontWeight="bold">ESPLANADA</text>

                  <rect x="72" y="4" width="24" height="24" rx="1" fill="#818cf8" opacity="0.03" stroke="#818cf8" strokeWidth="0.3" strokeDasharray="1,1" />
                  <text x="74" y="7.5" fontSize="2" fill="#818cf8" opacity="0.5" fontFamily="sans-serif" fontWeight="bold">PRIVADA</text>

                  {/* Bar counter */}
                  <rect x="44.3" y="4.3" width="1.4" height="23" rx="0.5" fill="#d97706" opacity="0.2" />

                  {/* Door */}
                  <path d="M4 65 L4 68" stroke="#fef3c7" strokeWidth="0.5" opacity="0.25" />
                  <path d="M4 68 Q8 68 8 64" stroke="#fef3c7" strokeWidth="0.3" fill="none" opacity="0.25" strokeDasharray="0.5,0.5" />
                  <text x="5.5" y="70" fontSize="1.6" fill="#fef3c7" opacity="0.3" fontFamily="sans-serif">ENTRADA</text>

                  {/* Tables */}
                  {tables.map((t) => {
                    const isOcc = occupied.has(t.id);
                    const isSel = selectedTable?.id === t.id;
                    const isHov = hoveredTable === t.id;
                    const col = getTableColor(t);
                    const opacity = isOcc ? 0.5 : isSel ? 1 : isHov ? 0.9 : 0.7;

                    return (
                      <g
                        key={t.id}
                        style={{ cursor: isOcc ? 'not-allowed' : 'pointer' }}
                        onClick={() => handleTableClick(t)}
                        onMouseEnter={() => !isOcc && setHoveredTable(t.id)}
                        onMouseLeave={() => setHoveredTable(null)}
                      >
                        {t.shape === 'round' ? (
                          <>
                            {/* Chairs around round table */}
                            {[0, 90, 180, 270].slice(0, t.seats).map((angle) => {
                              const rad = (angle * Math.PI) / 180;
                              const cx = t.x + Math.sin(rad) * 4.5;
                              const cy = t.y - Math.cos(rad) * 4.5;
                              return <circle key={angle} cx={cx} cy={cy} r="1.3" fill={col} opacity={opacity * 0.45} />;
                            })}
                            <circle cx={t.x} cy={t.y} r="3.5" fill={col} opacity={opacity * 0.25} stroke={col} strokeWidth={isSel ? 0.8 : 0.5} />
                            <text x={t.x} y={t.y + 0.7} textAnchor="middle" fontSize="2.2" fill={col} fontFamily="sans-serif" fontWeight="bold" opacity={opacity}>{t.label}</text>
                          </>
                        ) : (
                          <>
                            {/* Chairs around rect table */}
                            {Array.from({ length: Math.min(t.seats, 3) }).map((_, i) => (
                              <rect key={`top-${i}`} x={t.x - 3 + i * 3.2} y={t.y - 5.5} width="2.4" height="1.5" rx="0.4" fill={col} opacity={opacity * 0.4} />
                            ))}
                            {Array.from({ length: Math.min(t.seats - 3, 3) }).map((_, i) => (
                              <rect key={`bot-${i}`} x={t.x - 3 + i * 3.2} y={t.y + 4} width="2.4" height="1.5" rx="0.4" fill={col} opacity={opacity * 0.4} />
                            ))}
                            <rect x={t.x - 5} y={t.y - 3.5} width="10" height="7" rx="0.8" fill={col} opacity={opacity * 0.25} stroke={col} strokeWidth={isSel ? 0.8 : 0.5} />
                            <text x={t.x} y={t.y + 0.7} textAnchor="middle" fontSize="2.2" fill={col} fontFamily="sans-serif" fontWeight="bold" opacity={opacity}>{t.label}</text>
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              <p className="text-center text-xs mt-4 opacity-40" style={{ color: '#fef3c7' }}>
                {tables.length - occupied.size} mesas disponíveis · {tables.reduce((a, t) => occupied.has(t.id) ? a : a + t.seats, 0)} lugares livres
              </p>
            </div>
          )}

          {/* ── STEP 2: Form ── */}
          {step === 2 && selectedTable && (
            <div>
              {/* Selected table summary */}
              <div
                className="flex items-center gap-4 p-4 mb-6 rounded-sm"
                style={{ background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.3)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: '#d97706', color: '#1a1a1a' }}
                >
                  {selectedTable.label}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#fef3c7' }}>
                    Mesa {selectedTable.label} · {zoneLabel[selectedTable.zone]}
                  </p>
                  <p className="text-xs opacity-60" style={{ color: '#fef3c7' }}>
                    {selectedTable.seats} lugares · {selectedTable.shape === 'round' ? 'Mesa redonda' : 'Mesa rectangular'}
                  </p>
                </div>
                <button
                  onClick={() => { setSelectedTable(null); setStep(1); }}
                  className="ml-auto text-xs uppercase tracking-widest transition-colors"
                  style={{ color: '#d97706' }}
                >
                  Mudar
                </button>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>Nome completo *</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required placeholder="João Silva"
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7', borderRadius: '2px' }}
                      onFocus={e => (e.target.style.borderColor = '#d97706')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(146,64,14,0.4)')}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>Email *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required placeholder="joao@email.com"
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7', borderRadius: '2px' }}
                      onFocus={e => (e.target.style.borderColor = '#d97706')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(146,64,14,0.4)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>Telemóvel</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+351 912 345 678"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7', borderRadius: '2px' }}
                    onFocus={e => (e.target.style.borderColor = '#d97706')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(146,64,14,0.4)')}
                  />
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>Nº de Pessoas *</label>
                  <select
                    name="guests" value={form.guests} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none"
                    style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7', borderRadius: '2px' }}
                    onFocus={e => (e.target.style.borderColor = '#d97706')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(146,64,14,0.4)')}
                  >
                    {Array.from({ length: selectedTable.seats }, (_, i) => i + 1).map(n => (
                      <option key={n} value={n} style={{ background: '#1a1a1a' }}>{n} pessoa{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>Data *</label>
                  <input
                    type="date" name="date" value={form.date} onChange={handleChange} required min={today}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7', borderRadius: '2px', colorScheme: 'dark' }}
                    onFocus={e => (e.target.style.borderColor = '#d97706')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(146,64,14,0.4)')}
                  />
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>Hora *</label>
                  <select
                    name="time" value={form.time} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm outline-none appearance-none"
                    style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7', borderRadius: '2px' }}
                    onFocus={e => (e.target.style.borderColor = '#d97706')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(146,64,14,0.4)')}
                  >
                    <option value="" style={{ background: '#1a1a1a' }}>Escolher hora</option>
                    {['12:00','12:30','13:00','13:30','14:00','14:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'].map(h => (
                      <option key={h} value={h} style={{ background: '#1a1a1a' }}>{h}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>Notas / Pedidos especiais</label>
                  <textarea
                    name="notes" value={form.notes} onChange={handleChange} rows={2}
                    placeholder="Aniversários, alergias, preferências..."
                    className="w-full px-4 py-3 text-sm outline-none resize-none"
                    style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c7', borderRadius: '2px' }}
                    onFocus={e => (e.target.style.borderColor = '#d97706')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(146,64,14,0.4)')}
                  />
                </div>

                <div className="sm:col-span-2 flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 text-xs uppercase tracking-widest transition-all duration-200"
                    style={{ border: '1px solid rgba(146,64,14,0.4)', color: '#fef3c766', background: 'transparent' }}
                  >
                    ← Voltar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-200"
                    style={{ background: '#d97706', color: '#1a1a1a' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#b45309')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#d97706')}
                  >
                    Confirmar Reserva →
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ── STEP 3: Confirmation ── */}
          {step === 3 && confirmed && selectedTable && (
            <div className="text-center py-8">
              {/* Animated checkmark */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(217,119,6,0.15)', border: '2px solid #d97706' }}
              >
                <svg width="36" height="36" fill="none" stroke="#d97706" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-2" style={{ color: '#d97706' }}>Reserva Confirmada</p>
              <h3 className="text-3xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                Até já, {form.name.split(' ')[0]}! 🍺
              </h3>

              {/* Summary card */}
              <div
                className="text-left p-5 rounded-sm mb-6 max-w-sm mx-auto"
                style={{ background: '#292524', border: '1px solid rgba(217,119,6,0.25)' }}
              >
                {[
                  { icon: '📍', label: 'Mesa', val: `${selectedTable.label} · ${zoneLabel[selectedTable.zone]}` },
                  { icon: '📅', label: 'Data', val: form.date },
                  { icon: '🕐', label: 'Hora', val: form.time },
                  { icon: '👥', label: 'Pessoas', val: `${form.guests} pessoas` },
                  { icon: '✉️', label: 'Email', val: form.email },
                ].map(row => (
                  <div key={row.label} className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="text-lg">{row.icon}</span>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-widest opacity-50" style={{ color: '#fef3c7' }}>{row.label}</p>
                      <p className="text-sm font-semibold" style={{ color: '#fef3c7' }}>{row.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs opacity-50 mb-6 max-w-xs mx-auto leading-relaxed" style={{ color: '#fef3c7' }}>
                Receberás um email de confirmação em <strong style={{ color: '#d97706' }}>{form.email}</strong>.
                Qualquer questão, liga para +351 21 123 4567.
              </p>

              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={onClose}
                  className="px-8 py-3 text-xs uppercase tracking-widest font-bold"
                  style={{ background: '#d97706', color: '#1a1a1a' }}
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedTable(null);
                    setConfirmed(false);
                    setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' });
                  }}
                  className="px-8 py-3 text-xs uppercase tracking-widest"
                  style={{ border: '1px solid rgba(217,119,6,0.4)', color: '#d97706', background: 'transparent' }}
                >
                  Nova Reserva
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
