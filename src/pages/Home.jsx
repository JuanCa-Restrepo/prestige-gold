import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import FeaturedPieces from "../components/FeaturedPieces";
import Craftsmanship from "../components/Craftsmanship";
import Divider from "../components/Divider";
import Catalog from "../components/Catalog";

function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Header />
      <main>
        <Hero />
        <Divider />
        <Catalog />
        <Divider />
        <FeaturedPieces />
        <Divider />
        <Collections />       
        <Divider />
        <Craftsmanship />
      </main>
    </div>
  );
}

export default Home;