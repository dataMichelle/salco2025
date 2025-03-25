import React from "react";
import { motion } from "framer-motion";
import Expertise from "./Expertise";
import GlobalPresence from "./GlobalPresence";

const staggerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* About Section */}
      <section className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About{" "}
          <span className="text-blue-600">
            Salco Global Solutions LLC (SGS)
          </span>
        </h1>

        {/* Section 1 - Left Aligned */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVariants}
        >
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>SALCO GLOBAL SOLUTIONS LLC (SGS)</strong> was established
              in 2011 with the mission of delivering{" "}
              <strong>turn-key solutions</strong> to businesses navigating the
              complexities of international markets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With extensive experience in both{" "}
              <strong>domestic and global commerce</strong>, SGS specializes in
              helping clients overcome{" "}
              <strong>
                cultural barriers, competitive challenges, and complex
                negotiations
              </strong>{" "}
              in today’s fast-paced, interconnected economy.
            </p>
          </div>
          <motion.img
            src="/images/mission.jpg"
            alt="SGS Mission"
            className="md:w-1/2 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6">
        <Expertise />
      </section>

      {/* Global Presence Section */}
      <section className="container mx-auto py-12 px-6">
        <GlobalPresence />
      </section>
    </main>
  );
};

export default About;
