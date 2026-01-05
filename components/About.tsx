"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-[#221933]"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            {aboutData.title}
          </h2>

          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {aboutData.description}
          </p>
        </motion.div>

        {/* Right highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl"
        >
          <ul className="space-y-4">
            {aboutData.highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span className="text-purple-400 text-xl">✔</span>
                <span className="text-gray-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
