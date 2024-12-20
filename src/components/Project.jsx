import React from "react";

const Project = () => {
  // #2397f3  Blue Color
  return (
    <div id="projects" className="md:px-[70px]  max-sm:px-8 mb-12">
      <div className="project-heading flex justify-between mb-8">
        <h2 className="heading-2  text-3xl font-medium max-sm:text-[18px]">
          My Projetcs
        </h2>
        <a href="https://github.com/Prasanna2911" target="_blank">
          <button className="rounded-xl h-9 w-[120px]  font-medium md:px-4 bg-zinc-50 text-zinc-900 active:bg-zinc-50/80; ring-inset ring-1 ring-zinc-50/5 backdrop-blur-2xl transition-[transform,background-color] active:scale-95 max-sm:text-[15px] max-sm:!px-1">
            View More
          </button>
        </a>
      </div>

      <main className="project-main-div h-[700px]">
        <div className="project-1 h-[450px] flex justify-between md:items-center max-sm:flex-col">
          <div className="project-img-div">
            <img src="" alt="Project Photos" />
          </div>
          <div className="project-content-div w-[50%]">
            <p className="text-[#2397f3] font-medium text-[15px] max-sm:w-[200px]">
              Frontend Web Application
            </p>
            <h2 className="text-white font-bold text-[23px] pt-1 pb-7 max-sm:w-[300px]">
              Real Estate Application
            </h2>
            <p className="text-[14px] text-zinc-400 font-medium text-justify md:w-[400px] max-sm:w-[300px] max-sm:mb-4">
              Developed a responsive real estate web application leveraging
              React.js and Tailwind CSS to provide an intuitive browsing
              experience. The application features a "Projects Completed"
              section, showcasing property images, locations, and pricing to
              ensure transparency and user convenience. Integrated a
              'Testimonials' feature to highlight client feedback, enhancing the
              platform's credibility and engagement. This project demonstrates
              my ability to create user-focused, dynamic web solutions using
              modern front-end technologies.
            </p>
          </div>
          <div className="arrow-div w-[10%] max-sm:hidden">
            <a href="https://real-estate-app-2024.vercel.app/" target="_blank">
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/skeuomorphism/32/long-arrow-right.png"
                alt="long-arrow-right"
                className="border border-x-white rounded-[50%] p-2 hover:border-gray-400 transition-colors duration-500"
              />
            </a>
          </div>
        </div>
        <hr className="border-b border-zinc-600" />
      </main>
    </div>
  );
};

export default Project;
