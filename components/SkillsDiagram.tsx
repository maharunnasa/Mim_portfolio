"use client";

interface SkillNodeProps {
  text: string;
  color: string;
  className?: string;
}

interface SkillsDiagramProps {
  skills?: any; // CMS future use, currently unused
}

const SkillNode = ({ text, color, className = "" }: SkillNodeProps) => (
  <div
    className={`relative flex items-center justify-center 
    w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 
    text-white text-center p-3 font-medium 
    text-[10px] sm:text-xs md:text-sm 
    transition-all duration-300 hover:scale-110 
    hover:shadow-xl cursor-default ${className}`}
    style={{
      backgroundColor: color,
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    }}
  >
    <span className="drop-shadow-md">{text}</span>
  </div>
);

export default function SkillsDiagram({ skills }: SkillsDiagramProps) {
  const technicalCategories = [
    {
      title: "Programming",
      items: "C, C++, Python, JavaScript, PHP, React",
    },
    {
      title: "Design & UX",
      items: "Figma, Prototyping, Usability Testing",
    },
    {
      title: "Tools & Databases",
      items: "MySQL, Oracle, AutoCAD, Arduino",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#221933] min-h-screen flex flex-col items-center py-24 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        PROFESSIONAL SKILLS
      </h2>

      {/* ===== DESKTOP INFOGRAPHIC ===== */}
      <div className="relative hidden md:flex w-full max-w-6xl h-[750px] items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 800"
        >
          <g
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeDasharray="6,4"
            opacity="0.5"
          >
            <path d="M400 300 Q400 150 300 150" />
            <path d="M600 300 Q600 150 700 150" />
            <path d="M380 350 L105 320" />
            <path d="M380 450 L280 450" />
            <path d="M620 350 L890 320" />
            <path d="M620 450 L720 450" />
            <path d="M450 550 Q450 680 320 680" />
            <path d="M550 550 Q550 680 680 680" />
          </g>
        </svg>

        <div className="z-20 bg-gradient-to-br from-[#2e0d3a] to-[#1f0b29]
          border border-purple-500/30 rounded-3xl
          w-72 h-80 flex flex-col items-center justify-center
          p-6 shadow-[0_0_60px_rgba(180,160,196,0.25)]
          backdrop-blur-xl space-y-4"
        >
          <p className="text-purple-300 text-xs uppercase tracking-widest">
            Core Competencies
          </p>

          {technicalCategories.map((cat, idx) => (
            <div key={idx} className="text-center w-full">
              <p className="text-white font-semibold text-sm">
                {cat.title}
              </p>
              <p className="text-purple-300 text-[11px] mt-1">
                {cat.items}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[7%] left-[20%]">
            <SkillNode text="Leadership & Team Management" color="#b4a0c4" />
          </div>
          <div className="absolute top-[7%] right-[20%]">
            <SkillNode text="Problem Solving & Critical Thinking" color="#b4a0c4" />
          </div>
          <div className="absolute top-[30%] left-[5%]">
            <SkillNode text="Communication & Presentation" color="#4a235a" />
          </div>
          <div className="absolute top-[45%] left-[18%]">
            <SkillNode text="Collaboration & Teamwork" color="#7d528a" />
          </div>
          <div className="absolute top-[45%] right-[18%]">
            <SkillNode text="Time Management & Multitasking" color="#7d528a" />
          </div>
          <div className="absolute top-[30%] right-[5%]">
            <SkillNode text="Creativity & Design Thinking" color="#4a235a" />
          </div>
          <div className="absolute bottom-[8%] left-[22%]">
            <SkillNode text="Databases: MySQL & Oracle" color="#4a235a" />
          </div>
          <div className="absolute bottom-[8%] right-[22%]">
            <SkillNode text="Tools: AutoCAD & Arduino" color="#b4a0c4" />
          </div>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden w-full max-w-xl flex flex-col items-center gap-10">
        <div className="w-full bg-gradient-to-br from-[#2e0d3a] to-[#1f0b29] rounded-2xl p-6 shadow-xl">
          <p className="text-purple-300 text-xs uppercase tracking-widest mb-4 text-center">
            Core Competencies
          </p>

          {technicalCategories.map((cat, idx) => (
            <div key={idx} className="text-center mb-4">
              <p className="text-white font-semibold">{cat.title}</p>
              <p className="text-purple-300 text-sm mt-1">{cat.items}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SkillNode text="Leadership" color="#b4a0c4" />
          <SkillNode text="Problem Solving" color="#7d528a" />
          <SkillNode text="Communication" color="#4a235a" />
          <SkillNode text="Creativity" color="#b4a0c4" />
          <SkillNode text="Time Management" color="#7d528a" />
          <SkillNode text="Teamwork" color="#4a235a" />
        </div>
      </div>
    </section>
  );
}
