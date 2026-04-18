import type { LinkItem } from "@/lib/link-safety";

export const linkPageData: {
  profile: {
    logoSrc: string;
    brandName: string;
    brandAccent: string;
    description: string;
  };
  links: LinkItem[];
  faq: { id: string; question: string; answer: string }[];
} = {
  profile: {
    logoSrc: "/assets/logo-certa-symbol-optimized.png",
    brandName: "Kakau",
    brandAccent: "Brigaderia",
    description: "Doces artesanais, encomendas e menu sazonal.",
  },
  links: [
    {
      id: "pedidos",
      title: "PEDIDOS",
      url: "https://bit.ly/47CO0gC",
      icon: "whatsapp",
      featured: true,
    },
    {
      id: "menu-brigadeiros",
      title: "Menu - Brigadeiros",
      url: "/docs/cardapio-kakau.pdf",
      icon: "menu",
      featured: false,
    },
    {
      id: "calculadora",
      title: "Calculadora de Brigadeiros",
      url: "https://calculadora-wheat-pi.vercel.app",
      icon: "calculator",
      featured: false,
    },
  ],
  faq: [
    {
      id: "personalizacao",
      question: "Meu pedido pode ficar do jeitinho que eu imaginei?",
      answer:
        "Sim — e é exatamente isso que a gente gosta de fazer. Cada encomenda é pensada de forma individual, com detalhes que refletem o que você tem em mente. Trabalhamos com ejetores, pintura e pasta americana para que o resultado seja único, com a sua cara. O valor varia conforme o nível de personalização escolhido, então você paga pelo que realmente faz sentido para o seu pedido.",
    },
    {
      id: "prazo",
      question: "Ainda dá tempo de fazer meu pedido? Minha festa é esse mês / essa semana...",
      answer:
        "Na maioria das vezes, sim. O ideal é que o pedido chegue com pelo menos 3 dias de antecedência — isso nos dá o tempo necessário para cuidar de cada etapa com atenção. Mas se precisar de algo mais urgente, é só nos chamar: verificamos a disponibilidade e, se der para encaixar, fazemos acontecer. Nesse caso, há um acréscimo de 30% sobre o valor total.",
    },
    {
      id: "confirmacao",
      question: "Como faço para garantir minha encomenda?",
      answer:
        "Para confirmar a data e dar início à produção, pedimos 50% do valor no momento do pedido. A partir daí, combinamos juntos a melhor forma de você receber — entrega ou retirada — de acordo com a disponibilidade. Assim, tudo fica claro e organizado desde o começo, sem surpresas.",
    },
  ],
};

