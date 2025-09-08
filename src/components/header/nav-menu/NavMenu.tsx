"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";
import MotionWrapper from "@/components/motion-wrapper/MotionWrapper";

export const NavMenu = () => {
  const pathname = usePathname();
  const makeHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <MotionWrapper
      as="nav"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={makeHref(item.href)}
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </MotionWrapper>
  );
};
