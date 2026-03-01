import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-32 bg-primary text-white">
      <Container className="py-24">

        {/* ===== FILA 1 ===== */}
        <div className="grid md:grid-cols-3 gap-16 items-start text-center md:text-left">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/logo.svg"
              alt="Perdices Tavi"
              width={200}
              height={200}
              className="brightness-0 invert drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* SECCIONES (CENTRO) */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm uppercase tracking-widest text-white/70 mb-6">
              Secciones
            </h4>

            <ul className="space-y-4 text-lg font-medium">
              <li>
                <Link href="/reclamo" className="hover:text-accent transition-colors">
                  Reclamo
                </Link>
              </li>
              <li>
                <Link href="/repoblacion" className="hover:text-accent transition-colors">
                  Repoblación
                </Link>
              </li>
              <li>
                <Link href="/ferias" className="hover:text-accent transition-colors">
                  Ferias
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO (DERECHA) */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm uppercase tracking-widest text-white/70 mb-6">
              Contacto
            </h4>

            <ul className="space-y-5 text-lg">

              {/* TELÉFONO */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.7 11.7 0 0 0 3.7.6 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A19 19 0 0 1 2 5a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1 11.7 11.7 0 0 0 .6 3.7 1 1 0 0 1-.2 1z" />
                </svg>
                <a
                  href="tel:+34607357158"
                  className="hover:text-accent transition-colors"
                >
                  +34 607 35 71 58
                </a>
              </li>

              {/* UBICACIÓN */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
                </svg>
                <span>Huéneja (Granada)</span>
              </li>

            </ul>
          </div>

        </div>

        {/* ===== FILA 2 – REDES ===== */}
        <div className="mt-20 flex justify-center gap-16">

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/PerdicesTavi/"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-10 h-10 fill-white drop-shadow-lg" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.7v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a href="#" className="hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white drop-shadow-lg" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8zm5.2-1.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
            </svg>
          </a>

          {/* TIKTOK */}
          <a href="#" className="hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white drop-shadow-lg" viewBox="0 0 24 24">
              <path d="M21 8.5a7.5 7.5 0 0 1-4.5-1.4V15a5 5 0 1 1-5-5h.5v3h-.5a2 2 0 1 0 2 2V2h3a4.5 4.5 0 0 0 4.5 4.5v2z" />
            </svg>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/34607357158"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-10 h-10 fill-white drop-shadow-lg" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-8.7 15l-1.2 4.3 4.4-1.1A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.2-1.2l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 1 1 12 20zm4.4-6.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.7.7-.7 1.7s.7 2 1 2.3c.1.2 1.6 2.4 3.9 3.3.5.2 1 .3 1.3.4.6.2 1.1.2 1.5.1.5-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3z" />
            </svg>
          </a>

        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Perdices Tavi. Todos los derechos reservados.
        </div>

      </Container>
    </footer>
  );
}