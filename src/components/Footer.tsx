import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.globalWork'), href: '/trabalho-global' },
    { name: t('nav.missionVisionValues'), href: '/missao-visao-valores' },
    { name: t('nav.instagram'), href: '/instagram' },
    { name: t('nav.contact'), href: '/contato' },
    { name: t('nav.store'), href: 'http://loja.civitassolis.org.br', external: true }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-8">
            <img 
              src="https://www.civitassolis.org.br/wp-content/uploads/2016/11/cropped-Screen-Shot-2014-05-05-at-1.04.44-AM-180x180.png"
              alt="Instituto Civitas Solis"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2 className="text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              Instituto Civitas Solis
            </h2>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="w-full h-px bg-gray-700 mb-8"></div>

          <p className="text-center text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;