import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import CollectionCard from "./CollectionCard";

import manillasImg from "../assets/images/collections/manillas.jpeg";
import anillosImg from "../assets/images/collections/anillos.jpeg";
import dijesImg from "../assets/images/collections/dijes.jpeg";
import otrosImg from "../assets/images/collections/otros.jpeg";

const collections = [
  { title: "Manillas", image: manillasImg, href: "#catalogo" },
  { title: "Anillos", image: anillosImg, href: "#catalogo" },
  { title: "Dijes", image: dijesImg, href: "#catalogo" },
  { title: "Otros", image: otrosImg, href: "#catalogo" },
];

function Collections() {
  return (
    <section id="colecciones" className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="Colecciones"
          title="Explora por categoría"
          description="Una navegación más visual, fluida e interactiva para descubrir cada tipo de pieza."
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            grabCursor={true}
            slidesPerView={1.1}
            breakpoints={{
              640: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.4,
                spaceBetween: 24,
              },
            }}
            className="prestige-swiper"
          >
            {collections.map((item, index) => (
              <SwiperSlide key={item.title}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <CollectionCard
                    title={item.title}
                    image={item.image}
                    href={item.href}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
}

export default Collections;