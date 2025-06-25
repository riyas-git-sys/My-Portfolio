import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const [showResume, setShowResume] = useState(false);

    return (
        <>
            {/* Main Footer Section */}
            <footer className={`relative z-10 ${showResume ? 'filter blur-sm pointer-events-none' : ''}`}>
                <div className="bg-black text-white py-10 px-4 md:px-12 border-t border-gray-800">
                    <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-center transition duration-300">
                        <h2 className="text-2xl font-semibold text-violet-500 transition-transform duration-500 hover:scale-110">
                            Let's Connect
                        </h2>

                        {/* Social Icons */}
                        <div className="flex space-x-6 text-2xl">
                            <a href="https://github.com/riyas-git-sys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 hover:scale-125"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/riyas-ahameda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 hover:scale-125"><FaLinkedin /></a>
                            <a href="mailto:ecriyasahameda@gmail.com?subject=Let%27s%20Connect%20-%20Saw%20Your%20Portfolio&body=Hi%20Riyas%2C%0D%0AI%20just%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." className="text-gray-400 hover:text-white transition duration-300 hover:scale-125"><FaEnvelope /></a>
                            <a href="https://wa.me/916380123825?text=Hi%20Riyas%2C%20I%20just%20visited%20your%20portfolio%20and%20I%E2%80%99m%20impressed%20with%20your%20work.%20Let%E2%80%99s%20connect!" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 hover:scale-125"><FaWhatsapp /></a>
                            <a href="https://www.instagram.com/devil._dank_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 hover:scale-125"><FaInstagram /></a>
                            <a href="https://x.com/RiyasA77124" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 hover:scale-125"><FaTwitter /></a>
                        </div>

                        {/* Resume Buttons */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a
                                href="/Resume.pdf"
                                download
                                className="bg-violet-600 hover:bg-violet-700 transition-all duration-500 hover:scale-110 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
                            >
                                Download Resume
                            </a>
                            <button
                                onClick={() => setShowResume(true)}
                                className="bg-white text-violet-600 hover:bg-violet-200 font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-500 hover:scale-110"
                            >
                                View Resume
                            </button>
                        </div>

                        <a
                            href="https://riyasresume.my.canva.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-500 hover:scale-110 text-violet-400 hover:text-violet-700 font-semibold mt-6"
                        >
                            Canva Resume
                        </a>

                        <p className="text-sm text-gray-500 mt-6">
                            © {new Date().getFullYear()} Riyas Ahamed. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Modal for Resume */}
            {showResume && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl overflow-y-auto shadow-xl p-4">
                        {/* Close Button */}
                            <button
                                onClick={() => setShowResume(false)}
                                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-50"
                            >
                                ✕
                            </button>

                            {/* Canva Embed (with fixed height) */}
                            <div className="w-full h-[80vh] rounded-md overflow-hidden mt-10">
                                <iframe
                                loading="lazy"
                                src="https://www.canva.com/design/DAGrR_1vAiY/59lDPiEVLmJZAI6rw05m0A/view?embed"
                                allowFullScreen
                                title="Resume"
                                className="w-full h-full border-none"
                                />
                            </div>
                            </div>
                        </div>
                        )}
        </>
    );
};

export default Footer;
