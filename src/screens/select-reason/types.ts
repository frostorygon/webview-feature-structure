/**
 * Type definitions for the Select Reason screen.
 *
 * These types are PRIVATE to this screen.
 * If another screen needs them, promote to src/app/types.ts or src/shared/.
 */

export interface SelectReasonData {
  reasons: Reason[];
  accountType: string;
}

export interface Reason {
  /** Machine-readable reason identifier */
  id: string;
  /** User-facing reason label */
  label: string;
}
