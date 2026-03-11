import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import FeaturedCard from "./FeaturedCard";

import pieza1 from "../assets/images/featured/pieza-1.jpeg";
import pieza2 from "../assets/images/featured/pieza-2.jpeg";
import pieza3 from "../assets/images/featured/pieza-3.jpeg";
import pieza4 from "../assets/images/featured/pieza-4.jpeg";

const featured = [
  { title: "Manilla Prestige", image: pieza1 },
  { title: "Anillo Tejido", image: pieza2 },
  { title: "Dije Corona", image: pieza3 },
  { title: "Manilla Onix", image: pieza4 },
];

function FeaturedPieces() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <SectionTitle
          eyebrow="Selección"
          title="Piezas destacadas"
          description="Una curaduría de piezas esenciales que representan la identidad visual de Prestige Gold."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-12"
        >
          <button className="featured-prev absolute left-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-black/60 text-[var(--color-text)] backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:flex">
            <ChevronLeft size={22} />
          </button>

          <button className="featured-next absolute right-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-black/60 text-[var(--color-text)] backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:flex">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".featured-next",
              prevEl: ".featured-prev",
            }}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.6,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 2.6,
                spaceBetween: 24,
              },
            }}
          >
            {featured.map((item, index) => (
              <SwiperSlide key={item.title}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <FeaturedCard title={item.title} image={item.image} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
}

export default FeaturedPieces;