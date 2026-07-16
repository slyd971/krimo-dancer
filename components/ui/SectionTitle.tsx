type SectionTitleProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  invert?: boolean;
};

export function SectionTitle({ eyebrow, title, intro, invert = false }: SectionTitleProps) {
  return (
    <div className={`section-title ${invert ? "section-title--invert" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
