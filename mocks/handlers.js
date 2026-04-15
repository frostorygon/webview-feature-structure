import { http, HttpResponse } from 'msw';
import { selectReasonDefault } from '../src/screens/select-reason/fixtures/default.js';

export const handlers = [
  http.get('/api/v1/accounts/:id/closure-reasons', () => {
    return HttpResponse.json(selectReasonDefault);
  }),

  http.post('/api/v1/accounts/close', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({
      referenceNumber: 'REF-2026-04-001',
      closureDate: new Date().toISOString(),
      status: 'pending',
    });
  }),
];
