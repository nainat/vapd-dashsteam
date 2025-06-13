import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
    FaWhatsapp,
    FaThreads
  } from 'react-icons/fa6';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation - Consistent with other pages */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-[#00A3FF] font-bold text-2xl">VAP'D DASHSTEAM </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-[#00A3FF] transition-colors">Home</Link>
              <Link to="/blogs" className="hover:text-[#00A3FF] transition-colors">Blogs</Link>
              <Link to="/about" className="hover:text-[#00A3FF] transition-colors">About</Link>
              <Link to="/contact" className="text-[#00A3FF] transition-colors">Contact</Link>
            </div>

           
          </div>
        </div>
      </nav>

      {/* Contact Header */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-[#101D42] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about automotive culture or our services? Reach out - we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#101D42]/50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#00A3FF]/10 rounded-full">
                    <MapPin className="text-[#00A3FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Headquarters</h3>
                    <p className="text-gray-400">Basudhara Complex, South Collectoriate Road,<br/> Opposite Reliance Smart Point and Near Collectorate<br />Buxar, Bihar, 802103</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#00A3FF]/10 rounded-full">
                    <Mail className="text-[#00A3FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-400">
                      <a href="mailto:vapddashsteam@gmail.com" className="hover:text-[#00A3FF] transition-colors">
                      vapddashsteam@gmail.com
                      </a>
                    <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#00A3FF]/10 rounded-full">
                    <Phone className="text-[#00A3FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-400">
                      <a href="tel:+91 9470716180" className="hover:text-[#00A3FF] transition-colors">
                      +91 9470716180</a>
                      <br />
                    
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#00A3FF]/10 rounded-full">
                    <Clock className="text-[#00A3FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00A3FF]/10 to-[#101D42] p-8 rounded-xl border border-[#00A3FF]/20">
  <h2 className="text-2xl font-bold mb-4">Social Media</h2>
  <p className="text-gray-400 mb-6">Connect with us for the latest updates</p>

  <div className="bg-gradient-to-br from-[#00A3FF]/10 to-[#101D42] p-8 rounded-xl border border-[#00A3FF]/20">
  <h2 className="text-2xl font-bold mb-4">Social Media</h2>
  <p className="text-gray-400 mb-6">Connect with us for the latest updates</p>

  <div className="space-y-4">
    <a
      href="https://www.facebook.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-blue-500 hover:text-blue-600 transition"
    >
      <FaFacebook className="text-2xl mr-2" />
      Facebook
    </a>

    <a
      href="https://www.instagram.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-pink-500 hover:text-pink-600 transition"
    >
      <FaInstagram className="text-2xl mr-2" />
      Instagram
    </a>

    <a
      href="https://www.linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-blue-400 hover:text-blue-500 transition"
    >
      <FaLinkedin className="text-2xl mr-2" />
      LinkedIn
    </a>

    <a
      href="https://www.threads.net/@yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-black hover:text-gray-700 transition"
    >
      <FaThreads className="text-2xl mr-2" />
      Threads
    </a>

    <a
      href="https://wa.me/yourphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-green-500 hover:text-green-600 transition"
    >
      <FaWhatsapp className="text-2xl mr-2" />
      WhatsApp
    </a>

    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-black hover:text-gray-700 transition"
    >
      <FaXTwitter className="text-2xl mr-2" />
      X (Twitter)
    </a>
  </div>
</div>

</div>

          </div>

          {/* Contact Form */}
          <div className="bg-[#101D42]/50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A0A]/70 border border-[#00A3FF]/30 rounded-lg py-3 px-4 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/50 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A0A]/70 border border-[#00A3FF]/30 rounded-lg py-3 px-4 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/50 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A]/70 border border-[#00A3FF]/30 rounded-lg py-3 px-4 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/50 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A]/70 border border-[#00A3FF]/30 rounded-lg py-3 px-4 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]/50 outline-none transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-[#00A3FF] hover:bg-[#00A3FF]/80 text-white px-6 py-3 rounded-lg font-medium w-full transition-all duration-300"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-[#101D42]/50 rounded-xl overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660045.034077874!2d83.76184445!3d25.096074199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d0a09a89a7cfd%3A0x51152a1f9643e9e0!2sBihar%2C%20India!5e0!3m2!1sen!2sjp!4v1710000000000!5m2!1sen!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-[50%] contrast-125"
          ></iframe>
        </div>
      </div>

      {/* Footer - Consistent with other pages */}
      <footer className="bg-[#0A0A0A] py-12 border-t border-white/10">
        {/* ... same footer content ... */}
      </footer>
    </div>
  );
}