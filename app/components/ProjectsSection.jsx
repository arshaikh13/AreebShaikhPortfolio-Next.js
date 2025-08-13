"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Interactive Stock-Investment Simulator",
    description: "coming soon", 
    image:"/images/projects/stock-sim.png",
    tag: ["All", "ETL"],
    gitUrl: "/"
  },
  {
    id: 2,
    title: "Live Chicago Transit-Delay Tracker",
    description: "coming soon", 
    image:"/images/projects/chicago-transit.png",
    tag: ["All", "ETL"],
    gitUrl: "/"
  },
  {
    id: 3,
    title: "Amazon Price Monitor",
    description: "A Python-based Amazon price tracker that monitors product pages, logs updates, and sends email alerts when prices meet your target threshold", 
    image:"/images/projects/price_tracker.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/arshaikh13/AmazonPriceTracker-Python"
  },
  {
    id: 4,
    title: "Twitter Data Scraper",
    description: "A custom tool developed to retrieve tweets in real-time based on specified keywords or usernames, ideal for trend analysis or user monitoring.",
    image:"/images/projects/twitter_scraper.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/arshaikh13/TwitterDataMine-Python"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Showcasing my full-stack development skills with a sleek, modern portfolio built to impress!", 
    image:"/images/projects/portfolio_site.png",
    tag: ["All"],
    gitUrl: "/"
  },
  {
    id: 6,
    title: "Retail Store Management System",
    description: "Showcases a professionally designed MySQL database tailored for retail, efficiently managing orders, inventory, loyalty programs, and reviews in 3NF", 
    image:"/images/projects/relational_database.png",
    tag: ["All"],
    gitUrl: "https://github.com/arshaikh13/LuxThread-SQL"
  },
  {
    id: 7,
    title: "Connect Four Game",
    description: "This project presents an interactive Connect Four game built in Python, enabling two players to compete, demonstrating strong game development capabilities.", 
    image:"/images/projects/connect_four.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/arshaikh13/ConnectFour-Python"
  },
  {
    id: 8,
    title: "FilmFusion Movie Catalog",
    description: "A Python-based console tool allowing authenticated users to add, view, and perform case-insensitive searches of movie records.", 
    image:"/images/projects/film_fusion.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/arshaikh13/FilmFusionApp-Python"
  },
  {
    id: 9,
    title: "PDF Scanner & Sorter",
    description: "A serverless Google Cloud architecture with Node.js to automatically scan, sort, and count PDFs, identifying malicious and benign files", 
    image:"/images/projects/malware_scanner.png",
    tag: ["All"],
    gitUrl: "https://github.com/arshaikh13/MalwareScanner-Node.js"
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
   <section id="projects">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag 
          onClick={handleTagChange}
          name="All" 
          isSelected={tag === "All"}
        />
        <ProjectTag 
            onClick={handleTagChange}
            name="Python" 
            isSelected={tag === "Python"}
        />
        <ProjectTag 
            onClick={handleTagChange}
            name="ETL" 
            isSelected={tag === "ETL"}
        />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        </motion.li>
      ))}
    </ul>
   </section>
  )
}

export default ProjectsSection;