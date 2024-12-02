// rafce
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* <header className="fixed w-full bg-opacity-70 bg-gray-800 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-cyan-400">Futurista</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Features
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Pricing
            </a>
          </nav>
          <button className="bg-cyan-400 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-cyan-300 transition">
            Get Started
          </button>
        </div>
      </header> */}

<section className="relative h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 flex items-center justify-center text-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-64 w-64 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-48 w-48 bg-gradient-to-r from-pink-400 to-yellow-600 opacity-40 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg mb-6">
          Welcome to the Future
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Step into a world of endless possibilities. Harness cutting-edge technology to shape tomorrow, today.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="px-8 py-3 bg-cyan-500 text-black rounded-lg shadow-lg font-semibold hover:bg-cyan-400 hover:shadow-cyan-500/50 transition">
            Learn More
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg font-semibold hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </section>

    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Why Choose Futurista?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Speed', 'Innovation', 'Support'].map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-40 p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold text-white">{highlight}</h3>
              <p className="text-gray-300 mt-4">
                {`Experience unmatched ${highlight.toLowerCase()} with our cutting-edge platform.`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Features You'll Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Customizable', 'AI-Powered', 'Secure'].map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-700 bg-opacity-40 p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
            >
              <div className="absolute -top-4 left-4 h-12 w-12 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-8">{feature}</h3>
              <p className="text-gray-300 mt-4">
                {`Our ${feature.toLowerCase()} solutions redefine the way you work.`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="p-6 bg-gray-800 bg-opacity-40 rounded-lg shadow-lg">
              <p className="italic text-gray-300 mb-4">
                "Futurista has completely transformed my workflow. Highly recommend!"
              </p>
              <p className="text-white font-bold">- User {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

 
    </div>

  );
};

export default HomePage;
