import React from "react";

// Skills data for better maintainability
const skillsData = [
  {
    id: "html",
    name: "HTML",
    description: "Structure of web",
    icon: "https://img.icons8.com/color/48/html-5--v1.png",
    alt: "HTML5 logo",
  },
  {
    id: "css",
    name: "CSS",
    description: "User Interface",
    icon: "https://img.icons8.com/color/48/css3.png",
    alt: "CSS3 logo",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Interaction",
    icon: "https://img.icons8.com/fluency/48/javascript.png",
    alt: "JavaScript logo",
  },
  {
    id: "react",
    name: "React",
    description: "Library",
    icon: "https://img.icons8.com/color/48/react-native.png",
    alt: "React logo",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "Framework",
    icon: "https://img.icons8.com/color/48/tailwindcss.png",
    alt: "Tailwind CSS logo",
  },
  {
    id: "git",
    name: "Git",
    description: "Version Control",
    icon: "https://img.icons8.com/color/48/git.png",
    alt: "Git logo",
  },
];

// Individual skill card component
const SkillCard = ({ skill }) => {
  return (
    <div className="group flex items-center gap-3 p-3 ring-2 ring-zinc-50/10 rounded-xl hover:bg-zinc-800/50 hover:ring-zinc-50/20 transition-all duration-300 ease-in-out transform hover:scale-[1.02] h-[70px] cursor-pointer">
      <figure className="flex-shrink-0 bg-zinc-700/50 rounded-lg overflow-hidden p-2 w-12 h-12 group-hover:bg-zinc-600/50 transition-colors duration-300">
        <img
          width="32"
          height="32"
          src={skill.icon}
          alt={skill.alt}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </figure>

      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-sm sm:text-base truncate">
          {skill.name}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm truncate">
          {skill.description}
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h2
            id="skills-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 sm:mb-4"
          >
            Essential Tools I Use
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            Discover the powerful tools and technologies I use to create
            high-performing websites and applications.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
