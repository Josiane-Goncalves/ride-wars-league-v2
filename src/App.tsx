function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <span className="pixel-badge">V2 MVP</span>

        <h1>Ride Wars League</h1>

        <p>
          Registre seus pedais, dispute rankings, conquiste badges e participe de desafios locais com outros ciclistas.
        </p>

        <div className="hero-actions">
          <button type="button">Entrar na liga</button>
          <button type="button" className="secondary-button">
            Ver ranking
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;