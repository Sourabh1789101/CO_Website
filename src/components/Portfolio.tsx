"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pre-Press ",
    category: "Pre Press",
    description:
      "High-quality pre-press services to ensure your designs are print-ready with precision and care.",
    tags: ["File Preparation", "Color Management", "Proofing"],
    gradient: "from-purple-600 to-purple-800",
  },
  {
    id: 2,
    title: "Data Merge",
    category: "Data Merge",
    description:
      "Efficient data merge services to combine and manage your data seamlessly for personalized and dynamic content.",
    tags: ["File Preparation", "Color Management", "Proofing"],
    gradient: "from-purple-700 to-purple-900",
  },
  {
    id: 3,
    title: "Packing & Cutting",
    category: "Packing & Cutting",
    description:
      "High-quality packing and cutting services to ensure your products are prepared with precision and care.",
    tags: ["File Preparation", "Color Management", "Proofing"],
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: 4,
    title: "XML First Approach",
    category: "XML First Approach",
    description:
      "Our XML First Approach ensures structured and efficient content management for seamless integration across platforms.",
    tags: ["File Preparation", "Color Management", "Proofing"],
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: 5,
    title: "Mockup Visualization",
    category: "Mockup Visualization",
    description:
      " Bring your designs to life with our mockup visualization services, providing realistic previews for better decision-making.",
    tags: ["File Preparation", "Color Management", "Proofing"],
    gradient: "from-purple-800 to-purple-950",
  },
  {
    id: 6,
    title: "Booklets & Journals",
    category: "Booklets & Journals",
    description:
      "High-quality booklets and journals tailored to your specifications, combining craftsmanship with creativity.",
    tags: ["File Preparation", "Color Management", "Proofing"],
    gradient: "from-orange-400 to-orange-500",
  },
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile App", "Full Stack"];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="py-24 lg:py-32 bg-gradient-to-b from-purple-950 to-purple-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-800/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-purple-800 text-purple-200 rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Projects
            </span>
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our
            expertise and creativity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/30"
                  : "bg-purple-800/50 text-purple-200 hover:bg-purple-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-purple-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-700/50 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Placeholder Design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <span className="text-white/50 text-2xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-orange-400 text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-200 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-800/50 text-purple-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-shadow"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
