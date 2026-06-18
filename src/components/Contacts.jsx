import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";

function Contacts() {
  return (
    <>
      <div id="contact" className="flex items-center justify-center gap-3 mt-20">
        <div className="w-10 h-[2px] bg-[#9b7bfc]" />
        <p className="text-xs uppercase tracking-[0.3em] text-[#9b7bfc] opacity-80">
          OPEN TO OPPORTUNITIES
        </p>
        <div className="w-10 h-[2px] bg-[#9b7bfc]" />
      </div>

      <section className="justify-center flex pt-10 pb-20 text-white px-6">
        <div className="w-full max-w-4xl bg-[#0a0a0f] border border-[#737171] rounded-2xl py-16 px-8 shadow-lg hover:shadow-purple-900/20 transition">
          
          {/* Title */}
          <h2 className="text-3xl text-gray-300 flex font-bold text-center mb-2 justify-center whitespace-nowrap">
            Let's Build Something&nbsp;
            <span className="text-[#9b7bfc]">Great&nbsp;</span>
            Together
          </h2>

          <br />

          <div className="w-full max-w-2xl mx-auto">
            <p className="text-gray-400 justify-center text-center mb-6 text-base">
              I'm currently{" "}
              <span className="text-[#9b7bfc]">
                looking for backend and full-stack opportunities
              </span>
              . Whether you have a project idea, a job opportunity, or simply
              want to connect,{" "}
              <span className="text-[#9b7bfc]">
                feel free to reach out
              </span>
              . I'd be happy to hear from you.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center mt-8 gap-4">
            
            {/* Email */}
            <a
              href="mailto:imtananrao1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#9b7bfc] px-5 py-3 rounded-full text-black font-medium text-sm shadow-lg shadow-black/40 transition-all duration-200 hover:translate-y-0.5 hover:shadow-none"
            >
              <BsEnvelopeAtFill className="text-black text-[18px]" />
              Email Me
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/imtanan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-black font-medium text-sm shadow-lg shadow-black/40 transition-all duration-200 hover:translate-y-0.5 hover:shadow-none"
            >
              <FaGithub className="text-black text-[18px]" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/imtanan-ahnaf-006a53402/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-black font-medium text-sm shadow-lg shadow-black/40 transition-all duration-200 hover:translate-y-0.5 hover:shadow-none"
            >
              <FaLinkedin className="text-black text-[18px]" />
              LinkedIn
            </a>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;