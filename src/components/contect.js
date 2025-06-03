import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="bg-black text-white py-16 px-4 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-violet-500 mb-6 hover:text-violet-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Me
                </motion.h2>

                <motion.p
                    className="text-gray-300 text-lg mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    I'd love to hear from you! Whether you want to discuss a project or just say hi.
                </motion.p>

                <motion.div
                    className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 inline-block text-left"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <p>
                        <strong>Email:</strong>{' '}
                        <a
                            href="mailto:ecriyasahameda@gmail.com?subject=Let%27s%20Connect%20-%20Saw%20Your%20Portfolio&body=Hi%20Riyas%2C%0D%0AI%20just%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                            className="text-violet-300 underline hover:text-violet-400"
                        >
                            ecriyasahameda@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:+916380123825" className="text-violet-300 underline hover:text-violet-400">
                            +91 63801 23825
                        </a>
                    </p>
                    <p>
                        <strong>LinkedIn:</strong>{' '}
                        <a
                            href="https://www.linkedin.com/in/riyas-ahameda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-300 underline hover:text-violet-400"
                        >
                            View Profile
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
