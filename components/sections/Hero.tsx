import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white pt-32">

      {/* Imagen de fondo */}
      <Image
        src="/hero.png"
        alt="Perdiz roja en entorno natural"
        fill
        priority
        className="object-cover object-center md:object-[center_30%]"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6">

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Perdiz Roja de Calidad  
          <br /> Especialistas en Machos de Reclamo
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10">
          Más de 16 años de experiencia en cría y selección.
          Distribución en Andalucía y Murcia.
          Trato directo y profesional.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="https://wa.me/34607357158"
            target="_blank"
            className="bg-primary hover:bg-secondary transition-colors px-8 py-4 rounded-full text-lg font-medium"
          >
            Contactar por WhatsApp
          </a>

          <Link
            href="/reclamo"
            className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors"
          >
            Ver machos de reclamo
          </Link>

        </div>

      </div>
    </section>
  );
}