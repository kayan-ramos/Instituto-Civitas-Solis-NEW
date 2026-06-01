import React, { useRef, useEffect } from 'react';
import { ExternalLink, Play, ShoppingCart, Star, ArrowRight } from 'lucide-react';
import BookCarousel from '../components/BookCarousel';

const Livro = () => {
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

  const relatedBooks = [
    {
      id: 1,
      title: "Filosofia Hermética",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg"
    },
    {
      id: 2,
      title: "Mistérios da Antiguidade",
      author: "Instituto Civitas Solis", 
      cover: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg"
    },
    {
      id: 3,
      title: "Sabedoria Perene",
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg"
    },
    {
      id: 4,
      title: "Arte e Espiritualidade", 
      author: "Instituto Civitas Solis",
      cover: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    }
  ];

  return (
    <div className="opacity-0 animate-fade-in">
      {/* Hero Section */}
      <section 
        ref={(el) => sectionsRef.current[0] = el}
        className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-100 opacity-0"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">(4.8/5 - 127 avaliações)</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                A Renascença Oculta
              </h1>
              <p className="text-xl text-gray-700 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Redescobrindo os Mistérios Herméticos que Transformaram o Mundo
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Uma jornada fascinante através dos conhecimentos secretos que influenciaram os grandes mestres da Renascença, revelando como a sabedoria hermética moldou nossa civilização moderna.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://loja.civitassolis.org.br/a-renascenca-oculta-livro-impresso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Comprar Agora</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Assistir Explicação</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg"
                  alt="A Renascença Oculta"
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute top-4 left-4 w-full max-w-md mx-auto h-full bg-orange-200 rounded-lg opacity-30"></div>
              <div className="absolute top-8 left-8 w-full max-w-md mx-auto h-full bg-orange-300 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section 
        ref={(el) => sectionsRef.current[1] = el}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Sobre o Livro
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              "A Renascença Oculta" revela os segredos por trás do maior período de florescimento cultural da humanidade. Este livro meticulosamente pesquisado explora como os conhecimentos herméticos, transmitidos através de sociedades secretas e academias platônicas, influenciaram gigantes como Leonardo da Vinci, Marsílio Ficino, Pico della Mirandola e muitos outros.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  O que você descobrirá:
                </h3>
                <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                  <li>• As sociedades secretas por trás da Renascença</li>
                  <li>• Símbolos herméticos nas obras de arte</li>
                  <li>• A influência da Cabala cristã</li>
                  <li>• Alquimia e transformação espiritual</li>
                  <li>• Conexões com tradições orientais</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Características:
                </h3>
                <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                  <li>• 320 páginas ricamente ilustradas</li>
                  <li>• Mais de 100 imagens em cores</li>
                  <li>• Bibliografia extensa</li>
                  <li>• Índice remissivo completo</li>
                  <li>• Capa dura com acabamento premium</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Este não é apenas um livro de história, mas um convite à reflexão sobre como os conhecimentos perenes podem informar nossa busca contemporânea por significado e transformação. Uma obra essencial para estudantes de filosofia, história da arte, esoterismo occidental e todos aqueles interessados em compreender as raízes ocultas de nossa civilização.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section 
        ref={(el) => sectionsRef.current[2] = el}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            O que dizem os leitores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
                "Uma obra magistral que conecta pontos históricos de forma brilhante. Essencial para quem busca compreender as raízes esotéricas da cultura occidental."
              </p>
              <p className="text-gray-600 font-semibold">— Dr. Maria Santos, Historiadora</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
                "Pesquisa impecável e narrativa envolvente. O livro transforma nossa compreensão sobre o Renascimento e seus verdadeiros mestres."
              </p>
              <p className="text-gray-600 font-semibold">— Prof. João Silva, Filosofia</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
                "Não consegui parar de ler! Uma jornada fascinante através dos mistérios que moldaram nossa civilização. Altamente recomendado."
              </p>
              <p className="text-gray-600 font-semibold">— Ana Costa, Leitora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={(el) => sectionsRef.current[3] = el}
        className="py-16 bg-orange-500 opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Garanta já o seu exemplar
          </h2>
          <p className="text-xl text-orange-100 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            Mergulhe nos mistérios da Renascença e descubra os segredos que transformaram o mundo.
          </p>
          <a
            href="http://loja.civitassolis.org.br/a-renascenca-oculta-livro-impresso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-orange-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Comprar na Loja Oficial</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Leituras Relacionadas */}
      <section ref={(el) => sectionsRef.current[4] = el} className="opacity-0">
        <BookCarousel 
          books={relatedBooks}
          className="bg-white"
        />
      </section>
    </div>
  );
};

export default Livro;