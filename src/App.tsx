import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
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
      image: "https://th.bing.com/th/id/OIP._ZXIOGjkE4qWAwHQBJDwwQHaE8?w=264&h=180"
    },
    {
      title: "Maintenance Tips for Turbocharged Engines",
      date: "Mar 14, 2024",
      image: "https://th.bing.com/th/id/OIP.S7J0B52RDx2kA0b9CFsbQgHaEO"
    },
    {
      title: "Best Aftermarket Wheels of 2024",
      date: "Mar 13, 2024",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
    },
    {
      title: "Drift Culture: Past and Present",
      date: "Mar 12, 2024",
      image: "https://th.bing.com/th/id/OIP.aTnZxSz0xkv8UAZyiiKQWQHaDt"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* New Header */}
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


      {/* Hero Section */}
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              VAP'D DASHSTEAM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your premium destination for automotive culture, performance, and lifestyle
            </p>
            <Link 
              to="/blogs" 
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <section className="py-20 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-200">Featured Posts</h2>
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
                    <span className="inline-block px-3 py-1 bg-gray-600 rounded-full text-sm mb-3">
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
          <h2 className="text-3xl font-bold mb-12 text-gray-200">Recent Posts</h2>
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
                <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                <h3 className="font-semibold group-hover:text-gray-400 transition-colors">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay in the Loop</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest automotive news, reviews, and exclusive content
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-gray-500 focus:border-gray-400 outline-none"
            />
            <button className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* New Footer */}
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

export default App;
