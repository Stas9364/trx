"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
const teamMembers = [
  {
    id: "member-1",
    name: "Ekaterina B",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    expertise: "React, Next.js, Express, NestJS ",
    bio: "I am a full-stack architect who builds the production-ready backbone for your business. I translate vision into secure, scalable, and profitable systems.",
    linkedin: "#",
    github: "#",
  },
  {
    id: "member-2",
    name: "Ilya S",
    role: "Python Tech Lead & AI/ML Lead",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    expertise: "Python, TensorFlow, Data Science",
    bio: "I am a dedicated Python developer who combines the skills of a full stack developer and an AI specialist. My goal is to be your go-to expert for high-quality, production-ready Python solutions.",
    linkedin: "#",
    github: "#",
  },
  {
    id: "member-3",
    name: "Dzmitryi A",
    role: "Python Tech Lead & AI/ML Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    expertise: "JS/TS, Python, C#, React, Django, LLMs",
    bio: "I’m a full-stack developer with 8+ years of experience building high-performance web applications that scale fast and deliver results. From FinTech to AI platforms.",
    linkedin: "#",
    github: "#",
  },
  {
    id: "member-4",
    name: "Vlad K",
    role: "CTO/Full-stack & Mobile developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    expertise: "React Native, Flutter, iOS/Android",
    bio: "I am your single point of technical leadership, building your entire product from a unified codebase for maximum speed and efficiency.",
    linkedin: "#",
    github: "#",
  },
];

export const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Meet Our</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Senior developers and architects with proven track records in
            enterprise solutions
          </p>
        </motion.div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 300,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -300,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="flex flex-col md:flex-row items-center p-8 md:py-12 md:px-14"
              >
                {/* Image */}
                <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                  <div className="relative">
                    <Image
                      src={teamMembers[currentIndex].image}
                      alt={teamMembers[currentIndex].name}
                      className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg"
                      width={256}
                      height={256}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {teamMembers[currentIndex].name}
                  </h3>
                  <p className="text-xl text-blue-400 mb-4">
                    {teamMembers[currentIndex].role}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {teamMembers[currentIndex].bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                    {teamMembers[currentIndex].expertise
                      .split(", ")
                      .map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href={teamMembers[currentIndex].linkedin}
                      className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                    <a
                      href={teamMembers[currentIndex].github}
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 cursor-pointer top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1 cursor-pointer top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Member Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} of {teamMembers.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
