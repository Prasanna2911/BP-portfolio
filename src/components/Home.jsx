import "./Home.css";
import myImg from "../assets/Me.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="home"
      className="md:pt-20  !z-1 flex justify-center items-center  md:gap-12 max-sm:flex-col-reverse max-sm:pt-2"
    >
      <div className="left-side-div">
        <div className="heading-1 container mb-6 ">
          <h1 className="text-5xl leading-tight font-semibold lg:text-[55px] lg-leading-[1.15]  md:w-[500px]  md:pt-[80px] mob-heading">
            Building Scalable Modern Websites for the Future
          </h1>
        </div>

        <div className="btns-div  w-[230px]">
          <p className="pb-4 md:text-[18px] text-zinc-400 max-sm:text-[20px] font-medium max-sm:relative max-sm:left-[73px]">
            To Know More About Me
          </p>
          <a href="#about" className="max-sm:relative max-sm:left-[105px]">
            <button className="inline-block bg-zinc-50 text-zinc-900 active:bg-zinc-50/80 h-9 px-4 font-medium  text-sm py-2 rounded-full">
              Scroll Down
            </button>
          </a>
        </div>
      </div>
      <div className="right-side-div">
        <img src={myImg} alt="my Image" className="h-[500px]" />
      </div>
    </motion.section>
  );
};

export default Home;
