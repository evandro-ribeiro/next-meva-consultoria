import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meva Consultoria",
  description: "Consultoria cervejeira para melhorar a sua produção!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-800 font-montserrat text-zinc-200">
        {children}
      </body>
    </html>
  );
}
