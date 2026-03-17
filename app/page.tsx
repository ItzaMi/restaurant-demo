'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="/hero.jpg"
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
          <span className="text-white text-2xl md:text-3xl">The Corner Bistro</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-white hover:text-amber-300">Menu</a>
            <a href="#about" className="text-white hover:text-amber-300">About</a>
            <a href="#contact" className="text-white hover:text-amber-300">Contact</a>
            <a href="tel:5125551234" className="bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700">
              Reserve: (512) 555-1234
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/90 z-20 p-6">
            <a href="#menu" className="block text-white py-3 text-lg" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#about" className="block text-white py-3 text-lg" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="block text-white py-3 text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="tel:5125551234" className="block bg-amber-600 text-white px-6 py-4 rounded mt-4 text-center text-lg">
              Reserve: (512) 555-1234
            </a>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 -mt-20">
          <p className="text-amber-400 text-sm md:text-base tracking-widest mb-4">EST. 2004 • AUSTIN, TEXAS</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Where Flavor<br />Meets Soul
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10">
            Farm-to-table cuisine with locally sourced ingredients and family recipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="bg-amber-600 text-white px-10 py-4 text-lg rounded hover:bg-amber-700">
              View Menu
            </a>
            <a href="tel:5125551234" className="border-2 border-white text-white px-10 py-4 text-lg rounded hover:bg-white hover:text-black">
              Book a Table
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32 px-6 md:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm tracking-widest text-center mb-2">FROM OUR KITCHEN</p>
          <h2 className="text-4xl md:text-5xl text-center text-stone-800 mb-16">Signature Dishes</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Herb-Crusted Salmon", price: "$32", desc: "Wild-caught Atlantic salmon with seasonal vegetables and lemon beurre blanc", img: "/salmon.jpg" },
              { name: "Wagyu Burger", price: "$28", desc: "House-ground wagyu beef, aged cheddar, caramelized onions, brioche bun", img: "/burger.jpg" },
              { name: "Heirloom Tomato Salad", price: "$18", desc: "Locally-grown tomatoes, burrata, basil, aged balsamic, olive oil", img: "/salad.jpg" },
            ].map((dish, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl text-stone-800">{dish.name}</h3>
                    <span className="text-amber-600 text-xl">{dish.price}</span>
                  </div>
                  <p className="text-stone-600">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="/chef.jpg" alt="Our kitchen" className="rounded-lg shadow-xl w-full h-96 object-cover" />
          <div>
            <p className="text-amber-600 text-sm tracking-widest mb-2">OUR STORY</p>
            <h2 className="text-4xl md:text-5xl text-stone-800 mb-8">Twenty Years of Tradition</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Since 2004, The Corner Bistro has been Austin's destination for elevated comfort food. 
              We believe in simple, honest cooking using the finest ingredients from local farms.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Our menu changes with the seasons. From grandmother's pasta recipes to innovative 
              takes on American classics, every plate tells a story.
            </p>
            <div className="flex gap-12 mt-10">
              <div>
                <p className="text-4xl text-stone-800">20+</p>
                <p className="text-stone-500">Years in Austin</p>
              </div>
              <div>
                <p className="text-4xl text-stone-800">15</p>
                <p className="text-stone-500">Local Farm Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-stone-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-amber-400 text-sm tracking-widest mb-2">VISIT US</p>
            <h2 className="text-4xl md:text-5xl mb-10">Location & Hours</h2>
            
            <div className="mb-8">
              <p className="text-stone-400 mb-1">Address</p>
              <p className="text-xl">123 Main Street</p>
              <p className="text-xl">Austin, TX 78701</p>
            </div>
            
            <div className="mb-8">
              <p className="text-stone-400 mb-1">Contact</p>
              <p className="text-xl">(512) 555-1234</p>
              <p className="text-xl text-amber-400">hello@cornerbistro.com</p>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank"
              className="inline-block border-2 border-white px-8 py-4 rounded hover:bg-white hover:text-stone-800"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-stone-900 rounded-lg p-8">
            <h3 className="text-2xl mb-8">Opening Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-stone-700">
                <span>Monday – Thursday</span>
                <span className="text-amber-400">11am – 9pm</span>
              </div>
              <div className="flex justify-between py-3 border-b border-stone-700">
                <span>Friday – Saturday</span>
                <span className="text-amber-400">11am – 10pm</span>
              </div>
              <div className="flex justify-between py-3">
                <span>Sunday</span>
                <span className="text-amber-400">10am – 8pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <img src="/ambiance.jpg" alt="Restaurant" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-6">Join Us Tonight</h2>
          <p className="text-xl text-white/80 mb-10">
            Experience the warmth of our hospitality and the artistry of our kitchen
          </p>
          <a href="tel:5125551234" className="inline-block bg-amber-600 text-white px-12 py-5 text-xl rounded hover:bg-amber-700">
            Call Now: (512) 555-1234
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl mb-4">The Corner Bistro</p>
          <p className="text-stone-400 mb-2">123 Main Street, Austin, TX 78701</p>
          <p className="text-stone-400 mb-6">(512) 555-1234</p>
          <p className="text-stone-500 text-sm">© 2026 The Corner Bistro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
