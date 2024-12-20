import "./Skill.css";
// import scrollDown from "../assets/scrollDown.gif";
const Skill = () => {
  return (
    <div id="skills" className="md:px-[75px] max-sm:px-8 mt-3 mb-8 h-[100vh]">
      <h2 className="Heading-2 md:text-3xl font-medium pb-4 mt-1 max-sm:text-[20px]">
        Essential Tool I Use
      </h2>
      <p className="text-zinc-400 pb-2 max-sm:text-[15px] mob-p">
        Discover the powerful tools and technologies I use to create ,
        High-Performing websites & applications.
      </p>
      <div className="tools-div grid md:grid-cols-3 gap-x-4 gap-y-5 mt-4">
        <div className="html-div flex items-center ring-2 ring-inset gap-3 ring-zinc-50/10 rounded-xl pl-3 hover:bg-zinc-800 transition-colors h-[70px]">
          <figure className="bg-zinc-700/50 rounded-lg overflow-hidden p-2 w-12 h-12 group-hover:bg-zinc-900 transition-colors">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/html-5--v1.png"
              alt="html-5--v1"
            />
          </figure>

          <div className="cont-1">
            <p>HTML</p>
            <p className="text-zinc-400 text-sm">Structure of web</p>
          </div>
        </div>
        <div className="css-div flex items-center ring-2 ring-inset gap-3 ring-zinc-50/10 rounded-xl pl-3 hover:bg-zinc-800 transition-colors h-[70px]">
          <figure className="bg-zinc-700/50 rounded-lg overflow-hidden p-2 w-12 h-12 group-hover:bg-zinc-900 transition-colors">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/css3.png"
              alt="css3"
            />
          </figure>
          <div className="cont-2">
            <p>CSS</p>
            <p className="text-zinc-400 text-sm">User Interface</p>
          </div>
        </div>
        <div className="js flex items-center ring-2 ring-inset gap-3 ring-zinc-50/10 rounded-xl pl-3 hover:bg-zinc-800 transition-colors h-[70px]">
          <figure className="bg-zinc-700/50 rounded-lg overflow-hidden p-2 w-12 h-12 group-hover:bg-zinc-900 transition-colors">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/50/javascript.png"
              alt="javascript"
            />
          </figure>
          <div className="cont-3">
            <p>Javascript</p>
            <p className="text-zinc-400 text-sm">Interaction</p>
          </div>
        </div>
        <div className="react-js flex items-center ring-2 ring-inset gap-3 ring-zinc-50/10 rounded-xl pl-3 hover:bg-zinc-800 transition-colors h-[70px]">
          <figure className="bg-zinc-700/50 rounded-lg overflow-hidden p-2 w-12 h-12 group-hover:bg-zinc-900 transition-colors">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/react-native.png"
              alt="react-js"
            />
          </figure>
          <div className="cont-4">
            <p>React</p>
            <p className="text-zinc-400 text-sm">Library</p>
          </div>
        </div>
        <div className="tailwind-css flex items-center ring-2 ring-inset gap-3 ring-zinc-50/10 rounded-xl pl-3 hover:bg-zinc-800 transition-colors h-[70px]">
          <figure className="bg-zinc-700/50 rounded-lg overflow-hidden p-2 w-12 h-12 group-hover:bg-zinc-900 transition-colors">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/tailwindcss.png"
              alt="tailwindcss"
            />
          </figure>
          <div className="cont-5">
            <p>Tailwind CSS</p>
            <p className="text-zinc-400 text-sm">Framework</p>
          </div>
        </div>
        <div className="git flex items-center ring-2 ring-inset gap-3 ring-zinc-50/10 rounded-xl pl-3 hover:bg-zinc-800 transition-colors h-[70px]">
          <figure className="bg-zinc-700/50 rounded-lg overflow-hidden p-2 w-12 h-12 group-hover:bg-zinc-900 transition-colors">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/git.png"
              alt="git"
              className="z-10"
            />
          </figure>
          <div className="cont-6">
            <p>GIT</p>
            <p className="text-zinc-400 text-sm">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
