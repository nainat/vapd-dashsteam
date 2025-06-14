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
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  setFormData({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
};


  return (
    <div
  className="min-h-screen text-black"
  style={{
    backgroundColor: '#f5f5f5',
    backgroundImage: `
      linear-gradient(to right, #e0e0e0 1px, transparent 1px),
      linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  }}
>
      
      {/* Header (unchanged) */}
      <header className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/logod.jpg" alt="Logo" className="w-44 h-auto" />
          <nav className="flex space-x-8">
            <Link to="/" className="text-black hover:text-gray-600">Home</Link>
            <Link to="/blogs" className="text-black hover:text-gray-600">Blogs</Link>
            <Link to="/about" className="text-black hover:text-gray-600">About us</Link>
            <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
          </nav>
          <button className="bg-gray-600 text-white px-4 py-2 text-sm">Search</button>
        </div>
      </header>

      {/* Header Section */}
      <div
  className="pt-32 pb-20 mb-20 bg-gradient-to-b from-gray-900 to-[#0A0A0A] bg-center bg-cover bg-no-repeat relative"
  style={{ backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/1010/246/545/2015-bmw-i8-car-cool-side-view-grey-sports-coupe-wallpaper-preview.jpg')` }}
>
  <div className="absolute inset-0 bg-black/60"></div> {/* Optional dark overlay */}
  <div className="relative max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-5xl text-white font-bold mb-6">Contact Us</h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      Have questions about automotive culture or our services? Reach out - we'd love to hear from you.
    </p>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="bg-gray-800/70 p-8 rounded-xl">
              <h2 className="text-white text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Our Headquarters", content: "Basudhara Complex, South Collectoriate Road,\nOpposite Reliance Smart Point and Near Collectorate\nBuxar, Bihar, 802103" },
                  { icon: Mail, title: "Email Us", content: "vapddashsteam@gmail.com", link: "mailto:vapddashsteam@gmail.com" },
                  { icon: Phone, title: "Call Us", content: "+91 7488928997", link: "tel:+91 7488928997" },
                  { icon: Clock, title: "Business Hours", content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed" },
                ].map(({ icon: Icon, title, content, link }, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-600/20 rounded-full">
                      <Icon className="text-gray-300" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-white whitespace-pre-line">
                        {link ? (
                          <a href={link} className="hover:text-gray-300 transition-colors">{content}</a>
                        ) : content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
          <div className="bg-gradient-to-br from-white to-black p-8 rounded-xl border border-gray-700/30">
  <h2 className="text-2xl font-bold mb-4">Social Media</h2>
  <p className="text-gray-800 mb-6">Connect with us for the latest updates</p>
  <div className="space-y-4">
    {[
      {
        icon: FaFacebook,
        label: "Facebook",
        url: "https://www.facebook.com/DashSteamVAP",
      },
      {
        icon: FaInstagram,
        label: "Instagram",
        url: "https://www.instagram.com/dashsteamvap/",
      },
      {
        icon: FaLinkedin,
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dashsteamvap/",
      },
      {
        icon: FaThreads,
        label: "Threads",
        url: "https://www.threads.com/@dashsteamvap",
      },
      {
        icon: FaWhatsapp,
        label: "WhatsApp",
        url: "https://wa.me/7488928997", // Replace with actual WhatsApp number link
      },
      {
        icon: FaXTwitter,
        label: "X (Twitter)",
        url: "https://x.com/DashSteamVAP",
      },
    ].map(({ icon: Icon, label, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-black hover:text-gray-200 transition"
      >
        <Icon className="text-2xl text-black mr-2" />
        {label}
      </a>
    ))}
  </div>
</div>
  
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/70 p-8 rounded-xl">
            <h2 className="text-2xl text-white font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { id: "name", type: "text", label: "Full Name" },
                  { id: "email", type: "email", label: "Email Address" },
                ].map(({ id, type, label }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm text-white font-medium mb-2">{label}</label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A]/70 border border-gray-600 rounded-lg py-3 px-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition-all"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm  text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A]/70 border border-gray-600 rounded-lg py-3 px-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm  text-white font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A]/70 border border-gray-600 rounded-lg py-3 px-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium w-full transition-all duration-300"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gray-800/70 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660045.034077874!2d83.76184445!3d25.096074199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d0a09a89a7cfd%3A0x51152a1f9643e9e0!2sBihar%2C%20India!5e0!3m2!1sen!2sjp!4v1710000000000!5m2!1sen!2sjp"
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

      {/* Footer (unchanged) */}
    <footer className="bg-gray-900 text-white py-10 mt-10 text-sm">
  <div className="container mx-auto px-8">
    <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-6">
      <div className="flex flex-wrap gap-6">
        <a href="#">About</a>
        <a href="#">Contact us</a>
        <a href="#">FAQs</a>
        <a href="#">Terms and conditions</a>
        <a href="#">Cookie policy</a>
        <a href="#">Privacy</a>
      </div>
      <div className="flex gap-4 text-xl mt-4 lg:mt-0">
        <a href="https://www.facebook.com/DashSteamVAP" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/dashsteamvap/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Instagram />
        </a>
        <a href="https://x.com/DashSteamVAP" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/company/dashsteamvap/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Linkedin />
        </a>
      </div>
    </div>
    <p className="text-center text-xs mt-4 text-gray-400">
      Copyright © 2025 - VAPD DASHSTREAM
    </p>
  </div>
</footer>

    </div>
  );
}
