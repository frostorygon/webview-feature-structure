/** Bridge types — the contract between native app and webview. */

export interface NativeArgs {
  accountId: string;
  accountHolder: string;
  locale: string;
}

export interface NativeCloseEvent {
  reason: string;
}

export interface NativeNavigateEvent {
  target: string;
}
