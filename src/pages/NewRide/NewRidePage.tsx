import { useState, type SubmitEvent } from 'react';
import type { Ride } from '../../types/ride';
import { mockCyclists } from '../../data/mockCyclists';
import { isValidStravaActivityUrl } from '../../utils/validateStravaUrl';

export function NewRidePage() {
  const currentCyclist = mockCyclists[0];

  const [title, setTitle] = useState('');
  const [distanceKm, setDistanceKm] = useState('');
  const [elevationGainM, setElevationGainM] = useState('');
  const [durationMinutes, setDurationMinutes] = useState('');
  const [stravaUrl, setStravaUrl] = useState('');
  const [submittedRides, setSubmittedRides] = useState<Ride[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage('');

    if (!title || !distanceKm || !elevationGainM || !durationMinutes) {
      setErrorMessage('Preencha todos os campos obrigatórios.');
      return;
    }

    const hasValidStravaUrl = isValidStravaActivityUrl(stravaUrl);

    const newRide: Ride = {
      id: crypto.randomUUID(),
      cyclistId: currentCyclist.id,
      title,
      distanceKm: Number(distanceKm),
      elevationGainM: Number(elevationGainM),
      durationMinutes: Number(durationMinutes),
      stravaUrl: stravaUrl || undefined,
      status: hasValidStravaUrl ? 'pending' : 'unverified',
      createdAt: new Date().toISOString(),
    };

    setSubmittedRides((currentRides) => [newRide, ...currentRides]);

    setTitle('');
    setDistanceKm('');
    setElevationGainM('');
    setDurationMinutes('');
    setStravaUrl('');
  }

  return (
    <section className="page-card">
      <span className="pixel-badge">Novo Pedal</span>

      <h1>Cadastrar Pedal</h1>

      <p>
        Registre manualmente seu pedal. O link do Strava será usado apenas como
        comprovante para aprovação futura.
      </p>

      <form className="ride-form" onSubmit={handleSubmit}>
        <label>
          Nome do pedal *
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Ex: Pedal da manhã"
          />
        </label>

        <label>
          Distância em km *
          <input
            type="number"
            value={distanceKm}
            onChange={(event) => setDistanceKm(event.target.value)}
            placeholder="Ex: 39"
            min="1"
          />
        </label>

        <label>
          Elevação em metros *
          <input
            type="number"
            value={elevationGainM}
            onChange={(event) => setElevationGainM(event.target.value)}
            placeholder="Ex: 420"
            min="0"
          />
        </label>

        <label>
          Duração em minutos *
          <input
            type="number"
            value={durationMinutes}
            onChange={(event) => setDurationMinutes(event.target.value)}
            placeholder="Ex: 135"
            min="1"
          />
        </label>

        <label>
          Link do Strava
          <input
            type="url"
            value={stravaUrl}
            onChange={(event) => setStravaUrl(event.target.value)}
            placeholder="https://www.strava.com/activities/..."
          />
        </label>

        {errorMessage && <p className="form-error">{errorMessage}</p>}

        <button type="submit">Enviar pedal</button>
      </form>

      {submittedRides.length > 0 && (
        <div className="submitted-rides">
          <h2>Pedais enviados nesta sessão</h2>

          {submittedRides.map((ride) => (
            <article className="submitted-ride-card" key={ride.id}>
              <div>
                <strong>{ride.title}</strong>
                <span>
                  {ride.distanceKm} km • {ride.elevationGainM} m •{' '}
                  {ride.durationMinutes} min
                </span>
              </div>

              <span className={`ride-status ride-status-${ride.status}`}>
                {ride.status}
              </span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}