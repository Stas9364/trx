import MotionWrapper from '@/components/motion-wrapper/MotionWrapper';
import { TrendingUp, Sparkles, Award } from 'lucide-react';

export const FeatureCards = () => {
  return (
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
        delay: 0.7,
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
    >
      <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Full-Stack Development
        </h3>
        <p className="text-gray-300">
          Modern web and mobile applications with React, Node.js, and
          cloud-native architectures
        </p>
      </div>

      <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          AI & Machine Learning
        </h3>
        <p className="text-gray-300">
          Intelligent automation, LLM integration, and data-driven insights that
          transform businesses
        </p>
      </div>

      <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          DevOps & Cloud
        </h3>
        <p className="text-gray-300">
          Scalable infrastructure, CI/CD pipelines, and enterprise-grade
          security on AWS, GCP, Azure
        </p>
      </div>
    </MotionWrapper>
  );
};
