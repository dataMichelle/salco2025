import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "9792245181"; // Replace with your phone number
  const message = "Hello, I would like to inquire about your services."; // Default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-green-500"
    >
      <FaWhatsapp className="text-2xl mr-2" />
      <span className="text-lg">Chat with us on WhatsApp</span>
    </a>
  );
};

export default WhatsApp;
