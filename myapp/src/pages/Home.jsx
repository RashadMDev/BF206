import React from "react";

const Home = () => {
      return (
            <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our App!</h1>
                        <p className="text-gray-600 mb-6">
                              This is a simple and beautiful homepage built with React and styled with Tailwind CSS.
                        </p>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                              Get Started
                        </button>
                  </div>
            </div>
      );
};

export default Home;
