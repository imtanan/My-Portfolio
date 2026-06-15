
import React from "react";
import { FaServer } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import AnimatedDiv from "./AnimatedDiv";

// Key component
const Key = ({ children, color = "text-[#9b7bfc]" }) => (
  <span className={color}>{children}</span>
);

// Line number component
const LineNo = ({ number }) => (
  <span className="text-gray-600 text-xs">{number}</span>
);

function Hero() {
  return (
    <div className="flex items-start px-10 pt-28 w-full gap-16">
      {/* LEFT SIDE */}
      <div className="flex-1 min-w-[680px] text-left">
        <AnimatedDiv animation="fade" delay={0.4} once={true}>
          <div className="mb-5 mt-5">
            <p className="flex items-center text-[#9b7bfc]">
              <span className="w-5 h-px bg-[#9b7bfc] mr-2"></span>
              Backend-Focused Developer
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animation="fade" delay={0.4} once={true}>
          <h1 className="text-7xl text-gray-200 font-bold leading-[0.9] m-0">
            Imtanan's <br />
            <span className="text-6xl">Portfolio</span>
          </h1>
        </AnimatedDiv>

        <AnimatedDiv animation="fade" delay={0.4} once={true}>
          <div className="text-gray-400 text-lg mt-6">
            <p>
              <span className="text-[#9b7bfc]">
                Backend-focused Full-Stack Developer
              </span>{" "}
              with experience in{" "}
              <span className="text-white">
                Node.js, React, Vite, and Express.js
              </span>
              . I enjoy building practical web applications and{" "}
              <span className="text-[#9b7bfc]">
                improving my skills through real-world projects
              </span>
              .
            </p>

            <div className="mt-4 flex text-sm">
              <span className="flex items-center gap-1.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-3.5 w-3.5 shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                imtananrao1@gmail.com
              </span>

              <div className="flex pl-15">
                <a
                  href="https://github.com/imtanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 p-2 bg-black rounded-lg inline-flex items-center justify-center"
                >
                  <FiGithub className="text-2xl text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/imtanan-ahnaf-006a53402/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 p-2 bg-black rounded-lg inline-flex items-center justify-center"
                >
                  <FiLinkedin className="text-2xl text-white" />
                </a>
              </div>
            </div>

            {/* BADGES */}
            <div className="flex items-center gap-2 flex-wrap mt-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border border-white/10 bg-white/5 text-gray-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Open to Work
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border border-white/10 bg-white/5 text-gray-300">
                <FaServer className="text-purple-400 text-[10px]" />
                Backend Developer
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border border-white/10 bg-white/5 text-gray-300">
                🌍 Remote Friendly
              </span>
            </div>
          </div>
        </AnimatedDiv>
      </div>

      {/* RIGHT SIDE - CODE WINDOW */}
      <div className="ml-3 mt-20">

        <AnimatedDiv animation="right" delay={0.2} once={true}>
        <div className="w-[450px] rounded-xl overflow-hidden bg-[#121111] border border-[#332e69f2] shadow-[0_0_40px_#251f39]">
          {/* TOP BAR */}
          <div className="flex items-center gap-2 p-3 border-b border-[#332e69f2] bg-[#121111]">
            <svg
              className="w-3 h-3 text-red-500 fill-red-500"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>

            <svg
              className="w-3 h-3 text-yellow-400 fill-yellow-400"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>

            <svg
              className="w-3 h-3 text-green-400 fill-green-400"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>

            <span className="ml-4 px-3 py-1 text-sm text-gray-400">
              portfolio.jsx
            </span>
          </div>

          {/* CODE AREA */}
          <div className="p-5 font-mono text-sm text-gray-200 space-y-2">
            <AnimatedDiv animation="left" delay={0.3} once={true}>
            <div>
              <LineNo number="1" /> <Key>const</Key>{" "}
              <span className="text-white">developer</span> = {"{"}
            </div>
            </AnimatedDiv>
 <AnimatedDiv animation="left" delay={0.4} once={true}>
            <div>
              <LineNo number="2" />
              &nbsp;&nbsp;
              <Key color="text-purple-200">name</Key>:{" "}
              <span className="text-green-400">"Imtanan"</span>,
            </div>
</AnimatedDiv>

 <AnimatedDiv animation="left" delay={0.5} once={true}>
            <div>
              <LineNo number="3" />
              &nbsp;&nbsp;
              <Key color="text-purple-200">role</Key>:{" "}
              <span className="text-green-400">
                "Backend Focused Full-Stack Developer"
              </span>
              ,
            </div>
</AnimatedDiv>

 <AnimatedDiv animation="left" delay={0.6} once={true}>
            <div>
              <LineNo number="4" />
              &nbsp;&nbsp;
              <Key color="text-purple-200">stack</Key>: [
              <span className="text-green-400">"Node.js"</span>,
              <span className="text-green-400">"Express.js"</span>,
              <span className="text-green-400">"React"</span>,
              <span className="text-green-400">"Vite"</span>],
            </div>
</AnimatedDiv>

 <AnimatedDiv animation="left" delay={0.7} once={true}>
            <div>
              <LineNo number="5" />
              &nbsp;&nbsp;
              <Key color="text-purple-200">focus</Key>:{" "}
              <span className="text-green-400">
                "Backend systems, APIs, and scalable web &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;apps"
              </span>
              ,
            </div>
</AnimatedDiv>

 <AnimatedDiv animation="left" delay={0.8} once={true}>
            <div>
              <LineNo number="6" />
              &nbsp;&nbsp;
              <Key color="text-purple-200">open</Key>: <Key>true</Key>
              <span className="text-gray-400">
                {" "}
                // Always open to opportunities
              </span>
            </div>
</AnimatedDiv>

 <AnimatedDiv animation="left" delay={0.9} once={true}>
            <div>
               <LineNo number="7" />
              &nbsp;&nbsp;&nbsp;{" }"}
              </div>
</AnimatedDiv>
          </div>
          {/* BOTTOM BAR */}
          <div className="flex items-center gap-2 p-3 border-t border-[#332e69f2] bg-[#121111]">
            <span className="ml-4 text-sm text-gray-400"></span>
          </div>
        </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}

export default Hero;

