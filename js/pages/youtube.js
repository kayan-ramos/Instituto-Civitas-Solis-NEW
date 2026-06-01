// YouTube Civitas Solis Page
async function renderYouTubePage() {
  return `
    <div class="opacity-0 animate-fade-in">
      <!-- Hero -->
      <section class="relative py-32 bg-gradient-to-br from-red-50 to-orange-50">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <div class="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-6 shadow-lg">
            <svg class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h1 class="text-5xl md:text-6xl font-museo-bold text-gray-900 mb-6">
            ${t('youtube.title') || 'YouTube Civitas Solis'}
          </h1>
          <p class="text-xl text-gray-700 leading-relaxed mb-8 font-museo-light">
            ${t('youtube.subtitle') || 'Conteúdos sobre filosofia, cultura e espiritualidade para uma nova consciência planetária'}
          </p>
          
          <!-- Subscribe Button -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.youtube.com/@institutocivitassolis5117?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg font-museo-light"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>${t('youtube.subscribe') || 'Inscrever-se no Canal'}</span>
            </a>
            <a 
              href="https://www.youtube.com/@institutocivitassolis5117" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 text-civitas-orange-500 hover:text-civitas-orange-600 font-semibold transition-colors font-museo-light"
            >
              <span>${t('youtube.visitChannel') || 'Visitar Canal'}</span>
              <i data-lucide="external-link" class="h-4 w-4"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- YouTube Gallery -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4 font-museo-bold">
              ${t('youtube.latestVideos') || 'Últimos Vídeos'}
            </h2>
            <p class="text-lg text-gray-600 font-museo-light">
              ${t('youtube.latestDescription') || 'Explore nosso conteúdo mais recente sobre filosofia, espiritualidade e desenvolvimento humano'}
            </p>
          </div>
          
          <!-- Elfsight YouTube Gallery -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-lg p-4 md:p-8">
            <div class="elfsight-app-a0895143-ea93-4311-9987-4bd3b9f4ee8d" data-elfsight-app-lazy></div>
          </div>
          
          <div class="text-center mt-8">
            <p class="text-sm text-gray-500 mb-4 font-museo-light">
              ${t('youtube.feedNote') || 'Vídeos atualizados automaticamente do canal oficial'}
            </p>
            <a 
              href="https://www.youtube.com/@institutocivitassolis5117" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 text-civitas-orange-500 hover:text-civitas-orange-600 font-semibold transition-colors font-museo-light"
            >
              <span>${t('youtube.viewAll') || 'Ver Todos os Vídeos'}</span>
              <i data-lucide="external-link" class="h-4 w-4"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- About Channel -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4 font-museo-bold">
              ${t('youtube.aboutChannel') || 'Sobre o Canal'}
            </h2>
          </div>
          
          <div class="space-y-6 text-lg text-gray-700 leading-relaxed font-museo-light">
            <p>
              ${t('youtube.channelDescription1') || 'O canal do YouTube do Instituto Civitas Solis é dedicado à disseminação de conhecimentos sobre filosofia perene, tradições espirituais e o desenvolvimento integral do ser humano.'}
            </p>
            <p>
              ${t('youtube.channelDescription2') || 'Através de palestras, entrevistas e conteúdos educacionais, buscamos contribuir para o despertar de uma nova consciência planetária, baseada na sabedoria ancestral e nas descobertas contemporâneas.'}
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div class="text-center p-6 bg-white rounded-lg shadow">
              <div class="w-16 h-16 bg-civitas-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="video" class="h-8 w-8 text-civitas-orange-500"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-2 font-museo-light">
                ${t('youtube.feature1') || 'Palestras'}
              </h3>
              <p class="text-sm text-gray-600 font-museo-light">
                ${t('youtube.feature1Desc') || 'Conteúdo aprofundado sobre temas filosóficos'}
              </p>
            </div>
            
            <div class="text-center p-6 bg-white rounded-lg shadow">
              <div class="w-16 h-16 bg-civitas-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="mic" class="h-8 w-8 text-civitas-orange-500"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-2 font-museo-light">
                ${t('youtube.feature2') || 'Entrevistas'}
              </h3>
              <p class="text-sm text-gray-600 font-museo-light">
                ${t('youtube.feature2Desc') || 'Diálogos com pensadores e estudiosos'}
              </p>
            </div>
            
            <div class="text-center p-6 bg-white rounded-lg shadow">
              <div class="w-16 h-16 bg-civitas-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="book-open" class="h-8 w-8 text-civitas-orange-500"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-2 font-museo-light">
                ${t('youtube.feature3') || 'Workshops'}
              </h3>
              <p class="text-sm text-gray-600 font-museo-light">
                ${t('youtube.feature3Desc') || 'Práticas e ensinamentos transformadores'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-civitas-orange-500 to-civitas-orange-600">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-white mb-4 font-museo-bold">
            ${t('youtube.ctaTitle') || 'Junte-se à Nossa Comunidade'}
          </h2>
          <p class="text-xl text-white/90 mb-8 font-museo-light">
            ${t('youtube.ctaDescription') || 'Inscreva-se no canal e ative as notificações para novos conteúdos'}
          </p>
          <a 
            href="https://www.youtube.com/@institutocivitassolis5117?sub_confirmation=1" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-3 bg-white hover:bg-gray-100 text-civitas-orange-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg font-museo-light"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>${t('youtube.subscribe') || 'Inscrever-se no Canal'}</span>
          </a>
        </div>
      </section>
    </div>
  `;
}
