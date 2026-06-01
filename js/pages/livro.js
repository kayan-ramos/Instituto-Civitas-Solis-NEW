// Livro Page
function renderLivroPage() {
  const books = [
    { title: "Filosofia Hermética", cover: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg" },
    { title: "Mistérios da Antiguidade", cover: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg" },
    { title: "Sabedoria Perene", cover: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg" },
    { title: "Arte e Espiritualidade", cover: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg" }
  ];

  return `
    <div class="opacity-0 animate-fade-in">
      <!-- Hero -->
      <section class="relative py-32 bg-gradient-to-br from-orange-100 to-amber-100">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-museo-light">
                ${t('book.title')}
              </h1>
              <p class="text-2xl text-gray-700 mb-4 font-museo-light">
                ${t('book.subtitle')}
              </p>
              <p class="text-lg text-gray-600 mb-8 font-museo-light">
                ${t('book.description')}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a 
                  href="http://loja.civitassolis.org.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center space-x-2 bg-civitas-orange-500 hover:bg-civitas-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg font-museo-light"
                >
                  <i data-lucide="shopping-cart" class="h-5 w-5"></i>
                  <span>${t('book.buyNow')}</span>
                </a>
                <button 
                  class="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 font-museo-light"
                >
                  <i data-lucide="play-circle" class="h-5 w-5"></i>
                  <span>${t('book.watchExplanation')}</span>
                </button>
              </div>
            </div>
            <div class="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg" 
                alt="${t('book.title')}"
                class="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- About the Book -->
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <h2 class="text-4xl font-bold text-gray-900 mb-8 font-museo-light">
            ${t('book.aboutBook')}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6 font-museo-light">
            ${t('book.bookDescription1')}
          </p>
          
          <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8 my-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 font-museo-light">
              ${t('book.whatYouDiscover')}
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i data-lucide="check-circle" class="h-6 w-6 text-civitas-orange-500 mr-3 flex-shrink-0 mt-1"></i>
                <span class="text-gray-700 font-museo-light">Os segredos das academias platônicas e sociedades secretas</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="h-6 w-6 text-civitas-orange-500 mr-3 flex-shrink-0 mt-1"></i>
                <span class="text-gray-700 font-museo-light">A influência hermética em Leonardo da Vinci e Michelangelo</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="h-6 w-6 text-civitas-orange-500 mr-3 flex-shrink-0 mt-1"></i>
                <span class="text-gray-700 font-museo-light">Conexões entre arte, ciência e espiritualidade no Renascimento</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="h-6 w-6 text-civitas-orange-500 mr-3 flex-shrink-0 mt-1"></i>
                <span class="text-gray-700 font-museo-light">Aplicações práticas dos ensinamentos herméticos hoje</span>
              </li>
            </ul>
          </div>
          
          <p class="text-lg text-gray-700 leading-relaxed font-museo-light">
            ${t('book.bookDescription2')}
          </p>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-900 mb-16 font-museo-light">
            ${t('book.testimonials')}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            ${[t('book.testimonial1'), t('book.testimonial2'), t('book.testimonial3')].map((testimonial, i) => `
              <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="flex mb-4">
                  ${Array(5).fill('<i data-lucide="star" class="h-5 w-5 text-civitas-orange-500 fill-current"></i>').join('')}
                </div>
                <p class="text-gray-700 italic mb-4 font-museo-light">
                  ${testimonial}
                </p>
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <i data-lucide="user" class="h-6 w-6 text-civitas-orange-500"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 font-museo-light">Leitor ${i + 1}</p>
                    <p class="text-sm text-gray-600 font-museo-light">Cliente Verificado</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-gradient-to-br from-orange-500 to-amber-600 text-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-museo-light">
            ${t('book.getYourCopy')}
          </h2>
          <p class="text-xl mb-8 font-museo-light">
            ${t('book.ctaText')}
          </p>
          <a 
            href="http://loja.civitassolis.org.br" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-civitas-orange-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg font-museo-light"
          >
            <i data-lucide="shopping-cart" class="h-5 w-5"></i>
            <span>${t('book.buyOfficial')}</span>
          </a>
        </div>
      </section>

      <!-- Related Books -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-900 mb-16 font-museo-light">
            ${t('book.relatedReading')}
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            ${books.map(book => `
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div class="aspect-[3/4]">
                    <img 
                      src="${book.cover}" 
                      alt="${book.title}"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 class="text-white font-semibold font-museo-light line-clamp-2">
                      ${book.title}
                    </h3>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
