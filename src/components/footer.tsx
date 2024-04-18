import Link from "next/link";
import { FaInstagram, FaRegCopyright, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-around bg-amber-600 py-4 font-bold text-zinc-800">
      <div className="flex items-center gap-5">
        <Link
          href={"https://t.me/evandrormf"}
          target="blank"
          className="rounded-full border-2 border-red-800 p-2 hover:bg-orange-950 hover:text-zinc-400"
        >
          <FaTelegramPlane size={25} />
        </Link>
        <Link
          href={"https://www.instagram.com/meva.consultoria/"}
          target="blank"
          className="rounded-full border-2 border-red-800 p-2 hover:bg-orange-950 hover:text-zinc-400"
        >
          <FaInstagram size={25} />
        </Link>
      </div>
      <span className="flex items-center">
        Todos os direitos reservados.
        <FaRegCopyright size={12} />
      </span>
    </div>
  );
}
