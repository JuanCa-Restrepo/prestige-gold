function FeaturedCard({ title, image, href = "#" }) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg-soft)]"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <h3
          className="text-2xl text-[var(--color-text)] md:text-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>

        <span className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold)] transition group-hover:text-[var(--color-gold-soft)]">
          Ver detalles
        </span>
      </div>
    </a>
  );
}

export default FeaturedCard;