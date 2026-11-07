import React from 'react'
import AnimatedDiv from "./AnimatedDiv";


function Projects() {
  const tech = ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'React', 'Vite']
  
  
  return (

    <section id="projects" className="px-6 py-30  max-w-6xl mx-auto">
       <AnimatedDiv animation="up" delay={0.3} >
            <div className="flex justify-center items-center gap-3">
              <div className="w-10 h-[2px] bg-[#9b7bfc]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#9b7bfc] opacity-80">
                Always Growing
              </p>
               <div className="w-10 h-[2px] bg-[#9b7bfc]" />
            </div>
      {/* Title */}
      <div>
        <h1 className="text-4xl text-gray-300 font-bold leading-[0.9] m-0 text-center my-7">
          Projects
        </h1>
      </div>
 </AnimatedDiv>

 <AnimatedDiv animation="up" delay={0.3} >
      <div className="grid lg:grid-cols-2 gap-10 pt-20 items-center">
        {/* screenshot inside a code-window frame, like the hero card */}
        <a
          href="https://chat-app-ivory-alpha-57.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-white/10 bg-black/40 overflow-hidden hover:border-violet-400/60 transition-colors"
        >
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-white/60 font-mono">pulse-chat-app</span>
          </div>
          <img src="/pulse.png" alt="Pulse chat app"  className="w-full h-full object-contain" />
        </a>

        <div className="space-y-5">
          <h3 className="text-3xl font-bold text-white">Pulse: Real-Time Chat App</h3>
          <p className="text-white/70 leading-relaxed">
            A <span className="text-violet-400">backend-driven</span> real-time chat app with
            one-to-one and group conversations, live typing and presence, admin controls and
            avatar uploads.
          </p>

          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex gap-2"><span className="text-violet-400">▹</span> Socket.IO rooms, with auto-join on connect and live presence</li>
            <li className="flex gap-2"><span className="text-violet-400">▹</span> Cookie-based JWT auth with access and refresh tokens</li>
            <li className="flex gap-2"><span className="text-violet-400">▹</span> Group rules: admin-only changes, leave with admin handover</li>
            <li className="flex gap-2"><span className="text-violet-400">▹</span> Deployed on Render and Vercel, with MongoDB Atlas</li>
          </ul>

          {/* pills like "Open to Work" */}
          <div className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="https://chat-app-ivory-alpha-57.vercel.app" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 rounded-full bg-violet-500 text-white font-semibold hover:bg-violet-400 transition-colors">
              Live Demo
            </a>
            <a href="https://github.com/imtanan/chat-app" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 rounded-full border border-white/15 text-white hover:border-violet-400 transition-colors">
              GitHub
            </a>
          </div>
          <p className="text-xs text-red-400">First load can take up to a minute (free hosting).</p>
        </div>
      </div>
     </AnimatedDiv>
    </section>
  )
}
    
  


export default Projects