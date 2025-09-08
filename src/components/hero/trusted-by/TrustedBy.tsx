import MotionWrapper from "../../motion-wrapper/MotionWrapper";

export const TrustedBy = ({ trustedList }: { trustedList: string[] }) => {
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
          <div key={item} className="text-2xl font-bold text-gray-400">
            {item}
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
};
