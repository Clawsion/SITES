const menuSections = [
  {
    title: 'Snacks & Starters',
    icon: '🍟',
    items: [
      { name: 'Batatas Bravas com Aioli', desc: 'Batatas fritas crocantes com molho bravas picante e aioli de alho assado', price: '€7' },
      { name: 'Queijo Frito com Mel', desc: 'Queijo da Serra frito com mel de rosmaninho e noz caramelizada', price: '€8' },
      { name: 'Chouriço Assado', desc: 'Chouriço artesanal da Guarda assado na brasa com pão de massa mãe', price: '€9' },
      { name: 'Tábua de Enchidos', desc: 'Seleção de enchidos portugueses com pickles artesanais e mostarda de cerveja', price: '€14' },
      { name: 'Nachos do Brewpub', desc: 'Com chili bean, cheddar fundido, jalapeños, guacamole e crème fraîche', price: '€11' },
    ],
  },
  {
    title: 'Do Mar',
    icon: '🐟',
    items: [
      { name: 'Polvo à Lagareiro', desc: 'Polvo grelhado com azeite, alho e batatinhas a murro. Clássico português', price: '€18' },
      { name: 'Camarão no Pão', desc: 'Camarão salteado em manteiga de cerveja, numa brioche artesanal', price: '€15' },
      { name: 'Bacalhau à Bras', desc: 'Bacalhau desfiado, ovos mexidos, batata palha e azeitonas. O nosso favorito', price: '€17' },
      { name: 'Fish & Chips da Casa', desc: 'Bacalhau em massa de cerveja Weiss, batata frita e tartar de alho', price: '€16' },
    ],
  },
  {
    title: 'Da Terra',
    icon: '🥩',
    items: [
      { name: 'Burger Hopcraft', desc: 'Novilho 200g, cheddar maturado, cebola caramelizada em IPA, pickles e aioli', price: '€15' },
      { name: 'Costelas BBQ de Cerveja', desc: 'Costelas de porco marinadas 24h em Stout e assadas lentamente. Com coleslaw', price: '€19' },
      { name: 'Bitoque com Molho Stout', desc: 'Bife de novilho com ovo, arroz, batatas e molho de Stout e cogumelos', price: '€16' },
      { name: 'Prego no Pão', desc: 'Lombo de novilho em pão de sésamo, mostarda de Dijon e manteiga de ervas', price: '€13' },
      { name: 'Frango Grelhado com IPA', desc: 'Frango marinado em IPA com limão e ervas mediterrâneas. Com salada', price: '€14' },
    ],
  },
  {
    title: 'Vegetariano & Vegan',
    icon: '🥗',
    items: [
      { name: 'Mushroom Burger (V)', desc: 'Cogumelo portobello grelhado, brie, rúcula, tomate seco e pesto de manjericão', price: '€13' },
      { name: 'Bowl de Quinoa (V)', desc: 'Quinoa, grão-de-bico, abacate, cenoura assada e vinagrete de limão e azeite', price: '€12' },
      { name: 'Tacos de Beringela (V)', desc: 'Beringela assada, guacamole, salsa fresca, jalapeño e coentros', price: '€11' },
      { name: 'Pizza Margherita Artesanal (V)', desc: 'Massa fermentada 48h, molho San Marzano, mozzarella di bufala, manjericão', price: '€14' },
    ],
  },
  {
    title: 'Sobremesas',
    icon: '🍫',
    items: [
      { name: 'Brownie de Stout', desc: 'Denso e intenso com chocolate 70%, feito com Stout Imperial. Com gelado de baunilha', price: '€7' },
      { name: 'Tarte de Pastel de Nata', desc: 'Interpretação do pastel de nata em formato de tarte, com creme de laranja', price: '€6' },
      { name: 'Cheesecake de Ginja', desc: 'Base de bolacha, creme de queijo e compota de ginja da Óbidos', price: '€7' },
      { name: 'Sorbet de Cerveja (V)', desc: 'Sorbet artesanal feito com a nossa Saison Primavera. Fresco e único', price: '€5' },
    ],
  },
];

export default function Menu() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#292524' }}>
        <div className="bg-pattern absolute inset-0 opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Gastronomia</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            O Nosso<br /><span style={{ color: '#d97706' }}>Menu</span>
          </h1>
          <div className="divider-center mb-6" />
          <p className="opacity-70 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#fef3c7' }}>
            Comida feita para acompanhar cerveja. Ingredientes locais, receitas com alma e cerveja em cada detalhe.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-5xl mx-auto space-y-20">
          {menuSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl">{section.icon}</span>
                <div>
                  <h2 className="text-3xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                    {section.title}
                  </h2>
                  <div className="divider mt-2" />
                </div>
              </div>
              <div className="space-y-0">
                {section.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start py-6 group"
                    style={{
                      borderBottom: i < section.items.length - 1 ? '1px solid rgba(146,64,14,0.2)' : 'none',
                    }}
                  >
                    <div className="flex-1 pr-8">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-amber-400 transition-colors" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                        {item.name}
                      </h3>
                      <p className="text-sm opacity-50 leading-relaxed" style={{ color: '#fef3c7' }}>{item.desc}</p>
                    </div>
                    <span className="text-xl font-bold flex-shrink-0" style={{ color: '#d97706', fontFamily: "'Playfair Display', serif" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-16 px-6 text-center" style={{ background: '#292524' }}>
        <p className="text-xs opacity-50 max-w-lg mx-auto leading-relaxed" style={{ color: '#fef3c7' }}>
          Todos os pratos são preparados com ingredientes frescos e sazonais. Alergénios disponíveis mediante pedido.
          Menu sujeito a alterações sazonais. Preços incluem IVA à taxa legal em vigor.
        </p>
      </section>
    </div>
  );
}
