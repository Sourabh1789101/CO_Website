"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cog, CheckCircle } from "lucide-react";
interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const processSteps: Step[] = [
  {
    number: 1,
    title: "Raw Data",
    description: "Collect and organize your raw data from various sources for processing.",
    icon: Database,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: 2,
    title: "Engineering Design",
    description: "Transform data into structured designs with precision and expertise.",
    icon: Cog,
    color: "from-purple-500 to-purple-600",
  },
  {
    number: 3,
    title: "Output",
    description: "Deliver optimized results ready for deployment and implementation.",
    icon: CheckCircle,
    color: "from-orange-500 to-orange-600",
  },
];
export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-purple-50/30 to-white" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 mb-4">
            How do we{" "}
            <span className="gradient-text">do it?</span>
          </h2>
          <p className="text-base sm:text-lg text-purple-600 max-w-xl mx-auto leading-relaxed px-4">
            Our streamlined production workflow ensures quality at speed.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full" />

            {/* Steps */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {processSteps.map((step: Step, index: number) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pt-6"
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 text-center">
                    {/* Number Badge */}
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-linear-to-br ${step.color} text-white font-bold text-lg flex items-center justify-center shadow-lg ring-4 ring-white z-10`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto mt-4 mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-purple-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-purple-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-purple-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="md:hidden">
          <div className="space-y-6">
            {processSteps.map((step: Step, index: number) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-purple-100">
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div
                      className={`w-10 h-10 rounded-full bg-linear-to-br ${step.color} text-white font-bold text-sm flex items-center justify-center shadow-md shrink-0`}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                          <step.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-bold text-purple-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-purple-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-0.5 h-6 bg-linear-to-b from-purple-400 to-purple-200 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
