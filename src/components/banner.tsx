"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner() {
  const h2Desktop =
    "hidden rounded-full bg-zinc-700 p-4 text-3xl text-amber-300 shadow-xl shadow-yellow-300 backdrop-blur-xl md:block";
  const h2Smartphone =
    "rounded-full bg-zinc-700 p-4 text-xl text-amber-300 shadow-xl shadow-yellow-300 backdrop-blur-xl md:hidden";
  const divStyle = "mb-10 flex flex-col items-center gap-16 md:flex-row";
  return (
    <section className="mt-10 flex flex-col items-center">
      <motion.div
        className={divStyle}
        initial={{ x: -200, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* TITLE IN SMARTPHONE LAYOUT */}
        <h2 className={h2Smartphone}>Criação e Análise de Receitas</h2>
        <Image
          src={"/recipe.jpg"}
          alt="Beer photograph"
          width={600}
          height={600}
          className="rounded-md"
        />
        {/* TITLE IN DESKTOP LAYOUT */}
        <h2 className={h2Desktop}>Criação e Análise de Receitas</h2>
      </motion.div>
      <motion.div
        className={divStyle}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className={h2Desktop}>Melhoria do Processo de Produção</h2>
        <h2 className={h2Smartphone}>Melhoria do Processo de Produção</h2>
        <Image
          src={"/beer.jpg"}
          alt="Beer photograph"
          width={600}
          height={600}
          className="rounded-md"
        />
      </motion.div>
      <motion.div
        className={divStyle}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className={h2Smartphone}>Controle de Qualidade</h2>
        <Image
          src={"/beer2.jpg"}
          alt="Beer photograph"
          width={600}
          height={600}
          className="rounded-md"
        />
        <h2 className={h2Desktop}>Controle de Qualidade</h2>
      </motion.div>
    </section>
  );
}
