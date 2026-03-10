import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import FeaturedPieces from "../components/FeaturedPieces";

function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Header />
      <main>
        <Hero />
        <Collections />
        <FeaturedPieces />
      </main>
    </div>
  );
}

export default Home;