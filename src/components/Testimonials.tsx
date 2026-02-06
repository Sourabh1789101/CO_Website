"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "Codetta Digital transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations. The team's communication was impeccable throughout the project.",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Director, InnovateCo",
    content:
      "Working with Codetta Digital was a game-changer. They delivered our platform ahead of schedule with features we didn't even know we needed. Truly outstanding work!",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, GreenLeaf",
    content:
      "The team at Codetta Digital doesn't just build software – they build partnerships. Their strategic approach helped us scale our business exponentially.",
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, FinanceHub",
    content:
      "Exceptional quality and professionalism. Codetta Digital understood our complex requirements and delivered a solution that our users love.",
    avatar: "DK",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-6 border border-purple-100">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-950">
            What our clients{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
              say.
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Slider Area */}
        <div className="relative max-w-4xl mx-auto mt-10">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-16 shadow-2xl shadow-purple-900/5 border border-purple-100"
          >
            {/* Decorative Quote Icon - MOVED TO TOP LEFT */}
            {/* Changed from left-1/2 to left-6 md:left-12 */}
            <div className="absolute -top-10 left-6 md:left-12 z-20">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 rotate-3 ring-4 ring-white">
                <Quote className="w-10 h-10 text-white fill-white/20" />
              </div>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden md:flex absolute inset-0 items-center justify-between px-0 lg:-px-8 pointer-events-none z-10">
              <button
                onClick={prev}
                className="pointer-events-auto -ml-8 lg:-ml-12 w-14 h-14 rounded-full bg-white shadow-xl shadow-purple-900/5 border border-purple-50 flex items-center justify-center text-purple-900 hover:bg-purple-50 hover:scale-110 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={next}
                className="pointer-events-auto -mr-8 lg:-mr-12 w-14 h-14 rounded-full bg-white shadow-xl shadow-purple-900/5 border border-purple-50 flex items-center justify-center text-purple-900 hover:bg-purple-50 hover:scale-110 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Content Slider */}
            <div className="mt-8 md:mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  <p className="text-xl md:text-2xl text-purple-900 mb-10 leading-relaxed font-medium max-w-2xl">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* User Profile */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md ring-4 ring-purple-50">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-purple-950">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-purple-500 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-700 hover:bg-purple-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-700 hover:bg-purple-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-purple-200 hover:bg-purple-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}