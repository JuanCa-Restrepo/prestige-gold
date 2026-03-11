import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import CatalogFilters from "./CatalogFilters";
import ProductCard from "./ProductCard";
import products from "../data/products";

function Catalog() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="catalogo" className="pb-20 md:pb-28">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Explora nuestras piezas"
          description="Filtra por categoría y desliza para descubrir cada pieza con una experiencia más cómoda y elegante."
          center
        />

        <CatalogFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative mt-12"
        >
          <button className="catalog-prev absolute left-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-black/60 text-[var(--color-text)] backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:flex">
            <ChevronLeft size={22} />
          </button>

          <button className="catalog-next absolute right-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-black/60 text-[var(--color-text)] backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:flex">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".catalog-next",
              prevEl: ".catalog-prev",
            }}
            grabCursor={true}
            spaceBetween={22}
            slidesPerView={1.08}
            breakpoints={{
              640: {
                slidesPerView: 1.35,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.8,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 2.4,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
            }}
          >
            {filteredProducts.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
}

export default Catalog;