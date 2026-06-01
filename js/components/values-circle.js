// Values Circle Component - Responsive layout for 7 values
function renderValuesCircle() {
  const values = [
    {
      id: 'respeitar',
      title: 'Respeitar',
      titleEn: 'Respect',
      description: 'Respeitamos a longa tradição de conhecimentos de todas as culturas e povos, que vem desde os tempos mais remotos da humanidade',
      descriptionEn: 'We respect the long tradition of knowledge from all cultures and peoples, which comes from the most remote times of humanity',
      position: 'top'
    },
    {
      id: 'coexistir',
      title: 'Coexistir',
      titleEn: 'Coexist',
      description: 'Acreditamos em relações de qualidade e confiança. Valorizamos a diversidade das pessoas e suas experiências de vida, propiciando a ética e o cuidado mútuo.',
      descriptionEn: 'We believe in quality and trust relationships. We value the diversity of people and their life experiences, promoting ethics and mutual care.',
      position: 'top-right'
    },
    {
      id: 'compartilhar',
      title: 'Compartilhar',
      titleEn: 'Share',
      description: 'Estamos abertos ao diálogo e comunicação, buscando aproximar interesses em comum e compartilhar visões diferentes.',
      descriptionEn: 'We are open to dialogue and communication, seeking to bring together common interests and share different visions.',
      position: 'right'
    },
    {
      id: 'reconhecer',
      title: 'Reconhecer',
      titleEn: 'Recognize',
      description: 'A partir do autoconhecimento podemos ir ao encontro da nossa verdade interior e propósito de vida, reconhecendo a essência da verdadeira expressão pessoal.',
      descriptionEn: 'Through self-knowledge we can encounter our inner truth and life purpose, recognizing the essence of true personal expression.',
      position: 'bottom-right'
    },
    {
      id: 'entusiasmar',
      title: 'Entusiasmar',
      titleEn: 'Enthuse',
      description: 'Temos energia e otimismo para fazer acontecer e impulsionar pensamentos, sentimentos e atitudes.',
      descriptionEn: 'We have energy and optimism to make things happen and drive thoughts, feelings and attitudes.',
      position: 'bottom-left'
    },
    {
      id: 'inspirar',
      title: 'Inspirar',
      titleEn: 'Inspire',
      description: 'Motivamos no outro a vontade de seguir sua jornada pessoal, celebrando a contribuição de cada um nas conquistas individuais e coletivas.',
      descriptionEn: 'We motivate others to follow their personal journey, celebrating each one\'s contribution to individual and collective achievements.',
      position: 'left'
    },
    {
      id: 'transformar',
      title: 'Transformar',
      titleEn: 'Transform',
      description: 'Somos vetores de mudanças positivas para a transformação das pessoas e do mundo.',
      descriptionEn: 'We are vectors of positive changes for the transformation of people and the world.',
      position: 'top-left'
    }
  ];

  const currentLang = getCurrentLanguage();

  return `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-museo-bold text-gray-900 mb-4">
            ${currentLang === 'pt' ? 'Nossos Valores' : 'Our Values'}
          </h2>
          <p class="text-lg text-gray-600 font-museo-light">
            ${currentLang === 'pt' ? '7 princípios que guiam nosso trabalho' : '7 principles that guide our work'}
          </p>
        </div>

        <!-- Desktop: Circular Layout (hidden on mobile) -->
        <div class="hidden lg:block relative" style="min-height: 800px;">
          <!-- Center Logo - Large version -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-civitas-orange-500">
            <img 
              src="https://www.civitassolis.org.br/wp-content/uploads/2016/11/cropped-Screen-Shot-2014-05-05-at-1.04.44-AM-180x180.png" 
              alt="Instituto Civitas Solis" 
              class="w-32 h-32 object-contain"
            />
          </div>

          <!-- Values in Circle -->
          ${values.map((value, index) => {
            const angle = (index * 360) / 7 - 90; // Start from top
            const radius = 300; // Distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return `
              <div 
                class="absolute transform -translate-x-1/2 -translate-y-1/2 w-64 group cursor-pointer transition-all duration-300 hover:scale-105"
                style="top: calc(50% + ${y}px); left: calc(50% + ${x}px);"
              >
                <!-- Connection Line -->
                <div class="absolute top-1/2 left-1/2 w-1 bg-civitas-orange-300 opacity-30 transform origin-left" 
                     style="height: 2px; width: ${radius - 80}px; transform: translate(-100%, -50%) rotate(${angle + 180}deg);"></div>
                
                <!-- Value Logo Circle -->
                <div class="relative">
                  <div class="w-24 h-24 bg-civitas-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow p-2">
                    <img 
                      src="https://www.civitassolis.org.br/wp-content/uploads/2016/11/cropped-Screen-Shot-2014-05-05-at-1.04.44-AM-180x180.png" 
                      alt="${currentLang === 'pt' ? value.title : value.titleEn}" 
                      class="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  
                  <div class="text-center bg-white rounded-lg p-4 shadow-md group-hover:shadow-xl transition-shadow">
                    <h3 class="text-xl font-museo-bold text-civitas-orange-500 mb-2">
                      ${currentLang === 'pt' ? value.title : value.titleEn}
                    </h3>
                    <p class="text-sm text-gray-600 font-museo-light leading-relaxed">
                      ${currentLang === 'pt' ? value.description : value.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Mobile: Vertical Cards (hidden on desktop) -->
        <div class="lg:hidden space-y-6">
          ${values.map((value, index) => `
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-civitas-orange-500 rounded-full flex items-center justify-center shadow-md p-2">
                    <img 
                      src="https://www.civitassolis.org.br/wp-content/uploads/2016/11/cropped-Screen-Shot-2014-05-05-at-1.04.44-AM-180x180.png" 
                      alt="${currentLang === 'pt' ? value.title : value.titleEn}" 
                      class="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-museo-bold text-civitas-orange-500 mb-3">
                    ${currentLang === 'pt' ? value.title : value.titleEn}
                  </h3>
                  <p class="text-gray-700 font-museo-light leading-relaxed">
                    ${currentLang === 'pt' ? value.description : value.descriptionEn}
                  </p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Scroll Indicator (only on desktop) -->
        <div class="hidden lg:flex justify-center mt-16">
          <div class="animate-bounce">
            <svg class="w-8 h-8 text-civitas-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `;
}
