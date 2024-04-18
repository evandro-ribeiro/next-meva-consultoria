import Image from "next/image";
import { ReactElement } from "react";

interface CardProps {
  title: string;
  icon: ReactElement;
}

export default function LessonCards({ title, icon }: CardProps) {
  return (
    <div className="relative flex w-1/2 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-amber-600 p-6 text-center">
      <Image
        className="absolute right-0 w-24 opacity-60"
        src={"/malte.png"}
        alt="Hop image"
        width={180}
        height={50}
      />
      <>{icon}</>
      <h4 className="text-lg font-bold">{title}</h4>
    </div>
  );
}
