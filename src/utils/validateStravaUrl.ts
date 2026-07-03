export function isValidStravaActivityUrl(url: string) {
  if (!url) {
    return false;
  }

  return url.includes('strava.com/activities/');
}