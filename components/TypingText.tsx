"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <span className="text-purple-400 font-semibold">
      <Typewriter
        words={[
          "Web Developer",
          "UI/UX Designer",
          "Deep Learning Researcher",
          "Frontend Designer",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  );
}
