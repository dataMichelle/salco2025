import React from "react";
import { motion } from "framer-motion";
import {
  FaRoad,
  FaPaintRoller,
  FaTools,
  FaShieldAlt,
  FaClipboardCheck,
  FaCogs,
  FaTruck,
} from "react-icons/fa";

const products = [
  {
    title: "Pavement Markers",
    icon: <FaRoad className="text-blue-600 text-4xl mb-3" />,
    description: [
      "Durable retroreflective markers for enhanced night visibility",
      "Available in ceramic, plastic, and raised pavement options",
      "Designed for high-impact resistance and weather durability",
    ],
  },
  {
    title: "Glass Beads",
    icon: <FaShieldAlt className="text-blue-600 text-4xl mb-3" />,
    description: [
      "High-performance reflective glass beads for traffic paint and thermoplastics",
      "Improves night-time road visibility for enhanced safety",
      "Available in Type I, II, and III gradations",
    ],
  },
  {
    title: "Traffic Paint",
    icon: <FaPaintRoller className="text-blue-600 text-4xl mb-3" />,
    description: [
      "Water-based, solvent-based, and thermoplastic formulations",
      "Fast-drying, high-durability coatings for roadway and airport applications",
      "Compliant with federal and state DOT standards",
    ],
  },
  {
    title: "Plural Component Marking Systems",
    icon: <FaClipboardCheck className="text-blue-600 text-4xl mb-3" />,
    description: [
      "High-performance polyurea and methyl methacrylate (MMA) coatings",
      "Exceptional durability, chemical resistance, and reflectivity",
      "Ideal for high-traffic areas and long-life markings",
    ],
  },
  {
    title: "Adhesives & Marking Products",
    icon: <FaCogs className="text-blue-600 text-4xl mb-3" />,
    description: [
      "Epoxy and bitumen adhesives for road marking applications",
      "Thermoplastic and preformed tape solutions for quick and durable installations",
      "Specialized tack coat primers for increased adhesion",
    ],
  },
  {
    title: "Delineators & Plastic Products",
    icon: <FaShieldAlt className="text-blue-600 text-4xl mb-3" />,
    description: [
      "Flexible and rigid delineators for enhanced roadway visibility",
      "Impact-resistant channelizers, barricades, and cones",
      "Available in various colors, heights, and mounting options",
    ],
  },
  {
    title: "Equipment & Custom Solutions",
    icon: <FaTruck className="text-blue-600 text-4xl mb-3" />,
    description: [
      "Specialized pavement marking equipment for paint and thermoplastic applications",
      "Custom-ordered traffic control and road safety solutions tailored to your project specifications",
      "Installation tools and accessories for seamless product application",
    ],
  },
];

const Products = () => {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="container mx-auto py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
          At <strong>Salco Global Solutions (SGS)</strong>, we specialize in
          sourcing and supplying
          <strong> high-quality highway safety products</strong> designed to
          enhance roadway visibility, durability, and overall traffic safety.
          Whether you require{" "}
          <strong>standard materials or custom solutions</strong>, our extensive
          product range ensures you get the best fit for your specific needs.
        </p>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.05 }}
            >
              {product.icon}
              <h3 className="text-xl font-semibold text-gray-900">
                {product.title}
              </h3>
              {/* Left-Aligned Bullet Points */}
              <ul className="list-disc text-left text-gray-600 mt-3 pl-5 w-full">
                {product.description.map((desc, i) => (
                  <li key={i} className="text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Products;
