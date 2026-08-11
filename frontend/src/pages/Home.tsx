import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Stack from "../components/Stack";
import Education from "../components/Education";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="bg-cream font-sans text-ink">
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <Stack />
      <Education />
      <Contact />
    </div>
  );
}

export default Home;
