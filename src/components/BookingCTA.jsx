import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const BookingCTA = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  return (
    <section
      id="booking"
      className="relative bg-green-600 text-white py-20 px-4 md:px-10 text-center overflow-hidden"
    >
      {/* Optional wave background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-20 animate-pulse z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Feel Rejuvenated?</h2>
        <p className="text-lg mb-8">
          Book your personalized massage session now and let our professionals take care of the rest.
        </p>

        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-50}
          onClick={handleClick}
          className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
        >
          Book a Session
        </Link>

        {/* Toast notification
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-sm bg-white text-green-700 px-6 py-2 rounded-full shadow inline-block"
          >
            🎉 Great! Scroll down to complete your booking.
          </motion.div>
        )} */}
      </motion.div>
    </section>
  );
};

export default BookingCTA;
