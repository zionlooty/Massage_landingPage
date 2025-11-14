import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiLotus, GiHealing, GiStoneStack } from 'react-icons/gi';

const services = [
  {
    icon: <GiLotus size={40} />,
    title: 'Swedish Massage',
    desc: 'A gentle massage technique to promote relaxation, ease muscle tension, and improve circulation.',
    details: 'Swedish massage is ideal for beginners or those who simply want to relax. It uses long, gliding strokes to stimulate blood flow and relieve stress.',
  },
  {
    icon: <GiHealing size={40} />,
    title: 'Deep Tissue Massage',
    desc: 'Targets deeper layers of muscle and connective tissue to relieve chronic pain and tension.',
    details: 'Deep tissue massage focuses on realigning deeper layers of muscles and connective tissue. It’s especially helpful for chronic aches and pain.',
  },
  {
    icon: <GiStoneStack size={40} />,
    title: 'Hot Stone Therapy',
    desc: 'Heated stones are placed on key points of the body to warm up tight muscles and balance energy.',
    details: 'Hot stone therapy uses smooth, heated stones to deeply warm tight muscles, reduce tension, and promote healing by improving energy flow.',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => setSelectedService(service);
  const handleClose = () => setSelectedService(null);

  return (
    <section id="services" className="bg-white py-20 px-4 md:px-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-green-600 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from a range of massage techniques to help you relax, heal, and rejuvenate your body and mind.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => handleOpen(service)}
          >
            <div className="text-green-600 mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>
            <div className="text-green-600 mb-4 flex justify-center">
              {selectedService.icon}
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 text-center">{selectedService.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
