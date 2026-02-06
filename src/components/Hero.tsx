"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 blob blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 blob blur-3xl" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/20 blob blur-3xl" style={{ animationDelay: "-2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-purple-800">
                Empowering Digital Excellence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-purple-950">Design the</span>
              <br />
              <span className="gradient-text italic">future</span>
              <br />
              <span className="text-purple-950">of digital.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-purple-700 max-w-lg mb-8"
            >
              We build high-performance digital solutions for businesses who
              demand precision, innovation, and beautiful user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-shadow"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-purple-800 px-8 py-4 rounded-full font-semibold border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all"
              >
                About Us
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${
                      i % 2 === 0
                        ? "from-purple-400 to-purple-600"
                        : "from-orange-400 to-orange-500"
                    }`}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-900">50+ Projects</p>
                <p className="text-xs text-purple-600">Delivered worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Visual */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-full aspect-square max-w-lg mx-auto relative">
                  {/* Dashboard Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-700 rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="p-6">
                      <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-8 bg-purple-600/50 rounded-lg w-3/4" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 bg-purple-600/30 rounded-xl" />
                          <div className="h-24 bg-orange-500/30 rounded-xl" />
                        </div>
                        <div className="h-32 bg-purple-600/20 rounded-xl" />
                        <div className="flex gap-4">
                          <div className="h-16 flex-1 bg-purple-500/40 rounded-lg" />
                          <div className="h-16 flex-1 bg-purple-500/40 rounded-lg" />
                          <div className="h-16 flex-1 bg-purple-500/40 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-white">+</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-8 w-32 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center gap-2 px-4"
                  >
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Success</p>
                      <p className="text-sm font-bold text-purple-900">99.9%</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
