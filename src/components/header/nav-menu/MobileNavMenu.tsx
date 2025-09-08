import Link from "next/link";
import { navItems } from "./nav-items";

export const MobileNavMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href={"#contact"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 w-fit"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
