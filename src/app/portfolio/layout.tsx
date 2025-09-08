import { MotionWrapper, Sidebar } from "@/components";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto">
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
        </MotionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <Sidebar />
          
          <div className="lg:col-span-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
