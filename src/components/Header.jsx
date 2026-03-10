import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Container from "./Container";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(198,165,92,0.15)] backdrop-blur-md">
      <Container>
        <div className="flex h-[74px] items-center justify-between">
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#colecciones"
              className="text-sm uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition hover:text-[var(--color-gold)]"
            >
              Manillas
            </a>
            <a
              href="#colecciones"
              className="text-sm uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition hover:text-[var(--color-gold)]"
            >
              Anillos
            </a>
            <a
              href="#colecciones"
              className="text-sm uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition hover:text-[var(--color-gold)]"
            >
              Dijes
            </a>
            <a
              href="#colecciones"
              className="text-sm uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition hover:text-[var(--color-gold)]"
            >
              Otros
            </a>
          </nav>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu size={18} />
          </button>

          <a href="#" className="flex items-center justify-center">
            <img
            src="/src/assets/logo/logo-pg.png"
            alt="Prestige Gold"
            className="h-16 w-16 rounded-full object-cover"
/               >
          </a>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-[var(--color-text-muted)] transition hover:border-[var(--color-border)] hover:text-[var(--color-gold)]"
              aria-label="Buscar"
            >
              <Search size={18} />
            </button>

            <button
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-transparent text-[var(--color-text-muted)] transition hover:border-[var(--color-border)] hover:text-[var(--color-gold)] md:flex"
              aria-label="Perfil"
            >
              <User size={18} />
            </button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-[var(--color-text-muted)] transition hover:border-[var(--color-border)] hover:text-[var(--color-gold)]"
              aria-label="Bolsa"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;