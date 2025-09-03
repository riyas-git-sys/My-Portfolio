import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import logo from '../assets/pic.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white fixed w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                <img
                    src={logo} className='w-10 h-10 rounded-full object-cover' alt='logo'></img>
                <h1 className="text-3xl font-bold text-violet-500">Riyas Ahamed</h1>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">
                    {['home', 'about', 'projects', 'contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="text-gray-300 hover:text-violet-400 font-medium capitalize transition-all duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
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
    );
}

export default Header;
