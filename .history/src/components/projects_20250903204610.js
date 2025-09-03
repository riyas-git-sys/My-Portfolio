import React,{useState} from 'react';
import { motion } from 'framer-motion';
import imgp_6 from '../assets/zing.png';
import imgp_5 from '../assets/staffy.png';
import imgp_4 from '../assets/purepick.png';
import imgp_3 from '../assets/jobby.jpg';
import imgp_2 from '../assets/gitpop.jpg';  
import imgp_1 from '../assets/ipl.avif';
import imgp from '../assets/crypto.png'; 
import imgp1 from '../assets/portfolio.avif';
import imgp2 from '../assets/memoryemojigame.avif'; 
import imgp3 from '../assets/airpods.avif'; 
import imgp4 from '../assets/enail.png';
import imgp5 from '../assets/jarvis.avif'; 
import imgp6 from '../assets/foodmuch.avif'; 
import imgp7 from '../assets/chatbot.avif'; 
import imgp8 from '../assets/searchhis.avif';    
import imgp9 from '../assets/wiki.avif'; 
import imgp10 from '../assets/cashwith.avif'; 
import imgp11 from '../assets/appstore.avif'; 
import imgp12 from '../assets/moneyman.avif'; 
import imgp13 from '../assets/passman.avif'; 
import imgp14 from '../assets/blog.avif'; 
import imgp15 from '../assets/faq.avif'; 
import imgp16 from '../assets/match.avif'; 
import imgp17 from '../assets/stopwatch.avif';
import imgp18 from '../assets/portfolio2.png' 

