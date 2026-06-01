import React, { useRef, useEffect } from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const Instagram = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Carregar script do Elfsight Instagram Feed
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup do script quando o componente for desmontado
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="opacity-0 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <InstagramIcon className="h-16 w-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Últimas Postagens do Instagram
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            Acompanhe nossa jornada diária de descobertas e reflexões sobre filosofia, cultura e espiritualidade.
          </p>
          <a 
            href="https://www.instagram.com/institutocivitassolis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <InstagramIcon className="h-5 w-5" />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </section>

      {/* Instagram Feed Widget */}
      <section 
        ref={(el) => sectionsRef.current[0] = el}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Feed Oficial do Instagram
            </h3>
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Acompanhe nossas últimas postagens diretamente do perfil @institutocivitassolis
            </p>
            
            {/* Widget do Elfsight Instagram Feed */}
            <div className="bg-white rounded-lg shadow-lg p-4 min-h-[600px]">
              <div className="elfsight-app-2a7a3c5d-d225-4b82-9882-3265d1926b36" data-elfsight-app-lazy></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/institutocivitassolis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-200"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <span>Ver mais no Instagram</span>
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instagram;