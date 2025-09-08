"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { portfolioProjects } from "../../app/portfolio/_data/projects";
import { Cloud, Code, Database, Smartphone, Users } from "lucide-react";

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

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const activeSlug = useMemo(() => {
    const parts = pathname?.split("/") ?? [];
    return parts.length >= 3 ? parts[2] : undefined;
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="lg:col-span-1"
    >
      <div className="bg-gray-800 rounded-2xl p-6 sticky top-24">
        <h3 className="text-xl font-semibold mb-6 text-white">All Projects</h3>
        <div className="space-y-3">
          {portfolioProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                router.replace(`/portfolio/${project.slug}`, { scroll: false });
              }}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                activeSlug === project.slug
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    activeSlug === project.slug ? "bg-blue-500" : "bg-gray-600"
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
  );
};
