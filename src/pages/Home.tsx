import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Microscope, Palette, Heart, Play, ArrowRight } from 'lucide-react';
import BookCarousel from '../components/BookCarousel';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const { t } = useTranslation();
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

  const books = [
    {
      id: 1,
      title: "A Renascença Oculta",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg"
    },
    {
      id: 2,
      title: "Filosofia Hermética",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg"
    },
    {
      id: 3,
      title: "Mistérios da Antiguidade",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg"
    },
    {
      id: 4,
      title: "Sabedoria Perene",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg"
    },
    {
      id: 5,
      title: "Arte e Espiritualidade",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    },
    {
      id: 6,
      title: "Ciência Sagrada",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg"
    }
  ];

  const videos = [
    { id: 1, title: "Filosofia e Modernidade", thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" },
    { id: 2, title: "Arte Sagrada", thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" },
    { id: 3, title: "Ciência e Espiritualidade", thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
    { id: 4, title: "Cultura e Tradição", thumbnail: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg" }
  ];

  return (
    <div className="opacity-0 animate-fade-in">
      {/* Hero Section */}
      <section 
        ref={(el) => sectionsRef.current[0] = el}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-6 leading-tight serif" style={{ fontFamily: 'Georgia, serif' }}>
            {t('home.heroTitle').split(' ').slice(0, 1).join(' ')} <span className="text-orange-500">{t('home.heroTitle').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-5xl md:text-7xl font-bold text-orange-500 mb-6 leading-tight serif" style={{ fontFamily: 'Georgia, serif' }}>
            {t('home.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/missao-visao-valores"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <span>{t('home.knowOurMission')}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/trabalho-global"
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 flex items-center justify-center space-x-2"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <span>{t('home.globalWork')}</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Institutional Text */}
      <section 
        ref={(el) => sectionsRef.current[1] = el}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              {t('home.ourOrganization')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              {t('home.organizationText1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              {t('home.organizationText2')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              {t('home.organizationText3')}
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section 
        ref={(el) => sectionsRef.current[2] = el}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16" style={{ fontFamily: 'Georgia, serif' }}>
            {t('home.ourPillars')}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Microscope className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {t('home.science')}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {t('home.scienceDesc')}
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Palette className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {t('home.art')}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {t('home.artDesc')}
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Heart className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {t('home.spirituality')}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {t('home.spiritualityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section 
        ref={(el) => sectionsRef.current[3] = el}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16" style={{ fontFamily: 'Georgia, serif' }}>
            {t('home.audiovisualContent')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section ref={(el) => sectionsRef.current[4] = el} className="opacity-0">
        <BookCarousel books={books} />
      </section>

      {/* Contact Form */}
      <section 
        ref={(el) => sectionsRef.current[5] = el}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;