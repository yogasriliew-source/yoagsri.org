import type { NextApiRequest, NextApiResponse } from 'next';
import { deliverRegistration } from '../../lib/registration-delivery';
import { validateRegistration } from '../../lib/registration';
export const config = { api: { bodyParser: { sizeLimit: '8kb' } } };
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  const endpoint = process.env.REGISTRATION_WEBHOOK_URL;
  const token = process.env.REGISTRATION_WEBHOOK_TOKEN;
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'method_not_allowed' }); }
  const allowedOrigin = process.env.REGISTRATION_SITE_ORIGIN;
  if (!allowedOrigin || req.headers.origin !== allowedOrigin) return res.status(403).json({ error: 'forbidden' });
  if (!req.headers['content-type']?.startsWith('application/json')) return res.status(415).json({ error: 'invalid_content_type' });
  const data = validateRegistration(req.body);
  if (!data) return res.status(400).json({ error: 'invalid_input' });
  if (!endpoint?.startsWith('https://') || !token) return res.status(503).json({ error: 'not_configured' });
  try {
    const result = await deliverRegistration(endpoint, token, { ...data, status: 'pending_review', submittedAt: new Date().toISOString() });
    // The receiver must acknowledge a durable write, not merely receipt of HTTP traffic.
    if (result.persisted !== true || result.requestId !== data.requestId) throw new Error('unconfirmed');
    return res.status(200).json({ reference: data.requestId, status: 'pending_review' });
  } catch { return res.status(502).json({ error: 'delivery_unconfirmed' }); }
}
