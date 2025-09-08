import { MapPin, Mail, Phone } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-white">Contact Information</h4>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-300">Al Nahda First</p>
            <p className="text-gray-300">Sama Residence</p>
            <p className="text-gray-300">office №M02-32, Dubai, UAE</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <a
            href="mailto:hello@trxdevelopers.com"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            hello@trxdevelopers.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <a
            href="tel:+1-555-123-4567"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            +1 (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
};
