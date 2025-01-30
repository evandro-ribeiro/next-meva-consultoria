import Link from "next/link";

export default function ContactBanner() {
  const linkStyle = "relative w-full hover:opacity-75 md:ml-0 md:w-1/3";
  const divStyleDesktop =
    "hidden flex flex-col items-center justify-center rounded-md border-4 border-amber-400 px-2 text-center backdrop-blur-lg md:flex";
  const divStyleSmartphone =
    "flex flex-col items-center justify-center rounded-md border-4 border-amber-400 p-4 text-center backdrop-blur-lg md:hidden";
  return (
    <section className="mx-auto flex h-fit w-2/3 flex-col items-center pb-16 md:h-screen md:w-full md:p-12">
      <div className="flex flex-col justify-center pb-14 md:flex-row">
        {/* DIV FOR DESKTOP */}
        <div className={divStyleDesktop}>
          <h2 className="py-6 md:text-4xl">
            Faça a melhor cerveja com o seu estilo
          </h2>
          <p>
            Entre em contato para fazer um orçamento de consultoria para a sua
            Produção Cervejeira
          </p>
        </div>
        {/* DIV FOR SMARTPHONES */}
        <div className={divStyleSmartphone}>
          <h2 className="py-6 text-lg font-bold">
            Faça a melhor cerveja com o seu estilo
          </h2>
          <p>
            Entre em contato para fazer um orçamento de consultoria para a sua
            Produção Cervejeira
          </p>
        </div>
        <Link
          href={"https://www.instagram.com/meva.consultoria/"}
          target="blank"
          className={linkStyle}
        >
          <video
            src="/loop-cerveja.mp4"
            muted
            autoPlay
            loop
            className="rounded-md"
          />
          <span className="absolute left-10 top-24 w-2/3 rounded-xl bg-orange-700 p-3 text-center shadow-xl shadow-orange-500 hover:scale-105 hover:bg-amber-500">
            Quero uma consultoria
          </span>
        </Link>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className={divStyleSmartphone}>
          <h2 className="py-6 text-lg font-bold">
            Aprenda a produzir suas cervejas
          </h2>
          <p>
            Aulas sobre o universo cervejeiro e todo o processo de produção de
            cervejas
          </p>
        </div>
        <Link
          href={"https://www.instagram.com/meva.consultoria/"}
          target="blank"
          className={linkStyle}
        >
          <video
            src="/loop-cerveja2.mp4"
            muted
            autoPlay
            loop
            className="rounded-md"
          />
          <span className="absolute right-10 top-24 w-2/3 rounded-xl bg-amber-500 p-3 text-center shadow-xl shadow-amber-700 hover:scale-105 hover:bg-amber-900">
            Quero aulas personalizadas
          </span>
        </Link>
        <div className={divStyleDesktop}>
          <h2 className="py-6 text-4xl">Aprenda a produzir suas cervejas</h2>
          <p>
            Aulas sobre o universo cervejeiro e todo o processo de produção de
            cervejas
          </p>
        </div>
      </div>
    </section>
  );
}
