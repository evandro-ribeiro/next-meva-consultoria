import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <body className="font-montserrat bg-zinc-800 text-zinc-200">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
