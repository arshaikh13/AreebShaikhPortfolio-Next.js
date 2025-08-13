import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 bg-gradient-to-r from-slate-900/50 to-slate-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <p className="text-slate-400 text-sm font-light tracking-wide">
            © 2025 Areeb Shaikh. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <span className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;