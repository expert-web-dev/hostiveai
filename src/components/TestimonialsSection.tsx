import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Card from './ui/Card';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of businesses worldwide. See what our clients have to say about our server hosting solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-8 md:-left-12 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevTestimonial}
              className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute -right-8 md:-right-12 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial}
              className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                      <Quote className="h-12 w-12 text-blue-100" />
                    </div>
                    
                    <p className="text-center text-lg md:text-xl text-gray-700 mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 mb-1">{testimonial.name}</div>
                        <div className="text-gray-600 mb-3">{testimonial.company}</div>
                        
                        <div className="flex items-center justify-center">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star 
                              key={index}
                              className={`h-5 w-5 ${
                                index < testimonial.rating 
                                  ? 'text-amber-400 fill-amber-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;