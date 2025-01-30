import ConsultCards from "@/components/consultCards";
import ContactBanner from "@/components/contactBanner";
import LessonCards from "@/components/lessonCards";
import Image from "next/image";
import { FaHandsHelping } from "react-icons/fa";
import { FaArrowTrendUp, FaFileCircleCheck } from "react-icons/fa6";
import { GiBeerStein, GiNoseSide } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { IoBeer } from "react-icons/io5";
import { LuBookOpenCheck, LuBookUp2 } from "react-icons/lu";
import { SiMicrosoftexcel } from "react-icons/si";
import { TbEyeCog } from "react-icons/tb";

export default function Servicos() {
  return (
    <section className="pb-20">
      <div className="relative">
        <video
          src="/video-malte.mp4"
          muted
          autoPlay
          loop
          className="absolute -z-10"
        />
        <div className="mb-32 flex flex-col items-center gap-4 pt-2 text-center backdrop-blur-lg md:mx-96 md:mb-0 md:p-6 md:backdrop-blur-xl">
          <h2 className="font-abril text-3xl font-bold text-amber-400 md:text-6xl">
            Serviços Oferecidos
          </h2>
          <p className="px-10 pb-2 text-sm md:text-xl lg:px-0">
            Para quem quer se aprofundar no universo cervejeiro e <br />
            produzir ótimas cervejas dos mais variados estilos
          </p>
        </div>
      </div>
      <ContactBanner />
      {/* FIRST SECTION - CONSULTORIA */}
      <div className="flex flex-col items-center gap-8">
        <h3 className="bg-yellow-gradient bg-clip-text text-2xl font-bold text-transparent md:text-5xl">
          CONSULTORIA CERVEJEIRA
        </h3>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <ConsultCards
            title="Desenvolvimento de Receitas"
            icon={<LuBookUp2 size={40} />}
          />
          <ConsultCards
            title="Análise de Processo"
            icon={<TbEyeCog size={40} />}
          />
          <ConsultCards
            title="Controle de Qualidade"
            icon={<GrValidate size={40} />}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-20">
          <ConsultCards
            title="Auxílio nas produções"
            icon={<IoBeer size={40} />}
          />
          <ConsultCards
            title="Organização de Análise Sensorial"
            icon={<GiNoseSide size={40} />}
          />
          <ConsultCards
            title="Gestão da Produção e de Custos"
            icon={<SiMicrosoftexcel size={40} />}
          />
        </div>
      </div>
      {/* SECOND SECTION - AULAS */}
      <div className="flex flex-col items-center gap-8 pt-10">
        <h3 className="bg-yellow-gradient bg-clip-text text-xl font-bold text-transparent md:text-5xl">
          AULAS DE PRODUÇÃO CERVEJEIRA
        </h3>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-20">
          <LessonCards
            title="Conhecimento Especializado"
            icon={<LuBookOpenCheck size={40} />}
          />
          <LessonCards
            title="Aprendizado por etapas do processo"
            icon={<GiBeerStein size={40} />}
          />
          <LessonCards
            title="Atendimento Personalizado"
            icon={<IoMdContacts size={40} />}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <LessonCards
            title="Tendências de Mercado"
            icon={<FaArrowTrendUp size={40} />}
          />
          <LessonCards
            title="Resolução de Problemas de Produção"
            icon={<FaFileCircleCheck size={40} />}
          />
          <LessonCards
            title="Suporte durante o curso"
            icon={<FaHandsHelping size={40} />}
          />
        </div>
      </div>
    </section>
  );
}
