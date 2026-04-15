// @ts-check

/**
 * Parse raw native arguments into a typed, validated object.
 *
 * @param {Record<string, string>} raw - Raw key-value pairs from native layer
 * @returns {import('./types').NativeArgs}
 * @throws {Error} If required args are missing
 */
export function parseNativeArgs(raw) {
  const required = ['accountId', 'accountHolder'];

  for (const key of required) {
    if (!raw[key]) {
      throw new Error(`Missing required native arg: ${key}`);
    }
  }

  return {
    accountId: raw.accountId,
    accountHolder: raw.accountHolder,
    locale: raw.locale || 'en',
  };
}
