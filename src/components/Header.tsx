import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://www.civitassolis.org.br/wp-content/uploads/2016/11/cropped-Screen-Shot-2014-05-05-at-1.04.44-AM-180x180.png"
              alt="Instituto Civitas Solis"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Instituto Civitas Solis
              </h1>
              <p className="text-xs text-gray-600">Filosofia • Cultura • Espiritualidade</p>
            </div>
          </Link>

          {/* Language Selector - Desktop */}
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 mr-4">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    location.pathname === item.href
                      ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    style={{ fontFamily: 'Georgia, serif' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;