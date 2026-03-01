import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";

export default function Services() {
  return (
    <section className="py-28 bg-white">
      <Container>

        {/* TITULO */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Especialización, selección y calidad en cada ejemplar.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* MACHOS DE RECLAMO */}
          <Link href="/reclamo" className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/servicio-reclamo.png"
              alt="Macho de reclamo en caza"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Machos de Reclamo
              </h3>
              <p className="text-white/90">
                Selección cuidada y rendimiento garantizado para la temporada.
              </p>
            </div>
          </Link>

          {/* REPOBLACIÓN */}
          <Link href="/repoblacion" className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/servicio-repoblacion.png"
              alt="Perdices en campo abierto"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Repoblación
              </h3>
              <p className="text-white/90">
                Perdiz roja criada en instalaciones propias.
              </p>
            </div>
          </Link>

          {/* OJEOS */}
          <Link href="/ferias" className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/servicio-ojeo.png"
              alt="Perdices volando en ojeo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Ojeos
              </h3>
              <p className="text-white/90">
                Ejemplares preparados para jornadas de caza organizadas.
              </p>
            </div>
          </Link>

        </div>

      </Container>
    </section>
  );
}