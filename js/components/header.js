// Header Component
function renderHeader() {
  const header = document.getElementById('header');
  const currentPath = window.location.hash.slice(1) || '/';
  const currentLang = getCurrentLanguage();
  
  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.missionVisionValues'), href: '/missao-visao-valores' },
    { name: t('nav.youtube'), href: '/youtube' },
    { name: t('nav.instagram'), href: '/instagram' },
    { name: t('nav.contact'), href: '/contato' }
  ];
  
  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <a href="#/" class="flex items-center space-x-3">
          <img 
            src="https://www.civitassolis.org.br/wp-content/uploads/2016/11/cropped-Screen-Shot-2014-05-05-at-1.04.44-AM-180x180.png"
            alt="Instituto Civitas Solis"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 class="text-xl font-museo-bold text-civitas-orange-500">
              Instituto Civitas Solis
            </h1>
            <p class="text-xs text-gray-600">Filosofia • Cultura • Espiritualidade</p>
          </div>
        </a>

        <!-- Language Selector - Desktop -->
        <div class="hidden lg:block">
          ${renderLanguageSelector()}
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-8 mr-4">
          ${navigation.map(item => {
            if (item.external) {
              return `
                <a
                  href="${item.href}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-700 hover:text-civitas-orange-500 transition-colors duration-200 font-medium font-museo-regular"
                >
                  ${item.name}
                </a>
              `;
            } else {
              const isActive = currentPath === item.href;
              return `
                <a
                  href="#${item.href}"
                  class="transition-colors duration-200 font-medium font-museo-regular ${
                    isActive
                      ? 'text-civitas-orange-500 border-b-2 border-civitas-orange-500 pb-1'
                      : 'text-gray-700 hover:text-civitas-orange-500'
                  }"
                >
                  ${item.name}
                </a>
              `;
            }
          }).join('')}
        </nav>

        <!-- Mobile menu button -->
        <div class="lg:hidden flex items-center space-x-2">
          ${renderLanguageSelector()}
          <button
            onclick="toggleMobileMenu()"
            class="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <i data-lucide="menu" class="h-6 w-6 menu-icon"></i>
            <i data-lucide="x" class="h-6 w-6 close-icon hidden"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div id="mobile-menu" class="hidden lg:hidden pb-4">
        <nav class="space-y-2">
          ${navigation.map(item => {
            if (item.external) {
              return `
                <a
                  href="${item.href}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block px-3 py-2 text-gray-700 hover:text-civitas-orange-500 hover:bg-gray-50 rounded-md transition-colors duration-200 font-museo-regular"
                  onclick="closeMobileMenu()"
                >
                  ${item.name}
                </a>
              `;
            } else {
              const isActive = currentPath === item.href;
              return `
                <a
                  href="#${item.href}"
                  class="block px-3 py-2 rounded-md transition-colors duration-200 font-museo-regular ${
                    isActive
                      ? 'text-civitas-orange-500 bg-civitas-orange-50'
                      : 'text-gray-700 hover:text-civitas-orange-500 hover:bg-gray-50'
                  }"
                  onclick="closeMobileMenu()"
                >
                  ${item.name}
                </a>
              `;
            }
          }).join('')}
        </nav>
      </div>
    </div>
  `;
  
  initializeIcons();
}

function renderLanguageSelector() {
  const currentLang = getCurrentLanguage();
  
  return `
    <div class="relative">
      <button
        onclick="toggleLanguageMenu()"
        class="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-orange-500 transition-colors duration-200 bg-white"
        aria-label="Select language"
      >
        <i data-lucide="globe" class="h-5 w-5 text-gray-700"></i>
        <span class="text-sm font-medium text-gray-700 uppercase">${currentLang}</span>
        <i data-lucide="chevron-down" class="h-4 w-4 text-gray-700"></i>
      </button>
      
      <div id="language-menu" class="hidden absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-50">
        <div class="py-1">
          <button
            onclick="selectLanguage('pt')"
            class="w-full text-left px-4 py-2 text-sm ${currentLang === 'pt' ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}"
          >
            🇧🇷 Português
          </button>
          <button
            onclick="selectLanguage('en')"
            class="w-full text-left px-4 py-2 text-sm ${currentLang === 'en' ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}"
          >
            🇺🇸 English
          </button>
        </div>
      </div>
    </div>
  `;
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  menu.classList.add('hidden');
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

function toggleLanguageMenu() {
  const menu = document.getElementById('language-menu');
  menu.classList.toggle('hidden');
}

function selectLanguage(lang) {
  changeLanguage(lang);
  toggleLanguageMenu();
  renderHeader();
  renderCurrentPage();
}

// Close language menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('language-menu');
  const button = e.target.closest('button[onclick="toggleLanguageMenu()"]');
  
  if (menu && !menu.contains(e.target) && !button) {
    menu.classList.add('hidden');
  }
});

// Re-render header when language changes
window.addEventListener('languageChanged', renderHeader);
