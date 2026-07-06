export function captureError(err: unknown) {
  // lightweight stub to capture errors
  // In production hook into a logging service
  // eslint-disable-next-line no-console
  console.error('Captured error:', err);
}
