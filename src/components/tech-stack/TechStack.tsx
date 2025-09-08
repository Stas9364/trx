"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Technology = {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "AI/ML"
    | "Cloud"
    | "DevOps"
    | "Database"
    | "Language"
    | "Mobile";
  logo: string;
};

const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: "python",
    name: "Python",
    category: "AI/ML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "AI/ML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "AI/ML",
  "Cloud",
  "DevOps",
  "Database",
  "Mobile",
];

export const TechnologiesSection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900"></div>

      <div className="max-w-7xl mx-auto relative">
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
            <span className="text-white">Technology</span>{" "}
            <span className="text-blue-400">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We leverage the most advanced and reliable technologies to build
            robust, scalable solutions that stand the test of time
          </p>
        </motion.div>

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
            delay: 0.2,
          }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <span className="text-blue-400 text-sm">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            delay: 0.4,
          }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Always <span className="text-blue-400">Up-to-Date</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team continuously learns and adapts to emerging technologies,
            ensuring your projects benefit from the latest innovations in
            software development, AI, and cloud computing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
