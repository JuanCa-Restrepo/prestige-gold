import { useMemo, useState } from "react";
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
          description="Una selección organizada para descubrir el universo visual de Prestige Gold con una experiencia limpia y elegante."
          center
        />

        <CatalogFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Catalog;