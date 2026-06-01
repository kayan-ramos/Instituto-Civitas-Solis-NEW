import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title, 
  subtitle,
  className = ""
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const displayTitle = title || t('contactForm.title');
  const displaySubtitle = subtitle || t('contactForm.subtitle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contactForm.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contactForm.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            {t('contactForm.success')}
          </h3>
          <p className="text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
            {t('contactForm.successText')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          {displayTitle}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
          {displaySubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            {t('contactForm.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ fontFamily: 'Georgia, serif' }}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            {t('contactForm.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ fontFamily: 'Georgia, serif' }}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            {t('contactForm.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
            style={{ fontFamily: 'Georgia, serif' }}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            {t('contactForm.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ fontFamily: 'Georgia, serif' }}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <Send className="h-5 w-5" />
          <span>{t('contactForm.send')}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;