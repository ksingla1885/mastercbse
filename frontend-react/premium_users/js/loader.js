// Simple module loader for older browsers
if (!window.Promise) {
    // Load polyfill if needed
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/promise-polyfill@8.2.0/dist/polyfill.min.js';
    script.integrity = 'sha384-1Cz6p1MjAAqbqv49OE5Y/xalnI5SV7kG4CDnN6UOcNW6WvT+2zVk1R1vb5GJlF5Q';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
}

// Add module support check
const supportsModules = 'noModule' in HTMLScriptElement.prototype;

// Load our main app script
if (supportsModules) {
    // Modern browsers with module support
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'js/app.js';
    document.head.appendChild(script);
} else {
    // Fallback for older browsers
    document.write('<script src="https://unpkg.com/browser-es-module-loader@0.4.1/dist/babel-browser-build.js"></script>');
    document.write('<script src="https://unpkg.com/browser-es-module-loader@0.4.1/dist/browser-es-module-loader.js"></script>');
    document.write('<script nomodule src="js/app.bundle.js"></script>');
}
