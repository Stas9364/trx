export const metadata = {
  title: "Privacy Policy | TRX Developers",
  description:
    "Read the TRX Developers Privacy Policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Privacy</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Policy
          </span>
        </h1>
        <p className="text-gray-300 text-lg pb-4">
          Welcome to TRX Developers (&quot;we,&quot; &quot;us,&quot;
          &quot;our&quot;). We are a team of experts specializing in building
          high-performing, scalable software. Our mission is to deliver
          world-class services in web development, mobile apps, AI integration,
          and DevOps.
        </p>

        <p className="text-gray-300 text-lg">
          This Privacy Policy explains how we collect, use, process, and protect
          your information when you interact with us, our services, and our
          website.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            We collect only the information necessary to provide our services,
            improve site performance, and communicate with you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Contact details (name, email, phone) when provided by you.</li>
            <li>Usage data (pages viewed, interactions) for analytics.</li>
            <li>Technical data (IP, device, browser) for security and logs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            How We Use Information
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>To deliver and maintain our services and site features.</li>
            <li>To respond to inquiries and provide customer support.</li>
            <li>To analyze performance and improve user experience.</li>
            <li>To protect against fraud, abuse, and security threats.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Data Sharing
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We do not sell your personal data. We may share data with trusted
            service providers (e.g., hosting, analytics) under strict data
            processing agreements and only for the purposes outlined here.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We implement technical and organizational measures to protect your
            information. However, no method of transmission or storage is 100%
            secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Your Rights
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Object to or restrict certain processing activities.</li>
            <li>Data portability where applicable.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Cookies & Analytics
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We use cookies and similar technologies for essential operations and
            analytics. You can manage preferences in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Changes to This Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy to reflect changes in our practices or
            legal requirements. We encourage you to review it periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            For questions about this policy or your data, contact us at
            <span className="ml-1 text-blue-400">
              privacy@trxdevelopers.com
            </span>
            .
          </p>
        </section>
      </div>
    </>
  );
}
