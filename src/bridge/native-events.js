/**
 * Events sent from the webview back to the native mobile app.
 *
 * @param {string} [reason]
 */
export function closeWebview(reason = 'user-action') {
  window.dispatchEvent(new CustomEvent('native-close', { detail: { reason } }));
}

/** @param {string} target */
export function navigateNative(target) {
  window.dispatchEvent(new CustomEvent('native-navigate', { detail: { target } }));
}
