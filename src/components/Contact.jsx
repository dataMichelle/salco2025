import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import WhatsApp from "./WhatsApp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consultingServices: false,
    products: false,
    locale: "",
  });

  useEffect(() => {
    // Get the user's locale and set it in the form data
    const userLocale = navigator.language || navigator.userLanguage;
    setFormData((prevData) => ({ ...prevData, locale: userLocale }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    console.log(formData); // You can replace this with your form submission logic
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      consultingServices: false,
      products: false,
      locale: formData.locale,
    });
  };

  return (
    <main className="bg-gray-50 min-h-screen p-8 relative">
      <section className="container mx-auto py-12">
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          {/* <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are here to help you with any questions or inquiries you may
            have. Please feel free to reach out to us using the form below.
          </p> */}
          <div className="absolute top-0 right-0 flex flex-col items-end text-gray-800 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-2xl mr-2" />
              <span className="text-lg">979-224-5181</span>
            </div>
            <WhatsApp />
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Your message here..."
              rows="5"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Services Interested In
            </label>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="consultingServices"
                name="consultingServices"
                checked={formData.consultingServices}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="consultingServices" className="text-gray-700">
                Consulting Services
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="products"
                name="products"
                checked={formData.products}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="products" className="text-gray-700">
                Products
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
