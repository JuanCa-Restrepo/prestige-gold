import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group block overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg-soft)]"
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.05] md:h-[380px]"
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div>
          <h3
            className="text-2xl text-[var(--color-text)] md:text-[30px]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {product.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)] line-clamp-2">
            {product.description}
          </p>
        </div>

        <span className="shrink-0 text-xs uppercase tracking-[0.22em] text-[var(--color-gold)] transition group-hover:text-[var(--color-gold-soft)]">
          Ver detalles
        </span>
      </div>
    </motion.a>
  );
}

export default ProductCard;