"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-950 mb-6">
            Let's start a{" "}
            <span className="gradient-text">project.</span>
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Ready to transform your digital presence? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 lg:space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-purple-950 mb-4 line-decoration">
                Contact Information
              </h3>
              <p className="text-purple-600">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href="mailto:hello@codettadigital.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-purple-100 group-hover:bg-purple-200 rounded-2xl flex items-center justify-center transition-colors">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-purple-500">Email</p>
                  <p className="text-purple-900 font-medium group-hover:text-orange-500 transition-colors">
                    hello@codettadigital.com
                  </p>
                </div>
              </motion.a>

                <motion.a
                href="tel:+442071838750"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
                >
                <div className="w-14 h-14 bg-purple-100 group-hover:bg-purple-200 rounded-2xl flex items-center justify-center transition-colors">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-purple-500">Phone</p>
                  <p className="text-purple-900 font-medium group-hover:text-orange-500 transition-colors">
                  +44 (20) 7183 8750
                  </p>
                </div>
                </motion.a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-purple-500">Location</p>
                  <p className="text-purple-900 font-medium">
                    123 Innovation Street
                    <br />
                    Tech District, CA 94000
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-purple-500 mb-4">Follow us</p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Instagram", "Dribbble"].map(
                  (social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="w-11 h-11 bg-purple-100 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 rounded-xl flex items-center justify-center text-purple-600 hover:text-white transition-all duration-300"
                    >
                      <span className="text-xs font-bold">
                        {social.charAt(0)}
                      </span>
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-purple-100"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-purple-800 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all placeholder:text-purple-300 text-purple-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all placeholder:text-purple-300 text-purple-900"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-purple-800 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all placeholder:text-purple-300 text-purple-900"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-purple-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none placeholder:text-purple-300 text-purple-900"
                />
              </div>

              {/* Budget Range */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-purple-800 mb-2">
                  Budget Range
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["$5k-$10k", "$10k-$25k", "$25k-$50k", "$50k+"].map(
                    (budget) => (
                      <label
                        key={budget}
                        className="flex items-center justify-center px-4 py-3 rounded-xl border border-purple-200 cursor-pointer hover:border-purple-400 has-[:checked]:bg-purple-600 has-[:checked]:border-purple-600 has-[:checked]:text-white transition-all text-purple-700 text-sm font-medium"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          className="sr-only"
                        />
                        {budget}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-xl hover:shadow-orange-500/30"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
