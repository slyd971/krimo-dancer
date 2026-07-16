import Link from "next/link";

type MagneticLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "yellow" | "sage";
  external?: boolean;
};

export function MagneticLink({
  href,
  children,
  variant = "dark",
  external = false
}: MagneticLinkProps) {
  const className = `magnetic-link magnetic-link--${variant}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
