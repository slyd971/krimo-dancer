import { RevealText } from "@/components/ui/RevealText";

export function Manifesto() {
  return (
    <section id="manifesto" className="manifesto section-pad">
      <RevealText>
        <p className="chapter">01 / Manifeste</p>
      </RevealText>
      <RevealText delay={0.1}>
        <div className="manifesto__text">
          <p>
            Je crois que la danse <span>est un langage universel.</span>
          </p>
          <p>Elle rassemble. Elle libère.</p>
          <p>Elle crée des rencontres.</p>
          <p>Elle transforme les espaces et les personnes.</p>
        </div>
      </RevealText>
      <RevealText delay={0.2}>
        <p className="manifesto__note">
          Cette vision guide chaque performance, chaque soirée et chaque action portée par KRIMO.
        </p>
      </RevealText>
    </section>
  );
}
