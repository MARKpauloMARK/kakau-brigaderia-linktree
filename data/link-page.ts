import type { LinkItem } from "@/lib/link-safety";

export const linkPageData: {
  profile: {
    logoSrc: string;
    brandName: string;
    brandAccent: string;
    description: string;
  };
  links: LinkItem[];
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
      id: "menu-pascoa",
      title: "MENU DE PASCOA",
      url: "/docs/cardapio-kakau-pascoa.pdf",
      icon: "bunny",
      featured: false,
    },
  ],
};
