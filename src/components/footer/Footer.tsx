import { BottomSection } from "./BottomSection";
import { CompanyInfo } from "./CompanyInfo";
import { ContactInfo } from "./ContactInfo";
import { Services } from "./Services";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <CompanyInfo />

          {/* Contact Info */}
          <ContactInfo />

          {/* Services */}
          <Services />
        </div>

        {/* Bottom Section */}
        <BottomSection />
      </div>
    </footer>
  );
};
