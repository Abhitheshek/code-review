import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Navigation */}
      <nav className="px-6 py-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">CodeReviewer</span>
        </div>
        <div className="flex items-center ">
         
          <Link to ="/review">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
          </Link>
         
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-8 md:py-24">
        <div className="grid grid-cols-1  gap-12  items-center">
          {/* Left Column */}
          <div className="flex items-center
           flex-col justify-center text-center md:text-left md:px-52 px-2 md:gap-12 gap-6 py-4">
            <h1 className="text-4xl text-center md:text-5xl font-bold text-white leading-tight">
              Transform Your Code Quality with AI-Powered Reviews
            </h1>
            <p className="text-lg text-center text-gray-300">
              Get instant, intelligent feedback on your code. Our AI-powered platform helps developers
              write better code through real-time analysis and smart suggestions.
            </p>
            <div className= " flex flex-col items-center justify-center sm:flex-row gap-4">
                <Link to ="/review">
              <button className=" px-8  py-4  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition transform hover:-translate-y-1">
                Start Free Trial
              </button>
                </Link>
              <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition transform hover:-translate-y-1">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature Cards */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-blue-400 text-2xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Analysis</h3>
              <p className="text-gray-300">Instant feedback as you write your code</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-blue-400 text-2xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300">Smart suggestions for code improvement</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-blue-400 text-2xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-300">Seamless integration with your team</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-blue-400 text-2xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
              <p className="text-gray-300">Enterprise-grade security measures</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">500+</div>
            <div className="text-gray-300 mt-2">Code Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">5+</div>
            <div className="text-gray-300 mt-2">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">1+</div>
            <div className="text-gray-300 mt-2">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">95%</div>
            <div className="text-gray-300 mt-2">Satisfaction</div>
          </div>
        </div>
      </div>
       {/* Footer Section */}
       <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 CodeReviewer. All rights reserved.</p>
          <div className="mt-4">
            <p>Created and designed by ❤ <a href="https://www.instagram.com/quantumabhishek/">Abhishek</a> ❤</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
