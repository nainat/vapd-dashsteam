import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Blogs: React.FC = () => {
  const BlogCard: React.FC = () => (
    <div className="flex bg-white shadow-lg mb-6">
      <div className="w-1/2 bg-yellow-500 h-40" />
      <div className="w-1/2 p-4">
        <h3 className="font-semibold">Name of the Blogs</h3>
        <p className="text-sm text-gray-600">Information of the Blogs</p>
        <button className="mt-4 px-4 py-1 bg-yellow-500 text-white text-sm">Read more</button>
      </div>
    </div>
  );

  const Sidebar: React.FC = () => (
    <aside className="w-full lg:w-1/3 px-4 mt-10 lg:mt-0">
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {Array(4)
            .fill("name blog")
            .map((cat, i) => (
              <div key={i} className="bg-yellow-500 text-white text-center py-1">
                {cat}
              </div>
            ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Latest Posts</h3>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="mb-3">
              <h4 className="font-semibold text-sm">Name of the Blogs</h4>
              <p className="text-xs text-gray-600">Information of the Blogs</p>
            </div>
          ))}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Latest Posts</h3>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="mb-3">
              <div className="bg-yellow-500 h-24 w-full mb-2" />
              <h4 className="font-semibold text-sm">Name of the Blogs</h4>
              <p className="text-xs text-gray-600">Information of the Blogs</p>
            </div>
          ))}
      </div>
    </aside>
  );


const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-10 mt-10 text-sm">
    <div className="container mx-auto px-8">
      <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-6">
        {/* Footer Links */}
        <div className="flex flex-wrap gap-6">
          <a href="#">About</a>
          <a href="#">Contact us</a>
          <a href="#">FAQs</a>
          <a href="#">Terms and conditions</a>
          <a href="#">Cookie policy</a>
          <a href="#">Privacy</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl mt-4 lg:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-500">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-500">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-500">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <p className="text-center text-xs mt-4 text-gray-400">
        Copyright © 2025 - VAPD DASHSTREAM
      </p>
    </div>
  </footer>
);


  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <ul className="flex gap-6 text-sm text-gray-700">
          <li>Home</li>
          <li>Blogs</li>
          <li>Categories</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <button className="bg-yellow-500 text-white px-4 py-1 text-sm">
          Search
        </button>
      </nav>

      {/* Hero */}
      <div className="bg-yellow-500 text-white text-center py-20 text-3xl font-bold">
        OUR BLOGS
      </div>

      {/* Featured Blogs + Sidebar */}
      <div className="flex flex-col lg:flex-row px-8 py-10 gap-8">
        <main className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-2">Featured Blogs</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6" />
          <BlogCard />
          <BlogCard />
          <div className="text-center">
            <button className="border px-4 py-1 text-sm mt-4">See All →</button>
          </div>

          {/* Bottom Blog Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <div key={i}>
                  <div className="bg-yellow-500 h-32 mb-2" />
                  <h4 className="font-semibold text-sm">Name of the Blogs</h4>
                  <p className="text-xs text-gray-600">Information of the Blogs</p>
                </div>
              ))}
          </div>
        </main>

        <Sidebar />
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
