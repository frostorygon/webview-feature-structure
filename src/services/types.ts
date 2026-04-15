/** API Contract Types — the single source of truth for request/response shapes. */

export interface ClosureReasonsResponse {
  reasons: Array<{ id: string; label: string }>;
  accountType: string;
}

export interface SubmitClosureRequest {
  accountId: string;
  reasonId: string;
  comments?: string;
}

export interface SubmitClosureResponse {
  referenceNumber: string;
  closureDate: string;
  status: 'pending' | 'completed';
}
