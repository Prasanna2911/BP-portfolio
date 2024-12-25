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
          I am really happy about the work done by my friend. The aura he
          carried through the whole project is insane, he has done each and
          every work detailly which our team was totally expecting. Looking
          forward to join hands with any of his future projectsm
        </p>
        <span className="border-t border-zinc-400 block pt-6"></span>
        <div className="owner-div text-[14px] flex justify-between">
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
