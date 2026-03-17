'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-white drop-shadow-lg">
              The Corner Bistro
            </h1>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-white/90 hover:text-white transition text-sm tracking-wide">
                Menu
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition text-sm tracking-wide">
                About
              </a>
              <a href="#contact" className="text-white/90 hover:text-white transition text-sm tracking-wide">
                Contact
              </a>
              <a 
                href="#reserve" 
                className="bg-[#C4A574] text-white px-6 py-2.5 rounded-full hover:bg-[#B39564] transition text-sm tracking-wide"
              >
                Reservations
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#2C3A2E]/95 backdrop-blur-md">
              <div className="flex flex-col p-6 gap-4">
                <a href="#menu" className="text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                <a href="#about" className="text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#contact" className="text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a href="#reserve" className="bg-[#C4A574] text-white px-6 py-3 rounded-full text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                  Reserve a Table
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Bleed Image */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Restaurant interior with warm lighting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-[#C4A574] text-sm tracking-[0.3em] uppercase mb-6">Est. 2004 • Austin, Texas</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
            Where Flavor<br />Meets Soul
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Farm-to-table cuisine crafted with locally sourced ingredients and family recipes passed down through generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-[#C4A574] text-white px-10 py-4 rounded-full hover:bg-[#B39564] transition text-lg">
              View Menu
            </a>
            <a href="#reserve" className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-[#2C3A2E] transition text-lg">
              Book a Table
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A574] text-sm tracking-[0.2em] uppercase mb-3">From Our Kitchen</p>
            <h3 className="text-4xl sm:text-5xl font-serif text-[#2C3A2E]">Signature Dishes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Herb-Crusted Salmon", 
                desc: "Wild-caught Atlantic salmon with seasonal vegetables and lemon beurre blanc",
                price: "$32",
                image: "/salmon.jpg"
              },
              { 
                name: "Wagyu Burger", 
                desc: "House-ground wagyu beef, aged cheddar, caramelized onions, brioche bun",
                price: "$28",
                image: "/burger.jpg"
              },
              { 
                name: "Heirloom Tomato Salad", 
                desc: "Locally-grown tomatoes, burrata, basil, aged balsamic, olive oil",
                price: "$18",
                image: "/salad.jpg"
              }
            ].map((dish, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-xl font-serif text-[#2C3A2E] mb-2">{dish.name}</h4>
                    <p className="text-[#2C3A2E]/60 text-sm leading-relaxed">{dish.desc}</p>
                  </div>
                  <span className="text-xl font-serif text-[#C4A574] whitespace-nowrap">{dish.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="#" className="inline-flex items-center gap-2 text-[#2C3A2E] border-b-2 border-[#C4A574] pb-1 hover:text-[#C4A574] transition">
              View Full Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative h-[500px] sm:h-[600px] rounded-2xl overflow-hidden">
                <img
                  src="/chef.jpg"
                  alt="Chef preparing food"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C4A574]/20 rounded-2xl -z-10" />
            </div>
            
            <div>
              <p className="text-[#C4A574] text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
              <h3 className="text-4xl sm:text-5xl font-serif text-[#2C3A2E] mb-8">
                Twenty Years of Tradition
              </h3>
              <div className="space-y-6 text-[#2C3A2E]/70 text-lg leading-relaxed">
                <p>
                  Since 2004, The Corner Bistro has been Austin's destination for elevated comfort food. 
                  We believe in the power of simple, honest cooking using the finest ingredients from local farms and purveyors.
                </p>
                <p>
                  Our menu changes with the seasons, ensuring that every dish showcases ingredients at their peak. 
                  From our grandmother's pasta recipes to innovative takes on American classics, every plate tells a story.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div>
                  <p className="text-4xl font-serif text-[#2C3A2E]">20+</p>
                  <p className="text-[#2C3A2E]/60 text-sm">Years Serving Austin</p>
                </div>
                <div className="w-px h-16 bg-[#2C3A2E]/20" />
                <div>
                  <p className="text-4xl font-serif text-[#2C3A2E]">15</p>
                  <p className="text-[#2C3A2E]/60 text-sm">Local Farm Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#2C3A2E] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <p className="text-[#C4A574] text-sm tracking-[0.2em] uppercase mb-3">Visit Us</p>
              <h3 className="text-4xl sm:text-5xl font-serif mb-12">Location & Hours</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-white/50 text-sm mb-2 tracking-wide">Address</p>
                  <p className="text-xl leading-relaxed">
                    123 Main Street<br />
                    Austin, TX 78701
                  </p>
                </div>
                
                <div>
                  <p className="text-white/50 text-sm mb-2 tracking-wide">Contact</p>
                  <p className="text-xl">(512) 555-1234</p>
                  <p className="text-xl text-[#C4A574]">hello@cornerbistro.com</p>
                </div>

                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#2C3A2E] transition"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div className="bg-[#1A221B] rounded-3xl p-8 sm:p-10">
                <h4 className="text-2xl font-serif mb-8">Opening Hours</h4>
                <div className="space-y-6">
                  {[
                    { day: "Monday – Thursday", hours: "11:00 AM – 9:00 PM" },
                    { day: "Friday – Saturday", hours: "11:00 AM – 10:00 PM" },
                    { day: "Sunday", hours: "10:00 AM – 8:00 PM" }
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                      <span className="text-lg">{schedule.day}</span>
                      <span className="text-[#C4A574]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-sm mt-8">
                  * Kitchen closes 30 minutes before closing time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section id="reserve" className="relative py-32 sm:py-40 px-4 sm:px-6">
        <div className="absolute inset-0">
          <img
            src="/ambiance.jpg"
            alt="Restaurant ambiance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2C3A2E]/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="text-[#C4A574] text-sm tracking-[0.2em] uppercase mb-4">Reserve Your Table</p>
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6">Join Us Tonight</h3>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience the warmth of our hospitality and the artistry of our kitchen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5125551234" className="bg-[#C4A574] text-white px-12 py-5 rounded-full hover:bg-[#B39564] transition text-lg">
              Call Now: (512) 555-1234
            </a>
            <a href="#" className="border-2 border-white text-white px-12 py-5 rounded-full hover:bg-white hover:text-[#2C3A2E] transition text-lg">
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A221B] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h5 className="text-2xl font-serif mb-4">The Corner Bistro</h5>
              <p className="text-white/60 leading-relaxed">
                Farm-to-table dining in the heart of Austin since 2004.
              </p>
            </div>
            <div>
              <h6 className="text-sm tracking-wide uppercase text-white/50 mb-4">Quick Links</h6>
              <div className="space-y-3">
                <a href="#menu" className="block text-white/80 hover:text-[#C4A574] transition">Menu</a>
                <a href="#about" className="block text-white/80 hover:text-[#C4A574] transition">About</a>
                <a href="#contact" className="block text-white/80 hover:text-[#C4A574] transition">Contact</a>
                <a href="#reserve" className="block text-white/80 hover:text-[#C4A574] transition">Reservations</a>
              </div>
            </div>
            <div>
              <h6 className="text-sm tracking-wide uppercase text-white/50 mb-4">Follow Us</h6>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-sm">
              © 2026 The Corner Bistro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
