import { en } from './en.js';
import { nl } from './nl.js';

/** @type {Record<string, typeof en>} */
const locales = { en, nl };

/**
 * Get translations for a given locale. Falls back to English.
 * @param {string} [locale]
 * @returns {typeof en}
 */
export function getTranslations(locale = 'en') {
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
