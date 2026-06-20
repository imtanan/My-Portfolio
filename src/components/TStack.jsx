import React from "react";
import { FaReact } from "react-icons/fa";
import AnimatedDiv from "./AnimatedDiv";


function TStack() {
  return (
    <div  id="tstack" className="pt-7">

      {/* Header */}
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
          My Tech Stack
        </h1>
      </div>
</AnimatedDiv>
      {/* Frontend */}
      <AnimatedDiv animation="up" delay={0.3} >
      <div>
        <h1 className="text-2xl text-gray-300 font-bold px-40 py-4">
          Front End
        </h1>

        <div className="flex flex-wrap gap-35 justify-center py-8">

          {/* React */}
          <div className="relative group inline-block">
          <div className="w-17 h-18 text-xl flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:scale-105 transition duration-300">
        <svg fill="currentColor"  className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300" width="201px" height="201px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>react</title> <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path> </g></svg>
              </div>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    React.js
  </div>

</div>
          {/* Vite */}
          <div className="relative group inline-block">
          <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition duration-300 text-gray-300 hover:text-[#9b7bfc]">
           <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_vite</title><path d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z" ></path><path d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z" fill="url(#paint1_linear)"></path><defs id="defs50"><linearGradient id="paint0_linear" x1="6.0002" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stopColor="#41D1FF" id="stop38"></stop><stop offset="1" stopColor="#BD34FE" id="stop40"></stop></linearGradient><linearGradient id="paint1_linear" x1="194.651" y1="8.8182" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stopColor="#FFEA83" id="stop43"></stop><stop offset=".0833" stopColor="#FFDD35" id="stop45"></stop><stop offset="1" stopColor="#FFA800" id="stop47"></stop></linearGradient></defs></g></svg>
          </div>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    Vite
  </div>

</div>
          {/* javascript */}
          <div className="relative group inline-block">
          <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#9b7bfc] hover:bg-white/10 transition duration-300">
           <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor"  className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="currentColor" d="M4.698 3.419l2.057 23.073 9.231 2.563 9.256-2.566 2.059-23.069h-22.604zM13.226 9.394l-0.409 4.441 9.671 0.001-0.069 0.76-0.665 7.45-0.042 0.478-5.804 1.609-5.796-1.609-0.396-4.443h2.84l0.202 2.257 3.154 0.85 3.156-0.852 0.328-3.67-9.671-0.001 0.069-0.76 0.665-7.45 0.209-2.086h11.287l0.131 1.598 0.403 4.453h-2.841l-0.262-2.922-2.889-0.174h-0.515v-0.004l-2.755 0.074z"></path> </g></svg>
          </div>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    Javascript
  </div>
          </div>


          {/* Tailwind */}
          <div className="relative group inline-block">
          <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" ></path></g></svg>
          </div>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    Tailwind
  </div>

</div>
        </div>
      </div>
</AnimatedDiv>
      {/* Backend */}
      <AnimatedDiv animation="up" delay={0.4} >
      <div>
        <h1 className="text-2xl text-gray-300 font-bold px-40 py-4">
          Back End
        </h1>

        <div className="flex flex-wrap gap-35 justify-center py-8">

          {/* Node */}
          <div className="relative group inline-block">
          <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
           <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"></path></g></svg>
          </div>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
   Node
  </div>

</div>
          {/* Express */}
          <div className="relative group inline-block">
          <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
           <svg fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></g></svg>
          </div>

  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    Express
  </div>
</div>
          {/*PHP */}
          <div className="relative group inline-block">
             <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
           <svg fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>php</title> <path d="M23.205 13.759h-1.178l-0.645 3.309h1.047c0.056 0.004 0.122 0.007 0.188 0.007 0.507 0 0.978-0.149 1.374-0.405l-0.010 0.006c0.371-0.33 0.623-0.786 0.688-1.301l0.001-0.010c0.048-0.138 0.076-0.296 0.076-0.461 0-0.291-0.087-0.562-0.236-0.788l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001zM26.448 15.486c-0.075 0.398-0.208 0.753-0.39 1.076l0.009-0.017c-0.194 0.338-0.427 0.628-0.698 0.876l-0.003 0.002c-0.316 0.302-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.472 0.207-0.048 0-0.095-0.001-0.142-0.002l0.007 0h-1.475l-0.409 2.102h-1.722l1.537-7.905h3.31c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.512 0.933 0.512 1.5 0 0.245-0.036 0.482-0.103 0.705l0.004-0.017zM16.955 18.317l0.679-3.498c0.035-0.095 0.055-0.204 0.055-0.318 0-0.183-0.052-0.354-0.142-0.499l0.002 0.004c-0.195-0.142-0.439-0.228-0.703-0.228-0.055 0-0.109 0.004-0.162 0.011l0.006-0.001h-1.365l-0.88 4.53h-1.709l1.537-7.906h1.708l-0.409 2.102h1.522c0.093-0.010 0.2-0.016 0.309-0.016 0.625 0 1.205 0.193 1.683 0.524l-0.010-0.006c0.257 0.291 0.414 0.676 0.414 1.097 0 0.188-0.031 0.369-0.089 0.538l0.003-0.012-0.715 3.679zM11.926 17.423c-0.316 0.303-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.471 0.207-0.047 0-0.095-0.001-0.142-0.002l0.007 0h-1.476l-0.409 2.101h-1.722l1.537-7.905h3.312c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.511 0.933 0.511 1.5 0 0.246-0.036 0.483-0.103 0.707l0.004-0.017c-0.146 0.774-0.533 1.441-1.079 1.934l-0.003 0.003zM16 8.112c-8.281 0-14.996 3.531-14.996 7.888s6.714 7.889 14.996 7.889 14.996-3.533 14.996-7.889-6.714-7.888-14.996-7.888zM9.764 13.759h-1.18l-0.644 3.309h1.047c0.056 0.004 0.121 0.007 0.187 0.007 0.507 0 0.979-0.149 1.375-0.405l-0.010 0.006c0.371-0.329 0.622-0.786 0.686-1.301l0.001-0.010c0.049-0.138 0.077-0.297 0.077-0.462 0-0.29-0.086-0.561-0.235-0.786l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001z"></path> </g></svg>
                </div>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
   PHP
  </div>

</div>
          {/* Other backend icons trimmed for readability */}
        </div>
      </div>
</AnimatedDiv>
      {/* Database */}
      <AnimatedDiv animation="up" delay={0.3} >
      <div>
        <h1 className="text-2xl text-gray-300 font-bold px-40 py-4">
          Database
        </h1>

        <div className="flex flex-wrap gap-35 justify-center py-8">
          <div className="relative group inline-block">
          <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
          <svg fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mongodb</title> <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path> </g></svg>
          </div>
            {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    MongoDB
  </div>
          </div>
          <div className="relative group inline-block">
            <div className="w-17 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z"></path></g></svg>
           </div>
             {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    MySQL
  </div>
           </div>
        </div>
      </div>
</AnimatedDiv>
      {/* Tools */}
      <AnimatedDiv animation="up" delay={0.3} >
      <div>
        <h1 className="text-2xl text-gray-300 font-bold px-40 py-4">
          Tools
        </h1>

        <div className="flex flex-wrap gap-35 justify-center py-8">
          <div className="relative group inline-block">
          <div className="w-19 h-17 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
           <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M15,5.6,10.4,1A3.4,3.4,0,0,0,5.78.86L7.66,2.74a1.25,1.25,0,0,1,1.67,1.2V4a1.23,1.23,0,0,1-.08.38l2.45,2.4a1.17,1.17,0,0,1,.37-.08A1.3,1.3,0,1,1,10.77,8h0a1.17,1.17,0,0,1,.08-.37L8.6,5.38v5.23a1.28,1.28,0,0,1,.73,1.15,1.3,1.3,0,0,1-2.6,0,1.27,1.27,0,0,1,.67-1.11V5.07A1.27,1.27,0,0,1,6.73,4a1.17,1.17,0,0,1,.08-.37l-1.9-1.9L1,5.6a3.38,3.38,0,0,0,0,4.79H1L5.6,15a3.38,3.38,0,0,0,4.79,0h0L15,10.4a3.38,3.38,0,0,0,0-4.79Z"></path> </g> </g></svg>
          </div>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    Git
  </div>
          </div>
           <div className="w-19 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
       <div className="relative group inline-block">
        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    Github
                    </div>
  </div>
</div>
          <div className="w-19 h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:text-[#6944ee] hover:bg-white/10 transition duration-300">
   <div className="relative group inline-block">
     <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15   text-gray-300 hover:text-[#9b7bfc] transition-colors duration-300"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"></path> </g></svg>
  {/* Tooltip */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 
                  bg-black text-white text-xs px-2 py-1 rounded 
                  opacity-0 group-hover:opacity-100 
                  transition duration-200 whitespace-nowrap">
    Visual Studio
                    </div>
  </div>
        </div>
        </div>
      </div>
</AnimatedDiv>
    </div>
  );
}

export default TStack;