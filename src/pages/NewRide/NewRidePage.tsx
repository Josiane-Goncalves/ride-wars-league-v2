import { useState, type ComponentProps } from 'react';
import { RideCard } from '../../components/rides/RideCard';
import { mockCyclists } from '../../data/mockCyclists';
import type { Ride } from '../../types/ride';
import { isValidStravaActivityUrl } from '../../utils/validateStravaUrl';

type FormSubmitEvent = Parameters<
  NonNullable<ComponentProps<'form'>['onSubmit']>
>[0];

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

  function handleSubmit(event: FormSubmitEvent) {
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
        Registre manualmente seu pedal. Se informar um link válido do Strava, ele
        ficará aguardando aprovação. Sem link, o pedal será salvo como sem
        comprovação.
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
            <RideCard ride={ride} key={ride.id} />
          ))}
        </div>
      )}
    </section>
  );
}