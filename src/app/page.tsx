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
      <section className="w-full bg-secondary py-6 px-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="text-white text-base md:text-lg font-medium text-center md:text-left max-w-2xl">
          ¿Dudas legales? Agenda tu primera cita con un especialista.
        </span>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="max-w-5xl mx-auto w-full py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-1 flex flex-col items-center mb-10 md:mb-0">
          <div
            className="relative rounded-xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-2xl group"
            style={{
              width: "270px",
              height: "340px",
              maxWidth: "100%",
            }}
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
        <div className="md:col-span-2 flex items-center">
          <div className="bg-white bg-opacity-90 border border-gray-200 rounded-2xl shadow-md px-8 py-8 w-full">
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
      <section className="max-w-7xl mx-auto w-full py-20 px-4">
        {/* Balanza grande centrada arriba */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div
            className="relative rounded-xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-2xl group"
              style={{
                width: "270px",
                height: "340px",
                maxWidth: "100%",
              }}
          >
            <Image
              src={BALANCE_SRC  }
              alt="CEO firma abogados"
              fill
              style={{ objectFit: "cover", transition: "transform .2s" }}
              className="group-hover:scale-[1.035]"
              priority
            />
          </div>
          <h2 className="text-gold text-3xl md:text-4xl font-bold text-center mt-2">
            Nuestros Servicios
          </h2>
        </div>
        {/* Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          <ServiceCard
            title="Derecho Empresarial"
            icon={<RiBriefcase4Fill className="text-accent w-10 h-10 mb-4" />}
          >
            Asesoría integral en contratos, sociedades, cumplimiento normativo, protección de datos y litigios empresariales. Soluciones estratégicas para tu negocio.
          </ServiceCard>
          <ServiceCard
            title="Derecho Civil y Familia"
            icon={<RiTeamFill className="text-accent w-10 h-10 mb-4" />}
          >
            Procesos civiles, divorcios, sucesiones, reclamaciones, contratos, herencias y derechos de familia. Trato humano y resultados reales.
          </ServiceCard>
          <ServiceCard
            title="Derecho Penal y Defensa"
            icon={<RiShieldCheckFill className="text-accent w-10 h-10 mb-4" />}
          >
            Defensa penal experta, representación en audiencias, recursos y procesos penales. Acompañamiento en situaciones delicadas y urgentes.
          </ServiceCard>
          <ServiceCard
            title="Derecho Laboral"
            icon={<RiScales3Fill className="text-accent w-10 h-10 mb-4" />}
          >
            Representación en procesos laborales, despidos, reclamaciones y conciliaciones. Defensa tanto para empresas como para trabajadores.
          </ServiceCard>
          <ServiceCard
            title="Contratación Estatal"
            icon={<RiGovernmentFill className="text-accent w-10 h-10 mb-4" />}
          >
            Asesoría en licitaciones, contratos con el Estado y defensa ante entidades públicas. Evita riesgos y asegura el cumplimiento.
          </ServiceCard>
          <ServiceCard
            title="Derechos Humanos y Tutelas"
            icon={<RiUserHeartFill className="text-accent w-10 h-10 mb-4" />}
          >
            Protección de derechos fundamentales, acciones de tutela, mecanismos constitucionales y defensa integral de la dignidad.
          </ServiceCard>
        </div>
      </section>


     <section className="max-w-3xl mx-auto py-16 px-4">
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
          En Legal Integral S.A.S encuentras abogados confiables, modernos y humanos. Te acompañamos desde la consulta inicial hasta la solución final. ¡Consulta sin costo y recibe asesoría profesional hoy!
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
