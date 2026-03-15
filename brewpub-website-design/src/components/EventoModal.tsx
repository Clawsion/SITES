import { useState, useEffect } from 'react';

interface Evento {
  title: string;
  date: string;
  time: string;
  price: string;
  capacity: string;
  tag: string;
  img: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  evento: Evento | null;
}

export default function EventoModal({ open, onClose, evento }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => {
        setStep(1);
        setForm({ name: '', email: '', phone: '', guests: '1', notes: '' });
        setErrors({});
      }, 300);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Nome obrigatório';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Email inválido';
    if (!form.phone.trim()) newErrors.phone = 'Telemóvel obrigatório';
    if (!form.guests || Number(form.guests) < 1)
      newErrors.guests = 'Mínimo 1 pessoa';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  if (!open || !evento) return null;

  const tagColors: Record<string, string> = {
    Degustação: '#92400e',
    Festival: '#d97706',
    Workshop: '#b45309',
    Música: '#78350f',
    Especial: '#d97706',
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: '#1a1a1a', border: '1px solid rgba(217,119,6,0.4)' }}
      >
        {/* Amber top bar */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #92400e, #d97706, #fef3c7, #d97706, #92400e)' }} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center transition-colors"
          style={{ color: '#fef3c7', border: '1px solid rgba(217,119,6,0.4)', background: '#292524' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Event Banner */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={evento.img}
            alt={evento.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.6) 60%, rgba(26,26,26,0.2) 100%)' }} />
          <div className="absolute inset-0 flex flex-col justify-center px-8">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3 w-fit"
              style={{ background: tagColors[evento.tag] || '#d97706', color: '#1a1a1a' }}
            >
              {evento.tag}
            </span>
            <h2 className="text-2xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              {evento.title}
            </h2>
            <div className="flex gap-5 mt-2">
              <span className="flex items-center gap-1.5 text-xs" style={{ color: '#d97706' }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {evento.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: '#d97706' }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {evento.time}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: '#fef3c7', opacity: 0.7 }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {evento.capacity}
              </span>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center px-8 py-4" style={{ borderBottom: '1px solid rgba(217,119,6,0.2)' }}>
          {['Dados Pessoais', 'Confirmação'].map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                  style={{
                    background: step > i + 1 ? '#d97706' : step === i + 1 ? '#d97706' : 'transparent',
                    border: step >= i + 1 ? '2px solid #d97706' : '2px solid rgba(217,119,6,0.3)',
                    color: step >= i + 1 ? '#1a1a1a' : 'rgba(254,243,199,0.4)',
                  }}
                >
                  {step > i + 1 ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : i + 1}
                </div>
                <span
                  className="text-xs font-medium hidden sm:block"
                  style={{ color: step >= i + 1 ? '#d97706' : 'rgba(254,243,199,0.4)' }}
                >
                  {label}
                </span>
              </div>
              {i < 1 && (
                <div
                  className="h-px w-10 sm:w-20 mx-3"
                  style={{ background: step > i + 1 ? '#d97706' : 'rgba(217,119,6,0.2)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1 — Form */}
        {step === 1 && (
          <form onSubmit={handleSubmit} className="p-8">
            <h3 className="text-lg font-black mb-1" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Os teus dados
            </h3>
            <p className="text-xs opacity-50 mb-6" style={{ color: '#fef3c7' }}>
              Preenche o formulário para reservar o teu lugar neste evento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Nome */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#d97706' }}>
                  Nome Completo *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="João Silva"
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: '#292524',
                    border: errors.name ? '1px solid #ef4444' : '1px solid rgba(217,119,6,0.3)',
                    color: '#fef3c7',
                  }}
                />
                {errors.name && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#d97706' }}>
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="joao@email.com"
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: '#292524',
                    border: errors.email ? '1px solid #ef4444' : '1px solid rgba(217,119,6,0.3)',
                    color: '#fef3c7',
                  }}
                />
                {errors.email && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.email}</p>}
              </div>

              {/* Telemóvel */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#d97706' }}>
                  Telemóvel *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+351 912 345 678"
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: '#292524',
                    border: errors.phone ? '1px solid #ef4444' : '1px solid rgba(217,119,6,0.3)',
                    color: '#fef3c7',
                  }}
                />
                {errors.phone && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.phone}</p>}
              </div>

              {/* Nº Pessoas */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#d97706' }}>
                  Número de Lugares *
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: '#292524',
                    border: errors.guests ? '1px solid #ef4444' : '1px solid rgba(217,119,6,0.3)',
                    color: '#fef3c7',
                  }}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'pessoa' : 'pessoas'}</option>
                  ))}
                </select>
                {errors.guests && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.guests}</p>}
              </div>

              {/* Notas */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#d97706' }}>
                  Notas / Pedidos Especiais
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Alergias, pedidos especiais, ocasião especial..."
                  rows={3}
                  className="w-full px-4 py-3 text-sm outline-none transition-all resize-none"
                  style={{
                    background: '#292524',
                    border: '1px solid rgba(217,119,6,0.3)',
                    color: '#fef3c7',
                  }}
                />
              </div>
            </div>

            {/* Price info box */}
            <div
              className="flex items-center justify-between px-5 py-4 mb-6"
              style={{ background: '#292524', border: '1px solid rgba(217,119,6,0.3)' }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-0.5" style={{ color: '#fef3c7' }}>
                  Preço por pessoa
                </p>
                <p className="text-2xl font-black" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>
                  {evento.price}
                </p>
              </div>
              {evento.price !== 'Entrada Livre' && (
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest opacity-50 mb-0.5" style={{ color: '#fef3c7' }}>
                    Total estimado
                  </p>
                  <p className="text-xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                    {(() => {
                      const priceNum = parseFloat(evento.price.replace('€', '').replace(' / pessoa', '').trim());
                      const guests = parseInt(form.guests);
                      return isNaN(priceNum) ? evento.price : `€${(priceNum * guests).toFixed(0)}`;
                    })()}
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-widest"
            >
              Confirmar Reserva →
            </button>
          </form>
        )}

        {/* STEP 2 — Confirmation */}
        {step === 2 && (
          <div className="p-8 text-center">
            {/* Animated checkmark */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(217,119,6,0.15)', border: '2px solid #d97706' }}
            >
              <svg className="w-10 h-10" style={{ color: '#d97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#d97706' }}>
              Reserva Confirmada
            </p>
            <h3 className="text-3xl font-black mb-2" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
              Até breve!
            </h3>
            <p className="text-sm opacity-60 mb-8 max-w-sm mx-auto" style={{ color: '#fef3c7' }}>
              A tua reserva foi recebida com sucesso. Vais receber um email de confirmação em <span style={{ color: '#d97706' }}>{form.email}</span>.
            </p>

            {/* Reservation Summary */}
            <div
              className="text-left space-y-3 mb-8 p-6"
              style={{ background: '#292524', border: '1px solid rgba(217,119,6,0.3)' }}
            >
              <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: '#d97706' }}>
                Resumo da Reserva
              </p>

              {[
                { label: 'Evento', value: evento.title },
                { label: 'Data', value: evento.date },
                { label: 'Hora', value: evento.time },
                { label: 'Nome', value: form.name },
                { label: 'Email', value: form.email },
                { label: 'Telemóvel', value: form.phone },
                { label: 'Lugares', value: `${form.guests} ${parseInt(form.guests) === 1 ? 'pessoa' : 'pessoas'}` },
                {
                  label: 'Total',
                  value: (() => {
                    const priceNum = parseFloat(evento.price.replace('€', '').replace(' / pessoa', '').trim());
                    const guests = parseInt(form.guests);
                    return isNaN(priceNum) ? evento.price : `€${(priceNum * guests).toFixed(0)}`;
                  })(),
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid rgba(217,119,6,0.15)' }}>
                  <span className="text-xs uppercase tracking-widest opacity-50" style={{ color: '#fef3c7' }}>{label}</span>
                  <span className="text-sm font-bold" style={{ color: label === 'Total' || label === 'Evento' ? '#d97706' : '#fef3c7' }}>
                    {value}
                  </span>
                </div>
              ))}

              {form.notes && (
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-widest opacity-50 block mb-1" style={{ color: '#fef3c7' }}>Notas</span>
                  <span className="text-sm" style={{ color: '#fef3c7', opacity: 0.8 }}>{form.notes}</span>
                </div>
              )}
            </div>

            {/* Ref number */}
            <div className="mb-8 py-3 px-6 inline-block" style={{ background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.3)' }}>
              <p className="text-xs opacity-50 mb-0.5" style={{ color: '#fef3c7' }}>Referência da Reserva</p>
              <p className="text-lg font-black tracking-widest" style={{ color: '#d97706' }}>
                HC-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </p>
            </div>

            <button
              onClick={onClose}
              className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-widest"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
