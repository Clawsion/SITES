import { useParams, Link } from 'react-router-dom';

const categoryData: Record<string, {
  name: string;
  flag: string;
  title: string;
  subtitle: string;
  hero: string;
  intro: string;
  history: string;
  beers: { name: string; style: string; abv: string; ibu: number; desc: string; color: string; badge?: string }[];
}> = {
  belgas: {
    name: 'Belgas',
    flag: '🇧🇪',
    title: 'Cervejas Belgas',
    subtitle: 'Complexidade, Tradição e Espírito Monástico',
    hero: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=1600&q=85',
    intro: 'A Bélgica é um país pequeno com uma cultura cervejeira enorme. Com mais de 200 estilos distintos, é o paraíso dos apreciadores de cerveja.',
    history: 'Desde os monges Trapistas do século XII até às cervejarias familiares contemporâneas, a Bélgica preserva e inova ao mesmo tempo. Os seus fermentos únicos, especiarias e técnicas de fermentação criam sabores impossíveis de imitar.',
    beers: [
      { name: 'Dubbel Monge', style: 'Dubbel', abv: '7.8%', ibu: 22, desc: 'Escura e encorpada, com caramelo, frutos secos e notas de especiaria. Fermentada com levedura belga autêntica.', color: '#7c2d12', badge: 'Best Seller' },
      { name: 'Tripel do Convento', style: 'Tripel', abv: '9.2%', ibu: 28, desc: 'Dourada e efervescente, surpreendentemente suave para o teor alcoólico. Banana, cravo e pêra.', color: '#d97706' },
      { name: 'Saison Primavera', style: 'Saison', abv: '6.5%', ibu: 30, desc: 'Fresca e levemente picante. Perfeita para o verão com a sua acidez refrescante e lúpulo floral.', color: '#f59e0b' },
      { name: 'Wit Branca', style: 'Witbier', abv: '4.8%', ibu: 14, desc: 'Turva e suave com coentros e casca de laranja. Cerveja de entrada para o mundo belga.', color: '#fcd34d' },
      { name: 'Quad Imperial', style: 'Quadrupel', abv: '11.5%', ibu: 26, desc: 'A rainha das abadias. Escura, densa, com tâmaras, chocolate e um final quente de álcool.', color: '#1c0a00', badge: 'Premium' },
      { name: 'Lambic Framboesa', style: 'Fruit Lambic', abv: '5.2%', ibu: 8, desc: 'Fermentação espontânea com framboesas frescas. Ácida, frutada e única.', color: '#be123c' },
      { name: 'Blonde Ardennes', style: 'Belgian Blonde', abv: '6.8%', ibu: 20, desc: 'Dourada e acessível, com ésteres frutados e um final seco. Equilíbrio perfeito.', color: '#b45309' },
      { name: 'Geuze Velha', style: 'Geuze', abv: '5.5%', ibu: 5, desc: 'Blendagem de Lambics de diferentes anos. Ácida, complexa, efervescente como champanhe.', color: '#92400e' },
    ],
  },
  alemas: {
    name: 'Alemãs',
    flag: '🇩🇪',
    title: 'Cervejas Alemãs',
    subtitle: 'Pureza, Precisão e Reinheitsgebot desde 1516',
    hero: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1600&q=80',
    intro: 'A lei da pureza alemã — Reinheitsgebot — definiu que apenas água, malte, lúpulo e levedura podem entrar numa cerveja. O resultado: perfeição minimalista.',
    history: 'Desde a Baviera ao norte da Alemanha, cada região tem os seus estilos icónicos. A cultura de beber cerveja faz parte do ADN alemão, com o Oktoberfest como celebração máxima de uma tradição milenar.',
    beers: [
      { name: 'Golden Weiss', style: 'Hefeweizen', abv: '5.2%', ibu: 12, desc: 'Turva, com aroma intenso a banana e cravo. A Weiss perfeita, servida no copo tradicional de 0,5L.', color: '#d97706', badge: 'Best Seller' },
      { name: 'Märzen Oktoberfest', style: 'Märzen', abv: '5.8%', ibu: 22, desc: 'Âmbar, maltada e redonda. A cerveja oficial do Oktoberfest, com um corpo rico e caramelizado.', color: '#b45309' },
      { name: 'Dunkel Profundo', style: 'Dunkelweizen', abv: '5.5%', ibu: 14, desc: 'Weiss escura com notas de chocolate, baunilha e frutos vermelhos. Suave e sedutora.', color: '#3b1f1f' },
      { name: 'Bock Bavário', style: 'Doppelbock', abv: '8.5%', ibu: 25, desc: 'Forte, maltado e reconfortante. A cerveja dos monges para sobreviver ao jejum de inverno.', color: '#7c2d12', badge: 'Sazonal' },
      { name: 'Kölsch Colónia', style: 'Kölsch', abv: '4.8%', ibu: 20, desc: 'Leve, clara e limpa. Fermentação alta com acabamento de lagering. Só de Colónia é Kölsch.', color: '#fbbf24' },
      { name: 'Rauchbier Fumada', style: 'Rauchbier', abv: '5.4%', ibu: 22, desc: 'Com malte defumado em madeira de faia. Aroma intenso a bacon e churrasco. Única.', color: '#4b1c1c' },
      { name: 'Schwarzbier Negra', style: 'Schwarzbier', abv: '4.9%', ibu: 24, desc: 'Lager negra suave, com café e chocolate sem a amargura de um stout. Refrescante.', color: '#111111' },
      { name: 'Pilsner do Norte', style: 'Northern German Pils', abv: '4.7%', ibu: 36, desc: 'Mais amarga que a checa, com lúpulo herbal e corpo seco. O clássico do Norte da Alemanha.', color: '#fcd34d' },
      { name: 'Berliner Weisse', style: 'Berliner Weisse', abv: '3.2%', ibu: 8, desc: 'Super ácida e leve. Tradição Berlinense de adicionar xarope de framboesa ou woodruff.', color: '#fef3c7' },
      { name: 'Eisbock', style: 'Eisbock', abv: '12%', ibu: 30, desc: 'Concentrada por congelamento. Intensa, quente, com malte profundo e álcool evidente.', color: '#6b1a1a', badge: 'Premium' },
    ],
  },
  checas: {
    name: 'Checas',
    flag: '🇨🇿',
    title: 'Cervejas Checas',
    subtitle: 'O Berço da Pilsner e o Maior Consumo Per Capita do Mundo',
    hero: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1600&q=85',
    intro: 'A República Checa ostenta o maior consumo de cerveja per capita do mundo. E não é por acaso — foi em Pilsen que nasceu a cerveja mais copiada da história.',
    history: 'Em 1842, em Pilsen, Josef Groll criou a primeira Pilsner do mundo: dourada, límpida e refrescante. Com lúpulo Saaz de aroma único e água ultra-suave, a Bohemian Pilsner conquistou o planeta e nunca mais foi esquecida.',
    beers: [
      { name: 'Bohemian Classic', style: 'Bohemian Pilsner', abv: '4.8%', ibu: 38, desc: 'A receita original. Lúpulo Saaz, malte Morávio e água mole. Dourada, límpida, com amargor elegante.', color: '#d97706', badge: 'Best Seller' },
      { name: 'Tmavé Escura', style: 'Tmavé (Dark Lager)', abv: '4.6%', ibu: 22, desc: 'Lager escura checa, suave e maltada com chocolate e caramelo. Muito mais acessível que um stout.', color: '#1c0a00' },
      { name: 'Polotmavé Semi-Escura', style: 'Polotmavé', abv: '4.9%', ibu: 28, desc: 'O estilo mais difícil de encontrar fora da Chéquia. Âmbar, com equilíbrio perfeito entre malte e lúpulo.', color: '#b45309' },
      { name: 'Výčepní Ligeira', style: 'Výčepní', abv: '3.8%', ibu: 20, desc: 'A cerveja do dia-a-dia checo. Leve, refrescante e fácil. Para beber a caneca e conversar.', color: '#fbbf24' },
      { name: 'Ležák Premium', style: 'Czech Premium Pale', abv: '5.4%', ibu: 42, desc: 'A versão mais premium da Pilsner Checa. Mais corpo, mais lúpulo Saaz, mais carácter.', color: '#f59e0b', badge: 'Premium' },
      { name: 'Pšeničné Trigo', style: 'Czech Wheat', abv: '5.0%', ibu: 15, desc: 'Versão checa do trigo, menos expressiva em ésteres mas igualmente refrescante e suave.', color: '#fcd34d' },
    ],
  },
  americanas: {
    name: 'Americanas',
    flag: '🇺🇸',
    title: 'Cervejas Americanas',
    subtitle: 'Revolução Craft, Criatividade Sem Limites',
    hero: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=1600&q=85',
    intro: 'O movimento craft americano transformou a cerveja numa forma de arte. Com mais de 9000 cervejarias artesanais, os EUA são agora líderes de inovação mundial.',
    history: 'Nos anos 70, pioneiros como Fritz Maytag ressuscitaram a tradição artesanal. Hoje, de Vermont ao Oregon, cada estado tem os seus ícones, estilos e lúpulos exclusivos que definem a nova vanguarda da cerveja.',
    beers: [
      { name: 'West Coast IPA', style: 'West Coast IPA', abv: '6.8%', ibu: 65, desc: 'Lupulada e seca, com pinho, toranja e resina. O estilo que definiu a revolução craft americana.', color: '#d97706', badge: 'Best Seller' },
      { name: 'Hazy Dream', style: 'New England IPA', abv: '6.4%', ibu: 40, desc: 'Turva como sumo de fruta, com trópicos intensos. Amargor suave, corpo pleno. Visualmente única.', color: '#fbbf24' },
      { name: 'Imperial Stout', style: 'Imperial Stout', abv: '12%', ibu: 70, desc: 'Negra e viscosa com chocolate amargo, café expresso e alcaçuz. A cerveja para meditar.', color: '#0a0000', badge: 'Premium' },
      { name: 'American Pale Ale', style: 'American Pale Ale', abv: '5.0%', ibu: 40, desc: 'Acessível e lupulada. Cascades aromáticos com cítricos e florais. O clássico de entrada no craft.', color: '#b45309' },
      { name: 'Milkshake IPA', style: 'Milkshake IPA', abv: '6.2%', ibu: 25, desc: 'Com lactose e frutos adicionados. Cremosa, doce e tropical. Polarizadora e irresistível.', color: '#fef3c7', badge: 'Exclusiva' },
      { name: 'Pastry Stout', style: 'Pastry Stout', abv: '10.5%', ibu: 30, desc: 'Inspirada numa tarte de pecan com caramelo. Doce, encorpada e indulgente.', color: '#3b0f0f' },
      { name: 'Session IPA', style: 'Session IPA', abv: '4.2%', ibu: 45, desc: 'Todo o carácter de uma IPA com apenas 4.2% ABV. Para os que querem beber mais de uma.', color: '#f59e0b' },
      { name: 'American Amber', style: 'American Amber Ale', abv: '5.5%', ibu: 30, desc: 'Equilibrada entre malte caramelizado e lúpulo cítrico. A cerveja sem extremos.', color: '#92400e' },
      { name: 'Brut IPA', style: 'Brut IPA', abv: '6.7%', ibu: 25, desc: 'Seca como champanhe com aromáticos de lúpulo intensos. A IPA mais elegante da carta.', color: '#fcd34d', badge: 'Sazonal' },
    ],
  },
  portuguesas: {
    name: 'Portuguesas',
    flag: '🇵🇹',
    title: 'Cervejas Portuguesas',
    subtitle: 'O Melhor do Craft Nacional com Alma Portuguesa',
    hero: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=1600&q=80',
    intro: 'Portugal tem uma cena craft que cresce a olhos vistos. Ingredientes únicos como mel do Alentejo, laranja do Algarve e cortiça do Alentejo criam cervejas únicas no mundo.',
    history: 'O Hopcraft orgulha-se de colaborar com produtores portugueses e cervejeiros nacionais. Algumas destas cervejas são exclusivas da nossa torneira, criadas especificamente para o nosso espaço e para o paladar português.',
    beers: [
      { name: 'Tejo IPA', style: 'Portuguese IPA', abv: '6.5%', ibu: 55, desc: 'A nossa flagship. Lúpulos portugueses com cítricos do mediterrâneo e um amargor limpo.', color: '#d97706', badge: 'Exclusiva' },
      { name: 'Mel do Alentejo', style: 'Honey Ale', abv: '5.8%', ibu: 20, desc: 'Produzida com mel biológico do Alentejo. Suave, ligeiramente adocicada, com floral natural.', color: '#fbbf24', badge: 'Exclusiva' },
      { name: 'Ginja Sour', style: 'Fruit Sour', abv: '4.9%', ibu: 8, desc: 'Com ginjas da Óbidos em fermentação secundária. Ácida, frutada e inconfundívelmente portuguesa.', color: '#be123c', badge: 'Exclusiva' },
      { name: 'Algarve Wit', style: 'Witbier', abv: '4.6%', ibu: 14, desc: 'Inspirada no verão algarvio com laranja de silves e flor de laranjeira. Leve e solar.', color: '#fcd34d' },
      { name: 'Douro Stout', style: 'Sweet Stout', abv: '5.5%', ibu: 28, desc: 'Escura com notas de vinho do Porto. Uma homenagem ao Douro e às suas vinhas em xisto.', color: '#1c0a00' },
      { name: 'Lisboa Lager', style: 'Craft Lager', abv: '4.4%', ibu: 22, desc: 'A nossa lager artesanal de casa. Limpa, refrescante e perfeita para qualquer ocasião.', color: '#f59e0b', badge: 'Best Seller' },
      { name: 'Cortiça Saison', style: 'Saison', abv: '6.2%', ibu: 25, desc: 'Com extracto de cortiça do Alentejo, criando um terroir único. Complexa e experimental.', color: '#92400e', badge: 'Exclusiva' },
    ],
  },
};

