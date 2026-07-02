import { AppButton } from '../../components/ui/AppButton';
import { PixelBadge } from '../../components/ui/PixelBadge';

export function HomePage() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <PixelBadge>V2 MVP</PixelBadge>

        <h1>Ride Wars League</h1>

        <p>
          Registre seus pedais, dispute rankings, conquiste badges e participe
          de desafios locais com outros ciclistas.
        </p>

        <div className="hero-actions">
          <AppButton>Entrar na liga</AppButton>
          <AppButton variant="secondary">Ver ranking</AppButton>
        </div>
      </section>
    </main>
  );
}