import React from 'react';
import { Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contato = () => {
  return (
    <div className="opacity-0 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Mail className="h-16 w-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            Estamos aqui para ouvir você. Compartilhe suas ideias, dúvidas ou interesse em nossos projetos.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                E-mail
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                contato@civitassolis.org.br
              </p>
            </div>


            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Horário
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                Segunda a Sexta<br />9h às 18h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            Outras Formas de Conexão
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Parcerias e Colaborações
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Interessado em estabelecer parcerias acadêmicas, culturais ou espirituais? Entre em contato conosco para explorar oportunidades de colaboração.
              </p>
              <div className="text-orange-500 font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                parcerias@civitassolis.org.br
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Imprensa e Mídia
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Para solicitações de entrevistas, materiais de imprensa ou informações para mídia, utilize nosso canal dedicado.
              </p>
              <div className="text-orange-500 font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                imprensa@civitassolis.org.br
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;