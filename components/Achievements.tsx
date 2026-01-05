"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Achievement = {
  title: string;
  description?: string;
  date: string; // YYYY-MM-DD
  image?: string;
};

type AchievementsProps = {
  data?: Achievement[];
};

export default function Achievements({ data }: AchievementsProps) {
  const [showAll, setShowAll] = useState(false);

  if (!Array.isArray(data) || data.length === 0) return null;

  // 🔥 Sort by FULL date (new → old)
  const sortedData = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const visibleData = showAll ? sortedData : sortedData.slice(0, 3);

  return (
    <section id="achievements" className="py-24 px-6 md:px-20 bg-[#241b2f]">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Achievements
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* center line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-purple-500/30 -translate-x-1/2" />

        <div className="space-y-16">
          {visibleData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const dateObj = new Date(item.date);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } justify-center`}
              >
                {/* dot */}
                <span className="hidden md:block absolute left-1/2 top-10 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2 z-10" />

                {/* card */}
                <div className="w-full md:w-[45%] bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  {/* image */}
                  {item.image && (
                    <div className="relative h-44 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* content */}
                  <div className="p-6">
                    <span className="text-sm text-purple-400 font-medium">
                      {dateObj.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>

                    <h3 className="text-xl font-semibold text-white mt-1">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More */}
        {data.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-purple-600 transition"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
