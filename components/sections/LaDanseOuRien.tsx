import Image from "next/image";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { RevealText } from "@/components/ui/RevealText";
import { LINKS, ldor } from "@/data/site-content";

export function LaDanseOuRien() {
  return (
    <section id="la-danse-ou-rien" className="ldor section-pad">
      <div className="ldor__heading">
        <RevealText>
          <p className="chapter">05 / Projet solidaire</p>
          <h2>La Danse ou Rien</h2>
          <p>La danse au service de l’humain.</p>
        </RevealText>
      </div>
      <div className="ldor__layout">
        <div className="ldor__image">
          <Image
            src="/images/ldor/gallery-ladanseourien2.jpg"
            alt="La Danse ou Rien pendant une action collective"
            width={1284}
            height={1712}
            sizes="(max-width: 768px) 92vw, 40vw"
          />
        </div>
        <RevealText className="ldor__copy">
          <p>
            La Danse ou Rien est une association artistique et solidaire fondée par Karim Traoré.
          </p>
          <p>
            Elle utilise la danse et le langage corporel comme outils de lien social, de cohésion,
            de solidarité, de confiance en soi et de bien-être.
          </p>
          <p>
            L’association agit notamment auprès des personnes sans-abri, des personnes réfugiées,
            des jeunes et des publics évoluant dans des contextes fragiles.
          </p>
          <ul className="editorial-list editorial-list--sage">
            {ldor.actions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </RevealText>
      </div>
      <div className="ldor__facts">
        {ldor.facts.map((fact) => (
          <span key={fact}>{fact}</span>
        ))}
      </div>
      <div className="ldor__actions">
        <MagneticLink href={LINKS.maraude} variant="sage" external>
          Participer à une maraude
        </MagneticLink>
        <MagneticLink href={LINKS.adhesion} variant="dark" external>
          Adhérer à l’association
        </MagneticLink>
        <MagneticLink href={LINKS.don} variant="dark" external>
          Faire un don
        </MagneticLink>
      </div>
    </section>
  );
}
