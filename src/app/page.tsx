"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef, ReactNode } from "react";
import {
  FaArrowRight,
  FaAward,
  FaBeer,
  FaCheckCircle,
  FaFlask,
  FaWhatsapp,
} from "react-icons/fa";
import { IoClose, IoMenu, IoSettingsSharp } from "react-icons/io5";

// --- Componentes de Utilidade e Animação ---

/**
 * Hook e Componente para animação de "Reveal on Scroll"
 * Faz os elementos aparecerem suavemente quando entram na tela.
 */
const Reveal = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// --- Componentes da Página ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/95 py-4 shadow-lg backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => scrollToSection("hero")}
        >
          <div className="rounded-lg bg-amber-500 p-1.5">
            <FaBeer className="h-6 w-6 text-stone-950" />
          </div>
          <span className="text-2xl font-bold tracking-wide text-white">
            MEVA <span className="text-amber-500">Consultoria</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {["Sobre", "Serviços"].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(
                  item
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, ""),
                )
              }
              className="text-sm font-medium uppercase tracking-widest text-stone-300 transition-colors hover:text-amber-500"
            >
              {item}
            </button>
          ))}
          <Link
            href="https://wa.me/5544999561963"
            target="_blank"
            rel="noopener noreferrer"
            className="flex transform items-center gap-2 rounded-full bg-amber-600 px-6 py-2 font-bold text-white shadow-lg shadow-amber-900/20 transition-all hover:scale-105 hover:bg-amber-500"
          >
            <FaWhatsapp size={18} />
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-t border-stone-800 bg-stone-900 p-6 shadow-xl md:hidden">
          {["Sobre", "Serviços"].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(
                  item
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, ""),
                )
              }
              className="py-2 text-left font-medium text-stone-300 hover:text-amber-500"
            >
              {item}
            </button>
          ))}
          <Link
            href="https://wa.me/5544999561963"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-lg bg-amber-600 py-3 text-center font-bold text-white"
          >
            Fale Conosco no WhatsApp
          </Link>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=2071&auto=format&fit=crop"
          alt="Produção de Cerveja Artesanal"
          className="h-full w-full object-cover"
          width={900}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-40 text-center lg:pt-10">
        <Reveal>
          <span className="mb-6 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-semibold tracking-wider text-amber-400">
            CONSULTORIA CERVEJEIRA ESPECIALIZADA
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Elevando o padrão <br />
            da sua{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Cerveja
            </span>
            .
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-300 md:text-xl">
            Da criação de receitas premiadas à otimização do processo
            industrial. Transformamos paixão em excelência técnica e resultados.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/5544999561963"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transform items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-amber-900/40 transition-all hover:scale-105 hover:bg-amber-500"
            >
              Agendar Consultoria Gratuita <FaArrowRight size={20} />
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-stone-600 bg-stone-950/30 px-8 py-4 text-lg font-bold text-stone-300 backdrop-blur-sm transition-all hover:border-stone-400 hover:text-white"
            >
              Conhecer Serviços
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="sobre"
      className="overflow-hidden bg-stone-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-amber-500/20 blur-lg"></div>
              <Image
                src="https://images.unsplash.com/photo-1532634726-8b9fb99845fd?q=80&w=1170&auto=format&fit=crop"
                alt="Mestre Cervejeiro analisando cerveja"
                className="relative rounded-2xl border border-stone-800 shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
                width={600}
                height={600}
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-stone-700 bg-stone-900/90 p-6 backdrop-blur-md">
                <p className="mb-1 text-lg font-bold text-amber-500">
                  +5 Anos de Experiência
                </p>
                <p className="text-sm text-stone-400">
                  Levando conhecimento cervejeiro com paixão e precisão.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Paixão pela Cerveja, <br />
              <span className="text-amber-500">Rigor na Ciência.</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-stone-300">
              A <span className="font-bold text-white">Meva Consultoria</span>{" "}
              nasceu da necessidade de unir a arte de fazer cerveja com
              processos industriais eficientes e controlados.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-stone-300">
              Não entregamos apenas receitas; entregamos consistência,
              estabilidade e qualidade. Seja você um cervejeiro caseiro querendo
              escalar ou uma indústria buscando otimização, nós temos a solução
              técnica ideal.
            </p>

            <ul className="space-y-4">
              {[
                "Otimização de custos de produção",
                "Padronização sensorial",
                "Solução de problemas",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="flex-shrink-0 text-amber-500" />
                  <span className="text-stone-200">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaFlask size={40} />,
      title: "Criação de Receitas",
      description:
        "Desenvolvimento de receitas exclusivas, ajustes de formulação e adaptação para diferentes escalas de produção, garantindo o perfil sensorial desejado.",
    },
    {
      icon: <IoSettingsSharp size={40} />,
      title: "Melhoria de Processos",
      description:
        "Análise completa da linha de produção para aumentar a eficiência, reduzir desperdícios e otimizar o tempo de brassagem e fermentação.",
    },
    {
      icon: <FaAward size={40} />,
      title: "Controle de Qualidade",
      description:
        "Implementação de protocolos de laboratório, análise microbiológica e treinamento sensorial para garantir que sua cerveja esteja sempre perfeita.",
    },
  ];

  return (
    <section id="servicos" className="relative bg-stone-900 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-3 font-bold uppercase tracking-widest text-amber-500">
              Nossas Soluções
            </h2>
            <h3 className="text-3xl font-bold text-white md:text-5xl">
              Como podemos ajudar sua cervejaria
            </h3>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="group flex h-full flex-col rounded-2xl border border-stone-800 bg-stone-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-900/10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-stone-900 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-stone-950">
                  {service.icon}
                </div>
                <h4 className="mb-4 text-xl font-bold text-white">
                  {service.title}
                </h4>
                <p className="flex-grow leading-relaxed text-stone-400">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?q=80&w=2070&auto=format&fit=crop"
          alt="Copo de cerveja"
          className="h-full w-full object-cover opacity-80"
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-stone-950/90"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Pronto para levar sua cerveja <br />
            ao <span className="text-amber-500">próximo nível?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-stone-300">
            Não deixe sua produção estagnar. Entre em contato agora e vamos
            realizar os primeiros ajustes pelo WhatsApp.
          </p>
          <Link
            href="https://wa.me/5544999561963"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex w-3/4 transform items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-2 font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#20bd5a] md:py-5 md:text-xl"
          >
            <FaWhatsapp size={24} />
            Iniciar Conversa no WhatsApp
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-stone-900 bg-stone-950 py-12 text-stone-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-stone-800 p-1.5">
            <FaBeer className="h-5 w-5 text-amber-500" />
          </div>
          <span className="text-xl font-bold tracking-wide text-white">
            MEVA <span className="text-amber-500">Consultoria</span>
          </span>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Meva Consultoria. Todos os direitos
          reservados.
        </div>

        <div className="flex gap-6">
          <Link
            href="https://www.instagram.com/meva.consultoria/"
            className="transition-colors hover:text-amber-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://wa.me/5544999561963"
            className="transition-colors hover:text-amber-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
};

// --- Componente Principal ---

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-stone-950 font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <Link
        href="https://wa.me/5544999561963"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce-slow fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-110 hover:bg-[#20bd5a]"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp size={28} fill="currentColor" />
      </Link>
    </main>
  );
}
