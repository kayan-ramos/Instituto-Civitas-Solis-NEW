// Email Contact Component with Anti-Spam Protection
function renderEmailContact(options = {}) {
  const {
    title = '',
    subtitle = '',
    className = ''
  } = options;

  // Email ofuscado (protege contra scrapers)
  const emailParts = ['contato', '@', 'civitassolis', '.', 'org', '.', 'br'];
  const email = emailParts.join('');
  
  return `
    <div class="email-contact-section ${className}">
      ${title ? `<h2 class="text-3xl font-museo-bold text-gray-900 mb-4 text-center">${title}</h2>` : ''}
      ${subtitle ? `<p class="text-lg text-gray-600 mb-8 text-center font-museo-light">${subtitle}</p>` : ''}
      
      <div class="max-w-2xl mx-auto">
        <!-- Email Display Card -->
        <div class="bg-white rounded-lg shadow-lg p-8 text-center">
          <div class="mb-6">
            <div class="w-20 h-20 bg-civitas-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i data-lucide="mail" class="h-10 w-10 text-civitas-orange-500"></i>
            </div>
            <h3 class="text-2xl font-museo-bold text-gray-900 mb-2">
              ${t('contact.emailTitle') || 'Entre em Contato por E-mail'}
            </h3>
            <p class="text-gray-600 font-museo-light">
              ${t('contact.emailDescription') || 'Clique no botão abaixo para revelar nosso e-mail de contato'}
            </p>
          </div>

          <!-- Hidden Email (revealed on click) -->
          <div id="email-reveal-container" class="mb-6">
            <button 
              id="reveal-email-btn"
              onclick="revealEmail()"
              class="inline-flex items-center space-x-2 bg-civitas-orange-500 hover:bg-civitas-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg font-museo-light"
            >
              <i data-lucide="eye" class="h-5 w-5"></i>
              <span>${t('contact.revealEmail') || 'Revelar E-mail'}</span>
            </button>

            <!-- Email revealed -->
            <div id="email-display" class="hidden">
              <div class="bg-gray-50 rounded-lg p-6 mb-4">
                <p class="text-sm text-gray-600 mb-2 font-museo-light">
                  ${t('contact.ourEmail') || 'Nosso e-mail:'}
                </p>
                <p id="email-text" class="text-2xl font-museo-bold text-civitas-orange-500 mb-4 select-all">
                  <!-- Email será inserido aqui -->
                </p>
                
                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onclick="copyEmail()"
                    class="inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-museo-light"
                  >
                    <i data-lucide="copy" class="h-4 w-4"></i>
                    <span id="copy-btn-text">${t('contact.copyEmail') || 'Copiar E-mail'}</span>
                  </button>
                  
                  <a 
                    id="mailto-link"
                    href="#"
                    class="inline-flex items-center justify-center space-x-2 bg-civitas-orange-500 hover:bg-civitas-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-museo-light"
                  >
                    <i data-lucide="send" class="h-4 w-4"></i>
                    <span>${t('contact.openEmailClient') || 'Abrir Cliente de E-mail'}</span>
                  </a>
                </div>
              </div>

              <!-- Success Message -->
              <div id="copy-success" class="hidden bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div class="flex items-center justify-center text-green-700">
                  <i data-lucide="check-circle" class="h-5 w-5 mr-2"></i>
                  <span class="font-museo-light">${t('contact.emailCopied') || 'E-mail copiado para área de transferência!'}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Contact Info -->
          <div class="border-t pt-6">
            <p class="text-sm text-gray-600 mb-4 font-museo-light">
              ${t('contact.alternativeContact') || 'Outras formas de contato:'}
            </p>
            <div class="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/institutocivitassolis/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-civitas-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@institutocivitassolis5117" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-civitas-orange-500 transition-colors"
                aria-label="YouTube"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/institutocivitassolis" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-civitas-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Security Notice -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-500 font-museo-light">
            <i data-lucide="shield-check" class="h-4 w-4 inline mr-1"></i>
            ${t('contact.securityNote') || 'Por segurança, o e-mail é revelado apenas mediante interação humana'}
          </p>
        </div>
      </div>
    </div>
  `;
}

// Função para revelar o e-mail (proteção anti-bot)
function revealEmail() {
  // Construir e-mail de forma ofuscada
  const parts = ['contato', '@', 'civitassolis', '.', 'org', '.', 'br'];
  const email = parts.join('');
  
  // Atualizar interface
  const emailText = document.getElementById('email-text');
  const emailDisplay = document.getElementById('email-display');
  const revealBtn = document.getElementById('reveal-email-btn');
  const mailtoLink = document.getElementById('mailto-link');
  
  if (emailText && emailDisplay && revealBtn) {
    emailText.textContent = email;
    emailDisplay.classList.remove('hidden');
    revealBtn.classList.add('hidden');
    
    // Atualizar link mailto
    if (mailtoLink) {
      mailtoLink.href = `mailto:${email}?subject=${encodeURIComponent('Contato - Instituto Civitas Solis')}`;
    }
    
    // Reinicializar ícones
    initializeIcons();
  }
}

// Função para copiar e-mail
async function copyEmail() {
  const parts = ['contato', '@', 'civitassolis', '.', 'org', '.', 'br'];
  const email = parts.join('');
  
  try {
    await navigator.clipboard.writeText(email);
    
    // Mostrar mensagem de sucesso
    const successMsg = document.getElementById('copy-success');
    const copyBtnText = document.getElementById('copy-btn-text');
    
    if (successMsg) {
      successMsg.classList.remove('hidden');
      if (copyBtnText) {
        copyBtnText.textContent = t('contact.copied') || 'Copiado!';
      }
      
      // Reinicializar ícones
      initializeIcons();
      
      // Resetar após 3 segundos
      setTimeout(() => {
        successMsg.classList.add('hidden');
        if (copyBtnText) {
          copyBtnText.textContent = t('contact.copyEmail') || 'Copiar E-mail';
        }
      }, 3000);
    }
  } catch (err) {
    console.error('Erro ao copiar:', err);
    // Fallback para navegadores antigos
    const emailText = document.getElementById('email-text');
    if (emailText) {
      const range = document.createRange();
      range.selectNode(emailText);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      
      alert(t('contact.emailCopied') || 'E-mail copiado!');
    }
  }
}
