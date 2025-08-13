import React from 'react'
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'  
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl}) => {
 return (
   <div className="group h-full flex flex-col rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/50 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
     <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
     
     <div className="relative">
       <div 
         className="h-52 md:h-72 relative overflow-hidden" 
         style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}
       >
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
         
         <div className='absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
         
         <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0'>
           <div className="flex gap-4 mb-4">
             <Link 
               href={gitUrl}
               className='h-14 w-14 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:border-cyan-400 transition-all duration-300 group/code'>
               <CodeBracketIcon className='h-8 w-8 text-slate-300 group-hover/code:text-cyan-400 transition-colors duration-300' />
             </Link>
          
           </div>
           
           <div className="flex gap-1 text-xs font-medium">
             <span className='px-2 py-1/2 text-white rounded-full bg-slate-600 text-lg'>
               View Code
             </span>
           </div>
         </div>
       </div>
     </div>
     
     <div className="relative text-white bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm py-6 px-6 flex-grow flex flex-col">
       <div className="flex items-start justify-between mb-3">
         <h5 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-300 transition-all duration-300">
           {title}
         </h5>
         
         <div className="flex gap-1">
           {[1,2,3].map((dot) => (
             <div key={dot} className="w-2 h-2 bg-slate-600 rounded-full group-hover:bg-cyan-400/60 transition-colors duration-300" style={{transitionDelay: `${dot * 100}ms`}}></div>
           ))}
         </div>
       </div>
       
       <p className="text-slate-300 leading-relaxed flex-grow mb-4 group-hover:text-slate-200 transition-colors duration-300">
         {description}
       </p>
     </div>
   </div>
 )
}

export default ProjectCard;