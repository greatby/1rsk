import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">1RSK</h2>
          <p className="text-sm">
            The unified compliance OS for startups, SMEs, and global enterprises 
            operating in India & UAE — proactive, intelligent, and scalable.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Ignition Protocols</a></li>
            <li><a href="#" className="hover:text-white">Continuous O&M</a></li>
            <li><a href="#" className="hover:text-white">Regulatory Intelligence</a></li>
            <li><a href="#" className="hover:text-white">Audit Readiness</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Insights</a></li>
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Email: contact@1rsk.com</p>
          <p className="text-sm">India: +91-9876543210</p>
          <p className="text-sm">UAE: +971-12345678</p>

          {/* Social */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><FaLinkedin size={18} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-white"><FaFacebookF size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} 1RSK. All rights reserved.
      </div>
    </footer>
  );
}
