import Link from "next/link";

export const Services = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-white">Our Services</h4>
      <div className="space-y-2">
        <Link
          href="/#expertise"
          className="block text-gray-300 hover:text-blue-400 transition-colors"
        >
          Full-Stack Development
        </Link>
        <Link
          href="/#expertise"
          className="block text-gray-300 hover:text-blue-400 transition-colors"
        >
          AI & Machine Learning
        </Link>
        <Link
          href="/#expertise"
          className="block text-gray-300 hover:text-blue-400 transition-colors"
        >
          Mobile App Development
        </Link>
        <Link
          href="/#expertise"
          className="block text-gray-300 hover:text-blue-400 transition-colors"
        >
          DevOps & Cloud Infrastructure
        </Link>
        <Link
          href="/#portfolio"
          className="block text-gray-300 hover:text-blue-400 transition-colors"
        >
          Enterprise Solutions
        </Link>
      </div>
    </div>
  );
};
