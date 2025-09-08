import MotionWrapper from "@/components/motion-wrapper/MotionWrapper";
import { type StatisticsItem } from "./statistics-items";

export const Statistics = ({ stats }: { stats: StatisticsItem[] }) => {
  return (
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
        delay: 0.5,
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <MotionWrapper
            as="div"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7 + index * 0.1,
            }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            {stat.value}
          </MotionWrapper>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </MotionWrapper>
  );
};
