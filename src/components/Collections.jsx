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
          description="Una navegación limpia para descubrir cada tipo de pieza sin recargar la experiencia."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => (
            <CollectionCard
              key={item.title}
              title={item.title}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Collections;