// Fit the 1440 × 900 desktop reference using the limiting viewport dimension.
// Taller screens gain breathing room; wider screens retain the same proportions.
const desktopViewport = window.matchMedia('(min-width: 701px)');
function fitDesktopComposition() {
  const scale = desktopViewport.matches
    ? 1.1 * Math.min(window.innerWidth / 1440, window.innerHeight / 900)
    : 1.1;
  document.documentElement.style.setProperty('--page-scale', scale);
}
fitDesktopComposition();
window.addEventListener('resize', fitDesktopComposition, { passive: true });
desktopViewport.addEventListener('change', fitDesktopComposition);

// Reserve room for both navigation bars, including any wrapped links.
const measuredBars = new Map([
  [document.querySelector('.site-header'), '--header-height'],
  [document.querySelector('.section-index'), '--section-index-height'],
]);
if ('ResizeObserver' in window) {
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.offsetHeight;
      document.documentElement.style.setProperty(measuredBars.get(entry.target), `${height}px`);
    }
  });
  for (const element of measuredBars.keys()) {
    if (element) observer.observe(element);
  }
}
