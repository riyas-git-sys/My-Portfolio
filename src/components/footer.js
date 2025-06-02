import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-4 md:px-12 border-t border-gray-800">
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-center">
                <h2 className="text-2xl font-semibold text-violet-500 transition-transform duration-500 hover:scale-110">Let's Connect</h2>

                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://github.com/riyas-git-sys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300 transition-transform duration-400 hover:scale-125"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/riyas-ahameda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300 transition-transform duration-400 hover:scale-125"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:ecriyasahameda@gmail.com"
                        className="text-gray-400 hover:text-white transition duration-300 transition-transform duration-400 hover:scale-125"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://wa.me/916380123825"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300 transition-transform duration-400 hover:scale-125"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://www.instagram.com/devil._dank_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300 transition-transform duration-400 hover:scale-125"
                    >
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/RiyasA77124"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300 transition-transform duration-400 hover:scale-125"
                    >
                        <FaTwitter />
                    </a>

                </div>

                {/* Resume Download Button */}
                <a
                    href="/resume.pdf" // Place your resume in the public folder as resume.pdf
                    download
                    className="mt-4 bg-violet-600 hover:bg-violet-700 transition-all duration-500 hover:scale-110 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
                >
                    Download Resume
                </a>

                <p className="text-sm text-gray-500 mt-6">
                    © {new Date().getFullYear()} Riyas Ahamed. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
