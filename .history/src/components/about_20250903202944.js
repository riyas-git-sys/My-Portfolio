import React from 'react';
import aboutImg from '../assets/aboutimg.jpg'; // Make sure this image exists
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="bg-black text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
                
                {/* sticky Image  */}
                <motion.div
                    className="md:w-1/2 flex flex-col items-center md:items-start md:sticky md:top-24 md:self-start space-y-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={aboutImg}
                        alt="Riyas Ahamed"
                        className="rounded-3xl shadow-2xl w-full max-w-sm object-cover"
                    />
                </motion.div>

                {/* start of scroll */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-violet-400 mb-4 transition-transform duration-300 hover:scale-105 hover:text-violet-600">
                        About Me
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I'm <span className="text-white font-semibold">Riyas Ahamed</span>, a Full stack developer passionate about building modern, accessible, and user-friendly websites and web applications.
                        I specialize in <span className="text-violet-400 font-medium">MERN Stack, Fullstack development</span> and clean <span className="text-violet-400 font-medium">UI/UX design</span>.
                    </p>
                    <h3 className="text-violet-400 text-2xl font-semibold md:text-left transition-transform duration-300 hover:scale-105 hover:text-violet-600">Core Skills</h3>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-violet-400 text-xl font-semibold">Frontend</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">HTML</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">CSS</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">SASS</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">SCSS</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Bootstrap</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Javascript</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">React.js</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">React Native</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Expo</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">UI/UX Design</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Framer Motion</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Tailwind CSS</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Figma</li>
                        </ul>
                        
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-violet-400 text-xl font-semibold">Backend</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Python</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Java</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Node.js</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Express.js</li>
                        </ul>
                        
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-violet-400 text-xl font-semibold">Databases</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">SQL</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">MongoDB</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">My SQL</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Firebase</li>
                        </ul>
                        
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-violet-400 text-xl font-semibold">Other Skills</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Embedded C</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">C++</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Arduino</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Raspberry Pi</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Data Analaytics</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Data Science</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Data Structure & Algorithms</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Flexbox</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Git</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Google Cloud</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">IoT</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Power BI</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Tableau</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Canva</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Numpy</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Pandas</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Cloud Server</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">Matplotlib</li>
                            <li className="transition-transform duration-300 hover:scale-105 hover:text-violet-300">AR/VR Models</li>
                            {/* <li></li> */}
                        </ul>
                        
                    </div>
                </motion.div> 
                {/* //end of scroll */}
            </div>
        </section>
    );
};

export default About;
