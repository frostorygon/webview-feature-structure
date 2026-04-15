export type ResultBannerVariant = 'success' | 'error' | 'warning';

export interface ResultBannerData {
  variant: ResultBannerVariant;
  title: string;
  message: string;
}
