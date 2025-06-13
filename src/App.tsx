import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredPosts = [
    {
      title: "The Evolution of JDM Culture",
      excerpt: "Exploring the rich history of Japanese domestic market cars...",
      image: "https://images.pexels.com/photos/12206441/pexels-photo-12206441.jpeg",
      category: "Culture"
    },
    {
      title: "Ultimate Guide to Engine Tuning",
      excerpt: "Master the art of performance tuning with our comprehensive guide...",
      image: "https://images.pexels.com/photos/8985530/pexels-photo-8985530.jpeg",
      category: "Technical"
    },
    {
      title: "Future of Electric Performance",
      excerpt: "How EV technology is revolutionizing the performance car segment...",
      image: "https://images.pexels.com/photos/7516509/pexels-photo-7516509.jpeg",
      category: "Innovation"
    }
  ];

  const recentPosts = [
    {
      title: "Track Day Essentials",
      date: "Mar 15, 2024",
      image: "https://th.bing.com/th/id/OIP._ZXIOGjkE4qWAwHQBJDwwQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      title: "Maintenance Tips for Turbocharged Engines",
      date: "Mar 14, 2024",
      image:" https://th.bing.com/th/id/OIP.S7J0B52RDx2kA0b9CFsbQgHaEO?w=320&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      title: "Best Aftermarket Wheels of 2024",
      date: "Mar 13, 2024",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
    },
    {
      title: "Drift Culture: Past and Present",
      date: "Mar 12, 2024",
      image: "https://th.bing.com/th/id/OIP.aTnZxSz0xkv8UAZyiiKQWQHaDt?w=306&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Logo added here
              <img 
                src="./logo.png"
                alt="VAP'D Logo" 
                className="h-10 mr-3" 
              /> */}
              <span className="text-[#00A3FF] font-bold text-2xl">VAP'D DASHSTEAM </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-[#00A3FF] transition-colors">Home</Link>
              <Link to="/newblog" className="hover:text-[#00A3FF] transition-colors">Blogs</Link>
              <Link to="/about" className="hover:text-[#00A3FF] transition-colors">About</Link>
              <Link to="/contact" className="hover:text-[#00A3FF] transition-colors">Contact</Link>
              <button className="p-2 hover:bg-[#101D42] rounded-full transition-colors">
                <Search size={20} />
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'h-64' : 'h-0'} overflow-hidden bg-[#101D42]`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 hover:bg-[#00A3FF]/10 rounded-md">Home</Link>
            <Link to="/blogs" className="block px-3 py-2 hover:bg-[#00A3FF]/10 rounded-md">Blogs</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-[#00A3FF]/10 rounded-md">About</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-[#00A3FF]/10 rounded-md">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Improved car visibility */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/30 via-[#0A0A0A]/70 to-[#101D42]/50">
          <img
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
            alt="Hero"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.8)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00A3FF]">
              VAP'D DASHSTEAM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your premium destination for automotive culture, performance, and lifestyle
            </p>
            <Link 
              to="/blogs" 
              className="relative overflow-hidden group bg-[#00A3FF] hover:bg-[#00A3FF]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Explore Articles</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00A3FF] to-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Posts */}

      <section className="py-20 bg-[#101D42]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#00A3FF] rounded-full text-sm mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-[#00A3FF] text-sm mb-2">{post.date}</p>
                <h3 className="font-semibold group-hover:text-[#00A3FF] transition-colors">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#101D42]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest automotive news, reviews, and exclusive content
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-[#00A3FF]/30 focus:border-[#00A3FF] outline-none"
            />
            <button className="bg-[#00A3FF] hover:bg-[#00A3FF]/80 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Subscribe <ChevronRight size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-[#00A3FF] font-bold text-2xl block mb-4">VAP'D</span>
              <p className="text-gray-400">
                Your ultimate destination for automotive enthusiasm and culture
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00A3FF]">Home</a></li>
                <li><a href="#" className="hover:text-[#00A3FF]">Blogs</a></li>
                <li><a href="#" className="hover:text-[#00A3FF]">About</a></li>
                <li><a href="#" className="hover:text-[#00A3FF]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00A3FF]">Reviews</a></li>
                <li><a href="#" className="hover:text-[#00A3FF]">Modifications</a></li>
                <li><a href="#" className="hover:text-[#00A3FF]">Culture</a></li>
                <li><a href="#" className="hover:text-[#00A3FF]">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#00A3FF] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00A3FF] transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00A3FF] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00A3FF] transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-white/10">
            <p>&copy; 2024 VAP'D DASHSTEAM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;