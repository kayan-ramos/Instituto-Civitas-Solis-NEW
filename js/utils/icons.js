// Icon helper functions using Lucide
function createIcon(iconName, className = 'h-6 w-6') {
  const i = document.createElement('i');
  i.setAttribute('data-lucide', iconName);
  i.className = className;
  return i;
}

function initializeIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize icons after DOM content is loaded
window.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all dynamic content is loaded
  setTimeout(initializeIcons, 100);
});

// Re-initialize icons when language changes
window.addEventListener('languageChanged', () => {
  setTimeout(initializeIcons, 100);
});

// Export for use in other scripts
window.createIcon = createIcon;
window.initializeIcons = initializeIcons;
