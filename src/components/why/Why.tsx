"use client";

import { motion } from "framer-motion";
import { Shield, Users, Zap } from "lucide-react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface ChooseReason {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
}

export const WhyChooseSection = () => {
  const whyChooseReasons: ChooseReason[] = [
    {
      id: "reason-1",
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description:
        "Agile development process with 2-week sprint cycles and continuous deployment",
    },
    {
      id: "reason-2",
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security protocols, GDPR compliance, and comprehensive testing",
    },
    {
      id: "reason-3",
      icon: Users,
      title: "Dedicated Team",
      description:
        "Senior developers with 8+ years experience working exclusively on your project",
    },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-blue-400">TRX Developers</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver enterprise-grade solutions with startup agility
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseReasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl"
            >
              <div className="flex-shrink-0">
                <reason.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
