"use client";

import { motion } from "framer-motion";

export default function HomeBanner() {
  const spanVariants = {
    initialColor: { color: "#FFF801" },
    transitionColor: {
      color: "#ffb01e",
      opacity: 1,
      x: 0,
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };
  const textForTransition = "MEVA CONSULTORIA";
  return (
    <section className="h-60 md:h-screen">
      <div className="relative">
        <motion.video
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute w-full bg-zinc-900 md:h-[37rem]"
          src="/video-cerveja1.mp4"
          muted
          autoPlay
          loop
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute mt-9 flex flex-col px-14 text-center text-3xl font-bold backdrop-blur-sm md:top-40 md:mt-0 md:px-96 md:text-6xl"
        >
          <motion.h1
            className="font-abril"
            transition={{ staggerChildren: 0.1, ease: "easeInOut" }}
            initial="initialColor"
            animate="transitionColor"
          >
            {textForTransition.split("").map((char, index) => (
              <motion.span variants={spanVariants} key={index}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <span className="pt-6 text-sm md:pt-14 md:text-3xl">
            O universo cervejeiro perto de você!
          </span>
        </motion.div>
      </div>
    </section>
  );
}
