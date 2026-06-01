import React, { useRef, useEffect } from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const MissaoVisaoValores = () => {
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

  const valores = [
    { id: 1, title: 'Respeitar', description: 'Honramos a dignidade de cada ser e tradição' },
    { id: 2, title: 'Coexistir', description: 'Celebramos a diversidade em unidade' },
    { id: 3, title: 'Compartilhar', description: 'Dividimos conhecimento com generosidade' },
    { id: 4, title: 'Reconhecer', description: 'Valorizamos a sabedoria em todas suas formas' },
    { id: 5, title: 'Entusiasmar', description: 'Inspiramos paixão pela descoberta' },
    { id: 6, title: 'Inspirar', description: 'Despertamos o melhor em cada pessoa' },
    { id: 7, title: 'Transformar', description: 'Catalisamos mudanças positivas duradouras' }
  ];

  return (
    <div className="opacity-0 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Compass className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Missão, Visão e Valores
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            Os princípios que orientam nossa jornada rumo a uma consciência planetária transformada.
          </p>
        </div>
      </section>

      {/* Missão */}
      <section 
        ref={(el) => sectionsRef.current[0] = el}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-orange-50 border-l-8 border-orange-500 p-8 rounded-r-lg">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Nossa Missão
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Promover o desenvolvimento integral do ser humano através da síntese harmoniosa entre ciência, arte e espiritualidade, contribuindo para o despertar de uma nova consciência planetária baseada na sabedoria perene e na cooperação entre todas as tradições da humanidade.
            </p>
          </div>
        </div>
      </section>

      {/* Visão */}
      <section 
        ref={(el) => sectionsRef.current[1] = el}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-l-8 border-orange-500 p-8 rounded-r-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Nossa Visão
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Ser reconhecido como um centro de excelência na integração dos conhecimentos universais, inspirando uma geração de líderes conscientes capazes de criar soluções inovadoras para os desafios globais, fundamentadas na sabedoria ancestral e na ciência contemporânea, contribuindo para a construção de uma civilização mais justa, harmoniosa e sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section 
        ref={(el) => sectionsRef.current[2] = el}
        className="py-20 bg-white opacity-0 relative overflow-hidden"
      >
        {/* Background decorativo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="400" height="400" viewBox="0 0 400 400" className="text-orange-500">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M200,20 L220,80 L280,80 L240,120 L260,180 L200,140 L140,180 L160,120 L120,80 L180,80 Z" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
              Sete princípios fundamentais que guiam todas as nossas ações e decisões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {valores.map((valor, index) => (
              <div 
                key={valor.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-gray-100 hover:border-orange-200 transform hover:-translate-y-1 ${
                  index === 6 ? 'md:col-span-2 lg:col-span-1 xl:col-start-2' : ''
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                      {valor.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {valor.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    {valor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Estes valores não são apenas palavras, mas princípios vivos que permeiam cada aspecto de nosso trabalho. 
              Eles nos lembram da responsabilidade que temos de honrar a sabedoria do passado enquanto construímos 
              um futuro mais consciente e harmonioso para toda a humanidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissaoVisaoValores;