"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}>
        </div>
        <div className="relative space-y-5">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-300">
                Data Engineering Intern
              </h4>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                Medxcel (Ascension Healthcare)
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-cyan-400 mb-1">Duration</div>
              <div className="text-sm font-semibold text-gray-300">4 months</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              May 2024 – Aug 2024
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Indianapolis, IN
            </div>
          </div>
          <div className="prose prose-invert prose-sm">
            <p className="text-gray-300 leading-relaxed">
              Built real-time analytics pipelines using <span className="text-blue-300 font-medium">Azure</span> and <span className="text-blue-300 font-medium">SQL</span>, 
              powering dashboards for <span className="text-cyan-300 font-semibold">20+ stakeholders</span>. 
              Improved pipeline speed and reliability, handled <span className="text-cyan-300 font-semibold">200k+ daily events</span>, 
              and enhanced cloud security through API integrations—all while working in 
              <span className="text-blue-300 font-medium"> Agile teams</span> to support enterprise data strategy.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['Azure', 'SQL', 'Real-time Analytics', 'API Integration', 'Agile', 'Power BI'].map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/30 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[
          { icon: "/icons/python.svg", name: "Python", category: "Programming", color: "from-yellow-500 to-blue-500" },
          { icon: "/icons/pandas.png", name: "Pandas", category: "Data Analysis", color: "from-blue-400 to-purple-500" },
          { icon: "/icons/github.png", name: "Github", category: "Version Control", color: "from-gray-400 to-gray-600" },
          { icon: "/icons/jupyter.png", name: "Jupyter Notebook", category: "Development", color: "from-orange-400 to-red-500" },
          { icon: "/icons/sql.png", name: "SQL", category: "Database", color: "from-blue-500 to-cyan-500" },
          { icon: "/icons/mongodb.png", name: "NoSQL", category: "Database", color: "from-green-500 to-emerald-600" },
          { icon: "/icons/excel.png", name: "Excel", category: "Analytics", color: "from-green-400 to-green-600" },
          { icon: "/icons/power-bi.svg", name: "Power BI", category: "Visualization", color: "from-yellow-400 to-orange-500" },
          { icon: "/icons/azure.svg", name: "Microsoft Azure", category: "Cloud", color: "from-blue-400 to-blue-600" },
          { icon: "/icons/data-transfer.png", name: "ETL", category: "Data Pipeline", color: "from-purple-500 to-pink-500" },
          { icon: "/icons/api.png", name: "API Integration", category: "Integration", color: "from-cyan-400 to-blue-500" },
          { icon: "/icons/google-cloud.png", name: "Google Cloud", category: "Cloud", color: "from-red-800 to-green-500" },
          { icon: "/icons/java.png", name: "Java", category: "Programming", color: "from-blue-800 to-blue-500" },
          { icon: "/icons/html.png", name: "HTML", category: "Programming", color: "from-orange-800 to-red-500" },
          { icon: "/icons/vs_code.png", name: "VS Code", category: "Development", color: "from-blue-800 to-white-500" },
          { icon: "/icons/css.png", name: "CSS", category: "Programming", color: "from-white-800 to-blue-500" }
        ].map((skill, index) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 p-3 backdrop-blur-sm border border-slate-600/30 hover:border-slate-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 cursor-pointer min-h-[100px]"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative flex flex-col items-center text-center gap-3">
              <div className="relative">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`}></div>
                <div className="relative w-12 h-8 flex items-center justify-center rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.category}
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
        <div className="relative space-y-5">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-300">
                B.S. in Computer Information Technology
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                Bachelor's Degree
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-emerald-400 mb-1">GPA</div>
              <div className="text-lg font-bold text-emerald-300">3.94</div>
              <div className="text-xs text-gray-400">/ 4.00</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            <span className="font-medium">Purdue University, Indianapolis</span>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-200 flex items-center gap-2">
              Academic Achievements
            </h4>
            <div className="grid gap-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/30 group-hover:border-slate-600/40 transition-colors duration-300">
                <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Member of Alpha Lambda Delta & Phi Eta Sigma Honor Societies</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/30 group-hover:border-slate-600/40 transition-colors duration-300">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Dean's List for all 8 semesters</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full text-xs font-medium text-blue-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Graduated with High Distinction
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id='about' className="text-white mt-10 mb-10 sm:mt-20 sm:mb-20 lg:mt-10 lg:mb-20">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-lg"
          alt="computer-desk-image"
          src="/images/about-image.png"
          width={800}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl mt-10 lg:mt-0 font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a data engineer with a passion for building real-time data pipelines and
            transforming raw data into actionable insights. I thrive on solving complex problems
            and delivering clean, scalable solutions that help teams make smarter decisions through data.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
              Experience
            </TabButton>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
          </div>
          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab)?.content || <p>No content available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;