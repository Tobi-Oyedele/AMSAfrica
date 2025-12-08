import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">AMSA</h3>
            <p className="text-gray-400 leading-relaxed">
              Association of Medical Schools in Africa - Advancing medical
              education excellence across the continent.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Members", href: "/members" },
                { label: "Programs", href: "/programs" },
                { label: "News & Events", href: "/news-events" },
                { label: "Our Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">info@amsa-africa.org</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">+254 20 123 4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">Ibadan, Nigeria</span>
              </li>
            </ul>

            <div className="flex space-x-5 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Association of Medical Schools in Africa. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
