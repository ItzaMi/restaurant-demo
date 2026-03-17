'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-stone-800">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px]">
        <img
          src="/hero.jpg"
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
          <span className="text-white text-2xl font-serif font-semibold tracking-wide">
            The Corner Bistro
          </span>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white z-20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-widest">Menu</a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-widest">About</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-widest">Contact</a>
            <a
              href="tel:5125551234"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Reserve: (512) 555-1234
            </a>
          </div>
        </nav>

        {/* Mobile nav overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/90 z-10 flex flex-col items-center justify-center gap-8 md:hidden">
            <a href="#menu" onClick={() => setMenuOpen(false)} className="text-white text-2xl tracking-widest">Menu</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-white text-2xl tracking-widest">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white text-2xl tracking-widest">Contact</a>
            <a
              href="tel:5125551234"
              onClick={() => setMenuOpen(false)}
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium mt-4"
            >
              Reserve Now
            </a>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-100px)] text-center px-6">
          <p className="text-amber-400 text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 font-sans font-medium">
            Est. 2004 &bull; Austin, Texas
          </p>
          <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl font-serif font-light leading-[1.05] mb-6">
            Where Flavor<br />Meets Soul
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            Farm-to-table cuisine with locally sourced ingredients and family recipes passed down through generations.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-base font-medium transition-colors"
            >
              View Menu
            </a>
            <a
              href="tel:5125551234"
              className="border-2 border-white/60 hover:border-white text-white px-10 py-4 rounded-full text-base font-medium transition-colors"
            >
              Book a Table
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-xs tracking-[0.25em] uppercase text-center mb-3 font-medium">
            From Our Kitchen
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-center text-stone-800 mb-4">
            Signature Dishes
          </h2>
          <p className="text-stone-400 text-center max-w-md mx-auto mb-16">
            Crafted with care using the freshest seasonal ingredients from local farms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Herb-Crusted Salmon", price: "$32", desc: "Wild-caught Atlantic salmon with seasonal vegetables and lemon beurre blanc", img: "/salmon.jpg" },
              { name: "Wagyu Burger", price: "$28", desc: "House-ground wagyu beef, aged cheddar, caramelized onions, brioche bun", img: "/burger.jpg" },
              { name: "Heirloom Tomato Salad", price: "$18", desc: "Locally-grown tomatoes, burrata, basil, aged balsamic, olive oil", img: "/salad.jpg" },
            ].map((dish, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-stone-800">{dish.name}</h3>
                    <span className="text-amber-600 font-semibold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-stone-500 leading-relaxed text-sm">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/chef.jpg"
              alt="Our kitchen"
              className="rounded-2xl w-full h-[450px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white rounded-2xl px-8 py-6 shadow-lg hidden sm:block">
              <p className="text-3xl font-serif font-bold">20+</p>
              <p className="text-amber-100 text-sm">Years in Austin</p>
            </div>
          </div>
          <div>
            <p className="text-amber-600 text-xs tracking-[0.25em] uppercase mb-3 font-medium">Our Story</p>
            <h2 className="text-4xl sm:text-5xl font-serif text-stone-800 mb-8 leading-tight">
              Twenty Years<br />of Tradition
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">
              Since 2004, The Corner Bistro has been Austin&apos;s destination for elevated comfort food.
              We believe in simple, honest cooking using the finest ingredients from local farms.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              Our menu changes with the seasons. From grandmother&apos;s pasta recipes to innovative
              takes on American classics, every plate tells a story.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-serif text-stone-800 font-bold">15</p>
                <p className="text-stone-400 text-sm mt-1">Local Farm Partners</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-stone-800 font-bold">4.8</p>
                <p className="text-stone-400 text-sm mt-1">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-3 font-medium">Visit Us</p>
            <h2 className="text-4xl sm:text-5xl font-serif mb-12">Location &amp; Hours</h2>

            <div className="mb-8">
              <p className="text-stone-500 text-sm uppercase tracking-wider mb-2">Address</p>
              <p className="text-xl">123 Main Street</p>
              <p className="text-xl">Austin, TX 78701</p>
            </div>

            <div className="mb-10">
              <p className="text-stone-500 text-sm uppercase tracking-wider mb-2">Contact</p>
              <p className="text-xl">(512) 555-1234</p>
              <p className="text-xl text-amber-400">hello@cornerbistro.com</p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="inline-block border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full transition-colors"
            >
              Get Directions &rarr;
            </a>
          </div>

          <div className="bg-stone-800 rounded-2xl p-8">
            <h3 className="text-xl font-serif mb-8">Opening Hours</h3>
            <div className="divide-y divide-stone-700">
              {[
                { days: "Monday – Thursday", hours: "11am – 9pm" },
                { days: "Friday – Saturday", hours: "11am – 10pm" },
                { days: "Sunday", hours: "10am – 8pm" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between py-5">
                  <span className="text-stone-300">{row.days}</span>
                  <span className="text-amber-400 font-medium">{row.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-600/10 border border-amber-600/20 rounded-xl p-5">
              <p className="text-amber-400 text-sm font-medium mb-1">Sunday Brunch</p>
              <p className="text-stone-400 text-sm">Join us every Sunday from 10am–1pm for our special brunch menu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <img
          src="/ambiance.jpg"
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-serif mb-6">Join Us Tonight</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Experience the warmth of our hospitality and the artistry of our kitchen
          </p>
          <a
            href="tel:5125551234"
            className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-lg font-medium transition-colors inline-block"
          >
            Call Now: (512) 555-1234
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <p className="text-2xl font-serif mb-4">The Corner Bistro</p>
            <p className="text-stone-500 leading-relaxed text-sm">
              Farm-to-table dining in the heart of Austin, Texas. Serving elevated comfort food since 2004.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-stone-500 mb-4">Quick Links</p>
            <div className="flex flex-col gap-3">
              <a href="#menu" className="text-stone-400 hover:text-white transition-colors">Menu</a>
              <a href="#about" className="text-stone-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-stone-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-stone-500 mb-4">Contact</p>
            <p className="text-stone-400">123 Main Street</p>
            <p className="text-stone-400">Austin, TX 78701</p>
            <p className="text-stone-400 mt-3">(512) 555-1234</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-600 text-sm">&copy; 2026 The Corner Bistro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
