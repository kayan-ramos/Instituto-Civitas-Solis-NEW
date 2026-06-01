// Home Page
async function renderHomePage() {
  return `
    <div class="opacity-0 animate-fade-in">
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div class="relative max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-civitas-orange-500 mb-6 leading-tight font-museo-bold">
            ${t('home.heroTitle')}
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-museo-light">
            ${t('home.heroSubtitle')}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#/missao-visao-valores"
              class="bg-civitas-orange-500 hover:bg-civitas-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 font-museo-light"
            >
              <span>${t('home.knowOurMission')}</span>
              <i data-lucide="arrow-right" class="h-5 w-5"></i>
            </a>
            <button 
              onclick="document.getElementById('trabalho-global-section').scrollIntoView({behavior: 'smooth'})"
              class="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-civitas-orange-300 flex items-center justify-center space-x-2 font-museo-light"
            >
              <span>${t('home.globalWork')}</span>
            </button>
          </div>
        </div>
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <!-- Institutional Text -->
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-8 font-museo-light">
              ${t('home.ourOrganization')}
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6 font-museo-light">
              ${t('home.organizationText1')}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-6 font-museo-light">
              ${t('home.organizationText2')}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed font-museo-light">
              ${t('home.organizationText3')}
            </p>
          </div>
        </div>
      </section>

      <!-- Pillars Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-900 mb-16 font-museo-light">
            ${t('home.ourPillars')}
          </h2>
          <div class="grid md:grid-cols-3 gap-12">
            <div class="text-center group">
              <div class="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <i data-lucide="microscope" class="h-10 w-10 text-civitas-orange-500"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 font-museo-light">
                ${t('home.science')}
              </h3>
              <p class="text-gray-600 leading-relaxed font-museo-light">
                ${t('home.scienceDesc')}
              </p>
            </div>
            <div class="text-center group">
              <div class="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <i data-lucide="palette" class="h-10 w-10 text-civitas-orange-500"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 font-museo-light">
                ${t('home.art')}
              </h3>
              <p class="text-gray-600 leading-relaxed font-museo-light">
                ${t('home.artDesc')}
              </p>
            </div>
            <div class="text-center group">
              <div class="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <i data-lucide="heart" class="h-10 w-10 text-civitas-orange-500"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 font-museo-light">
                ${t('home.spirituality')}
              </h3>
              <p class="text-gray-600 leading-relaxed font-museo-light">
                ${t('home.spiritualityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Trabalho Global Section -->
      <section id="trabalho-global-section" class="py-20 bg-gradient-to-br from-civitas-orange-50 to-amber-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="section-title-civitas font-museo-bold">
              ${t('globalWork.title')}
            </h2>
            <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-museo-light">
              ${t('globalWork.subtitle')}
            </p>
          </div>

          <!-- Planetary Vision -->
          <div class="max-w-4xl mx-auto mb-16">
            <h3 class="text-3xl font-museo-bold text-gray-900 mb-6">
              ${t('globalWork.planetaryVision')}
            </h3>
            <p class="text-lg text-gray-700 leading-relaxed mb-6 font-museo-light">
              ${t('globalWork.planetaryText1')}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed font-museo-light">
              ${t('globalWork.planetaryText2')}
            </p>
          </div>

          <!-- Partnership -->
          <div class="mb-16">
            <h3 class="text-3xl font-museo-bold text-center text-gray-900 mb-12">
              ${t('globalWork.internationalPartnership')}
            </h3>
            <div class="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
              <h4 class="text-2xl font-museo-bold text-civitas-orange-500 mb-6">
                ${t('globalWork.embassyTitle')}
              </h4>
              <p class="text-lg text-gray-700 leading-relaxed mb-6 font-museo-light">
                ${t('globalWork.embassyText')}
              </p>
              <p class="text-lg text-gray-700 leading-relaxed font-museo-light">
                ${t('globalWork.partnershipText')}
              </p>
            </div>
          </div>

          <!-- Initiatives -->
          <div class="mb-16">
            <h3 class="text-3xl font-museo-bold text-center text-gray-900 mb-8">
              ${t('globalWork.transformativeInitiatives')}
            </h3>
            <p class="text-lg text-gray-700 text-center leading-relaxed mb-12 max-w-3xl mx-auto font-museo-light">
              ${t('globalWork.initiativesText')}
            </p>
            
            <div class="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
              <div class="bg-white rounded-lg shadow-md p-8">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-civitas-orange-500 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="globe" class="h-6 w-6 text-white"></i>
                  </div>
                  <h4 class="text-xl font-museo-bold text-gray-900">
                    ${t('globalWork.culturalExchange')}
                  </h4>
                </div>
                <p class="text-gray-700 leading-relaxed font-museo-light">
                  ${t('globalWork.culturalExchangeDesc')}
                </p>
              </div>
              
              <div class="bg-white rounded-lg shadow-md p-8">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-civitas-orange-500 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="book-open" class="h-6 w-6 text-white"></i>
                  </div>
                  <h4 class="text-xl font-museo-bold text-gray-900">
                    ${t('globalWork.holisticEducation')}
                  </h4>
                </div>
                <p class="text-gray-700 leading-relaxed font-museo-light">
                  ${t('globalWork.holisticEducationDesc')}
                </p>
              </div>
            </div>
            
            <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto font-museo-light">
              ${t('globalWork.initiativesText2')}
            </p>
          </div>

          <!-- Impact -->
          <div class="max-w-4xl mx-auto text-center">
            <h3 class="text-3xl font-museo-bold text-gray-900 mb-6">
              ${t('globalWork.impactFuture')}
            </h3>
            <p class="text-lg text-gray-700 leading-relaxed mb-6 font-museo-light">
              ${t('globalWork.impactText1')}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-8 font-museo-light">
              ${t('globalWork.impactText2')}
            </p>
            
            <a 
              href="#/contato"
              class="inline-flex items-center space-x-2 bg-civitas-orange-500 hover:bg-civitas-orange-600 text-white px-8 py-4 rounded-lg font-museo-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>${t('globalWork.joinMission')}</span>
              <i data-lucide="arrow-right" class="h-5 w-5"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- YouTube Section -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="section-title-civitas font-museo-bold">
              ${t('home.youtube') || 'Nosso YouTube'}
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto font-museo-light">
              ${t('home.youtubeDescription') || 'Explore nossos conteúdos sobre filosofia, cultura e espiritualidade'}
            </p>
          </div>
          
          <!-- Elfsight YouTube Gallery (Preview) -->
          <div class="mb-8">
            <div class="bg-gray-50 rounded-lg overflow-hidden shadow-lg p-4 md:p-6">
              <div class="elfsight-app-a0895143-ea93-4311-9987-4bd3b9f4ee8d" data-elfsight-app-lazy></div>
            </div>
          </div>
          
          <!-- View All Button -->
          <div class="text-center mt-12">
            <a 
              href="#/youtube"
              class="inline-flex items-center space-x-2 bg-civitas-orange-500 hover:bg-civitas-orange-600 text-white px-8 py-4 rounded-lg font-museo-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>${t('home.viewAllVideos') || 'Ver Todos os Vídeos'}</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
          ${renderEmailContact({
            title: '',
            subtitle: ''
          })}
        </div>
      </section>
    </div>
  `;
}
