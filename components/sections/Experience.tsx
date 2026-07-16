import { RevealText } from "@/components/ui/RevealText";
import { experience } from "@/data/site-content";

export function Experience() {
  return (
    <section className="experience section-pad">
      <RevealText>
        <p className="chapter">06 / Expérience</p>
        <h2>Sur le terrain, dans la foule, sur scène.</h2>
      </RevealText>
      <div className="experience__poster">
        <div>
          <p>Références</p>
          <ul>
            {experience.places.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Rôles</p>
          <ul>
            {experience.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
