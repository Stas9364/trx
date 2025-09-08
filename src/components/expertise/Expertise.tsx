"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Server,
  Database,
  Cloud,
  Code2,
  Cpu,
} from "lucide-react";
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface ExpertiseArea {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
  features: string[];
  color: string;
}
const expertiseAreas: ExpertiseArea[] = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications with modern frameworks and scalable architectures",
    features: [
      "React & Next.js",
      "Node.js & Express",
      "Progressive Web Apps",
      "E-commerce Platforms",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android with seamless UX",
    features: [
      "React Native",
      "Flutter",
      "Native iOS/Android",
      "Cross-platform Solutions",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that learn, adapt, and provide actionable business insights",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Deep Learning",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "devops-cloud",
    icon: Server,
    title: "DevOps & Cloud",
    description:
      "Scalable infrastructure, automated deployments, and cloud-native solutions",
    features: [
      "AWS/Azure/GCP",
      "Kubernetes & Docker",
      "CI/CD Pipelines",
      "Infrastructure as Code",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "healthcare",
    icon: Server,
    title: "Healthcare",
    description:
      "HIPAA-compliant healthcare platforms, EHR integrations, and telemedicine solutions",
    features: [
      "Patient portals & EHR",
      "Telemedicine & WebRTC",
      "Secure data handling",
      "Compliance & auditing",
    ],
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "fintech",
    icon: Database,
    title: "Fintech",
    description:
      "Financial apps with secure payments, KYC/AML, and real-time analytics",
    features: [
      "KYC/AML flows",
      "Payment gateways",
      "Fraud detection",
      "Ledger & reporting",
    ],
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "ecommerce",
    icon: Cloud,
    title: "E-commerce",
    description:
      "Scalable marketplaces, product catalogs, and conversion-optimized storefronts",
    features: [
      "Multi-vendor marketplaces",
      "Catalog & search",
      "Cart & checkout",
      "Promotions & loyalty",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "qa-testing",
    icon: Code2,
    title: "QA Testing",
    description: "Automated and manual testing pipelines for quality at scale",
    features: [
      "E2E & integration tests",
      "Performance testing",
      "Accessibility checks",
      "CI-driven coverage",
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "blockchain",
    icon: Cpu,
    title: "Blockchain",
    description: "Distributed apps, smart contracts, and on-chain integrations",
    features: [
      "Smart contracts",
      "Wallet integrations",
      "On-chain analytics",
      "Cross-chain bridges",
    ],
    color: "from-cyan-500 to-sky-500",
  },
  {
    id: "nft-crypto",
    icon: Globe,
    title: "NFT & Cryptocurrency",
    description:
      "NFT marketplaces, token utilities, and secure crypto operations",
    features: [
      "NFT minting & trading",
      "Tokenomics & utilities",
      "Marketplace features",
      "Custody & security",
    ],
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    id: "erp-crm",
    icon: Database,
    title: "ERP / CRM Software",
    description:
      "Custom ERP/CRM системы для автоматизации бизнес-процессов и аналитики",
    features: [
      "Sales & pipelines",
      "Inventory & procurement",
      "Dashboards & analytics",
      "Integrations (SAP, 1C, HubSpot)",
    ],
    color: "from-slate-500 to-gray-500",
  },
  {
    id: "desktop-apps",
    icon: Cpu,
    title: "Desktop Application Development",
    description:
      "Кроссплатформенные desktop‑приложения (Windows/macOS/Linux) с автообновлениями",
    features: [
      "Electron & Tauri",
      "Offline-first",
      "OS integrations",
      "Auto‑updates & signing",
    ],
    color: "from-violet-500 to-purple-500",
  },
];

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
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
            <span className="text-white">Our</span>{" "}
            <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies that drive digital
            transformation and deliver measurable business results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area) => (
            <motion.div
              key={area.id}
              initial={{
                opacity: 0,
                y: 30,
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
                delay: 0.1,
              }}
              className="group  relative backdrop-blur-sm bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute  inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${area.color} mr-4`}
                  >
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {area.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {area.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {area.features.map((feature: string) => (
                    <div
                      key={feature}
                      className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${area.color} mr-3`}
                      ></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              <span className="text-blue-400">End-to-End</span> Development
              Process
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Database className="w-8 h-8 text-blue-400 mb-2" />
                <span className="text-gray-300 text-sm font-medium">
                  Architecture
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Code2 className="w-8 h-8 text-green-400 mb-2" />
                <span className="text-gray-300 text-sm font-medium">
                  Development
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Cloud className="w-8 h-8 text-purple-400 mb-2" />
                <span className="text-gray-300 text-sm font-medium">
                  Deployment
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Cpu className="w-8 h-8 text-orange-400 mb-2" />
                <span className="text-gray-300 text-sm font-medium">
                  Optimization
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
