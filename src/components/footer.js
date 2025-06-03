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
                        href="mailto:ecriyasahameda@gmail.com?subject=Let%27s%20Connect%20-%20Saw%20Your%20Portfolio&body=Hi%20Riyas%2C%0D%0AI%20just%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                        className="text-gray-400 hover:text-white transition duration-300 transition-transform duration-400 hover:scale-125"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://wa.me/916380123825?text=Hi%20Riyas%2C%20I%20just%20visited%20your%20portfolio%20and%20I%E2%80%99m%20impressed%20with%20your%20work.%20Let%E2%80%99s%20connect!"
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
