import Image from "next/image";
import { RevealText } from "@/components/ui/RevealText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { krimoStyles } from "@/data/site-content";

export function KrimoIntro() {
  return (
    <section id="krimo" className="krimo-intro section-pad">
      <div className="krimo-intro__media">
        <Image
          src="/images/krimo/portrait-karim.jpeg"
          alt="Portrait de Karim Traoré, KRIMO"
          width={1227}
          height={1636}
          sizes="(max-width: 768px) 92vw, 44vw"
          priority
        />
        <span>Karim Traoré</span>
      </div>
      <RevealText className="krimo-intro__copy">
        <SectionTitle
          eyebrow="02 / KRIMO"
          title="KRIMO, le mouvement comme point de rencontre."
          intro="Basé à Paris, KRIMO est danseur freestyle, performer et ambianceur. Sa danse traverse les cultures et les styles pour créer une connexion directe avec le public."
        />
        <p>
          Sur scène comme au milieu d’une foule, il transforme la danse en expérience collective.
          Son approche mêle énergie, improvisation, interaction, inclusion et bienveillance.
        </p>
        <p>
          Il est également le fondateur du collectif La Tempête et de l’association La Danse ou Rien.
        </p>
      </RevealText>
      <div className="style-marquee" aria-label={krimoStyles.join(", ")}>
        <div aria-hidden="true">
          {[...krimoStyles, ...krimoStyles].map((style, index) => (
            <span key={`${style}-${index}`}>{style}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
