import React from 'react';
import { testimonialsData } from '../data';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-sm font-bold tracking-widest text-emerald-600 uppercase">
            Client Voices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded mx-auto mt-4" />
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-4">
            Trusted by logistics yards, municipal cooperatives, and regional facilities across Canada for engineering excellence.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-gray-100 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow relative overflow-hidden"
            >
              {/* Quotation icon accent top */}
              <div className="absolute top-6 right-6 text-emerald-100 select-none">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center space-x-1.5 mb-5 select-none">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm text-gray-650 leading-relaxed italic mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Client Info profile row */}
              <div className="flex items-center space-x-3.5 pt-5 border-t border-gray-200/50">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-100 bg-slate-200">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-gray-850">
                    {test.name}
                  </h4>
                  <p className="font-sans text-[10px] text-gray-500">
                    {test.role}, <span className="font-semibold text-emerald-600">{test.company}</span>
                  </p>
                  <p className="font-sans text-[9px] text-gray-400">
                    {test.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
