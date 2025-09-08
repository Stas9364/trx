export default function TermsOfUsePage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Terms</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            of Use
          </span>
        </h1>
        <p className="text-gray-300 text-lg">
          Please read these Terms of Use carefully before using our services.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Acceptance of Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using our site and services, you agree to be bound
            by these Terms of Use and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Changes to Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update these Terms from time to time. Continued use of the
            service after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Use of Service
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Do not misuse, interfere with, or attempt to disrupt the services.
            </li>
            <li>Comply with all applicable laws and third‑party rights.</li>
            <li>Provide accurate information when required.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Intellectual Property
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All content, trademarks, and materials are owned by us or our
            licensors and protected by law. You may not copy, modify,
            distribute, or create derivative works without prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Disclaimers
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The services are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, to the fullest
            extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To the maximum extent permitted by law, we shall not be liable for
            any indirect, incidental, special, or consequential damages arising
            out of or related to your use of the services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Termination
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may suspend or terminate access if you violate these Terms or for
            any other lawful reason. Certain provisions will survive
            termination, including ownership and limitations of liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Governing Law
          </h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms are governed by the laws of the applicable jurisdiction,
            without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about these Terms, contact us at
            <span className="ml-1 text-blue-400">legal@trxdevelopers.com</span>.
          </p>
        </section>
      </div>
    </>
  );
}
