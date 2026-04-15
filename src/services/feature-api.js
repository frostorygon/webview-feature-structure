// @ts-check

/**
 * Feature API Service — ALL API communication for this feature.
 *
 * @typedef {import('./types').ClosureReasonsResponse} ClosureReasonsResponse
 * @typedef {import('./types').SubmitClosureRequest} SubmitClosureRequest
 * @typedef {import('./types').SubmitClosureResponse} SubmitClosureResponse
 */

/**
 * @param {string} accountId
 * @returns {Promise<ClosureReasonsResponse>}
 */
export async function getClosureReasons(accountId) {
  const response = await fetch(`/api/v1/accounts/${accountId}/closure-reasons`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}

/**
 * @param {SubmitClosureRequest} payload
 * @returns {Promise<SubmitClosureResponse>}
 */
export async function submitClosure(payload) {
  const response = await fetch('/api/v1/accounts/close', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}
