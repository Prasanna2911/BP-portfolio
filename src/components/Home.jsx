import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="pt-28  h-[100vh] z-1">
      <div className="heading-1 container mb-6">
        <h1 className="text-5xl leading-tight font-semibold lg:text-[55px] lg-leading-[1.15]  md:w-[500px] md:ml-[300px] pt-[80px] mob-heading">
          Building Scalable Modern Websites for the Future
        </h1>
      </div>
      <div className="btns-div relative md:left-[300px] w-[230px] max-sm:left-[86px]">
        <p className="pb-4 md:text-[18px] text-zinc-400">
          To Know More About Me
        </p>
        <a href="#about" className="max-sm:ml-8">
          <button className="inline-block bg-zinc-50 text-zinc-900 active:bg-zinc-50/80 h-9 px-4 font-medium  text-sm py-2 border-t border-l border-b rounded-tl-lg rounded-bl-lg">
            Scroll Down
            <img
              width="30"
              src="https://img.icons8.com/color/48/double-down--v2.png"
              alt="double-down--v2"
              className="scroll-down relative left-[93px] -top-[29px] bg-zinc-50 border-t border-r border-b rounded-tr-lg rounded-br-lg h-[36px]"
            />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
