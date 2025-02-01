"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  // LET THE NAVBAR ACTIVE FOR INCLUSION OF FUTURE PAGES
  const pathname = usePathname();
  return (
    <section className="flex justify-around py-6">
      <Link href="/">
        <span
          className={
            pathname === "/"
              ? "rounded-xl bg-orange-400 p-2 text-sm md:text-base"
              : ""
          }
        >
          HOME
        </span>
      </Link>
      <p className="font-abril text-sm font-bold text-zinc-400 md:text-2xl">
        MEVA CONSULTORIA
      </p>
    </section>
  );
}
