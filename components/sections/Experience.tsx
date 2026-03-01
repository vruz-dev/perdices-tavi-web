import Image from "next/image";
import Container from "@/components/layout/Container";

export default function Experience() {
  return (
    <section className="py-28 bg-neutral">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              16 años criando calidad y confianza
            </h2>

            <p className="text-lg text-dark/80 mb-8 leading-relaxed">
              Desde 2010 trabajamos exclusivamente con perdiz roja,
              especializándonos en machos de reclamo seleccionados
              cuidadosamente para garantizar calidad y rendimiento.
            </p>

            <ul className="space-y-4 text-lg text-dark/80">
              <li>• Especialistas en machos de reclamo</li>
              <li>• Perdiz para repoblación y ojeos</li>
              <li>• Más de 20 ferias al año</li>
              <li>• Distribución en Andalucía y Murcia</li>
              <li>• Selección presencial en noviembre</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}