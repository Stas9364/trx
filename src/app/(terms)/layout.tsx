import Link from "next/link";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        {children}
      </div>
    </section>
  );
}
