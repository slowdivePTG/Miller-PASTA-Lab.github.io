// Theme toggle with robust persistence
(function () {
  const apply = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  };
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    apply(saved);
  } else {
    // No saved choice: don't set data-theme; let CSS honor prefers-color-scheme
  }

  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      if (!cur) {
        // No override yet: infer from media query
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        apply(prefersDark ? 'light' : 'dark');
      } else {
        apply(cur === 'dark' ? 'light' : 'dark');
      }
    });
  }
})();