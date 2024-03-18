import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/M10o", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...inline-block text-transparent bg-clip-text">SummarEASE</span>
      </h1>
      <h2 className='desc'>
      Simplify Your Reading: SummarEase - Your Go-To Article Summarizer for Clearer Understanding on Any Topic, Effortlessly Condensing Complex Content into Digestible Insights.
      </h2>
    </header>
  );
};

export default Hero;