import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MessageMe = () => {
  const [formData, setFormData] = useState({
    form_name: '',  // Changed from 'name' to match template
    form_email: '', // Changed from 'email' to match template
    form_phone: '', // Changed from 'mobileno' to match template
    subject: '',    // Added new field
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Add current time to form data
    const time = new Date().toLocaleString();
    const dataToSend = {
      ...formData,
      time: time
    };

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_g0far4h';
    const templateID = 'template_9tqhjv5';
    const userID = '3nAPdAMAHEiGtQDn6';

    emailjs.send(serviceID, templateID, dataToSend, userID)
      .then((result) => {
        console.log(result.text);
        setSubmitStatus('success');
        setFormData({
          form_name: '',
          form_email: '',
          form_phone: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
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
          Send me a message and I'll get back to you as soon as possible.
        </motion.p>

        <motion.form
          onSubmit={sendEmail}
          className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {submitStatus === 'success' && (
            <motion.div
              className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Failed to send message. Please try again or contact me directly.
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="form_name" className="block text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="form_name"
                name="form_name"
                value={formData.form_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <label htmlFor="form_email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="form_email"
                name="form_email"
                value={formData.form_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
                placeholder="Your email"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="form_phone" className="block text-gray-300 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="form_phone"
                name="form_phone"
                value={formData.form_phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
                placeholder="Your phone number"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-500 transition-all"
                placeholder="Message subject"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-6"
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
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-violet-600 to-violet-800 text-white px-8 py-3 rounded-lg font-medium hover:from-violet-700 hover:to-violet-900 transition-all duration-300 shadow-lg hover:shadow-violet-900/30 disabled:opacity-50"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (<span className="flex items-center justify-center">
                Send Message
                <i className="fas fa-paper-plane ml-2"></i>
              </span>)}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default MessageMe;