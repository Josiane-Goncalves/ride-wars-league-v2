import { AppLinkButton } from '../../components/ui/AppLinkButton';

const features = [
  {
    title: 'Registre pedais',
    description:
      'Cadastre seus pedais manualmente e use o link do Strava como comprovante.',
  },
  {
    title: 'Suba no ranking',
    description:
      'Pedais aprovados contam pontos para o ranking da liga e desafios locais.',
  },
  {
    title: 'Desbloqueie badges',
    description:
      'Conquiste badges por distância, elevação e participação na comunidade.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Cadastre o pedal',
    description: 'Informe distância, elevação, duração e link do Strava.',
  },
  {
    number: '02',
    title: 'Aguarde aprovação',
    description: 'O admin valida o comprovante antes do pedal contar no ranking.',
  },
  {
    number: '03',
    title: 'Compita na liga',
    description: 'Pedais aprovados entram no ranking e podem liberar conquistas.',
  },
];

export function HomePage() {
  return (
    <section className="home-page">
      <div className="hero-card home-hero">
        <span className="pixel-badge">Ride Wars League V2</span>

        <h1>Transforme seus pedais em uma liga competitiva.</h1>

        <p>
          Um app web para ciclistas registrarem pedais, disputarem rankings,
          conquistarem badges e participarem de desafios locais com a comunidade.
        </p>

        <div className="hero-actions">
          <AppLinkButton to="/new-ride">Cadastrar pedal</AppLinkButton>
          <AppLinkButton to="/ranking" variant="secondary">
            Ver ranking
          </AppLinkButton>
        </div>
      </div>

      <div className="home-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>

      <div className="home-section">
        <span className="pixel-badge">Como funciona</span>

        <h2>Da atividade ao ranking</h2>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <strong>{step.number}</strong>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}