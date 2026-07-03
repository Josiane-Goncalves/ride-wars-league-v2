type PagePlaceholderProps = {
  title: string;
  description: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="page-card">
      <span className="pixel-badge">Em construção</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}