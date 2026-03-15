import { useState } from 'react';
import EventoModal from '../components/EventoModal';

const events = [
  {
    date: '28 Jun 2025',
    day: '28',
    month: 'Jun',
    title: 'Noite Belga',
    tag: 'Degustação',
    desc: 'Uma noite dedicada às grandes cervejas belgas. Degustação guiada de Trappists, Abadias e Lambics com maridagem de queijos belgas e portugueses. O nosso head brewer João Ferreira conduz a noite.',
    price: '€35 / pessoa',
    time: '20h00',
    capacity: '30 lugares',
    img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80',
  },
  {
    date: '12 Jul 2025',
    day: '12',
    month: 'Jul',
    title: 'Festival de Verão Hopcraft',
    tag: 'Festival',
    desc: 'O maior evento do ano. 30 torneiras em simultâneo, música ao vivo no pátio, food trucks, colaborações com cervejeiros convidados de todo o país e muito mais. Um dia inteiro de celebração.',
    price: 'Entrada Livre',
    time: '14h00 – 02h00',
    capacity: 'Ilimitado',
    img: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&q=80',
  },
  {
    date: '19 Jul 2025',
    day: '19',
    month: 'Jul',
    title: 'Masterclass: Introdução à Cerveja',
    tag: 'Workshop',
    desc: 'Aprende a diferenciar estilos, identificar aromas e lúpulos, e perceber o processo de produção com o nosso head brewer. Inclui degustação de 6 cervejas e material educativo.',
    price: '€45 / pessoa',
    time: '18h00',
    capacity: '20 lugares',
    img: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&q=80',
  },
  {
    date: '02 Ago 2025',
    day: '02',
    month: 'Ago',
    title: 'Jazz & Cerveja',
    tag: 'Música',
    desc: 'Uma noite de jazz com o quarteto Lisbon Jazz Collective. Ambiente intimista, as melhores torneiras abertas e petiscos da casa. Reserva o teu lugar.',
    price: '€15 / pessoa',
    time: '21h00',
    capacity: '60 lugares',
    img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
  },
  {
    date: '16 Ago 2025',
    day: '16',
    month: 'Ago',
    title: 'Noite Alemã – Oktoberfest Antecipado',
    tag: 'Degustação',
    desc: 'Antes do Oktoberfest oficial, celebramos a tradição alemã com Märzen, Weiss e Bock. Trajes bávaros, pretzels gigantes e músicas tradicionais com um twist português.',
    price: '€28 / pessoa',
    time: '19h00',
    capacity: '50 lugares',
    img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80',
  },
  {
    date: '06 Set 2025',
    day: '06',
    month: 'Set',
    title: 'Colaboração: Dois Brewers, Uma Cerveja',
    tag: 'Especial',
    desc: 'O João Ferreira (Hopcraft) e a Sara Mendes (Musa Brewery) criam juntos uma cerveja exclusiva ao vivo. Segue o processo e prova o resultado. Inédito.',
    price: '€40 / pessoa',
    time: '18h00',
    capacity: '25 lugares',
    img: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&q=80',
  },
];

const tagColors: Record<string, string> = {
  Degustação: '#92400e',
  Festival: '#d97706',
  Workshop: '#b45309',
  Música: '#78350f',
  Especial: '#d97706',
};

type EventType = typeof events[0];

export default function Eventos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const openModal = (event: EventType) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#292524' }}>
        <div className="bg-pattern absolute inset-0 opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Agenda</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            Próximos<br /><span style={{ color: '#d97706' }}>Eventos</span>
          </h1>
          <div className="divider-center mb-6" />
          <p className="opacity-70 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#fef3c7' }}>
            Degustações, workshops, música ao vivo e festivais. Há sempre algo a acontecer no Hopcraft.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto space-y-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="card-hover group grid grid-cols-1 md:grid-cols-4 overflow-hidden"
              style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.3)' }}
            >
              {/* Date */}
              <div
                className="md:col-span-1 flex md:flex-col items-center justify-center p-8 text-center"
                style={{ background: '#1a1a1a', borderRight: '1px solid rgba(146,64,14,0.3)' }}
              >
                <div className="mr-6 md:mr-0 md:mb-4">
                  <p className="text-5xl font-black leading-none" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>
                    {event.day}
                  </p>
                  <p className="text-sm uppercase tracking-widest mt-1" style={{ color: '#fef3c7', opacity: 0.6 }}>
                    {event.month}
                  </p>
                </div>
                <div>
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1"
                    style={{ background: tagColors[event.tag] || '#d97706', color: '#1a1a1a' }}
                  >
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Image thumbnail */}
              <div className="hidden md:block md:col-span-1 relative overflow-hidden" style={{ maxHeight: '180px' }}>
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(26,26,26,0.3)' }} />
              </div>

              {/* Content */}
              <div className="md:col-span-1 p-8 flex flex-col justify-center">
                <h2
                  className="text-xl font-black mb-3 group-hover:text-amber-400 transition-colors"
                  style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}
                >
                  {event.title}
                </h2>
                <p className="text-xs opacity-60 leading-relaxed mb-4" style={{ color: '#fef3c7' }}>
                  {event.desc}
                </p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <span className="flex items-center gap-1.5" style={{ color: '#d97706' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5" style={{ color: '#d97706' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.capacity}
                  </span>
                </div>
              </div>

              {/* Booking */}
              <div
                className="md:col-span-1 p-8 flex flex-col items-center justify-center text-center"
                style={{ borderLeft: '1px solid rgba(146,64,14,0.3)' }}
              >
                <p className="text-2xl font-black mb-1" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                  {event.price}
                </p>
                <p className="text-xs opacity-50 mb-6" style={{ color: '#fef3c7' }}>por pessoa</p>
                <button
                  className="btn-primary text-xs w-full py-3 flex items-center justify-center gap-2 group/btn"
                  onClick={() => openModal(event)}
                >
                  <svg className="w-4 h-4 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  Reservar Lugar
                </button>
                <p className="text-xs mt-3 opacity-40" style={{ color: '#fef3c7' }}>
                  Confirmação imediata por email
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 text-center" style={{ background: '#292524' }}>
        <p className="section-label mb-3">Newsletter</p>
        <h2 className="text-3xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
          Não percas nenhum evento
        </h2>
        <p className="opacity-60 mb-8 text-sm max-w-md mx-auto" style={{ color: '#fef3c7' }}>
          Subscreve a nossa newsletter e recebe primeiro os anúncios de eventos, lançamentos de cervejas e promoções exclusivas.
        </p>
        <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="O teu email..." className="flex-1" />
          <button type="submit" className="btn-primary">Subscrever</button>
        </form>
      </section>

      {/* Event Reservation Modal */}
      <EventoModal open={modalOpen} onClose={closeModal} evento={selectedEvent} />
    </div>
  );
}
