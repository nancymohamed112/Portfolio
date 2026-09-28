import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#141414] text-white py-24 px-8 max-w-7xl mx-auto border-t border-gray-900"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-400 text-base">
          Building high-performance, modern, and interactive web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Bio / Description */}
        <div className="text-left space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Passionate Front-End Developer & Web Engineer
          </h3>
          <p className="text-gray-300 leading-relaxed text-base">
            I am Mostafa Abo Elmagd, a dedicated front-end developer specializing
            in building scalable, responsive, and dynamic web interfaces.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            With a strong focus on clean code and efficient architecture using React,
            Tailwind CSS, and modern JavaScript, I transform complex requirements 
            into seamless and exceptional user experiences on the web.
          </p>

          <div className="pt-4">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-block bg-[#141414] border border-gray-700 text-white px-7 py-3 rounded-full font-bold text-sm hover:border-cyan-500 hover:text-cyan-400 transition cursor-pointer"
            >
              Let's Work Together
            </button>
          </div>
        </div>

        {/* Right Side: Quick Stats / Highlights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              React
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Component Architecture
            </span>
          </div>

          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              Tailwind
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Responsive Styling
            </span>
          </div>

          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              JS/ES6+
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Interactive Logic
            </span>
          </div>

          <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl text-center hover:border-cyan-500/40 transition">
            <span className="block text-3xl font-extrabold text-cyan-400 mb-2">
              APIs
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Integration & State
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;