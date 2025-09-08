import { Linkedin } from 'lucide-react';

export const CompanyInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold text-blue-400">TRX Developers</h3>
      <p className="text-gray-300 leading-relaxed">
        Building the future, one line of code at a time. We deliver
        enterprise-grade software solutions with startup agility.
      </p>
      <div className="flex items-center gap-3">
        <a
          href="https://linkedin.com/company/trx-developers"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <span className="text-gray-400 text-sm">Follow us on LinkedIn</span>
      </div>
    </div>
  );
};
