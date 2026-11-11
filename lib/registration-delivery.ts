/** Apps Script returns a redirect to a one-time Google-hosted response URL. */
export async function deliverRegistration(endpoint: string, token: string, registration: object) {
  const url = new URL(endpoint);
  const appsScript = url.hostname === 'script.google.com';
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('invalid_endpoint');
  if (appsScript && !/^\/macros\/s\/[^/]+\/exec$/.test(url.pathname)) throw new Error('invalid_endpoint');
  const response = await fetch(url.toString(), {
    method: 'POST', redirect: 'manual', signal: AbortSignal.timeout(15000),
    headers: { 'Content-Type': 'application/json', ...(appsScript ? {} : { Authorization: 'Bearer ' + token }), 'Idempotency-Key': (registration as any).requestId },
    body: JSON.stringify(appsScript ? { token, registration } : registration),
  });
  if (appsScript && [302,303].includes(response.status)) {
    const location = response.headers.get('location');
    if (!location) throw new Error('missing_location');
    const target = new URL(location);
    if (target.protocol !== 'https:' || target.hostname !== 'script.googleusercontent.com' || target.username || target.password) throw new Error('invalid_redirect');
    // Fetch response only. Never forward the token or personal data to a redirect.
    const result = await fetch(target.toString(), { method:'GET', redirect:'error', signal:AbortSignal.timeout(10000) });
    if (!result.ok) throw new Error('upstream');
    return result.json();
  }
  if (!response.ok || response.status >= 300) throw new Error('upstream');
  return response.json();
}
