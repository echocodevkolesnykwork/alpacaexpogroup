export function runClassicScripts(sources) {
  sources.forEach((source, index) => {
    const script = document.createElement('script');
    script.textContent = source;
    script.dataset.source = `home-reference-${String(index + 1).padStart(2, '0')}`;
    document.body.appendChild(script);
  });
}
