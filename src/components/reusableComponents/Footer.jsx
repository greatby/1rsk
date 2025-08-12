import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

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

        {/* <div>
          <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Ignition Protocols
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Continuous O&M
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Regulatory Intelligence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Audit Readiness
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div> */}

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <p className="text-sm">India: +91-9243188888</p>

          {/* Social */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/company/1rsk/"
              className="hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
            <a href="https://x.com/1RSKIndia" className="hover:text-white">
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/1rskindia/"
              className="hover:text-white"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@1RSK-India"
              className="hover:text-white"
            >
              <FaYoutube size={18} />
            </a>
            <a href="mailto:Support@1rsk.com" className="hover:text-white">
              <IoMail size={18} />
            </a>
            <a
              onClick={() => {
                const phone = "919243188888";
                const text = encodeURIComponent(
                  "Hi, I need help with EPFdesk."
                );
                window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
              }}
              className="hover:text-white cursor-pointer"
            >
              <IoLogoWhatsapp size={18} />
            </a>
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
