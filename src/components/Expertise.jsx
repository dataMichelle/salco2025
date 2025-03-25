import React from "react";
import { motion } from "framer-motion";

const expertiseItems = [
  { title: "Sales & Marketing", icon: "📈" },
  { title: "Business Development", icon: "🏢" },
  { title: "International Trade", icon: "🌍" },
  { title: "Global Operations", icon: "🔧" },
  { title: "Technical Support", icon: "💡" },
];

const Expertise = () => {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {expertiseItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center text-center w-[220px] h-[150px]"
            initial={{ x: index % 2 === 0 ? "-100vw" : "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Expertise;
