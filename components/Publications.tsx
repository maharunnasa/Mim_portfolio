"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Publication = {
  title: string;
  publicationType: "journal" | "conference";
  source: string;
  status: "accepted" | "published";
  link?: string;
  date?: string;
};

type PublicationsProps = {
  data?: Publication[];
};

export default function Publications({ data }: PublicationsProps) {
  const [showAll, setShowAll] = useState(false);

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <section id="publications" className="py-24 px-6 md:px-20 bg-[#2f243f]">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Publications
        </h2>
        <p className="text-center text-gray-400">No publications added yet</p>
      </section>
    );
  }

  // Map CMS data to component-friendly format
  const mappedData: Publication[] = data.map((item: any) => ({
    title: item.title || "Untitled",
    publicationType:
      item.publicationType?.toLowerCase() === "conference" ? "conference" : "journal",
    source: item.source || "",
    status:
      item.status?.toLowerCase() === "published" ? "published" : "accepted",
    link: item.link || undefined,
    date: item.date || undefined,
  }));

  // Sort newest first
  const sorted = [...mappedData].sort((a, b) => {
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
    return 0;
  });

  const display = showAll ? sorted : sorted.slice(0, 4);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  };

  return (
    <section id="publications" className="py-24 px-6 md:px-20 bg-[#2f243f]">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Publications
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {display.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-[#1c142b] border border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all"
          >
            {/* Title + Source */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {pub.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                  <span>{pub.source}</span>
                  <span className="px-1">|</span>
                  <span className="capitalize">
                    {pub.publicationType === "journal" ? "Journal" : "Conference"}
                  </span>
                  {pub.date && (
                    <>
                      <span className="px-1">|</span>
                      <span>{formatDate(pub.date)}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Status + Link */}
              <div className="flex items-center gap-3 flex-wrap mt-2 md:mt-0">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pub.status === "published"
                      ? "bg-green-500/30 text-green-100"
                      : "bg-yellow-500/30 text-yellow-100"
                  }`}
                >
                  {pub.status === "published" ? "Published" : "Accepted"}
                </span>

                {pub.status === "published" && pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-purple-300 hover:text-purple-400 underline transition"
                  >
                    View Paper →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {mappedData.length > 4 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-purple-600 transition"
          >
            {showAll ? "Show Less" : `See More (${mappedData.length - 4})`}
          </button>
        </div>
      )}
    </section>
  );
}