export default function BeerCategory() {
  const { category } = useParams<{ category: string }>();
  const data = categoryData[category || ''];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: '80px', background: '#1a1a1a' }}>
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>Categoria não encontrada</h1>
          <Link to="/cervejas" className="btn-primary">Ver Todas as Cervejas</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative h-96 md:h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.hero}')` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <Link to="/cervejas" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-6 hover:text-amber-400 transition-colors" style={{ color: '#fef3c7', opacity: 0.7 }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Voltar às Cervejas
          </Link>
          <div className="text-5xl mb-4">{data.flag}</div>
          <h1 className="text-5xl md:text-7xl font-black mb-3" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
            {data.title}
          </h1>
          <p className="text-sm md:text-base opacity-70 max-w-xl" style={{ color: '#d97706' }}>{data.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Sobre o Estilo</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>{data.intro}</h2>
            <div className="divider mb-4" />
          </div>
          <div>
            <p className="text-sm leading-loose opacity-70" style={{ color: '#fef3c7' }}>{data.history}</p>
          </div>
        </div>
      </section>

      {/* Beer List */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-2">A Nossa Selecção</p>
              <h2 className="text-3xl font-black" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>
                {data.beers.length} Cervejas {data.name}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.beers.map((beer) => (
              <div
                key={beer.name}
                className="card-hover relative overflow-hidden flex flex-col"
                style={{ background: '#292524', border: '1px solid rgba(146,64,14,0.3)' }}
              >
                {beer.badge && (
                  <div className="beer-card-flag">{beer.badge}</div>
                )}
                {/* Color band top */}
                <div className="h-2 w-full" style={{ background: beer.color }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${beer.color}20`, border: `1px solid ${beer.color}40` }}>
                      <div className="w-3 h-6 rounded-full" style={{ background: beer.color, opacity: 0.8 }} />
                    </div>
                    <span className="text-xs uppercase tracking-widest" style={{ color: '#d97706' }}>{beer.style}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>{beer.name}</h3>
                  <p className="text-sm opacity-60 leading-relaxed mb-5 flex-1" style={{ color: '#fef3c7' }}>{beer.desc}</p>
                  <div className="flex justify-between items-center text-xs pt-4 border-t" style={{ borderColor: 'rgba(146,64,14,0.3)' }}>
                    <div className="text-center">
                      <span className="block font-bold text-base" style={{ color: '#d97706' }}>{beer.abv}</span>
                      <span className="opacity-50" style={{ color: '#fef3c7' }}>ABV</span>
                    </div>
                    <div className="w-px h-8" style={{ background: 'rgba(146,64,14,0.3)' }} />
                    <div className="text-center">
                      <span className="block font-bold text-base" style={{ color: '#d97706' }}>{beer.ibu}</span>
                      <span className="opacity-50" style={{ color: '#fef3c7' }}>IBU</span>
                    </div>
                    <div className="w-px h-8" style={{ background: 'rgba(146,64,14,0.3)' }} />
                    <div className="text-center">
                      <span className="block font-bold text-base" style={{ color: '#d97706' }}>🍺</span>
                      <span className="opacity-50" style={{ color: '#fef3c7' }}>Torneira</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other styles */}
      <section className="py-16 px-6" style={{ background: '#292524' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-8" style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif" }}>Outros Estilos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categoryData).filter(([key]) => key !== category).map(([key, cat]) => (
              <Link
                key={key}
                to={`/cervejas/${key}`}
                className="flex items-center gap-2 px-6 py-3 border hover:border-amber-500 hover:text-amber-400 transition-all duration-300 text-sm"
                style={{ borderColor: 'rgba(146,64,14,0.5)', color: '#fef3c7' }}
              >
                <span>{cat.flag}</span>
                <span>Cervejas {cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
