import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Kakau Brigaderia",
  description: "Links oficiais da Kakau Brigaderia.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
