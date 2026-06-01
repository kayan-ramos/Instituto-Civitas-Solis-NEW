// Contato Page
function renderContatoPage() {
  return `
    <div class="opacity-0 animate-fade-in">
      <!-- Hero -->
      <section class="relative py-32 bg-gradient-to-br from-orange-100 to-amber-100">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-museo-bold">
            ${t('contact.title')}
          </h1>
          <p class="text-xl text-gray-700 leading-relaxed font-museo-light">
            ${t('contact.subtitle')}
          </p>
        </div>
      </section>

      <!-- Email Contact Section (Main) -->
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          ${renderEmailContact({
            title: '',
            subtitle: ''
          })}
        </div>
      </section>

      <!-- Additional Contact Info -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-900 mb-12 font-museo-bold">
            ${t('contact.otherConnections')}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <!-- Schedule -->
            <div class="text-center p-6 bg-white rounded-lg shadow">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-civitas-orange-500 rounded-full mb-4">
                <i data-lucide="clock" class="h-8 w-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 font-museo-light">
                ${t('contact.schedule')}
              </h3>
              <p class="text-gray-700 font-museo-light whitespace-pre-line">
                ${t('contact.scheduleText')}
              </p>
            </div>

            <!-- Instagram -->
            <div class="text-center p-6 bg-white rounded-lg shadow">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-civitas-orange-500 rounded-full mb-4">
                <i data-lucide="instagram" class="h-8 w-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 font-museo-light">
                Instagram
              </h3>
              <a href="https://www.instagram.com/institutocivitassolis/" target="_blank" rel="noopener noreferrer" 
                 class="text-civitas-orange-500 hover:text-civitas-orange-600 font-medium font-museo-light">
                @institutocivitassolis
              </a>
            </div>

            <!-- YouTube -->
            <div class="text-center p-6 bg-white rounded-lg shadow">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-civitas-orange-500 rounded-full mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 font-museo-light">
                YouTube
              </h3>
              <a href="https://www.youtube.com/@institutocivitassolis5117" target="_blank" rel="noopener noreferrer" 
                 class="text-civitas-orange-500 hover:text-civitas-orange-600 font-medium font-museo-light">
                @institutocivitassolis5117
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Partnerships & Press -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Partnerships -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-civitas-orange-500 rounded-full flex items-center justify-center mr-4">
                  <i data-lucide="handshake" class="h-6 w-6 text-white"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 font-museo-bold">
                  ${t('contact.partnerships')}
                </h3>
              </div>
              <p class="text-gray-700 leading-relaxed font-museo-light">
                ${t('contact.partnershipsText')}
              </p>
            </div>

            <!-- Press -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-civitas-orange-500 rounded-full flex items-center justify-center mr-4">
                  <i data-lucide="newspaper" class="h-6 w-6 text-white"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 font-museo-bold">
                  ${t('contact.press')}
                </h3>
              </div>
              <p class="text-gray-700 leading-relaxed font-museo-light">
                ${t('contact.pressText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
