import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description?: string;
}

interface BookCarouselProps {
  books: Book[];
  className?: string;
}

const BookCarousel: React.FC<BookCarouselProps> = ({ books, className = "" }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, books.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const backgroundStyle = {
    backgroundImage: 'linear-gradient(45deg, #f4f1e8 25%, transparent 25%), linear-gradient(-45deg, #f4f1e8 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4f1e8 75%), linear-gradient(-45deg, transparent 75%, #f4f1e8 75%)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
  };

  return (
    <div className={`relative ${className}`} style={backgroundStyle}>
      <div className="absolute inset-0 bg-amber-50 bg-opacity-60"></div>
      <div className="relative py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
          {t('home.libraryTitle')}
        </h2>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {books.map((book) => (
                <div 
                  key={book.id} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="text-center p-4">
                                <h3 class="font-bold text-gray-700 mb-2">${book.title}</h3>
                                <p class="text-sm text-gray-600">${book.author}</p>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                        {book.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {books.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
                disabled={currentIndex >= maxIndex}
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;