import Image from "next/image";
import { ReactElement } from "react";

interface CardProps {
  title: string;
  icon: ReactElement;
}

export default function ConsultCards({ title, icon }: CardProps) {
  return (
    <div className="relative flex h-48 w-80 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-amber-800 p-6 text-center">
      <Image
        className="absolute -top-4 h-24 w-48 opacity-20"
        src={"/lupulo.png"}
        alt="Hop image"
        width={180}
        height={50}
      />
      <span className="pt-8">{icon}</span>
      <h4 className="text-lg font-bold">{title}</h4>
    </div>
  );
}
