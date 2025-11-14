import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 py-16 px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.img
          src="/images/jj.avif"
          alt="About Massage"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">About Massage Alchemy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Massage Alchemy, we believe in the healing power of touch. Our mission is to provide a peaceful, nurturing space where you can relax, rejuvenate, and restore your body and mind.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With certified professionals and a passion for wellness, we offer personalized massage therapies tailored to your needs — whether you seek stress relief, pain management, or just a moment of calm.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;