import { MagneticLink } from "@/components/ui/MagneticLink";
import { SocialLink } from "@/components/ui/SocialLink";
import { contact } from "@/data/site-content";

export function Contact() {
  return (
    <section id="contact" className="contact section-pad">
      <div className="grain" aria-hidden="true" />
      <p className="chapter chapter--yellow">09 / Contact</p>
      <h2>
        Vous avez un événement, une scène, un public ou une cause à faire bouger ?
        <span>Parlons-en.</span>
      </h2>
      <div className="contact__grid">
        <div className="contact__primary">
          <MagneticLink href={`mailto:${contact.email}`} variant="yellow">
            {contact.email}
          </MagneticLink>
          <MagneticLink href={contact.phoneHref} variant="light">
            {contact.phone}
          </MagneticLink>
          <p>{contact.address}</p>
        </div>
        <div className="contact__socials">
          {contact.socials.map((social) => (
            <SocialLink key={social.href} href={social.href} label={social.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
