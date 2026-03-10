import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import FeaturedPieces from "../components/FeaturedPieces";
import Craftsmanship from "../components/Craftsmanship";

function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Header />
      <main>
        <Hero />
        <Collections />
        <FeaturedPieces />
        <Craftsmanship />
      </main>
    </div>
  );
}

export default Home;