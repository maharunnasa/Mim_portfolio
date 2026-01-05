"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  title?: string;
  description?: string;
  tech?: string[];
  link?: string;
  image?: string;
  date?: string; // optional, YYYY-MM-DD
};

type ProjectsProps = {
  projects?: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-24 px-6 md:px-20 bg-[#241b2f]">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>
        <p className="text-center text-gray-400">No projects added yet</p>
      </section>
    );
  }

  // Sort newest to oldest based on date (if provided)
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });

  const displayProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-[#241b2f]">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.title || index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition"
          >
            {/* IMAGE AREA */}
            <div className="relative w-full h-56 overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title || "Project"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-purple-500/10 flex items-center justify-center text-purple-300">
                  No Preview
                </div>
              )}

              {/* OVERLAY */}
              {project.link && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    className="px-5 py-2 rounded-full bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {project.title || "Untitled Project"}
              </h3>

              {project.description && (
                <p className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
              )}

              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More / Show Less */}
      {projects.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-purple-600 transition"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