const projects = [
    {
        title: "Zing Chat Application",
        image: imgp_6,
        description: "Build Zing Chat Application which is a full-stack, real-time messaging application I built using the MERN stack and Socket.io. It features instant messaging with live typing indicators, secure JWT authentication, and the ability to create and manage group chats with admin controls. The application boasts a responsive, modern UI and a robust, scalable backend with RESTful APIs, showcasing comprehensive skills in both front-end and back-end development.",
        github: "https://github.com/riyas-git-sys/Zing-frontend",
        demo: "https://zing-chat-rho.vercel.app/"
    },
    {
        title: "Staffy Employee Dashboard App",
        image: imgp_5,
        description: "Built a modern attractive Employee Dashboard with React, Firebase & TailwindCSS, featuring role-based access, CRUD operations, and real-time data. Implemented authentication, project management, with announcements, and responsive & impressive UI using Vite for optimized performance.",
        github: "https://github.com/riyas-git-sys/Staffy/",
        demo: "https://staffy-blond.vercel.app/"
    },
    {
        title: "PurePick E-commerce Website",
        image: imgp_4, // use the imported local image
        description: "A fully functional e-commerce application built with React, Redux, and Tailwind CSS, featuring product listings, cart management, REST APIs, and user authentication.",
        github: "https://github.com/riyas-git-sys/pure-pick-ecommerce-application",
        demo: "https://riyaspurepick.ccbp.tech/"
    },
    {
        title: "Jobby App",
        image: imgp_3, // use the imported local image
        description: "A job portal application that connects job seekers with employers, built with React and Tailwind CSS.",
        github: "https://github.com/riyas-git-sys/Jobby-App",
        demo: "https://jobbyappriyas.ccbp.tech/login"
    },
    {
        title: "GitHub Popular Repositories",
        image: imgp_2, // use the imported local image
        description: "A React application that displays popular GitHub repositories using the GitHub API, built with React and Tailwind CSS.",
        github: "https://github.com/riyas-git-sys/Github-Popular-Repositories",
        demo: "https://gitpopreporiyas.ccbp.tech/"
    },
    {
        title: "Crypto Currency Tracker",
        description: "A React application that allows users to track cryptocurrency prices in real-time, built with React and Tailwind CSS.",
        image: imgp, // use the imported local image
        github: "https://github.com/riyas-git-sys/Crypto-Currency-Tracker",
        demo: "https://cryptcurtrack.ccbp.tech"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Tailwind CSS showcasing my projects and skills.",
        image: imgp1, // use the imported local image
        github: "https://github.com/riyas-git-sys/My-Portfolio",
        demo: "https://myportfolioriyas.netlify.app/"
    },
    {
        title: "IPL Dashboard",
        description: "A React application that provides an interactive dashboard for IPL (Indian Premier League) statistics and information.",
        image: imgp_1, // use the imported local image
        github: "https://github.com/riyas-git-sys/IPL-Dashboard",
        demo: "https://ipldashbodriyas.ccbp.tech"
    },
    {
        title: "Emoji Memory Game 🎮",
        description: "the Emoji Memory Game! 🧠 Test your memory by clicking on unique emojis without repeating – the challenge gets tougher as you go!",
        image: imgp2, // use the imported local image
        github: "https://github.com/riyas-git-sys/Emoji-Game-using-ReactJS",
        demo: "https://emojigameriyas.ccbp.tech/"
    },
    {
        title: "3D Airpods Website",
        description: "A 3D model of Airpods created using Three.js,HTML, CSS, JS, SCSS, Spline 3D design and React.",
        image: imgp3, // use the imported local image
        github: "https://github.com/riyas-git-sys/3d-designed-airpods-website",
        demo: "https://3dairpodswebsite.netlify.app"
    },
    {
        title: "Cash Withdrawal Application",
        description: "A React app that simulates a cash withdrawal process, allowing users to select denominations and amounts.",
        image: imgp10, // use the imported local image
        github: "https://github.com/riyas-git-sys/Cash-Withdrawl-app",
        demo: "https://cashdrawlriyas.ccbp.tech"
    },
    {
        title: "App Store",
        description: "A React app that displays a collection of apps with details and download links.",
        image: imgp11, // use the imported local image
        github: "https://github.com/riyas-git-sys/App-store",
        demo: "https://appstoreriyas.ccbp.tech"
    },
    {
        title: "Money Manager Application",
        description: "A React app that helps users manage their finances by tracking income and expenses.",
        image: imgp12, // use the imported local image
        github: "https://github.com/riyas-git-sys/Money-Manager-App",
        demo: "https://monimanriyas.ccbp.tech"
    },
    {
        title: "Password Manager Application",
        description: "A React app that securely stores and manages user passwords, providing a user-friendly interface for password management.",
        image: imgp13, // use the imported local image
        github: "https://github.com/riyas-git-sys/Password-Manager-Application",
        demo: "https://passmanriyas.ccbp.tech"
    },
    {
        title: "Blog Website",
        description: "A blog website built with React, allowing users to read and write articles on various topics.",
        image: imgp14, // use the imported local image
        github: "https://github.com/riyas-git-sys/Blog-Website",
        demo: "https://spinloadblog.ccbp.tech"
    },
    {
        title: "FAQs Website",
        description: "A FAQs website built with React, providing answers to frequently asked questions in a user-friendly format.",
        image: imgp15, // use the imported local image
        github: "https://github.com/riyas-git-sys/FAQ-s-Website",
        demo: "https://faqsriyas.ccbp.tech"
    },
     {
        title: "3D Enails for Frontend Developers",
        description: "A 3D Enails for Frontend Developers created using Three.js,HTML, CSS, JS, SCSS, Spline 3D design and React.",
        image: imgp4, // use the imported local image
        github: "https://github.com/riyas-git-sys/web-project",
        demo: "https://riyas-git-sys.github.io/web-project/"
    },
     {
        title: "Jarvis AI Voice Assistant",
        description: "A Jarvis AI Voice Assistant built with Python, allowing users to interact with a virtual assistant using voice commands.",
        image: imgp5, // use the imported local image
        github: "https://github.com/riyas-git-sys/jarvis-ai-voice",
        demo: "https://riyas-git-sys.github.io/jarvis-ai-voice/"
    },
     {
        title: "Food Munch Website",
        description: "A Food Munch website built with HTML, CSS, JS and React.js, showcasing a variety of food items and recipes.",
        image: imgp6, // use the imported local image
        github: "https://github.com/riyas-git-sys/Foodmunch",
        demo: "https://foodmunchdemos.ccbp.tech"
    },
     {
        title: "AI Chatbot Application",
        description: "A responsive AI Chatbot application built with React, allowing users to interact with an AI-powered chatbot.",
        image: imgp7, // use the imported local image
        github: "https://github.com/riyas-git-sys/Responsive-AI",
        demo: "https://riyasgenai.ccbp.tech"
    },
     {
        title: "Search History Application",
        description: "A React app that allows users to search and save their search history.",
        image: imgp8, // use the imported local image
        github: "https://github.com/riyas-git-sys/search-history-application",
        demo: "https://seahistriyas.ccbp.tech"
    },
    {
        title: "Wikipedia Search Application",
        description: "A React app that allows users to search Wikipedia articles and view summaries.",
        image: imgp9, // use the imported local image
        github: "https://github.com/riyas-git-sys/wikipedia-search-app",
        demo: "https://riyaswikipedia.ccbp.tech"
    },
    {
        title: "Match Game",
        description: "A Match Game built with React, where users can match pairs of cards in a fun and interactive way.",
        image: imgp16, // use the imported local image
        github: "https://github.com/riyas-git-sys/Match-Game",
        demo: "https://matchgameriyas.ccbp.tech"
    },
    {
        title: "Stop Watch Application",
        description: "A Stop Watch Application built with React, allowing users to start, stop, and reset a stopwatch.",
        image: imgp17, // use the imported local image
        github: "https://github.com/riyas-git-sys/Stop-Watch-application",
        demo: "https://stopwatchriyas.ccbp.tech"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with HTML, CSS and JS showcasing my projects and skills.",
        image: imgp18, // use the imported local image
        github: "https://github.com/riyas-git-sys/PortfolioRiyas",
        demo: "https://portfolio-riyas.vercel.app/"
    },
    // {
    //     title: "",
    //     image: , // use the imported local image
    //     github: "",
    //     demo: "https://"
    // },
];

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    // Show first 6 or all projects based on state
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section id="projects" className="bg-black text-white py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-violet-500 text-center mb-12 transition-transform duration-300 hover:scale-105 hover:text-violet-600">My Projects</h2>
                
                <div className="grid md:grid-cols-2 gap-10">
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-semibold text-violet-400">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-violet-300 underline hover:text-violet-400 transition-colors duration-100 transform hover:scale-105"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-violet-300 underline hover:text-violet-400 transition-colors duration-100 transform hover:scale-105"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Toggle Button */}
                {projects.length > 6 && (
                    <motion.div
                        className="mt-10 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: visibleProjects.length * 0.1 }}
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                        >
                            {showAll ? 'View Less' : 'View More'}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
