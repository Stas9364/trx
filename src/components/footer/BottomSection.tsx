import Link from 'next/link';

export const BottomSection = () => {
  return (
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">
          &copy; 2024 TRX Developers. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="terms-of-use"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
};
