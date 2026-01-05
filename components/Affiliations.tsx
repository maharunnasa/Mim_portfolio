"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Affiliation = {
  name: string;
  position?: string;
  place?: string;
  sessionYear?: string;
  logo?: string;
};

type AffiliationsProps = {
  data?: Affiliation[];
};

export default function Affiliations({ data }: AffiliationsProps) {
  const [showAll, setShowAll] = useState(false);

  if (!Array.isArray(data) || data.length === 0) return null;

  // Show first 3 items if showAll is false
  const itemsToShow = showAll ? data : data.slice(0, 3);

  return (
    <section
      id="affiliations"
      className="py-24 px-6 md:px-20 bg-[#2e233a]"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-20">
        Affiliations
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {itemsToShow.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            {item.logo ? (
              <div className="relative w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={item.logo}
                  alt={item.name ?? "Affiliation"}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-xl">
                {(item.name && item.name.length > 0 ? item.name.charAt(0) : "A")}
              </div>
            )}

            <h3 className="text-lg font-semibold text-white">
              {item.name}
            </h3>

            {item.position && (
              <p className="text-purple-400 text-sm mt-1">
                {item.position}
              </p>
            )}

            {item.place && (
              <p className="text-gray-300 text-sm mt-2">
                {item.place}
              </p>
            )}

            {item.sessionYear && (
              <p className="text-gray-400 text-xs mt-2">
                {item.sessionYear}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* See More button */}
      {data.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:bg-purple-600 transition"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
