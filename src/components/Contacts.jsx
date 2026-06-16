import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contacts() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-6">

      <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl py-8 px-8 shadow-lg hover:shadow-purple-900/20 transition">

        {/* Title */}
        <h2 className="text-2xl text-gray-300 font-bold text-center mb-2">
          Let's Build Something Great Together
        </h2>

        <div className="w-full max-w-2xl mx-auto">
          <p className="text-gray-400 text-center mb-6 text-base">
            I'm currently{" "}
            <span className="text-[#9b7bfc]">
              looking for backend and full-stack opportunities
            </span>.{" "}
            Whether you have a project idea, a job opportunity, or simply want
            to connect,{" "}
            <span className="text-[#9b7bfc]">
              feel free to reach out
            </span>
            . I'd be happy to hear from you.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contacts;