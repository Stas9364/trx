"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const ContactsSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>

      <div className="max-w-4xl mx-auto text-center relative">
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
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-blue-400">Transform</span> Your
            Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can help you achieve
            your goals with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={
                "https://www.upwork.com/services/product/development-it-eye-catching-front-end-development-and-design-1735599511920140288?ref=fl_profile"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href={
                "https://www.upwork.com/services/consultation/development-it-ekaterina-1743210048014413824"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="border cursor-pointer border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
