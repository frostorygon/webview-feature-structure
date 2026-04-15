import { common as commonEn } from './common.en.js';
import { common as commonNl } from './common.nl.js';

/** @type {Record<string, { common: typeof commonEn }>} */
const locales = {
  en: { common: commonEn },
  nl: { common: commonNl },
};

/**
 * Get the common translations for a locale. Falls back to English.
 *
 * Screens merge their own co-located translations on top:
 *   const t = { ...getCommonTranslations(locale), selectReason };
 *
 * @param {string} [locale]
 */
export function getCommonTranslations(locale = 'en') {
  return locales[locale] || locales.en;
}

/**
 * Interpolate {placeholders} in a translation string.
 * @param {string} template
 * @param {Record<string, string>} data
 * @returns {string}
 */
export function interpolate(template, data) {
  return template.replace(/\{(\w+)\}/g, (_, key) => data[key] ?? `{${key}}`);
}
