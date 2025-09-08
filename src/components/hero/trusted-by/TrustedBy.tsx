import Link from "next/link";
import MotionWrapper from "../../motion-wrapper/MotionWrapper";

type TrustedItem = {
  title: string;
  href: string;
  color: string;
};

export const TrustedBy = ({ trustedList }: { trustedList: TrustedItem[] }) => {
  return (
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
        delay: 1,
      }}
      className="mt-20"
    >
      <p className="text-gray-500 mb-8 text-sm uppercase tracking-wider">
        Trusted by Industry Leaders
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
        {trustedList.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className="text-2xl font-bold  bg-gradient-to-r hover:scale-110 from-gray-700 via-gray-700 to-gray-700 hover:from-blue-400 hover:via-purple-400 hover:to-blue-600 bg-clip-text text-transparent transition-all duration-500 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </MotionWrapper>
  );
};
