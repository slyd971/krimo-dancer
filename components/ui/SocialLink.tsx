type SocialLinkProps = {
  href: string;
  label: string;
};

export function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
