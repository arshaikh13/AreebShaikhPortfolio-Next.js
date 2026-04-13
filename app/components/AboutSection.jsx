"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-6">
        {/* Outlier AI Role */}
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-indigo-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-white group-hover:to-indigo-200 transition-all duration-300">
                  AI Specialist (Technical)
                </h4>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-300 text-xs font-medium backdrop-blur-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Outlier AI</span>
                </div>
              </div>
              <div className="text-sm text-gray-400 font-medium">Jan 2026 – April 2026</div>
            </div>
            <div className="prose prose-invert prose-sm">
              <p className="text-gray-300 leading-relaxed">
                Optimizing Large Language Model performance through <span className="text-purple-300 font-medium">RLHF</span> and complex technical evaluations. 
                Developing high-complexity prompts and rubrics to benchmark model reasoning in 
                <span className="text-blue-300 font-medium"> SQL and Python</span>, ensuring high-fidelity outputs for enterprise-grade AI systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['RLHF', 'Python', 'SQL', 'Prompt Engineering', 'Model Evaluation', 'LLMs'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/30 hover:border-purple-500/30 hover:bg-blue-500/10 hover:text-purple-300 transition-colors duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Medxcel Role */}
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-white group-hover:to-cyan-200 transition-all duration-300">
                  Data Engineering Intern
                </h4>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-medium backdrop-blur-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Medxcel (Ascension Healthcare)</span>
                </div>
              </div>
              <div className="text-sm text-gray-400 font-medium">May 2024 – Aug 2024</div>
            </div>
            <div className="prose prose-invert prose-sm">
              <p className="text-gray-300 leading-relaxed">
                Optimized <span className="text-blue-300 font-medium">SQL-based ETL pipelines</span> in Azure, refactoring scripts to improve throughput by <span className="text-cyan-300 font-semibold">~40%</span>. 
                Integrated Microsoft Graph APIs to automate security event surfacing, reducing team troubleshooting time by <span className="text-cyan-300 font-semibold">25%</span> across 20+ pipelines.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Azure', 'SQL', 'ETL', 'API Integration', 'Power BI', 'Real-time Analytics'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/30 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300 transition-colors duration-200">
                  {tech}
                </span>
              ))}
            </div>
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
          { icon: "/icons/sql.png", name: "SQL", category: "Database", color: "from-blue-500 to-cyan-500" },
          { icon: "/icons/ai.png", name: "RLHF", category: "AI Training", color: "from-purple-500 to-indigo-600" },
          { icon: "/icons/azure.svg", name: "Microsoft Azure", category: "Cloud", color: "from-blue-400 to-blue-600" },
          { icon: "/icons/pandas.png", name: "Pandas", category: "Data Analysis", color: "from-blue-400 to-purple-500" },
          { icon: "/icons/power-bi.svg", name: "Power BI", category: "Visualization", color: "from-yellow-400 to-orange-500" },
          { icon: "/icons/data-transfer.png", name: "ETL", category: "Data Pipeline", color: "from-purple-500 to-pink-500" },
          { icon: "/icons/api.png", name: "API Integration", category: "Integration", color: "from-cyan-400 to-blue-500" },
          { icon: "/icons/github.png", name: "Github", category: "Version Control", color: "from-gray-400 to-gray-600" },
          { icon: "/icons/mongodb.png", name: "NoSQL", category: "Database", color: "from-green-500 to-emerald-600" },
          { icon: "/icons/vs_code.png", name: "VS Code", category: "Development", color: "from-blue-800 to-white-500" },
          { icon: "/icons/html.png", name: "HTML", category: "Programming", color: "from-orange-800 to-red-500" }
        ].map((skill, index) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 p-3 backdrop-blur-sm border border-slate-600/30 hover:border-slate-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 cursor-pointer min-h-[100px]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            <div className="relative flex flex-col items-center text-center gap-3">
              <div className="relative w-12 h-8 flex items-center justify-center rounded-lg bg-slate-700/50">
                <img src={skill.icon} alt={skill.name} className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-white text-sm leading-tight">{skill.name}</h3>
                <p className="text-xs text-gray-400">{skill.category}</p>
              </div>
            </div>
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
        <div className="relative space-y-5">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">B.S. in Computer Information Technology</h3>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium">
                Purdue University, Indianapolis
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-emerald-400 mb-1">GPA</div>
              <div className="text-lg font-bold text-emerald-300">3.94 / 4.00</div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/30">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-300">Member of Alpha Lambda Delta & Phi Eta Sigma Honor Societies</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm text-gray-300">Dean's List for all 8 semesters</span>
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
    <section id='about' className="text-white mt-10 mb-10 sm:mt-20 sm:mb-20 lg:mt-10 lg:mb-20 px-4">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-lg shadow-2xl shadow-blue-500/10"
          alt="computer-desk-image"
          src="/images/about-image.png"
          width={800}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl mt-10 lg:mt-0 font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            I’m a data engineer and AI specialist with a passion for building real-time data pipelines 
            and optimizing LLM performance. I bridge the gap between heavy-duty data infrastructure and 
            cutting-edge AI evaluation to deliver scalable, high-fidelity solutions.
          </p>
          <div className="flex flex-row mt-8 border-b border-slate-700/50">
            {["experience", "skills", "education"].map((id) => (
              <TabButton 
                key={id}
                selectTab={() => handleTabChange(id)} 
                active={tab === id}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </TabButton>
            ))}
          </div>
          <div className="mt-6 min-h-[400px]">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;