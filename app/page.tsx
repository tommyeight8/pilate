import Classes from "./components/Classes";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />

      <Intro />

      <Classes />

      {/* <Faq /> */}

      {/* <ContactSection /> */}
    </main>
  );
}
