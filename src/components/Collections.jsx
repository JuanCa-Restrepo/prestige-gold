import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import CollectionCard from "./CollectionCard";

import manillasImg from "../assets/images/collections/manillas.jpeg";
import anillosImg from "../assets/images/collections/anillos.jpeg";
import dijesImg from "../assets/images/collections/dijes.jpeg";
import otrosImg from "../assets/images/collections/otros.jpeg";

const collections = [
  { title: "Manillas", image: manillasImg },
  { title: "Anillos", image: anillosImg },
  { title: "Dijes", image: dijesImg },
  { title: "Otros", image: otrosImg },
];

function Collections() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Colecciones"
          title="Explora por categoría"
          center
        />

        <div className="relative mt-12">

          {/* FLECHA IZQUIERDA */}
          <button className="collection-prev absolute left-[-20px] top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-black/60 backdrop-blur-md transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
            <ChevronLeft size={22}/>
          </button>

          {/* FLECHA DERECHA */}
          <button className="collection-next absolute right-[-20px] top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-black/60 backdrop-blur-md transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
            <ChevronRight size={22}/>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".collection-next",
              prevEl: ".collection-prev",
            }}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.4 },
            }}
          >
            {collections.map((item, index) => (
              <SwiperSlide key={index}>
                <CollectionCard
                  title={item.title}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </Container>
    </section>
  );
}

export default Collections;