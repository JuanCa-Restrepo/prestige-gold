import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function CollectionCard({ title, image, href = "#" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative block overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg-soft)]"
    >
      <div className="absolute inset-0 z-10 bg-black/20 transition duration-500 group-hover:bg-black/10" />

      <img
        src={image}
        alt={title}
        className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
      />

      <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3
              className="text-3xl text-white md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {title}
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)] transition duration-300 group-hover:tracking-[0.28em]">
              Ver colección
            </p>
          </div>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(0,0,0,0.28)] text-white transition duration-300 group-hover:border-[var(--color-gold)] group-hover:bg-[rgba(198,165,92,0.08)] group-hover:text-[var(--color-gold)]">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default CollectionCard;