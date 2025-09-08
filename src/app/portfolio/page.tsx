"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Users,
  ExternalLink,
  Github,
  Cloud,
  Code,
  Database,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { portfolioProjects } from './_data/projects';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(portfolioProjects[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "E-commerce":
        return <Database className="w-5 h-5" />;
      case "AI/ML":
        return <Code className="w-5 h-5" />;
      case "Mobile/Fintech":
        return <Smartphone className="w-5 h-5" />;
      case "Healthcare":
        return <Users className="w-5 h-5" />;
      case "Enterprise":
        return <Cloud className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Link
              href={"/"}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our comprehensive collection of successful projects across
            various industries and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Project List */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 text-white">
                All Projects
              </h3>
              <div className="space-y-3">
                {portfolioProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedImageIndex(0);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedProject.id === project.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          selectedProject.id === project.id
                            ? "bg-blue-500"
                            : "bg-gray-600"
                        }`}
                      >
                        {getCategoryIcon(project.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                          {project.title}
                        </h4>
                        <p className="text-xs opacity-75">{project.category}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content - Project Details */}
          <motion.div
            key={selectedProject.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-800 rounded-2xl overflow-hidden">
              {/* Project Header */}
              <div className="p-8 border-b border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-400 flex-wrap">
                      <span className="flex items-center gap-2">
                        {getCategoryIcon(selectedProject.category)}
                        {selectedProject.category}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {selectedProject.year}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {selectedProject.teamSize}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Gallery */}
              <div className="p-8 border-b border-gray-700">
                <div className="mb-4">
                  <Image
                    src={selectedProject.gallery[selectedImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover rounded-xl"
                    height={384}
                    width={800}
                  />
                </div>
                <div className="flex gap-3 overflow-x-auto">
                  {selectedProject.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                        selectedImageIndex === index
                          ? "border-blue-500"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} ${index + 1}`}
                        width={77}
                        height={77}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Duration
                        </h4>
                        <p className="text-gray-300">
                          {selectedProject.duration}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Client
                        </h4>
                        <p className="text-gray-300">
                          {selectedProject.client}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Challenges & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
