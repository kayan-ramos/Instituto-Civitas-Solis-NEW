// Main Application Entry Point
(function() {
  'use strict';

  // Initialize application when DOM is ready
  function initApp() {
    console.log('Instituto Civitas Solis - Initializing application...');
    
    // Initialize i18n
    initI18n();
    
    // Wait for i18next to be ready
    setTimeout(() => {
      // Render header and footer
      renderHeader();
      renderFooter();
      
      // Initialize router
      router();
      
      console.log('Instituto Civitas Solis - Application initialized successfully!');
    }, 100);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  // Handle service worker for offline support (optional)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Service worker can be added later for PWA features
    });
  }
})();
