import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-4 md:px-12 border-t border-gray-800">
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-center">
                <h2 className="text-2xl font-semibold text-violet-500">Let's Connect</h2>

                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://github.com/riyas-git-sys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/riyas-ahameda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:ecriyasahameda@gmail.com"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Resume Download Button */}
                <a
                    href="/resume.pdf" // Place your resume in the public folder as resume.pdf
                    download
                    className="mt-4 bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
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
