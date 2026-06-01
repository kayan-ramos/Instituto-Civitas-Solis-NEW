import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Heart, ArrowRight } from 'lucide-react';

const TrabalhoGlobal = () => {
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

  return (
    <div className="opacity-0 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Trabalho Global
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            Nossa missão transcende fronteiras geográficas e culturais, conectando corações e mentes em busca de uma consciência planetária unificada.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={(el) => sectionsRef.current[0] = el}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Uma Visão Planetária
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                O Instituto Civitas Solis reconhece que os desafios contemporâneos da humanidade são de natureza global e requerem soluções que transcendam as divisões tradicionais entre nações, culturas e tradições espirituais. Nosso trabalho é fundamentado na compreensão de que existe uma unidade subjacente que conecta todos os seres e que a verdadeira transformação social só pode ocorrer através do despertar dessa consciência universal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Através de uma abordagem integral que honra tanto a diversidade cultural quanto os princípios universais da sabedoria perene, trabalhamos para construir pontes entre Oriente e Ocidente, entre tradição e modernidade, entre ciência e espiritualidade.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Parceria Internacional
              </h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Embassy of the Free Mind
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Temos a honra de manter uma parceria estratégica com a Embassy of the Free Mind, uma organização internacional dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos occidentais. Esta colaboração nos permite expandir nosso alcance e impacto, conectando-nos com uma rede global de pesquisadores, filósofos e buscadores da verdade.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Esta parceria exemplifica nosso compromisso com a cooperação internacional no campo dos estudos filosóficos e espirituais. Juntos, desenvolvemos projetos de pesquisa, eventos educacionais e publicações que contribuem para a compreensão mais profunda das tradições de sabedoria da humanidade.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Iniciativas Transformadoras
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Nosso trabalho global se manifesta através de diversas iniciativas que buscam promover a evolução da consciência humana em escala planetária:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Intercâmbio Cultural
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    Facilitamos o intercâmbio de conhecimentos entre diferentes tradições culturais e espirituais, promovendo o diálogo inter-religioso e intercultural.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heart className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Educação Holística
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    Desenvolvemos programas educacionais que integram conhecimento intelectual, desenvolvimento emocional e crescimento espiritual.
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Através de publicações multilíngues, conferências internacionais, workshops transformacionais e plataformas digitais, alcançamos pessoas em todos os continentes, oferecendo ferramentas práticas para o desenvolvimento pessoal e a transformação social positiva.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Impacto e Perspectivas Futuras
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Nosso trabalho global já tocou a vida de milhares de pessoas em dezenas de países, contribuindo para o despertar de uma nova geração de líderes conscientes e agentes de transformação. Vemos evidências crescentes de que uma nova consciência planetária está emergindo, uma consciência que reconhece a interconexão fundamental de toda vida e a necessidade urgente de cooperação global.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Olhando para o futuro, continuamos expandindo nossa rede de parceiros internacionais, desenvolvendo novas tecnologias educacionais e criando espaços cada vez mais inclusivos para o diálogo entre diferentes tradições de sabedoria. Nossa visão é de um mundo onde a sabedoria perene informe as decisões globais e onde a espiritualidade autêntica seja reconhecida como fundamental para o bem-estar da humanidade e do planeta.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contato"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <span>Junte-se à Nossa Missão</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabalhoGlobal;