// Instagram Page
function renderInstagramPage() {
  return `
    <div class="opacity-0 animate-fade-in">
      <!-- Hero -->
      <section class="relative py-32 bg-gradient-to-br from-orange-100 to-amber-100">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
            <i data-lucide="instagram" class="h-10 w-10 text-orange-500"></i>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-museo-light">
            ${t('instagram.title')}
          </h1>
          <p class="text-xl text-gray-700 leading-relaxed mb-8 font-museo-light">
            ${t('instagram.subtitle')}
          </p>
          <a 
            href="https://www.instagram.com/institutocivitassolis/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg font-museo-light"
          >
            <i data-lucide="instagram" class="h-5 w-5"></i>
            <span>${t('instagram.followInstagram')}</span>
          </a>
        </div>
      </section>

      <!-- Instagram Feed -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4 font-museo-bold">
              ${t('instagram.officialFeed')}
            </h2>
            <p class="text-lg text-gray-600 font-museo-light">
              ${t('instagram.feedDescription')}
            </p>
          </div>
          
          <!-- Elfsight Instagram Feed -->
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="elfsight-app-2cc72e29-c017-4e3d-b58a-9685d7873f99" data-elfsight-app-lazy></div>
          </div>
          
          <div class="text-center mt-8">
            <p class="text-sm text-gray-500 mb-4 font-museo-light">
              ${t('instagram.feedNote')}
            </p>
            <a 
              href="https://www.instagram.com/institutocivitassolis/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 text-civitas-orange-500 hover:text-civitas-orange-600 font-semibold transition-colors font-museo-light"
            >
              <span>${t('instagram.viewMore')}</span>
              <i data-lucide="external-link" class="h-4 w-4"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
