"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <section className="flex justify-around py-6">
      <Link href="/">
        <span
          className={pathname === "/" ? "rounded-xl bg-orange-400 p-2" : ""}
        >
          HOME
        </span>
      </Link>
      <p className="font-abril font-bold text-zinc-400 md:text-2xl">
        MEVA CONSULTORIA
      </p>
      <div className="flex gap-6">
        <Link href="/servicos">
          <span
            className={
              pathname === "/servicos" ? "rounded-xl bg-orange-400 p-2" : ""
            }
          >
            SERVIÇOS
          </span>
        </Link>
      </div>
    </section>
  );
}
