"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Certification = {
  name?: string;
  organization?: string;
  year?: string;
  fileUrl?: string;
  fileType?: string;
};

type CertificationsProps = {
  data?: Certification[];
};

export default function Certifications({ data }: CertificationsProps) {
  const [showAll, setShowAll] = useState(false);

  if (!Array.isArray(data) || data.length === 0) return null;

  const visibleData = showAll ? data : data.slice(0, 3);

  return (
    <section
      id="certifications"
      className="py-24 px-6 md:px-20 bg-[#2b1f38]"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {visibleData.map((cert, index) => {
          const isImage = cert.fileType?.startsWith("image");

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-[1.03] transition"
            >
              {/* IMAGE */}
              <div className="w-full h-30 rounded-lg bg-black/20 flex items-center justify-center mb-4 overflow-hidden">
                {isImage && cert.fileUrl ? (
                  <img
                    src={cert.fileUrl}
                    alt={cert.name || "Certificate"}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <span className="text-purple-300 text-sm">
                    Certificate File
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="text-center flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {cert.name}
                </h3>

                {cert.organization && (
                  <p className="text-purple-400 mt-1">
                    {cert.organization}
                  </p>
                )}

                {cert.year && (
                  <p className="text-gray-400 text-sm mt-1">
                    {cert.year}
                  </p>
                )}
              </div>

              {cert.fileUrl && (
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  className="mt-5 text-sm text-purple-300 border border-purple-400/40 px-4 py-2 rounded-full hover:bg-purple-400/10 transition text-center"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* SEE MORE */}
      {data.length > 3 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-sm rounded-full border border-purple-400/40 text-purple-300 bg-gradient-to-r from-purple-500 to-pink-500"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
