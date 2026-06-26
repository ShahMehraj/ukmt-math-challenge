/**
 * Request fullscreen on the document, tolerating vendor prefixes (Safari) and
 * browsers that reject the request (e.g. not triggered by a user gesture, or
 * disallowed by permissions policy). Fullscreen is a nice-to-have for exam
 * focus, so failures are swallowed rather than surfaced.
 */
export function enterFullscreen(): void {
  const el = document.documentElement as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void> | void;
  };
  try {
    if (document.fullscreenElement) return;
    const req = el.requestFullscreen ?? el.webkitRequestFullscreen;
    const result = req?.call(el);
    if (result && typeof (result as Promise<void>).catch === "function") {
      (result as Promise<void>).catch(() => {});
    }
  } catch {
    /* ignore — fullscreen is best-effort */
  }
}
