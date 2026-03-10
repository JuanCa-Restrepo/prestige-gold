import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";
import heroBracelet from "../assets/images/hero-bracelet.jpeg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pt-16 md:pt-24">
      <Container>
        <div className="grid items-center gap-12 pb-20 pt-6 md:grid-cols-2 md:gap-16 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[560px]"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.38em] text-[var(--color-gold)] md:text-sm">
              Prestige Gold
            </p>

            <h1
              className="text-5xl leading-none text-[var(--color-text)] md:text-7xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Joyería tejida
              <span className="block text-[var(--color-gold-soft)]">con identidad</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-[var(--color-text-muted)] md:text-lg">
              Manillas, anillos y dijes elaborados con diseño artesanal y acabado
              premium en oro 18K.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#colecciones"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-7 py-3 text-sm uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Explorar colección
                <ArrowRight size={16} />
              </a>

              <a
                href="#catalogo"
                className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition hover:text-[var(--color-gold)]"
              >
                Ver catálogo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[620px]">
              <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(198,165,92,0.12),transparent_65%)] blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-4 shadow-[var(--shadow-soft)] md:p-6">
                <img
                  src={heroBracelet}
                  alt="Manilla Prestige Gold"
                  className="h-[320px] w-full rounded-[24px] object-cover md:h-[520px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;