/**
 * Flow-level type definitions.
 *
 * Types here are PRODUCED by the flow and CONSUMED by screens.
 * If a type is only used inside one screen, put it in that screen's types.ts instead.
 */

export interface FlowState {
  /** Active screen identifier */
  currentScreen: string;
  /** Whether a transition is in progress */
  isLoading: boolean;
  /** Current error, if any */
  error: ErrorContext | null;
}

export interface ErrorContext {
  /** Machine-readable error code */
  errorCode: string;
  /** User-facing error title */
  errorTitle: string;
  /** User-facing error description */
  errorMessage: string;
  /** Whether the user can retry the action */
  retryable: boolean;
}
