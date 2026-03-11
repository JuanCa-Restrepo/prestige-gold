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
          description="Una curaduría de piezas esenciales que representan la identidad de Prestige Gold."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((item) => (
            <FeaturedCard
              key={item.title}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedPieces;