import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Massage Alchemy</h3>
          <p className="text-gray-200">
            Experience tranquility and rejuvenation with our expert therapists.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-gray-300" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 text-center text-gray-200 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &copy; {new Date().getFullYear()} Massage Alchemy. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;