import ConsultCards from "@/components/consultCards";
import LessonCards from "@/components/lessonCards";
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
      {/* FIRST SECTION - CONSULTORIA */}
      <div className="flex flex-col items-center gap-8 pt-16">
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
