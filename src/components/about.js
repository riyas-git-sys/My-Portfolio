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
                    <h2 className="text-4xl md:text-5xl font-bold text-violet-500 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I'm <span className="text-white font-semibold">Riyas Ahamed</span>, a Full stack developer passionate about building modern, accessible, and user-friendly websites and web applications.
                        I specialize in <span className="text-violet-400 font-medium">MERN Stack, Fullstack development</span> and clean <span className="text-violet-400 font-medium">UI/UX design</span>.
                    </p>
                    <h3 className="text-violet-400 text-2xl font-semibold md:text-left">Core Skills</h3>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6">
                        <h3 className="text-violet-400 text-xl font-semibold">Frontend</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>SCSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>UI/UX Design</li>
                            <li>Framer Motion</li>
                            <li>Tailwind CSS</li>
                            <li>Figma</li>
                        </ul>
                        
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6">
                        <h3 className="text-violet-400 text-xl font-semibold">Backend</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li>Python</li>
                            <li>Java</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                        
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6">
                        <h3 className="text-violet-400 text-xl font-semibold">Databases</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>My SQL</li>
                            <li>NoSQL</li>
                        </ul>
                        
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0 mt-6">
                        <h3 className="text-violet-400 text-xl font-semibold">Other Skills</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li>Embedded C</li>
                            <li>C++</li>
                            <li>Arduino</li>
                            <li>Raspberry Pi</li>
                            <li>Data Analaytics</li>
                            <li>Data Science</li>
                            <li>Data Structure & Algorithms</li>
                            <li>Flexbox</li>
                            <li>Git</li>
                            <li>Google Cloud</li>
                            <li>IoT</li>
                            <li>Power BI</li>
                            <li>Tableau</li>
                            <li>Canva</li>
                            <li>Numpy</li>
                            <li>Pandas</li>
                            <li>Cloud Server</li>
                            <li>Matplotlib</li>
                            <li>AR/VR Models</li>
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
