// ============================================================
// data.ts — Dados centralizados da Ebanos Planejados
// Todas as informações fictícias do site estão aqui.
// Para alterar qualquer conteúdo, edite apenas este arquivo.
// ============================================================

export const empresa = {
  nome: "Ebanos Planejados",
  slogan: "Móveis Feitos à Mão, Feitos com Amor",
  descricao:
    "Com 15 anos de experiência, a Ebanos Planejados é referência em móveis residenciais personalizados em Limeira-SP. Unimos tradição artesanal e tecnologia moderna para transformar cada ambiente da sua casa.",
  endereco: "Rua das Madeiras, 1250 — Vila Móvel, Limeira - SP, 13480-000",
  telefone: "(19) 99999-8888",
  whatsapp: "5519999998888",
  email: "contato@ebanos-planejados.com.br",
  instagram: "https://instagram.com/ebanosplanejados",
  facebook: "https://facebook.com/ebanosplanejados",
  pinterest: "https://pinterest.com/ebanosplanejados",
  horario: "Seg–Sex: 8h–18h | Sáb: 8h–13h",
  atuacao: "Limeira-SP e região",
  cnpj: "12.345.678/0001-90",
};

// ──────────────────────────────────────────────
// MÓVEIS POR AMBIENTE
// ──────────────────────────────────────────────

export type Movel = {
  id: string;
  nome: string;
  descricao: string;
  materiais: string[];
  dimensoes: string;
  preco: number;
  destaque?: boolean;
  imagem: string; // URL Unsplash
};

export type Ambiente = {
  id: string;
  nome: string;
  icone: string;
  cor: string;          // classe Tailwind de fundo (card)
  descricao: string;
  imagem: string;       // hero do ambiente
  moveis: Movel[];
};

