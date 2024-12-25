export function generateScript(targetUrl: string): string {
  return `
  (function() {
    const variations = ['a', 'b', 'c', 'd'];
    const hour = new Date().getHours();
    const variation = variations[hour % 4];
  
    if (window.location.href.startsWith('${targetUrl}')) {
      const url = new URL(window.location.href);
      url.searchParams.set('variation', variation);
      window.history.replaceState({}, '', url.toString());
    }
  })();
  `;
}
