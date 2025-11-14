import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/mom1.webp',
  '/images/mom2.webp',
  '/images/mom3.jpg',
  '/images/mom3.jpg',
  '/images/mom2.webp',
  '/images/mom1.webp',
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-100 py-20 px-4 md:px-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-green-600 mb-4">Massage Moments</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A glimpse into the serene atmosphere and calming experience at Massage Alchemy.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-110 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;