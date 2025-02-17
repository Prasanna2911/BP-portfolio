import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="md:mt-20 md:px-20 mb-4 max-sm:px-2">
      <div className="content-div flex items-center justify-between md:h-[300px] h-[200px] bg-gray-800 rounded-xl">
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/nolan/64/orthogonal-view.png"
          alt="orthogonal-view"
          className="relative  md:-top-16 md:left-4 animate-slow-bounce mob-box-1"
        />

        {/* <img
          width="100"
          height="100"
          src="https://img.icons8.com/ios/50/1A1A1A/portraits.png"
          alt="portraits"
          className="relative  md:-top-16 md:left-4 animate-slow-bounce"
        /> */}
        <div className="content-and-btn">
          <p className="md:text-4xl md:w-[650px] mx-auto text-center tracking-wider !leading-[1.4] max-sm:text-[15px]">
            Let’s Bring Your Ideas to Life with Creativity and Precision!
          </p>
          <a
            href="mailto:prasannabp2004@gmail.com"
            target="_blank"
            className="block w-[130px] mx-auto mt-8  max-sm:mt-12"
          >
            <button className="btn btn-secondary !font-semibold">
              Contact Me
            </button>
          </a>
        </div>
        {/* <img
          width="120"
          height="120"
          src="https://img.icons8.com/nolan/64/launchbox.png"
          alt="launchbox"
        /> */}
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/nolan/64/right-view.png"
          alt="right-view"
          className="relative md:right-8 md:top-16 animate-slow-bounce mob-box-2"
        />
      </div>
      <div className="copy-right md:mt-8 max-sm:px-5 mb-4 max-sm:mt-6">
        <p className="border-t border-zinc-500 text-[14px] text-zinc-400 font-light pt-4 text-center ">
          Copyright © 2025 , All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
