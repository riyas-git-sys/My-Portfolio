import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import logo from '../assets/pic.png';
import ReactChatbotify from 'react-chatbotify'; // Correct import

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [chatbotOpen, setChatbotOpen] = useState(false);

    // Chatbot configuration
    const chatbotStyles = {
        theme: {
            primaryColor: "#8B5CF6", // violet-500 to match your theme
            secondaryColor: "#1F2937", // dark gray
            fontFamily: "system-ui, sans-serif",
        },
        chatButton: {
            icon: "🤖",
        },
    };

    // Sample chatbot flow
    const chatbotFlow = {
        start: {
            message: "Hello! I'm Riyas' assistant. How can I help you?",
            path: "next",
        },
        next: {
            message: "Choose an option:",
            options: [
                {
                    value: "projects",
                    label: "View Projects",
                    trigger: "projects",
                },
                {
                    value: "contact",
                    label: "Contact Info",
                    trigger: "contact",
                },
                {
                    value: "resume",
                    label: "Download Resume",
                    trigger: "resume",
                },
            ],
        },
        projects: {
            message: "Check out my projects section below! You'll find my latest work there.",
            end: true,
        },
        contact: {
            message: "You can reach me at ecriyasahameda@gmail.com or connect with me on LinkedIn.",
            end: true,
        },
        resume: {
            message: "You can download my resume from the contact section or visit my portfolio.",
            end: true,
        },
    };

    return (
        <>
            <header className="bg-black text-white fixed w-full z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src={logo} 
                            className='w-10 h-10 rounded-full object-cover' 
                            alt='logo'
                        />
                        <h1 className="text-3xl font-bold text-violet-500">Riyas Ahamed</h1>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {['home', 'about', 'projects', 'contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-gray-300 hover:text-violet-400 font-medium capitalize transition-all duration-200"
                            >
                                {item}
                            </a>
                        ))}
                        
                        {/* Chatbot Toggle Button */}
                        <button
                            onClick={() => setChatbotOpen(!chatbotOpen)}
                            className="ml-4 p-2 bg-violet-500 rounded-full hover:bg-violet-600 transition-colors"
                            aria-label="Open chatbot"
                        >
                            <span className="text-white text-sm">Chat</span>
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center">
                        {/* Chatbot Toggle Button for Mobile */}
                        <button
                            onClick={() => setChatbotOpen(!chatbotOpen)}
                            className="md:hidden mr-4 p-2 bg-violet-500 rounded-md hover:bg-violet-600 transition-colors text-sm"
                            aria-label="Open chatbot"
                        >
                            <span className="text-white">Chat</span>
                        </button>
                        
                        <button
                            className="md:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <XMarkIcon className="w-6 h-6 text-white" />
                            ) : (
                                <Bars3Icon className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden px-6 pb-4 pt-2 bg-black border-t border-gray-800">
                        <nav className="flex flex-col space-y-3">
                            {['home', 'about', 'projects', 'contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="text-gray-300 hover:text-violet-400 font-medium capitalize transition-all duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* Chatbot Component */}
            {chatbotOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 h-96">
                    <ReactChatbotify
                        options={chatbotStyles}
                        flow={chatbotFlow}
                    />
                </div>
            )}
        </>
    );
}

export default Header;