"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Pre Press", href: "#services" },
    { name: "Data Merge", href: "#services" },
    { name: "Packing & Sticker", href: "#services" },
    { name: "Mockup Visualization", href: "#services" },
    { name: "Booklets & Journals", href: "#services" },
    { name: "XML First Approach", href: "#services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-purple-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* CTA Section */}
      <div className="relative z-10 border-b border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ready to start your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  project?
                </span>
              </h2>
              <p className="text-purple-300 text-lg max-w-xl">
                Let's create something extraordinary together. Get in touch and
                let's discuss your vision.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-shadow whitespace-nowrap"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <a href="#home" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-xl font-bold">
                  Codetta<span className="text-purple-400">Digital</span>
                </span>
              </a>
              <p className="text-purple-300 mb-6 max-w-xs">
                Transforming ideas into exceptional digital experiences.
                Building the future, one pixel at a time.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {["Li", "Tw", "Ig", "Dr"].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-purple-800 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 rounded-xl flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 text-sm font-bold"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-purple-300 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-purple-300 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-purple-300 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-purple-400 text-sm flex items-center gap-1">
                © 2026 Codetta Digital. Made with{" "}
                <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />{" "}
                All rights reserved.
              </p>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-purple-800 hover:bg-orange-500 rounded-xl flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
