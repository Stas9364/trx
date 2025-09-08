import Link from "next/link";

export default function NotFound() {
  return (
    <div data-page="not-found" className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-50%] md:w-auto">
        <div className="flex w-full flex-col items-center text-center leading-[1.4] md:max-w-[520px]">
          <div className="relative h-[240px]">
            <h3 className="pl-[55px] text-base font-bold tracking-[3px] uppercase">
              Oops! Page not found
            </h3>
            <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[200px] font-black tracking-[-40px] uppercase md:text-[252px]">
              <span className="text-shadow-white">4</span>
              <span className="text-shadow-white">0</span>
              <span className="text-shadow-white">4</span>
            </h1>
          </div>
          <h2 className="mb-[25px] text-xl font-normal uppercase">
            we are sorry, but the page you requested was not found
          </h2>

          <Link
            href={"/"}
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
