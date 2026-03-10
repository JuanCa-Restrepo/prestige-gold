import Container from "./Container";
import SectionTitle from "./SectionTitle";
import craftsmanshipBanner from "../assets/images/craftsmanship/craftsmanship-banner.png";

function Craftsmanship() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <div className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-bg-soft)]">
          <div className="grid items-center gap-0 lg:grid-cols-[1.05fr_1.2fr]">
            <div className="p-8 md:p-12 lg:p-14">
              <SectionTitle
                eyebrow="Identidad"
                title="El arte del tejido en oro"
                description="Cada pieza de Prestige Gold nace de una estética sobria, una elaboración cuidada y una intención clara: transformar el detalle en presencia."
              />

              <p className="mt-6 max-w-[520px] text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                Diseñamos manillas, anillos y dijes con una mirada artesanal y una
                ejecución visualmente refinada, pensada para una marca que quiere
                sentirse exclusiva desde el primer vistazo.
              </p>

              <a
                href="#catalogo"
                className="mt-8 inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[var(--color-text)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Descubrir piezas
              </a>
            </div>

            <div className="h-full">
              <img
                src={craftsmanshipBanner}
                alt="Proceso artesanal Prestige Gold"
                className="h-[320px] w-full object-cover md:h-[420px] lg:h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Craftsmanship;