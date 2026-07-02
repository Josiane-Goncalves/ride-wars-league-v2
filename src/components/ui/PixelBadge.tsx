type PixelBadgeProps = {
  children: React.ReactNode;
};

export function PixelBadge({ children }: PixelBadgeProps) {
  return <span className="pixel-badge">{children}</span>;
}