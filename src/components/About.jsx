// import aboutImg from "../assets/gifimage.gif";
import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="h-[100vh] mb-4 flex justify-center items-center gap-11 max-sm:flex-col"
    >
      <div className="abt-img-div">
        <img
          // https://thejashari.vercel.app/gifimage.gif
          src="https://thejashari.vercel.app/gifimage.gif"
          alt="gif img"
          id="abt-img"
          className="w-[500px] rounded-xl shadow-white shadow-sm hover:scale-[0.95] transition-transform duration-300"
        />
      </div>
      <div className="abt-content-div w-[50%] flex flex-col md:items-start max-sm:items-center justify-center">
        <p className="font-bold text-zinc-50 text-[22px] pb-4 max-sm:text-center">
          About Me
        </p>
        <p className="tracking-widest text-justify max-sm:w-[310px] text-zinc-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          architecto facere totam cum optio labore fugit ratione! Nihil aliquam
          dolores eos earum nisi natus sint molestiae amet at aperiam fugiat
          iste officia beatae saepe ipsum quas sit modi hic, consequuntur enim
          veniam praesentium assumenda ex vitae? Saepe explicabo dolorum eos.
        </p>
      </div>
    </div>
  );
};

export default About;
