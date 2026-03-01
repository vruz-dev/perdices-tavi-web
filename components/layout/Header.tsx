"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral/95 backdrop-blur-md py-4"
          : "bg-neutral py-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)]"
      }`}
    >
<Container className="relative flex items-center justify-center">

  {/* MOBILE HAMBURGER */}
  <button
    className="md:hidden absolute right-6 flex flex-col gap-1"
    onClick={() => setOpen(!open)}
  >
    <span className="w-6 h-0.5 bg-dark"></span>
    <span className="w-6 h-0.5 bg-dark"></span>
    <span className="w-6 h-0.5 bg-dark"></span>
  </button>

  {/* BLOQUE CENTRADO LOGO + NAV */}
  <div className="flex items-center gap-25">

    {/* LOGO */}
    <Link href="/">
            <Image
        src="/logo.svg"
        alt="Perdices Tavi"
        width={160}
        height={160}
        priority
        className={`transition-all duration-500 ${
            scrolled ? "scale-85" : "scale-100"
        }`}
        />
    </Link>

    {/* DESKTOP NAV */}
    <nav className="hidden md:flex items-center gap-10 text-base font-medium tracking-wide">
      <Link href="/reclamo" className="hover:text-primary transition-colors">
        RECLAMO
      </Link>

      <Link href="/repoblacion" className="hover:text-primary transition-colors">
        REPOBLACIÓN
      </Link>

      <Link href="/ferias" className="hover:text-primary transition-colors">
        FERIAS
      </Link>

      <Link
        href="/contacto"
        className="bg-primary text-white px-7 py-3 rounded-full hover:bg-secondary transition-all"
      >
        CONTACTO
      </Link>
    </nav>

  </div>
</Container>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-neutral border-t border-black/10">
          <Container className="flex flex-col gap-6 py-8 text-center text-lg font-medium">
            <Link href="/reclamo" onClick={() => setOpen(false)}>
              RECLAMO
            </Link>

            <Link href="/repoblacion" onClick={() => setOpen(false)}>
              REPOBLACIÓN
            </Link>

            <Link href="/ferias" onClick={() => setOpen(false)}>
              FERIAS
            </Link>

            <Link
              href="/contacto"
              className="bg-primary text-white py-3 rounded-full"
              onClick={() => setOpen(false)}
            >
              CONTACTO
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}