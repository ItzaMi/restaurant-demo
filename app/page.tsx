'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Mobile-Optimized Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#2C3A2E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <h1 className="text-xl sm:text-2xl font-serif tracking-tight text-[#2C3A2E]">
              The Corner Bistro
            </h1>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#menu" className="text-[#2C3A2E] hover:text-[#5A7C5E] transition text-sm lg:text-base">
                Menu
              </a>
              <a href="#about" className="text-[#2C3A2E] hover:text-[#5A7C5E] transition text-sm lg:text-base">
                About
              </a>
              <a 
                href="#reserve" 
                className="bg-[#2C3A2E] text-[#FAF7F2] px-5 lg:px-6 py-2 rounded-full hover:bg-[#5A7C5E] transition text-sm lg:text-base"
              >
                Reserve
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2C3A2E]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-[#2C3A2E]/10">
              <div className="flex flex-col gap-3">
                <a 
                  href="#menu" 
                  className="text-[#2C3A2E] hover:text-[#5A7C5E] transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Menu
                </a>
                <a 
                  href="#about" 
                  className="text-[#2C3A2E] hover:text-[#5A7C5E] transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#reserve" 
                  className="bg-[#2C3A2E] text-[#FAF7F2] px-6 py-3 rounded-full hover:bg-[#5A7C5E] transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reserve a Table
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #2C3A2E 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} 
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 border border-[#2C3A2E]/20 rounded-full text-xs tracking-wider text-[#5A7C5E] uppercase">
            Est. 2004
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#2C3A2E] mb-4 sm:mb-6 leading-tight">
            Where Flavor<br />Meets Tradition
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#2C3A2E]/70 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Farm-to-table cuisine crafted with locally sourced ingredients and family recipes 
            passed down through generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-[#2C3A2E] text-[#FAF7F2] px-8 py-4 rounded-full hover:bg-[#5A7C5E] transition-all active:scale-95 w-full sm:w-auto">
              View Our Menu
            </button>
            <button className="border-2 border-[#2C3A2E] text-[#2C3A2E] px-8 py-4 rounded-full hover:bg-[#2C3A2E] hover:text-[#FAF7F2] transition-all active:scale-95 w-full sm:w-auto">
              Book a Table
            </button>
          </div>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#5A7C5E]/10 blur-3xl" />
        <div className="hidden md:block absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-[#C4A574]/20 blur-3xl" />
      </section>

      {/* Featured Dishes - Mobile Optimized */}
      <section id="menu" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm tracking-wider text-[#5A7C5E] uppercase mb-2">Signature Dishes</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C3A2E]">Chef's Selection</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                name: "Herb-Crusted Salmon", 
                desc: "Wild-caught Atlantic salmon with seasonal vegetables and lemon beurre blanc",
                price: "$32"
              },
              { 
                name: "Wagyu Burger", 
                desc: "House-ground wagyu beef, aged cheddar, caramelized onions, brioche bun",
                price: "$28"
              },
              { 
                name: "Heirloom Tomato Salad", 
                desc: "Locally-grown tomatoes, burrata, basil, aged balsamic, olive oil",
                price: "$18"
              }
            ].map((dish, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5A7C5E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-1 bg-[#C4A574] mb-4 sm:mb-6" />
                  <h4 className="text-xl sm:text-2xl font-serif text-[#2C3A2E] mb-3">{dish.name}</h4>
                  <p className="text-sm sm:text-base text-[#2C3A2E]/60 leading-relaxed mb-6">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl sm:text-2xl font-serif text-[#2C3A2E]">{dish.price}</span>
                    <button className="w-10 h-10 rounded-full border-2 border-[#2C3A2E] flex items-center justify-center group-hover:bg-[#2C3A2E] transition-colors">
                      <span className="text-[#2C3A2E] group-hover:text-[#FAF7F2] text-xl">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#2C3A2E] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <div>
              <p className="text-xs sm:text-sm tracking-wider text-[#C4A574] uppercase mb-3 sm:mb-4">Visit Us</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8 sm:mb-12">Location & Hours</h3>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="text-[#FAF7F2]/50 text-xs sm:text-sm mb-2">Address</p>
                  <p className="text-lg sm:text-xl leading-relaxed">
                    123 Main Street<br />
                    Austin, TX 78701
                  </p>
                </div>
                
                <div>
                  <p className="text-[#FAF7F2]/50 text-xs sm:text-sm mb-2">Contact</p>
                  <p className="text-lg sm:text-xl">(512) 555-1234</p>
                  <p className="text-lg sm:text-xl break-all">hello@cornerbistro.com</p>
                </div>

                <button className="w-full sm:w-auto border-2 border-[#FAF7F2] text-[#FAF7F2] px-8 py-4 rounded-full hover:bg-[#FAF7F2] hover:text-[#2C3A2E] transition-all active:scale-95">
                  Get Directions
                </button>
              </div>
            </div>

            <div>
              <div className="bg-[#1A221B] rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { day: "Mon – Thu", hours: "11AM – 9PM" },
                    { day: "Fri – Sat", hours: "11AM – 10PM" },
                    { day: "Sunday", hours: "10AM – 8PM" }
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center py-3 sm:py-4 border-b border-[#FAF7F2]/10 last:border-0 gap-4">
                      <span className="text-base sm:text-lg font-serif whitespace-nowrap">{schedule.day}</span>
                      <span className="text-[#C4A574] text-sm sm:text-base text-right">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Mobile Optimized */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm tracking-wider text-[#5A7C5E] uppercase mb-3 sm:mb-4">Our Story</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C3A2E] mb-6 sm:mb-8">
            Twenty Years of Tradition
          </h3>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#2C3A2E]/70 leading-relaxed">
            <p>
              Since 2004, The Corner Bistro has been Austin's destination for elevated comfort food. 
              We believe in the power of simple, honest cooking using the finest ingredients from local farms and purveyors.
            </p>
            <p>
              Our menu changes with the seasons, ensuring that every dish showcases ingredients at their peak. 
              From our grandmother's pasta recipes to innovative takes on American classics, every plate tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Mobile Optimized */}
      <section id="reserve" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#5A7C5E] to-[#2C3A2E] text-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6">Join Us Tonight</h3>
          <p className="text-base sm:text-lg md:text-xl text-[#FAF7F2]/80 mb-8 sm:mb-12 px-4">
            Experience the warmth of our hospitality and the artistry of our kitchen
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-[#FAF7F2] text-[#2C3A2E] px-10 py-4 sm:py-5 rounded-full hover:bg-[#C4A574] hover:text-[#FAF7F2] transition-all active:scale-95 text-base sm:text-lg font-medium w-full sm:w-auto">
              Reserve Your Table
            </button>
            <button className="border-2 border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 sm:py-5 rounded-full hover:bg-[#FAF7F2]/10 transition-all active:scale-95 text-base sm:text-lg w-full sm:w-auto">
              Order Takeout
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-[#1A221B] text-[#FAF7F2] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#FAF7F2]/50 text-sm sm:text-base">
            © 2026 The Corner Bistro. All rights reserved.
          </p>
          <p className="text-[#FAF7F2]/30 mt-2 text-xs sm:text-sm">
            123 Main Street, Austin, TX 78701
          </p>
          <p className="text-[#FAF7F2]/30 text-xs sm:text-sm">
            (512) 555-1234
          </p>
        </div>
      </footer>
    </div>
  );
}
