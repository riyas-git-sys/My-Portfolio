import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MessageMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileno: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMobile: ${formData.mobileno}%0AMessage: ${formData.message}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/916380123825?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      mobileno: '',
      message: ''
    });
  };

  return (
    <section id="message" className="bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-violet-500 mb-6 hover:text-violet-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Message Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Send me a message and let's discuss your project.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
              placeholder="Your name"
            />
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
              placeholder="Your email"
            />
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <label htmlFor="mobileno" className="block text-gray-300 font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileno"
              name="mobileno"
              value={formData.mobileno}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
              placeholder="Your mobile number"
            />
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
              placeholder="Your message"
            ></textarea>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-violet-600 to-violet-800 text-white px-8 py-3 rounded-lg font-medium hover:from-violet-700 hover:to-violet-900 transition-all duration-300 shadow-lg hover:shadow-violet-900/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default MessageMe;