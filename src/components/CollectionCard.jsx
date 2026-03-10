import { ArrowUpRight } from "lucide-react";

function CollectionCard({ title, image, href = "#" }) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg-soft)]"
    >
      <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/10" />

      <img
        src={image}
        alt={title}
        className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3
              className="text-3xl text-white md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {title}
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
              Ver colección
            </p>
          </div>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(0,0,0,0.28)] text-white transition group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)]">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </a>
  );
}

export default CollectionCard;