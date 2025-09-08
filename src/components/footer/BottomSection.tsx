export const BottomSection = () => {
  return (
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">
          &copy; 2024 TRX Developers. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
