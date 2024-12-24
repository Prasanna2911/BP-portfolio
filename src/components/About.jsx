// import aboutImg from "../assets/gifimage.gif";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, x: 200 }}
      // transition={{ duration: 1.5 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // viewport={{ once: true }}
      id="about"
      className="h-[100vh] mb-1 flex justify-center items-center gap-11 max-sm:flex-col"
    >
      <div className="abt-img-div">
        <img
          // https://thejashari.vercel.app/gifimage.gif
          src="https://thejashari.vercel.app/gifimage.gif"
          alt="gif img"
          id="abt-img"
          className="w-[500px] rounded-xl shadow-white shadow-sm hover:scale-[0.95] transition-transform duration-300 max-sm:w-[350px]"
        />
      </div>
      <div className="abt-content-div w-[50%] flex flex-col md:items-start max-sm:items-center justify-center">
        <p className="font-bold text-zinc-50 text-[22px] pb-4 max-sm:text-center">
          About Me
        </p>
        <p className="md:tracking-widest text-justify max-sm:w-[310px] text-zinc-400">
          Welcome! I'm BP Prasanna, a professional frontend developer with
          expertise in creating dynamic, user-friendly websites and
          applications. With a keen eye for design and a focus on responsive,
          scalable solutions, I excel in building engaging user experiences. My
          technical skills include proficiency in modern web technologies and a
          commitment to delivering high-quality code that meets client needs.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
