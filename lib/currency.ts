export const EUR_TO_BGN = 1.95583;

/**
 * Converts EUR → BGN
 * - rounds DOWN
 * - keeps 2 decimals
 */
export function eurToBgn(eur: number): string {
  const bgn = Math.floor(eur * EUR_TO_BGN * 100) / 100;
  return bgn.toFixed(2);
}
