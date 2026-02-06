"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Coffee, Rocket } from "lucide-react";

const stats = [
  { icon: Award, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "5000+", label: "Cups of Coffee" },
  { icon: Rocket, value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-linear-to-b from-purple-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(147,51,234,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-linear-to-br from-purple-600 to-purple-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">CD</span>
                    </div>
                    <p className="text-white/80 text-lg">Codetta Digital</p>
                    <p className="text-white text-xl font-semibold mt-2">
                      Crafting Digital Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 right-0 lg:-right-8 bg-white rounded-2xl p-4 sm:p-6 shadow-2xl max-w-70 sm:max-w-xs"
              >
                <p className="text-purple-700 font-medium mb-2">Our Mission</p>
                <p className="text-purple-950 text-lg font-semibold">
                  Empowering businesses through innovative digital solutions
                </p>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-400 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-purple-950 mb-6 line-decoration">
              We create digital experiences that{" "}
              <span className="gradient-text">matter.</span>
            </h2>

            <p className="text-lg text-purple-700 mb-6">
              At Codetta Digital, we believe in the power of thoughtful design
              and robust technology. Our team of passionate developers and
              designers work together to bring your vision to life.
            </p>

            <p className="text-purple-600 mb-8">
              Founded with a commitment to excellence, we&apos;ve helped startups and
              enterprises alike transform their digital presence. Our approach
              combines creativity with technical expertise to deliver solutions
              that not only look beautiful but perform exceptionally.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-950">
                      {stat.value}
                    </p>
                    <p className="text-sm text-purple-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-shadow"
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
