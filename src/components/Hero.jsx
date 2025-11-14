import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const slides = [
  { id: 1, text: 'Relax, Refresh, Rejuvenate', image: '/images/hero1.png' },
  { id: 2, text: 'Experience the Healing Touch', image: '/images/hero2.jpg' },
  { id: 3, text: 'Your Wellness, Our Priority', image: '/images/hero1.png' },
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-screen bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              {/* 🌙 Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-white text-center max-w-xl px-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                  {slide.text}
                </h1>

                <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full transition">
                  Book a Session
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
