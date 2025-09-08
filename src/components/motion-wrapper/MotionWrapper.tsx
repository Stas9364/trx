"use client";

import React from "react";
import { motion, type MotionProps } from "framer-motion";

type AsProp = React.ElementType;

type PolymorphicProps<T extends AsProp> = MotionProps &
  React.ComponentPropsWithoutRef<T> & {
    as: T;
  };

export const MotionWrapper = <T extends AsProp>({
  as,
  ...props
}: PolymorphicProps<T>) => {
  const MotionComponent = (
    typeof as === "string"
      ? (motion as unknown as Record<string, React.ElementType>)[as as string]
      : motion(as)
  ) as React.ComponentType<Record<string, unknown>>;

  return <MotionComponent {...(props as Record<string, unknown>)} />;
};

export default MotionWrapper;
