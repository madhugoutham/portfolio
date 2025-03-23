"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>

      {/* Background image positioned to the right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30 hidden md:block">
        <div className="w-[500px] h-[500px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Madhu</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Machine Learning Engineer & Computer Vision Specialist
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            Transforming data into intelligent solutions with advanced machine learning and computer vision expertise.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#about"
              className="inline-block bg-secondary hover:bg-secondary/80 text-white py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Explore My Work
            </Link>
            <Link
              href="#contact"
              className="inline-block border border-primary text-primary hover:bg-primary/10 py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
