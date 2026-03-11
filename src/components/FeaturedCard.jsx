import { motion } from "framer-motion";

function FeaturedCard({ title, image, href = "#" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group block overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-bg-soft)]"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-[1.05] md:h-[460px]"
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-7 md:py-6">
        <h3
          className="text-2xl text-[var(--color-text)] md:text-[34px]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>

        <span className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold)] transition group-hover:text-[var(--color-gold-soft)]">
          Ver detalles
        </span>
      </div>
    </motion.a>
  );
}

export default FeaturedCard;