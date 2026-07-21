import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Collaborations } from "@/components/sections/Collaborations";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { KrimoIntro } from "@/components/sections/KrimoIntro";
import { KrimoUniverse } from "@/components/sections/KrimoUniverse";
import { LaDanseOuRien } from "@/components/sections/LaDanseOuRien";
import { LaTempete } from "@/components/sections/LaTempete";
import { Manifesto } from "@/components/sections/Manifesto";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <Manifesto />
        <KrimoIntro />
        <KrimoUniverse />
        <LaTempete />
        <LaDanseOuRien />
        <Gallery />
        <Collaborations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
