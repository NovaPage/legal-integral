"use client";

import Image from "next/image";
import { CTAButton } from "@/components/ui/cta-button";
import { ServiceCard } from "@/components/ServiceCard";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiShieldCheckFill,
  RiScales3Fill,
  RiGovernmentFill,
  RiUserHeartFill,
} from "react-icons/ri";
import { AppointmentForm } from "@/components/AppointmentForm";

// Imágenes
const LOGO_SRC = "/logo-legal-integral.png";
// const PORTADA_SRC = "/portada-abogados.jpg";
const CEO_SRC = "/about-lawyer.jpg";
const BALANCE_SRC = "/balance.jpg";

// WhatsApp real:
const WHATSAPP_LINK =
  "https://wa.me/573001234567?text=Hola%20quiero%20asesoría%20legal%20con%20Legal%20Integral%20SAS";

export default function Home() {
  return (
    <main className="bg-bgSection min-h-screen w-full">
      {/* HERO PRINCIPAL */}
      <section className="w-full bg-gradient-to-br from-primary via-secondary to-primary text-white relative pb-12">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo GRANDE: primero en DOM, pero ordenado visualmente */}
          <div className="flex-1 flex justify-center md:justify-end items-center order-1 md:order-2">
            <div className="relative">
              <Image
                src={LOGO_SRC}
                width={420}
                height={420}
                alt="Legal Integral S.A.S. Logo"
                className="drop-shadow-2xl rounded-2xl"
                priority
              />
            </div>
          </div>
          {/* Texto y botón: segundo en DOM, pero ordenado visualmente */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-7 drop-shadow-lg leading-tight md:leading-[1.13]">
              Comprometidos con su tranquilidad legal
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide mb-8 max-w-lg">
              Experiencia, ética y resultados.<br className="hidden md:inline" />
              Consultoría jurídica de alto nivel para empresas y personas.
            </p>
            <CTAButton href={WHATSAPP_LINK} className="md:w-fit w-full">
              Asesoría directa
            </CTAButton>
          </div>
        </div>
      </section>



      {/* CTA WhatsApp */}
      <section className="max-w-7xl mx-auto w-full py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
        {/* Imagen: siempre igual de alta que el card, más ancha en desktop */}
        <div className="flex flex-col items-center h-full">
          <div
            className="relative w-full min-w-[320px] max-w-[500px] h-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <Image
              src={CEO_SRC}
              alt="CEO firma abogados"
              fill
              style={{ objectFit: "cover", transition: "transform .2s" }}
              className="group-hover:scale-[1.035]"
              priority
            />
          </div>
          <div className="mt-5 text-gold font-semibold text-lg md:text-xl text-center">
            Legal Integral S.A.S.
          </div>
        </div>
        {/* Card de texto, ocupa todo el resto */}
        <div className="flex flex-col justify-center h-full flex-1">
          <div className="bg-white bg-opacity-90 border border-gray-200 rounded-2xl shadow-md px-10 py-10 w-full h-full flex flex-col justify-center">
            <h2 className="text-gold text-3xl font-semibold mb-6">Sobre nosotros</h2>
            <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
              Legal Integral S.A.S se ha consolidado como una firma de referencia en servicios jurídicos integrales.
              Nuestro equipo está conformado por abogados especializados en derecho procesal, probatorio, civil, administrativo y penal.
              Nuestra metodología de trabajo se fundamenta en la atención personalizada y el análisis detallado de cada caso.
              Garantizamos una comunicación directa y soluciones eficientes para nuestros clientes.
            </p>
            <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
              En Legal Integral S.A.S, nuestro compromiso va más allá de la asesoría jurídica, porque nos enfocamos en construir relaciones duraderas con nuestros clientes, entendiendo y solucionando sus necesidades específicas.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Nuestros valores de integridad, excelencia y responsabilidad son la base de cada servicio que ofrecemos.
              La satisfacción de nuestros clientes es nuestro mayor respaldo.
            </p>
          </div>
        </div>
      </section>



      {/* SERVICIOS */}
      <section className="max-w-7xl mx-auto w-full py-10 px-4">
        {/* Balanza grande centrada arriba */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div
            className="relative w-full max-w-[520px] aspect-[2/1] rounded-2xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-2xl group"
          >
            <Image
              src={BALANCE_SRC}
              alt="Balanza justicia"
              fill
              style={{ objectFit: "cover", transition: "transform .2s" }}
              className="group-hover:scale-[1.035]"
              priority
            />
          </div>
          <h2 className="text-gold text-3xl md:text-4xl font-bold text-center mt-6">
            Nuestros Servicios
          </h2>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          <ServiceCard
            title="Derecho Empresarial"
            icon={<RiBriefcase4Fill className="text-accent w-10 h-10 mb-4" />}
          >
            Asesoría integral para empresas y negocios.<br />
            <b>Confíe en nuestros expertos.</b><br />
            • Contratos y sociedades<br />
            • Litigios y defensa jurídica<br />
            • Cumplimiento normativo
          </ServiceCard>

          <ServiceCard
            title="Derecho Civil y Familia"
            icon={<RiTeamFill className="text-accent w-10 h-10 mb-4" />}
          >
            Soluciones legales para su familia y patrimonio.<br />
            <b>Defensa cercana y efectiva.</b><br />
            • Divorcios y sucesiones<br />
            • Contratos y herencias<br />
            • Reclamaciones civiles
          </ServiceCard>

          <ServiceCard
            title="Derecho Penal y Defensa"
            icon={<RiShieldCheckFill className="text-accent w-10 h-10 mb-4" />}
          >
            Defensa penal experta ante cualquier proceso.<br />
            <b>Actuamos con rapidez y rigor.</b><br />
            • Audiencias y recursos<br />
            • Acompañamiento integral<br />
            • Representación en procesos
          </ServiceCard>

          <ServiceCard
            title="Derecho Laboral"
            icon={<RiScales3Fill className="text-accent w-10 h-10 mb-4" />}
          >
            Protegemos tus derechos laborales.<br />
            <b>Soluciones para empleados y empresas.</b><br />
            • Despidos y conciliaciones<br />
            • Demandas laborales<br />
            • Reclamaciones legales
          </ServiceCard>

          <ServiceCard
            title="Fotomultas y Multas de Tránsito"
            icon={<RiGovernmentFill className="text-accent w-10 h-10 mb-4" />}
          >
            Asesoramos en casos de comparendos por foto detección y multas de tránsito.<br />
            <b>No pagues sin antes consultarnos.</b><br />
            • Analizamos tu caso<br />
            • Te representamos legalmente<br />
            • Acompañamiento en todo el proceso
          </ServiceCard>

          <ServiceCard
            title="Derechos Humanos y Tutelas"
            icon={<RiUserHeartFill className="text-accent w-10 h-10 mb-4" />}
          >
            Protegemos tus derechos fundamentales.<br />
            <b>Justicia y dignidad para todos.</b><br />
            • Acciones de tutela<br />
            • Casos de salud y educación<br />
            • Defensa constitucional
          </ServiceCard>

        </div>
      </section>


     <section className="max-w-3xl mx-auto py-10 px-4">
       <h2 className="text-primary text-2xl md:text-3xl font-bold mb-8 text-center">
        Reserve su cita
       </h2>
      <AppointmentForm />
     </section>


      {/* FOOTER CTA */}
      <footer className="bg-primary text-white py-12 px-4 flex flex-col items-center">
        <p className="text-xl md:text-2xl font-semibold text-center mb-3">
          Protegemos tu tranquilidad y tus intereses.
        </p>
        <p className="text-base md:text-lg text-center max-w-2xl mb-6">
          En Legal Integral S.A.S encuentras abogados confiables, modernos y humanos. Te acompañamos desde la consulta inicial hasta la solución final. ¡Recibe asesoría profesional hoy!
        </p>
        <CTAButton href={WHATSAPP_LINK}>
          Agenda tu cita con un especialista
        </CTAButton>
        <div className="text-xs text-gray-300 mt-6">
          © {new Date().getFullYear()} Legal Integral S.A.S | Todos los derechos reservados
        </div>
      </footer>
    </main>
  );
}
