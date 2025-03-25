import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-400 text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          About Salco Global Solutions LLC (SGS)
        </h1>
        <p className="text-lg opacity-90 leading-relaxed">
          Empowering businesses with{" "}
          <strong>innovative global solutions</strong>,{" "}
          <strong>market expansion</strong>, and{" "}
          <strong>advanced technical expertise</strong>.
        </p>
        <p className="text-lg opacity-90 leading-relaxed mt-4">
          With a strong reputation for{" "}
          <strong>strategic international expansion</strong>, SGS specializes in{" "}
          <strong>
            global procurement, sales, marketing, and business development
          </strong>
          .
        </p>
        <p className="text-lg opacity-90 leading-relaxed mt-4">
          The company has conducted business negotiations across{" "}
          <strong>35+ countries</strong>, enabling clients to access{" "}
          <strong>new markets</strong> with confidence and efficiency.
        </p>
      </div>
    </section>
  );
};

export default Hero;
