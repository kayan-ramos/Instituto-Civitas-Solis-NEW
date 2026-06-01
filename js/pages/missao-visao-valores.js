// Missao Visao Valores Page
function renderMissaoVisaoValoresPage() {
  const values = [
    { icon: 'hand-heart', title: t('missionVisionValues.respect'), desc: t('missionVisionValues.respectDesc') },
    { icon: 'users', title: t('missionVisionValues.coexist'), desc: t('missionVisionValues.coexistDesc') },
    { icon: 'share-2', title: t('missionVisionValues.share'), desc: t('missionVisionValues.shareDesc') },
    { icon: 'eye', title: t('missionVisionValues.recognize'), desc: t('missionVisionValues.recognizeDesc') },
    { icon: 'sparkles', title: t('missionVisionValues.enthuse'), desc: t('missionVisionValues.enthuseDesc') },
    { icon: 'lightbulb', title: t('missionVisionValues.inspire'), desc: t('missionVisionValues.inspireDesc') },
    { icon: 'zap', title: t('missionVisionValues.transform'), desc: t('missionVisionValues.transformDesc') }
  ];

  return `
    <div class="opacity-0 animate-fade-in">
      <!-- Hero -->
      <section class="relative py-32 bg-gradient-to-br from-orange-100 to-amber-100">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-museo-light">
            ${t('missionVisionValues.title')}
          </h1>
          <p class="text-xl text-gray-700 leading-relaxed font-museo-light">
            ${t('missionVisionValues.subtitle')}
          </p>
        </div>
      </section>

      <!-- Mission -->
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-12">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
              <i data-lucide="target" class="h-10 w-10 text-civitas-orange-500"></i>
            </div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6 font-museo-light">
              ${t('missionVisionValues.ourMission')}
            </h2>
          </div>
          <p class="text-xl text-gray-700 leading-relaxed text-center font-museo-light">
            ${t('missionVisionValues.missionText')}
          </p>
        </div>
      </section>

      <!-- Vision -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-12">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
              <i data-lucide="eye" class="h-10 w-10 text-civitas-orange-500"></i>
            </div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6 font-museo-light">
              ${t('missionVisionValues.ourVision')}
            </h2>
          </div>
          <p class="text-xl text-gray-700 leading-relaxed text-center font-museo-light">
            ${t('missionVisionValues.visionText')}
          </p>
        </div>
      </section>

      <!-- Values Circle (Responsive) -->
      ${renderValuesCircle()}
    </div>
  `;
}
