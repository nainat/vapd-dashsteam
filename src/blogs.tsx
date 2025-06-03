import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Blogs() {
  // Blog categories
  const categories = [
    { name: "All", count: 28 },
    { name: "JDM", count: 12 },
    { name: "Supercars", count: 8 },
    { name: "EVs", count: 5 },
    { name: "Classics", count: 3 }
  ];

  // Latest blog posts
  const latestPosts = [
    {
      id: 1,
      title: "2024 Nissan Z Nismo: Track-Focused Performance Review",
      excerpt: "We test Nissan's most aggressive Z car yet on both road and track...",
      image: "https://cdn.motor1.com/images/mgl/2NAwyk/s3/2024-nissan-z-nismo.jpg",
      date: "May 15, 2024",
      category: "JDM",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Electric Hypercars: Rimac Nevera vs. Tesla Roadster",
      excerpt: "Comparing the two most anticipated electric hypercars of the decade...",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      date: "May 12, 2024",
      category: "EVs",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Restomodding 101: Modern Tech in Classic Bodies",
      excerpt: "How to blend vintage aesthetics with modern performance...",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc",
      date: "May 8, 2024",
      category: "Classics",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "Toyota GR Corolla Circuit Edition: Daily Drivable Rally Car",
      excerpt: "Living with Toyota's hottest hatchback for a week...",
      image: "https://th.bing.com/th/id/OIP.QXQSxOnc3i9cSV39V7K01wHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "May 5, 2024",
      category: "JDM",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "The Future of Manual Transmissions in Performance Cars",
      excerpt: "Are stick shifts becoming extinct or making a comeback?...",
      image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/02/resize_manual-transmission-of-a-toyota-gr-corolla.jpg",
      date: "May 1, 2024",
      category: "Supercars",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Track Day Essentials: What to Bring to Your First Event",
      excerpt: "A comprehensive checklist for first-time track enthusiasts...",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
      date: "April 28, 2024",
      category: "JDM",
      readTime: "6 min read"
    }
  ];

  // Popular tags
  const popularTags = [
    "#JDM", "#Supercars", "#Electric", "#Tuning", "#Drift", 
    "#TrackDay", "#Restomod", "#Hypercars", "#ClassicCars", "#Review"
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation - Same as your main page */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-[#00A3FF] font-bold text-2xl">VAP'D</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-[#00A3FF] transition-colors">Home</Link>
              <Link to="/blogs" className="text-[#00A3FF] transition-colors">Blogs</Link>
              <Link to="/about" className="hover:text-[#00A3FF] transition-colors">About</Link>
              <Link to="/contact" className="hover:text-[#00A3FF] transition-colors">Contact</Link>
              <button className="p-2 hover:bg-[#101D42] rounded-full transition-colors">
                <Search size={20} />
              </button>
            </div>

            {/* <button className="md:hidden">
              <Menu size={24} />
            </button> */}
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-[#101D42] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Automotive Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Latest news, in-depth reviews, and technical articles about JDM cars, supercars, EVs, and automotive culture.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-4 gap-8">
        {/* Blog Posts Column */}
        <div className="md:col-span-3 space-y-10">
          {latestPosts.map(post => (
            <div key={post.id} className="group relative overflow-hidden rounded-lg bg-[#101D42]/50 hover:bg-[#101D42]/70 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <span className="inline-block px-3 py-1 bg-[#00A3FF] rounded-full text-sm mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-[#00A3FF] transition-colors">
                    <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <nav className="flex space-x-2">
              <button className="px-4 py-2 bg-[#00A3FF] rounded-md font-medium">1</button>
              <button className="px-4 py-2 bg-[#101D42] hover:bg-[#00A3FF]/20 rounded-md">2</button>
              <button className="px-4 py-2 bg-[#101D42] hover:bg-[#00A3FF]/20 rounded-md">3</button>
              <button className="px-4 py-2 bg-[#101D42] hover:bg-[#00A3FF]/20 rounded-md">Next</button>
            </nav>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-8">
          {/* Search */}
          <div className="bg-[#101D42]/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Search</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-[#0A0A0A] border border-[#00A3FF]/30 rounded-full py-3 px-5 pr-12 focus:border-[#00A3FF] outline-none"
              />
              <button className="absolute right-3 top-3 text-[#00A3FF]">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-[#101D42]/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat, index) => (
                <li key={index}>
                  <button className="flex justify-between items-center w-full hover:text-[#00A3FF] transition-colors">
                    <span>{cat.name}</span>
                    <span className="bg-[#00A3FF]/20 text-[#00A3FF] px-2 py-1 rounded-full text-xs">
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="bg-[#101D42]/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <button 
                  key={index}
                  className="px-3 py-1 bg-[#00A3FF]/10 hover:bg-[#00A3FF]/30 text-[#00A3FF] rounded-full text-sm transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-[#00A3FF]/20 to-[#101D42] p-6 rounded-lg border border-[#00A3FF]/30">
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest car news and reviews delivered to your inbox
            </p>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-[#0A0A0A]/70 border border-[#00A3FF]/30 rounded-full py-2 px-4 mb-3 text-sm focus:border-[#00A3FF] outline-none"
            />
            <button className="w-full bg-[#00A3FF] hover:bg-[#00A3FF]/80 py-2 rounded-full text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer - Same as your main page */}
      <footer className="bg-[#0A0A0A] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="text-[#00A3FF] font-bold text-2xl block mb-4">VAP'D</Link>
              <p className="text-gray-400">
                Your ultimate destination for automotive enthusiasm and culture
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-[#00A3FF]">Home</Link></li>
                <li><Link to="/blogs" className="hover:text-[#00A3FF]">Blogs</Link></li>
                <li><Link to="/about" className="hover:text-[#00A3FF]">About</Link></li>
                <li><Link to="/contact" className="hover:text-[#00A3FF]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blogs?category=jdm" className="hover:text-[#00A3FF]">JDM</Link></li>
                <li><Link to="/blogs?category=supercars" className="hover:text-[#00A3FF]">Supercars</Link></li>
                <li><Link to="/blogs?category=evs" className="hover:text-[#00A3FF]">EVs</Link></li>
                <li><Link to="/blogs?category=classics" className="hover:text-[#00A3FF]">Classics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              {/* <div className="flex space-x-4">
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
              </div> */}
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