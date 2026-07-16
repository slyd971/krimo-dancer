type MediaPlaceholderProps = {
  label: string;
  tone?: "dark" | "light" | "sage" | "yellow";
};

export function MediaPlaceholder({ label, tone = "light" }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder media-placeholder--${tone}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
