import React from "react";

// Key component
const Key = ({ children, color = "text-[#9b7bfc]" }) => (
  <span className={color}>{children}</span>
);
const LineNo = ({number})=>(<span className="text-gray-600 text-xs ">{number}</span>)

function Hero() {
  return (
    <div className="flex items-start px-10 w-full gap-16">
      
      {/* LEFT SIDE */}
      <div className="flex-1  min-w-[680px] text-left">
        
        <div className="mb-5 mt-5">
          <p className="flex items-center text-[#9b7bfc]">
            <span className="w-5 h-px bg-[#9b7bfc] mr-2"></span>
            Backend-Focused Developer
          </p>
        </div>

        <h1 className="text-7xl text-gray-200 font-bold leading-[0.9] m-0">
          Imtanan's <br />
          <span className="text-6xl">Portfolio</span>
        </h1>

        <div className="text-gray-400 text-lg mt-6">
          <p>
            <span className="text-[#9b7bfc]">
              Aspiring Backend-focused Full-Stack Developer
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
        </div>
      </div>

      {/* RIGHT SIDE - CODE WINDOW */}
      <div className="ml-3 mt-20">
        <div className="w-[450px] rounded-xl overflow-hidden bg-[#121111] border border-[#332e69f2] shadow-[0_0_40px_#251f39]">

          {/* TOP BAR */}
          <div className="flex items-center gap-2 p-3 border-b border-[#332e69f2] bg-[#121111]">
            <svg className="w-3 h-3 text-red-500 fill-red-500" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>

            <svg className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>

            <svg className="w-3 h-3 text-green-400 fill-green-400" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>

            <span className="ml-4 px-3 py-1 text-sm text-gray-400">
              portfolio.jsx
            </span>
          </div>

          {/* CODE AREA */}
          <div className="p-5 font-mono text-sm text-gray-200 space-y-2">

            <div>
            <LineNo number="1" />  <Key>const</Key> <span className="text-white">developer</span> = {"{"}
            </div>

            <div>
             <LineNo number="2" />&nbsp;&nbsp;<Key color="text-purple-200">name</Key>:
              <span className="text-green-400"> "Imtanan"</span>,
            </div>

            <div>
  <LineNo number="3" />&nbsp;&nbsp;<Key color="text-purple-200">role</Key>:
              <span className="text-green-400">
                {" "} "Backend Focused Full-Stack Developer"
              </span>,
            </div>

            <div>
   <LineNo number="4" />&nbsp;&nbsp;<Key color="text-purple-200">stack</Key>: [
              <span className="text-green-400">"React"</span>,{" "}
              <span className="text-green-400">"Node"</span>,{" "}
              <span className="text-green-400">"Express"</span>,{" "}
              <span className="text-green-400">"Vite"</span>
              ],
            </div>

            <div>
   <LineNo number="5" />&nbsp;&nbsp;<Key color="text-purple-200">passion</Key>:
              <span className="text-green-400">
                {" "} "Continuous Learning and Building"
              </span>,
            </div>

            <div>
              <LineNo number="6" />&nbsp;&nbsp;<Key color="text-purple-200">open</Key>:
              <Key> true</Key>
              <span className="text-gray-400">
                {" "} // Always open to opportunities
              </span>
            </div>

            <div>{"}"}</div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex items-center gap-2 p-3 border-t border-[#332e69f2] bg-[#121111]">
            <span className="ml-4 text-sm text-gray-400">
              
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;