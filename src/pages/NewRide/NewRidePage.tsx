import { useState, type SubmitEvent } from 'react';
import type { Ride } from '../../types/ride';
import { mockCyclists } from '../../data/mockCyclists';
import { isValidStravaActivityUrl } from '../../utils/validateStravaUrl';

export function NewRidePage() {
  const currentCyclist = mockCyclists[0];

  const [title, setTitle] = useState('');
  const [distanceKm, setDistanceKm] = useState('');
  const [elevationGainM, setElevationGainM] = useState('');
  const [durationHours, setDurationHours] = useState('');
  const [durationMinutes, setDurationMinutes] = useState('');
  const [stravaUrl, setStravaUrl] = useState('');
  const [submittedRides, setSubmittedRides] = useState<Ride[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function formatDuration(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) {
      return `${minutes} min`;
    }

    if (minutes === 0) {
      return `${hours}h`;
    }

    return `${hours}h ${minutes}min`;
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage('');

    const totalDurationMinutes =
      Number(durationHours || 0) * 60 + Number(durationMinutes || 0);

    if (!title || !distanceKm || !elevationGainM) {
      setErrorMessage('Preencha todos os campos obrigatórios.');
      return;
    }

    if (totalDurationMinutes <= 0) {
      setErrorMessage('Informe a duração do pedal.');
      return;
    }

    const hasValidStravaUrl = isValidStravaActivityUrl(stravaUrl);

    const newRide: Ride = {
      id: crypto.randomUUID(),
      cyclistId: currentCyclist.id,
      title,
      distanceKm: Number(distanceKm),
      elevationGainM: Number(elevationGainM),
      durationMinutes: totalDurationMinutes,
      stravaUrl: stravaUrl || undefined,
      status: hasValidStravaUrl ? 'pending' : 'unverified',
      createdAt: new Date().toISOString(),
    };

    setSubmittedRides((currentRides) => [newRide, ...currentRides]);

    setTitle('');
    setDistanceKm('');
    setElevationGainM('');
    setDurationHours('');
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

        <div className="duration-fields">
          <label>
            Horas
            <input
              type="number"
              value={durationHours}
              onChange={(event) => setDurationHours(event.target.value)}
              placeholder="Ex: 2"
              min="0"
            />
          </label>

          <label>
            Minutos
            <input
              type="number"
              value={durationMinutes}
              onChange={(event) => setDurationMinutes(event.target.value)}
              placeholder="Ex: 15"
              min="0"
              max="59"
            />
          </label>
        </div>

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
                  {formatDuration(ride.durationMinutes)}
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