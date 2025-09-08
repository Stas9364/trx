"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

export const ReviewsSection = () => {
  interface Testimonial {
    id: string;
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
  }

  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      name: "Jennifer Walsh",
      company: "TechCorp Solutions",
      role: "CTO",
      content:
        "TRX Developers transformed our legacy system into a modern, scalable platform. Their expertise in cloud architecture saved us 40% in operational costs.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "David Kim",
      company: "StartupX",
      role: "Founder",
      content:
        "From MVP to Series A, TRX has been our technical backbone. Their AI solutions increased our user engagement by 300%.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "Maria Santos",
      company: "Global Finance Inc",
      role: "Head of Digital",
      content:
        "The mobile app TRX built handles millions of transactions daily with zero downtime. Exceptional quality and reliability.",
      rating: 5,
    },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
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
            Client <span className="text-blue-400">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from the companies we&apos;ve helped transform their digital
            presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
                delay: index * 0.1,
              }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <div className="flex mb-4">
                {Array.from({
                  length: testimonial.rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-blue-400">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
          className="text-center mt-12"
        >
          <a
            href="https://www.upwork.com/agencies/1735600515495698432/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>View More Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
