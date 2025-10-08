import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactHome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  interface ApiResponse {
    error?: string;
    [key: string]: any;
  }

  const [popup, setPopup] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      const response: Response = await fetch("https://ecocarbonbackend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (response.ok) {
        setPopup({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
      } else {
        setPopup({ message: result.error || "Something went wrong!", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setPopup({ message: "Failed to send message", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup(null), 2000); // auto-hide after 2 seconds
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+91 XXX XXX XXX', '+91 XXX XXX XXX']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@ecocarbon.com', 'support@ecocarbon.com']
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      details: ['Konark Alpha, Sr No 50, 2, Nagar Road, Kharadi, Pune, Maharashtra']
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
  ];

  return (
    <div className="pt-16">

      {popup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg text-white ${popup.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
        >
          {popup.message}
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          We're here to help you achieve your sustainability goals. Contact us today to learn more about our carbon offset solutions.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Full Name *"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Email *"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Company"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Phone"
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="carbon-offsetting">Carbon Offsetting</option>
                  <option value="renewable-energy">Renewable Energy</option>
                  <option value="forest-conservation">Forest Conservation</option>
                  <option value="sustainability-consulting">Sustainability Consulting</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Message *"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-medium"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send className="ml-2 h-5 w-5" />}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHome;
