"use client";

import Image from "next/image";
import TypingText from "./TypingText";
import { motion } from "framer-motion";
import { FaReact, FaFigma, FaPython } from "react-icons/fa";
import { urlFor } from "@/lib/image";

type HeroProps = {
  about?: {
    name?: string;
    bio?: string;
    profileImage?: any;
  };
};

export default function Hero({ about }: HeroProps) {
  const profileImg = about?.profileImage
    ? urlFor(about.profileImage).width(400).height(400).url()
    : "/profile.jpg";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 overflow-hidden"
    >
      {/* ===== AURA GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,#9ec5f,transparent_45%),radial-gradient(circle_at_80%_70%,#f5a7d7,transparent_45%),linear-gradient(120deg,#1a1625,#241b35,#1a1625)]" />

      {/* GRAIN TEXTURE */}
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[url('/noise.png')] mix-blend-overlay" />

      {/* SLOW FLOATING AURA */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink-400/30 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] right-[-200px] w-[520px] h-[520px] rounded-full bg-blue-400/30 blur-[140px]"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== LEFT CONTENT ===== */}
      <div className="flex-1 space-y-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I&apos;m <br />
          <span className="bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent">
            {about?.name || "Umma Maharunnasa Mim"}
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-200">
          I&apos;m a <TypingText />
        </h2>

        <p className="text-gray-300 max-w-xl">
          {about?.bio ||
            "I am a passionate web developer and design enthusiast with a strong focus on UI/UX design and modern web technologies."}
        </p>

        <div className="flex gap-4">
          <a
            href="/Umma_Maharunnasa_Mim_CV.pdf"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-pink-300 px-6 py-3 rounded-lg text-white shadow-lg hover:scale-105 transition"
          >
            Download CV
          </a>

          <a 
           href="#contact"
          className="border border-white/30 px-6 py-3 rounded-lg text-white hover:bg-white/10 transition
          ">
            Contact
          </a>
        </div>
      </div>

      {/* ===== RIGHT IMAGE ===== */}
      <div className="flex-1 flex justify-center mt-14 md:mt-0 relative z-10">
        <div className="relative w-80 h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-purple-400 blur-3xl opacity-30 animate-pulse" />

          <div className="relative w-80 h-80 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center">
            <Image
              src={profileImg}
              alt="Profile"
              width={310}
              height={310}
              className="rounded-full object-cover z-10"
              priority
            />

            {/* FLOATING ICONS */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-4 right-6 text-blue-400 text-3xl"
            >
              <FaReact />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute bottom-6 left-6 text-pink-400 text-3xl"
            >
              <FaFigma />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-1/2 -left-6 text-yellow-400 text-3xl"
            >
              <FaPython />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
