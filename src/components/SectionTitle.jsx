function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[var(--color-gold)]">
          {eyebrow}
        </p>
      )}

      <h2
        className="text-4xl text-[var(--color-text)] md:text-5xl"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;