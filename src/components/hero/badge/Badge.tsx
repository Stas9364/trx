import MotionWrapper from "@/components/motion-wrapper/MotionWrapper";
import { Sparkles } from "lucide-react";

export const Badge = ({title}: {title: string}) => {
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
        duration: 0.6,
      }}
      className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8"
    >
      <Sparkles className="w-4 h-4 text-blue-400" />
      <span className="text-blue-300 text-sm font-medium">
        {title}
      </span>
    </MotionWrapper>
  );
};
