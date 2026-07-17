import Link from "next/link";
import { contact, navItems } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <p className="site-footer__logo">KRIMO</p>
          <p className="site-footer__tagline">Danser pour rassembler.</p>
        </div>
        <nav className="site-footer__nav" aria-label="Navigation pied de page">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-footer__socials">
          {contact.socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>KRIMO © {new Date().getFullYear()} — Karim Traoré, Paris</p>
        <p>Powered by presskit.fr</p>
      </div>
    </footer>
  );
}
