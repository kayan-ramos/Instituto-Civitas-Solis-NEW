// Simple Router for Single Page Application
const routes = {
  '/': renderHomePage,
  '/missao-visao-valores': renderMissaoVisaoValoresPage,
  '/youtube': renderYouTubePage,
  '/instagram': renderInstagramPage,
  '/contato': renderContatoPage,
  '/livro': renderLivroPage
};

function router() {
  const hash = window.location.hash.slice(1) || '/';
  const route = routes[hash] || routes['/'];
  
  renderCurrentPage();
}

async function renderCurrentPage() {
  const hash = window.location.hash.slice(1) || '/';
  const route = routes[hash] || routes['/'];
  
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    // Show loading if needed
    mainContent.innerHTML = '<div class="flex items-center justify-center min-h-screen"><div class="spinner"></div></div>';
    
    // Render page (await if async)
    const content = await route();
    mainContent.innerHTML = content;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Initialize icons after rendering
    setTimeout(() => {
      initializeIcons();
      
      // Start carousel autoplay if on home page
      if (hash === '/' || hash === '') {
        setTimeout(() => {
          startBookCarouselAutoplay();
        }, 500);
      } else {
        stopBookCarouselAutoplay();
      }
    }, 100);
  }
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Listen for language changes
window.addEventListener('languageChanged', renderCurrentPage);

// Export for use in other scripts
window.renderCurrentPage = renderCurrentPage;