export const ambientes: Ambiente[] = [
  // ── SALA DE ESTAR ──────────────────────────────
  {
    id: "sala",
    nome: "Sala de Estar",
    icone: "sofa",
    cor: "bg-amber-50",
    descricao: "Crie uma sala elegante e aconchegante com móveis feitos sob medida para o seu espaço.",
    imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    moveis: [
      {
        id: "sala-painel-tv",
        nome: "Painel para TV",
        descricao: "Painel suspenso com nichos, iluminação LED embutida e suporte para TV de até 75 polegadas. Design minimalista em MDF com acabamento laqueado.",
        materiais: ["MDF naval 18mm", "Laca acetinada", "Perfil de LED 3000K", "Suporte pivotante"],
        dimensoes: "220 × 180 × 35 cm (L × A × P)",
        preco: 3200,
        destaque: true,
        imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      },
      {
        id: "sala-rack",
        nome: "Rack com Gavetas",
        descricao: "Rack baixo com três gavetas soft-close e tampo em laminado textura madeira. Ideal para aparelhos de som, videogame e objetos decorativos.",
        materiais: ["MDF 15mm", "Laminado BP Madeirite", "Corrediças soft-close Blum", "Pés metálicos"],
        dimensoes: "180 × 45 × 40 cm",
        preco: 1800,
        imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      },
      {
        id: "sala-poltrona",
        nome: "Poltrona Estruturada",
        descricao: "Poltrona com estrutura em madeira maciça de ipê, estofamento em tecido bouclê antialérgico e pés palito em carvalho.",
        materiais: ["Madeira maciça Ipê", "Espuma D45 com fibra siliconada", "Tecido bouclê", "Pés carvalho torneados"],
        dimensoes: "75 × 85 × 80 cm",
        preco: 2400,
        imagem: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
      },
      {
        id: "sala-mesa-centro",
        nome: "Mesa de Centro",
        descricao: "Mesa com tampo em vidro temperado de 10mm, estrutura em metal pintado e prateleira inferior em MDF revestido. Linhas geométricas modernas.",
        materiais: ["Vidro temperado 10mm", "Estrutura em ferro", "MDF 18mm revestido", "Pintura epóxi"],
        dimensoes: "120 × 40 × 60 cm",
        preco: 1200,
        imagem: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
      },
    ],
  },

  // ── QUARTO ──────────────────────────────────────
  {
    id: "quarto",
    nome: "Quarto",
    icone: "bed",
    cor: "bg-stone-50",
    descricao: "Transforme seu quarto em um refúgio de descanso com móveis personalizados e funcionais.",
    imagem: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
    moveis: [
      {
        id: "quarto-cama",
        nome: "Cama Estofada Box",
        descricao: "Cabeceira estofada em linho importado com base box bipartido e gavetas embutidas. Projeto ergonômico com ângulo de reclinação de 15°.",
        materiais: ["Estrutura em MDF naval", "Espuma D33 na cabeceira", "Linho importado (8 cores)", "Botões capitonê em metal dourado"],
        dimensoes: "Queen 158 × 198 cm | King 193 × 198 cm",
        preco: 4800,
        destaque: true,
        imagem: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      },
      {
        id: "quarto-guarda-roupa",
        nome: "Guarda-Roupa 6 Portas",
        descricao: "Guarda-roupa com 6 portas de correr em espelho bisotê, interior organizado com cabideiros duplos, gavetas e sapateira giratória.",
        materiais: ["MDF naval 18mm", "Espelho bisotê 4mm", "Ferragens Hettich", "Corrediças telescópicas"],
        dimensoes: "270 × 220 × 65 cm",
        preco: 7500,
        imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        id: "quarto-criado",
        nome: "Criado-Mudo Suspenso",
        descricao: "Criado-mudo suspenso com gaveta de abertura toque e nicho aberto, iluminação LED interna. Instalado sem tocar o piso — ideal para faxina prática.",
        materiais: ["MDF 15mm laqueado", "Dobras soft-close", "Perfil de LED 2700K", "Suporte oculto em aço"],
        dimensoes: "50 × 40 × 35 cm",
        preco: 680,
        imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      },
      {
        id: "quarto-bancada",
        nome: "Bancada / Penteadeira",
        descricao: "Bancada com espelho emoldurado, iluminação Hollywood e gavetas organizadoras para cosméticos. Tampo em granito São Cecília.",
        materiais: ["MDF naval 18mm", "Granito São Cecília 2cm", "Espelho bisotê", "Lâmpadas LED tipo Hollywood"],
        dimensoes: "120 × 80 × 50 cm",
        preco: 2200,
        imagem: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=800&q=80",
      },
    ],
  },

  // ── COZINHA ──────────────────────────────────────
  {
    id: "cozinha",
    nome: "Cozinha",
    icone: "chef-hat",
    cor: "bg-green-50",
    descricao: "Cozinhas funcionais e elegantes, projetadas para otimizar cada centímetro do espaço.",
    imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    moveis: [
      {
        id: "cozinha-armarios",
        nome: "Armários Planejados",
        descricao: "Conjunto completo de armários aéreos e baixos com portas em laca fosca, puxadores integrados e iluminação sob o gabinete.",
        materiais: ["MDF naval 18mm", "Laca PU fosca", "Ferragens Grass/Blum", "Iluminação LED sob armário"],
        dimensoes: "Sob medida (projeto personalizado)",
        preco: 18000,
        destaque: true,
        imagem: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      },
      {
        id: "cozinha-bancada",
        nome: "Bancada em Quartzo",
        descricao: "Bancada em pedra quartzo Silestone branco polar com espessura de 2cm, bordas polidas e cuba de embutir inox.",
        materiais: ["Quartzo Silestone 2cm", "Cuba inox 430", "Suporte em chapa galvanizada", "Rejunte epóxi"],
        dimensoes: "Sob medida — comprimento até 4m corridos",
        preco: 4500,
        imagem: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      },
      {
        id: "cozinha-nicho",
        nome: "Nicho Decorativo",
        descricao: "Nicho em MDF com borda em alumínio dourado, interior com película de mármore e suporte para até 15kg por prateleira.",
        materiais: ["MDF 18mm", "Perfil de alumínio", "Película decorativa mármore", "Suporte oculto em aço"],
        dimensoes: "60 × 30 × 20 cm (unitário) | combinável",
        preco: 380,
        imagem: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80",
      },
      {
        id: "cozinha-prateleira",
        nome: "Prateleira Flutuante",
        descricao: "Prateleira em pinus tratado com verniz natural, suportes invisíveis em aço e bordas com router arredondado. Rústica e funcional.",
        materiais: ["Pinus tratado 25mm", "Verniz imbuia", "Suporte oculto em aço 6mm", "Bucha especial para alvenaria"],
        dimensoes: "Até 150cm × 25cm × 4cm",
        preco: 290,
        imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
    ],
  },

  // ── HOME OFFICE ──────────────────────────────────
  {
    id: "homeoffice",
    nome: "Home Office",
    icone: "monitor",
    cor: "bg-teal-50",
    descricao: "Ambientes de trabalho em casa que unem ergonomia, organização e estilo.",
    imagem: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1200&q=80",
    moveis: [
      {
        id: "office-escrivaninha",
        nome: "Escrivaninha em L",
        descricao: "Mesa em L com tampo amplo para dois monitores, passagem de cabos embutida, gaveteiro com rodízios e suporte para CPU.",
        materiais: ["MDF naval 25mm", "Bordas ABS 2mm", "Passagem de cabos em PVC", "Gaveteiro com rodízios Plenna"],
        dimensoes: "160 × 140 × 75 cm (L × L × A)",
        preco: 2800,
        destaque: true,
        imagem: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
      },
      {
        id: "office-estante",
        nome: "Estante de Escritório",
        descricao: "Estante modular com nichos abertos, gavetas ocultas e espaço para livros técnicos. Prateleiras ajustáveis em 5 posições.",
        materiais: ["MDF naval 18mm", "Laminado textura carvalho", "Ferragens niqueladas", "Suportes ajustáveis"],
        dimensoes: "90 × 220 × 30 cm",
        preco: 1900,
        imagem: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=800&q=80",
      },
      {
        id: "office-cadeira",
        nome: "Cadeira Executiva",
        descricao: "Cadeira com estrutura em madeira maciça carvalho, assento em couro PU respirável, altura regulável e apoio lombar articulado.",
        materiais: ["Madeira carvalho maciço", "Couro PU premium", "Espuma HR40", "Pistão hidráulico classe 4"],
        dimensoes: "62 × (90-100) × 65 cm",
        preco: 1600,
        imagem: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
      },
      {
        id: "office-painel",
        nome: "Painel Organizador",
        descricao: "Painel de parede multifuncional com quadro, régua metálica, porta-canetas, suporte de monitor ajustável e iluminação integrada.",
        materiais: ["MDF naval 18mm", "Vidro temperado (quadro)", "Régua em alumínio", "LED 6500K regulável"],
        dimensoes: "120 × 80 × 15 cm",
        preco: 1100,
        imagem: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      },
    ],
  },

  // ── BANHEIRO ──────────────────────────────────────
  {
    id: "banheiro",
    nome: "Banheiro",
    icone: "bath",
    cor: "bg-blue-50",
    descricao: "Móveis para banheiro com resistência à umidade e acabamento impecável.",
    imagem: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
    moveis: [
      {
        id: "ban-gabinete",
        nome: "Gabinete com Cuba",
        descricao: "Gabinete em MDF naval com tratamento antimofo, cuba de embutir retangular em louça branca e espelho com LED frio ao redor.",
        materiais: ["MDF naval hidrófugo 18mm", "Laca PU hidrorresistente", "Cuba louça retangular 50×34cm", "LED 6000K perimetral"],
        dimensoes: "80 × 55 × 45 cm",
        preco: 2100,
        destaque: true,
        imagem: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      },
      {
        id: "ban-nicho",
        nome: "Nicho de Banheiro",
        descricao: "Nicho embutido na parede ou aplicado, com bordas em alumínio escovado e base em porcelana texturizada. Ideal para shampoos e produtos.",
        materiais: ["MDF naval hidrófugo", "Perfil alumínio escovado", "Porcelana texturizada", "Silicone neutro inteligente"],
        dimensoes: "30 × 60 × 12 cm",
        preco: 420,
        imagem: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      },
      {
        id: "ban-banco",
        nome: "Banco de Box",
        descricao: "Banco compacto para box ou banheiro com ripado em teca natural, tratada com óleo de teca resistente à água, e pés em alumínio.",
        materiais: ["Teca natural tratada", "Óleo de teca importado", "Pés em alumínio anodizado", "Parafusos inox A4"],
        dimensoes: "60 × 45 × 45 cm",
        preco: 780,
        imagem: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      },
      {
        id: "ban-prateleira",
        nome: "Prateleira de Banheiro",
        descricao: "Prateleira em vidro temperado de 8mm com suporte cromado e trilho de parede em inox escovado. Suporta até 20kg.",
        materiais: ["Vidro temperado 8mm", "Suporte cromado em zamak", "Trilho inox escovado", "Fixação com âncora química"],
        dimensoes: "60 × 15 × 8mm",
        preco: 320,
        imagem: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      },
    ],
  },
];

// ──────────────────────────────────────────────
// DEPOIMENTOS
// ──────────────────────────────────────────────

export const depoimentos = [
  {
    id: 1,
    nome: "Ana Carolina Ferreira",
    bairro: "Moema, SP",
    nota: 5,
    texto: "A Ebanos Planejados transformou completamente a minha cozinha. O projeto foi entregue no prazo, com acabamento impecável. Super recomendo!",
    avatar: "https://i.pravatar.cc/80?img=47",
    ambiente: "Cozinha",
  },
  {
    id: 2,
    nome: "Ricardo Mendes",
    bairro: "Pinheiros, SP",
    nota: 5,
    texto: "Contratei para o home office e fiquei impressionado com a qualidade. A escrivaninha em L é exatamente o que eu precisava. Atendimento excelente.",
    avatar: "https://i.pravatar.cc/80?img=12",
    ambiente: "Home Office",
  },
  {
    id: 3,
    nome: "Juliana Costa",
    bairro: "Vila Madalena, SP",
    nota: 5,
    texto: "Fizeram o quarto do casal sob medida. A cama estofada ficou linda e o guarda-roupa aproveita cada cantinho. Qualidade artesanal diferenciada.",
    avatar: "https://i.pravatar.cc/80?img=23",
    ambiente: "Quarto",
  },
  {
    id: 4,
    nome: "Marcos Oliveira",
    bairro: "Santana, SP",
    nota: 5,
    texto: "Painel para TV e rack novos na sala. Virou outra coisa! Produto robusto, encaixe perfeito, LED cria um ambiente incrível. Valeu muito o investimento.",
    avatar: "https://i.pravatar.cc/80?img=8",
    ambiente: "Sala de Estar",
  },
];

// ──────────────────────────────────────────────
// PORTFÓLIO / GALERIA
// ──────────────────────────────────────────────

export type ProjetoPortfolio = {
  id: string;
  titulo: string;
  ambiente: string;
  ambienteId: string;
  antes: string;
  depois: string;
  descricao: string;
  ano: number;
};

export const portfolio: ProjetoPortfolio[] = [
  {
    id: "p1",
    titulo: "Sala Integrada Contemporânea",
    ambiente: "Sala de Estar",
    ambienteId: "sala",
    antes: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    depois: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    descricao: "Painel TV + rack + mesa de centro em MDF laqueado cinza fendi. Entrega em 22 dias.",
    ano: 2024,
  },
  {
    id: "p2",
    titulo: "Cozinha Americana Minimalista",
    ambiente: "Cozinha",
    ambienteId: "cozinha",
    antes: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    depois: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    descricao: "Armários planejados em laca branca fosca + bancada em quartzo branco. 45 dias de obra.",
    ano: 2024,
  },
  {
    id: "p3",
    titulo: "Quarto Master Luxo",
    ambiente: "Quarto",
    ambienteId: "quarto",
    antes: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    depois: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    descricao: "Cama king estofada + guarda-roupa 6 portas espelhado + bancada/penteadeira integrada.",
    ano: 2023,
  },
  {
    id: "p4",
    titulo: "Home Office Produtivo",
    ambiente: "Home Office",
    ambienteId: "homeoffice",
    antes: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    depois: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
    descricao: "Escrivaninha em L + estante modular + painel organizador com LED. Setup completo para home office.",
    ano: 2024,
  },
  {
    id: "p5",
    titulo: "Banheiro Spa Residencial",
    ambiente: "Banheiro",
    ambienteId: "banheiro",
    antes: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?w=800&q=80",
    depois: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    descricao: "Gabinete com cuba embutida + nichos + banco de teca + prateleiras em vidro. Acabamento spa resort.",
    ano: 2023,
  },
  {
    id: "p6",
    titulo: "Sala de Estar Clássica",
    ambiente: "Sala de Estar",
    ambienteId: "sala",
    antes: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=80",
    depois: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    descricao: "Poltrona estofada + painel ripado em carvalho com luz de destaque indireta.",
    ano: 2023,
  },
];

// ──────────────────────────────────────────────
// DIFERENCIAIS / SÓCIOS
// ──────────────────────────────────────────────

export const socios = [
  {
    nome: "Carlos Silva",
    cargo: "Mestre Marceneiro & Fundador",
    bio: "30 anos de experiência, formado pela Escola Senai de Marcenaria. Apaixonado por madeira desde os 14 anos, quando aprendeu o ofício com o pai.",
    avatar: "https://i.pravatar.cc/300?img=57",
  },
  {
    nome: "Fernanda Silva",
    cargo: "Designer de Interiores & Co-fundadora",
    bio: "Arquiteta formada pela USP com especialização em design de móveis em Milão. Garante que cada projeto una estética e funcionalidade.",
    avatar: "https://i.pravatar.cc/300?img=49",
  },
];

export const diferenciais = [
  {
    icone: "award",
    titulo: "15 Anos de Experiência",
    descricao: "Mais de 1.200 projetos entregues em Limeira-SP e região com excelência e pontualidade.",
  },
  {
    icone: "ruler",
    titulo: "100% Sob Medida",
    descricao: "Cada móvel é projetado para o seu espaço. Nenhuma peça é padrão — tudo personalizado.",
  },
  {
    icone: "shield-check",
    titulo: "Garantia de 5 Anos",
    descricao: "Cobrimos defeitos de fabricação e ferragens por 5 anos. Nossa confiança no nosso trabalho.",
  },
  {
    icone: "palette",
    titulo: "Consulta de Design Grátis",
    descricao: "Agende uma visita técnica sem custo. Nosso designer vai até você e apresenta o projeto em 3D.",
  },
  {
    icone: "truck",
    titulo: "Entrega e Instalação",
    descricao: "Entregamos e instalamos em Limeira-SP e região com equipe própria treinada.",
  },
  {
    icone: "leaf",
    titulo: "Madeira Certificada",
    descricao: "Utilizamos apenas madeira certificada pelo IBAMA, com origem rastreável e responsável.",
  },
];

// ──────────────────────────────────────────────
// MATERIAIS E ACABAMENTOS (página Quem Somos)
// ──────────────────────────────────────────────

export const materiais = [
  "MDF Naval 18mm (Eucatex/Duratex)",
  "Madeira Maciça: Ipê, Carvalho, Teca, Pinus",
  "Quartzo Silestone e Granitos Naturais",
  "Ferragens Blum, Grass e Hettich",
  "Lacas PU Fosca e Brilhante",
  "Laminados BP e Fórmica",
];
