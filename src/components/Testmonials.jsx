import { FaLinkedinIn } from "react-icons/fa";
const Testmonials = () => {
  return (
    <section
      id="testmonials"
      className="md:mt-8 px-16 md:flex justify-between items-center max-sm:px-8 h-[400px]"
    >
      <h1 className="text-5xl max-sm:text-3xl max-sm:text-center max-sm:pb-8 font-medium">
        Testmonials
      </h1>
      <div className="content-div md:w-[50%]">
        <p className="text-zinc-400 max-sm:w-[300px] text-justify pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde
          dolorem, cumque reprehenderit laudantium nostrum! Possimus obcaecati
          culpa eveniet atque vel magnam labore. Soluta, consectetur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <span className="border-t border-zinc-400 block pt-6"></span>
        <div className="owner-div text-[14px] flex justify-between items-center">
          <p className="font-medium">
            Rajesh V
            <a
              href="https://www.linkedin.com/in/rajesh-v-7a4122270/"
              target="_blank"
            >
              <FaLinkedinIn size={16} className="relative left-[72px] -top-5" />
            </a>
          </p>

          <p className="text-zinc-400">Product Designer at KRT</p>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
