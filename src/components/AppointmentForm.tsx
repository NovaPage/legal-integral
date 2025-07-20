"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CTAButton } from "@/components/ui/cta-button";

const WHATSAPP_NUMBER = "573508245822"; // sin + ni espacios

export function AppointmentForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSendWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const nombre = (form["nombre"] as HTMLInputElement).value.trim();
    const ciudad = (form["ciudad"] as HTMLInputElement).value.trim();
    const email = (form["email"] as HTMLInputElement).value.trim();
    const telefono = (form["telefono"] as HTMLInputElement).value.trim();
    const asunto = (form["asunto"] as HTMLInputElement).value.trim();
    const descripcion = (form["descripcion"] as HTMLTextAreaElement).value.trim();

    // Formatea el mensaje para WhatsApp
    const mensaje =
      `👋 Hola, me gustaría agendar una cita con Legal Integral S.A.S.%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Ciudad:* ${ciudad}%0A` +
      `*Email:* ${email}%0A` +
      (telefono ? `*Teléfono:* ${telefono}%0A` : "") +
      (asunto ? `*Asunto:* ${asunto}%0A` : "") +
      `*Descripción del caso:* ${descripcion}`;

    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
    window.open(link, "_blank");
  }

  return (
    <form
      ref={formRef}
      className="bg-white rounded-2xl shadow-2xl p-10 space-y-6 border border-gold"
      onSubmit={handleSendWhatsApp}
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" name="nombre" placeholder="Nombre Completo *" required />
        <Input type="text" name="ciudad" placeholder="Ciudad *" required />
        <Input type="email" name="email" placeholder="E-mail *" required />
        <Input type="tel" name="telefono" placeholder="Teléfono" />
        <Input type="text" name="asunto" placeholder="Asunto del servicio" />
      </div>
      <Textarea
        name="descripcion"
        rows={4}
        placeholder="Cuéntenos brevemente su caso. *"
        required
      />
      <CTAButton type="submit" className="w-full mt-2">
        Enviar por WhatsApp
      </CTAButton>
    </form>
  );
}
