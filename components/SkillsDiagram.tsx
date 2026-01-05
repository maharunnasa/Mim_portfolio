"use client";

import React from "react";
import Image from "next/image";

interface SkillNodeProps {
  text: string;
  color: string;
  className?: string;
}

const SkillNode = ({ text, color, className = "" }: SkillNodeProps) => (
  <div
    className={`relative flex items-center justify-center w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 text-white text-center p-2 sm:p-3 font-medium text-[9px] sm:text-xs md:text-sm transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-default ${className}`}
    style={{
      backgroundColor: color,
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    }}
  >
    <span className="drop-shadow-md">{text}</span>
  </div>
);

const SkillsDashboard = () => {
  const technicalCategories = [
    { title: "Programming", items: "C, C++, Python, JS, PHP", color: "#4a235a" },
    { title: "Tools & DB", items: "MySQL, Oracle, AutoCAD", color: "#7d528a" },
    { title: "UI/UX Design", items: "Figma, Prototyping, Testing", color: "#b4a0c4" },
  ];

  return (
    <section id= 'skill' className="min-h-screen bg-[#1f172a] font-sans flex flex-col items-center py-24 px-6 md:px-20">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        PROFESSIONAL SKILLS
      </h2>

      {/* Main Infographic Container */}
      <div className="relative w-full max-w-6xl h-[750px] sm:h-[800px] mt-10 flex items-center justify-center">
        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800">
          <g fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5">
            <path d="M400 300 Q400 150 300 150" />
            <path d="M600 300 Q600 150 700 150" />
            <path d="M380 400 L180 320" />
            <path d="M380 450 L280 450" />
            <path d="M620 400 L820 320" />
            <path d="M620 450 L720 450" />
            <path d="M450 550 Q450 680 320 680" />
            <path d="M550 550 Q550 680 680 680" />
          </g>
        </svg>

        {/* Central Core */}
        <div className="z-20 bg-[#2e0d3a] border-4 sm:border-6 border-[#7d528a] rounded-[50px] w-56 sm:w-64 h-72 sm:h-80 flex flex-col items-center justify-center p-4 sm:p-6 shadow-2xl space-y-2 sm:space-y-4">
          <div className="text-[#b4a0c4] text-[8px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">
            Core Competencies
          </div>
          {technicalCategories.map((cat, idx) => (
            <div key={idx} className="text-center border-b border-purple-800 last:border-0 pb-1 sm:pb-2 w-full">
              <div className="text-white font-bold text-xs sm:text-sm">{cat.title}</div>
              <div className="text-purple-300 text-[8px] sm:text-[10px] leading-tight">{cat.items}</div>
            </div>
          ))}
        </div>

        {/* Soft Skills Hexagons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Row */}
          <div className="absolute top-[7%] left-[15%] sm:left-[20%] pointer-events-auto">
            <SkillNode text="Leadership & Team Management" color="#b4a0c4" />
          </div>
          <div className="absolute top-[7%] right-[15%] sm:right-[20%] pointer-events-auto">
            <SkillNode text="Problem Solving & Critical Thinking" color="#b4a0c4" />
          </div>

          {/* Mid Row Left */}
          <div className="absolute top-[27%] left-[5%] sm:left-[5%] pointer-events-auto">
            <SkillNode text="Communication & Presentation" color="#4a235a" />
          </div>
          <div className="absolute top-[45%] left-[17%] sm:left-[18%] pointer-events-auto">
            <SkillNode text="Collaboration & Teamwork" color="#7d528a" />
          </div>

          {/* Mid Row Right */}
          <div className="absolute top-[45%] right-[17%] sm:right-[18%] pointer-events-auto">
            <SkillNode text="Time Management & Multitasking" color="#7d528a" />
          </div>
          <div className="absolute top-[27%] right-[5%] sm:right-[5%] pointer-events-auto">
            <SkillNode text="Creativity & Design Thinking" color="#4a235a" />
          </div>

          {/* Bottom Row */}
          <div className="absolute bottom-[8%] left-[18%] sm:left-[22%] pointer-events-auto">
            <SkillNode text="Databases: MySQL & Oracle" color="#4a235a" />
          </div>
          <div className="absolute bottom-[8%] right-[18%] sm:right-[22%] pointer-events-auto">
            <SkillNode text="Tools: AutoCAD & Arduino" color="#b4a0c4" />
          </div>
        </div>
      </div>

      {/* Bottom Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl px-6 -mt-10 z-30">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border-t-4 border-[#4a235a]">
          <h3 className="font-bold text-[#4a235a] mb-1 sm:mb-2 text-sm sm:text-base">Programming</h3>
          <p className="text-[10px] sm:text-sm text-gray-600">C, C++, Python, HTML, CSS, JavaScript, Bootstrap, PHP</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border-t-4 border-[#7d528a]">
          <h3 className="font-bold text-[#7d528a] mb-1 sm:mb-2 text-sm sm:text-base">Design & UX</h3>
          <p className="text-[10px] sm:text-sm text-gray-600">Figma, Graphics Design, Prototyping, Usability Testing</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border-t-4 border-[#b4a0c4]">
          <h3 className="font-bold text-[#b4a0c4] mb-1 sm:mb-2 text-sm sm:text-base">Tools & Tech</h3>
          <p className="text-[10px] sm:text-sm text-gray-600">AutoCAD, Arduino Uno, Tinkercad, Virtual Machines</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsDashboard;
