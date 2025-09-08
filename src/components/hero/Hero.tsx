"use client";

import { ArrowRight, Play } from "lucide-react";
import MotionWrapper from "../motion-wrapper/MotionWrapper";
import { Badge } from "./badge/Badge";
import { FeatureCards } from "./feature-cards/FeatureCards";
import { Statistics } from "./statistics/Statistics";
import { stats } from "./statistics/statistics-items";
import { TrustedBy } from "./trusted-by/TrustedBy";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <Badge title={"Enterprise-Level Delivery with Startup Agility"} />

          <MotionWrapper
            as="div"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">We Turn</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                Your Idea
              </span>
              <br />
              <span className="text-white">Into a Winning Product</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From AI-powered platforms to cloud-native architectures, we
              deliver
              <span className="text-blue-400 font-semibold">
                mission-critical software
              </span>
              with real business outcomes that scale and grow your business.
            </p>
          </MotionWrapper>

          <MotionWrapper
            as="div"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href={"#contacts"}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25"
            >
              <span>Start Your Project</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={"#portfolio"}
              className="group border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <span>View Our Work</span>
              <Play className="mr-2 w-5 h-5" />
            </Link>
          </MotionWrapper>

          <Statistics stats={stats} />

          <FeatureCards />

          <TrustedBy
            trustedList={[
              "CRYPTOPAY",
              "SCALE",
              "NEXT STREET",
              "Arcade",
              "15SOF",
            ]}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <MotionWrapper
        as="div"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </MotionWrapper>
    </section>
  );
};
