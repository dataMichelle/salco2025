import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaHandshake, FaRocket } from "react-icons/fa";

const services = [
  {
    title: "Business Development",
    icon: <FaChartLine className="text-blue-600 text-4xl mb-3" />,
    features: [
      "Strategic Planning & Execution",
      "Product Development",
      "International Trade",
      "Strategic Alliances",
    ],
  },
  {
    title: "Sales & Marketing",
    icon: <FaHandshake className="text-blue-600 text-4xl mb-3" />,
    features: [
      "Customer Retention & Growth",
      "Tactical Negotiations & Deal Structuring",
      "Sales Representation",
    ],
  },
  {
    title: "Tactical & Startup Support",
    icon: <FaRocket className="text-blue-600 text-4xl mb-3" />,
    features: [
      "International Logistics",
      "Joint Ventures and Contracts",
      "Technical & Quality Assurance",
      "Global Operational Assistance",
    ],
  },
];

const Services = () => {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="container mx-auto py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Consulting Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
          <strong>Salco Global Solutions</strong> customizes its approach to
          every solution because
          <strong>
            {" "}
            no international business challenge is one-size-fits-all
          </strong>
          . Whether you need **temporary assistance**, **international
          strategy**, or **faster market entry**, our experienced team ensures
          your success.
        </p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              {/* Left-Aligned Features */}
              <ul className="list-disc text-left text-gray-600 mt-3 pl-5 w-full">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action (CTA) */}
        <motion.div
          className="text-center mt-16 bg-blue-600 text-white py-10 px-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Ready to expand your business globally? Connect with our experts and
            get a tailored strategy for your international success.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
