import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample car images for the carousel
  const carouselImages = [
    
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      caption: "Garage setup with premium tools"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
      caption: "Custom build in progress"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      caption: "Track day with community members"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
      caption: "Engine bay detailing workshop"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
      caption: "Showcase at SEMA 2023"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation - Same as your main page */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-[#00A3FF] font-bold text-2xl">VAP'D DASHSTEAM </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-[#00A3FF] transition-colors">Home</Link>
              <Link to="/blogs" className="hover:text-[#00A3FF] transition-colors">Blogs</Link>
              <Link to="/about" className="text-[#00A3FF] transition-colors">About</Link>
              <Link to="/contact" className="hover:text-[#00A3FF] transition-colors">Contact</Link>
            </div>

            
          </div>
        </div>
      </nav>

      {/* About Header */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-[#101D42] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About VAP'D DASHSTEAM</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Born from passion, built for enthusiasts. Our journey in the automotive world.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Mission Statement */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
          Welcome to VAP'D DASHSTEAM Pvt. Ltd., a Bihar-based startup company that aims to target massive water conservation and redefine vehicle care with innovation, convenience, and eco-consciousness. Supported and funded by the Government of Bihar with a seed fund of ₹10 lakh under the Bihar Startup Policy.

We are a forward-thinking, service-oriented startup built on the foundation of innovation and a deep passion for exceptional customer experience. In today’s fast-paced world, we understand that time and money is a precious commodity, and maintaining your car's cleanliness often takes a backseat. That’s why we’ve created a solution that brings professional car care to your doorstep—no hassle, no compromise.

From removing stubborn dirt and grime to effectively sanitizing your car’s interior, our steam cleaning technology ensures a thorough, eco-friendly clean that is safe for your car and the environment.


It is not just another car wash service—it’s a forward-thinking, customer-centric company dedicated to transforming the way car owners maintain their vehicles. We combine cutting-edge steam cleaning technology with an eco-friendly approach to deliver premium car wash and detailing services at your doorstep.

Founded with the belief that car care should be convenient, high-quality, and environmentally responsible, we strive to set a new standard in the industry. Our services are tailored to meet the needs of modern-day car owners who value their time, their vehicle’s longevity, and the planet’s well-being.

With every car we clean, we are not only preserving its shine and functionality but also conserving water and reducing harmful environmental impacts. At VAP’D DASHSTEAM Pvt. Ltd, we believe in creating a future where innovation and sustainability go hand in hand to deliver solutions that benefit everyone.
          </p>
        </div>

        {/* Instagram-style Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselImages.map((image) => (
                  <div key={image.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-[#101D42]/50 rounded-xl overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-96 object-cover"
                      />
                      <div className="p-6">
                        <p className="text-gray-300">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#00A3FF] p-2 rounded-full ml-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#00A3FF] p-2 rounded-full mr-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#00A3FF]' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet The Team</h2>
          <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-[#00A3FF] mb-2">Aman Kumar</h3>
              <p className="text-lg font-medium mb-6">Chief Technical Officer</p>
              <p className="text-gray-300 mb-4">
                Building this platform has been a journey filled with challenges, late nights, and countless iterations. Every line of code represents our commitment to creating a seamless experience for you.
              </p>
              <p className="text-gray-300 mb-4">
                From designing a user-friendly interface to ensuring every feature works flawlessly, the process wasn't easy, but it was fueled by passion. Knowing this platform will soon connect you with our eco-friendly services made every struggle worthwhile.
              </p>
              <p className="text-gray-300">
                This isn't just a website; it's the foundation of our dream to make car care simpler and greener for everyone. Your support is what drives us forward. Thank you for being part of this journey.
              </p>
            </div>
        </div>

        {/* Community Section */}
        <div className="bg-gradient-to-r from-[#00A3FF]/10 to-[#101D42] p-8 rounded-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              Connect with thousands of automotive enthusiasts worldwide. Share your builds, get advice, 
              and participate in exclusive events.
            </p>
            <button className="bg-[#00A3FF] hover:bg-[#00A3FF]/80 text-white px-8 py-3 rounded-full font-medium">
              Become a Member
            </button>
          </div>
        </div>
      </div>

      {/* Footer - Same as your main page */}
      <footer className="bg-[#0A0A0A] py-12 border-t border-white/10">
        {/* ... same footer content ... */}
      </footer>
    </div>
  );
}