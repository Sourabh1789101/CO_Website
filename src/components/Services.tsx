"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Lock,
  ArrowUpRight,
  PrinterIcon,
  Database,
  Package,
  FileJson,
  Image,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: PrinterIcon,
    title: "Pre-Press",
    description:
      "High-quality pre-press services to ensure your designs are print-ready with precision and care.",
    features: ["File Preparation", "Color Management", "Proofing"],
  },
  {
    icon: Database,
    title: "Data Merge",
    description:
      "Efficient data merge services to combine and manage your data seamlessly for personalized and dynamic content.",
    features: ["Data Integration", "Template Design", "Automation"],
  },
  {
    icon: Package,
    title: "Packing & Cutting",
    description:
      "High-quality packing and cutting services to ensure your products are prepared with precision and care.",
    features: ["Custom Packaging", "Precision Cutting", "Die Cutting"],
  },
  {
    icon: FileJson,
    title: "XML First Approach",
    description:
      "Our XML First Approach ensures structured and efficient content management for seamless integration across platforms.",
    features: ["XML Structuring", "Content Management", "Platform Integration"],
  },
  {
    icon: Image,
    title: "Mockup Visualization",
    description:
      "Bring your designs to life with our mockup visualization services, providing realistic previews for better decision-making.",
    features: ["3D Mockups", "Realistic Rendering", "Interactive Previews"],
  },
  {
    icon: BookOpen,
    title: "Booklets & Journals",
    description:
      "High-quality booklets and journals production services to create professional and durable printed materials.",
    features: ["Design Layout", "Printing", "Binding"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-purple-950 mb-6">
            What we do <span className="text-purple-600">best.</span>
          </h2>
          <p className="text-xl text-purple-700/70 max-w-3xl mx-auto leading-relaxed">
            We focus on the intersection of design and technology to deliver
            high-performance digital solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" // Increased gap
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              // Added items-center, text-center, increased padding (p-10 lg:p-12)
              className="group relative bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-sm transition-all duration-300 border-2 border-transparent hover:border-purple-600 hover:shadow-2xl flex flex-col items-center text-center h-full"
            >
              {/* Icon Container - Bigger and Centered */}
              <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <service.icon className="w-10 h-10 text-purple-600" />
              </div>

              {/* Title - Larger Text */}
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                {service.title}
              </h3>

              {/* Description - Larger text, relaxed leading */}
              <p className="text-purple-700/80 mb-8 text-lg leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features - Centered List Items */}
              <ul className="space-y-3 mb-10 w-full flex flex-col items-center">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    // justify-center ensures the text and bullet are centered together
                    className="flex items-center justify-center gap-2 text-md text-purple-900 font-medium w-full"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link - Centered Button */}
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-orange-600 text-lg font-bold hover:text-orange-700 transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}