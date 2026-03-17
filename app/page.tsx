'use client';

import { useState } from 'react';

const menuItems = {
  starters: [
    { name: "Truffle Burrata", price: "$16", desc: "Creamy burrata, black truffle, grilled sourdough, wild arugula" },
    { name: "Crispy Calamari", price: "$14", desc: "Lightly fried with smoked paprika aioli and pickled peppers" },
    { name: "Soup du Jour", price: "$12", desc: "Chef's daily creation using the freshest seasonal ingredients" },
  ],
  mains: [
    { name: "Herb-Crusted Salmon", price: "$32", desc: "Wild-caught Atlantic salmon with seasonal vegetables and lemon beurre blanc", img: "/salmon.jpg" },
    { name: "Wagyu Burger", price: "$28", desc: "House-ground wagyu beef, aged cheddar, caramelized onions, brioche bun", img: "/burger.jpg" },
    { name: "Heirloom Tomato Salad", price: "$18", desc: "Locally-grown tomatoes, burrata, basil, aged balsamic, olive oil", img: "/salad.jpg" },
  ],
  desserts: [
    { name: "Crème Brûlée", price: "$14", desc: "Classic vanilla bean custard with a caramelized sugar crust" },
    { name: "Chocolate Fondant", price: "$16", desc: "Rich dark chocolate cake with molten center, vanilla bean ice cream" },
    { name: "Seasonal Fruit Tart", price: "$13", desc: "Buttery pastry shell filled with pastry cream and fresh market fruits" },
  ],
};

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The best farm-to-table experience in Austin. The herb-crusted salmon was absolutely divine — you can taste the quality in every bite.",
    source: "Google",
  },
  {
    name: "James R.",
    rating: 5,
    text: "We've been coming here for years and it never disappoints. The atmosphere is warm, the staff is incredible, and the wagyu burger is life-changing.",
    source: "Yelp",
  },
  {
    name: "Elena K.",
    rating: 5,
    text: "Had our anniversary dinner here and it was perfect. From the cocktails to the crème brûlée, every detail was thoughtful. Already booked our next visit.",
    source: "Google",
  },
];

const hours = [
  { days: "Monday – Thursday", hours: "11am – 9pm" },
  { days: "Friday – Saturday", hours: "11am – 10pm" },
  { days: "Sunday", hours: "10am – 8pm" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'starters' | 'mains' | 'desserts'>('mains');

  return (
    <div className="min-h-screen font-sans text-stone-800">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px]">
        <img
          src="/hero.jpg"
          alt="The Corner Bistro dining room"
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
            <a href="#reviews" className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-widest">Reviews</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-widest">Contact</a>
            <a
              href="#reserve"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Book a Table
            </a>
          </div>
        </nav>

        {/* Mobile nav overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/90 z-10 flex flex-col items-center justify-center gap-8 md:hidden">
            <a href="#menu" onClick={() => setMenuOpen(false)} className="text-white text-2xl tracking-widest">Menu</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-white text-2xl tracking-widest">About</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-white text-2xl tracking-widest">Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white text-2xl tracking-widest">Contact</a>
            <a
              href="#reserve"
              onClick={() => setMenuOpen(false)}
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium mt-4"
            >
              Book a Table
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
              href="#reserve"
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
            Our Menu
          </h2>
          <p className="text-stone-400 text-center max-w-md mx-auto mb-12">
            Crafted with care using the freshest seasonal ingredients from local farms
          </p>

          {/* Menu Tabs */}
          <div className="flex justify-center gap-2 mb-14">
            {(['starters', 'mains', 'desserts'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Featured Mains with Images */}
          {activeTab === 'mains' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.mains.map((dish, i) => (
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
          ) : (
            /* Starters & Desserts — elegant list */
            <div className="max-w-2xl mx-auto">
              {menuItems[activeTab].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline py-6 border-b border-stone-200 last:border-0"
                >
                  <div className="pr-8">
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">{item.name}</h3>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-amber-600 font-semibold text-lg shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          )}
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

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-xs tracking-[0.25em] uppercase text-center mb-3 font-medium">
            What People Say
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-center text-stone-800 mb-4">
            Guest Reviews
          </h2>
          <p className="text-stone-400 text-center max-w-md mx-auto mb-16">
            Don&apos;t take our word for it — hear from the people who dine with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-stone-800">{review.name}</p>
                  <span className="text-xs text-stone-400 uppercase tracking-wider">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-3 font-medium">
              Reserve a Table
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif mb-6">
              Join Us for<br />an Evening
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Whether it&apos;s a romantic dinner for two, a family celebration, or a casual night out — we&apos;d love to have you.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wider">Or call us directly</p>
                <a href="tel:5125551234" className="text-white text-lg hover:text-amber-400 transition-colors">(512) 555-1234</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wider">Private events</p>
                <p className="text-white text-lg">Parties of 12+ welcome</p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-stone-800 rounded-2xl p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-stone-400 text-sm mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-stone-700/50 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-stone-400 text-sm mb-2 block">Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full bg-stone-700/50 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-stone-400 text-sm mb-2 block">Date</label>
                <input
                  type="date"
                  className="w-full bg-stone-700/50 border border-stone-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-stone-400 text-sm mb-2 block">Time</label>
                <select
                  className="w-full bg-stone-700/50 border border-stone-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                >
                  <option value="">Select time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label className="text-stone-400 text-sm mb-2 block">Party Size</label>
              <select
                className="w-full bg-stone-700/50 border border-stone-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
              >
                <option value="">Number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7-8">7-8 Guests</option>
                <option value="9+">9+ Guests (call us)</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="text-stone-400 text-sm mb-2 block">Special Requests</label>
              <textarea
                rows={3}
                placeholder="Allergies, celebrations, seating preferences..."
                className="w-full bg-stone-700/50 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-full text-base font-medium transition-colors"
            >
              Request Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-xs tracking-[0.25em] uppercase text-center mb-3 font-medium">Visit Us</p>
          <h2 className="text-4xl sm:text-5xl font-serif text-center text-stone-800 mb-16">
            Location &amp; Hours
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                title="The Corner Bistro location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.7252948088!2d-97.7430608!3d30.2671530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59f5c0e1b01%3A0x3f5cb19cd68bffc4!2sAustin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-8">
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-2">Address</p>
                  <p className="text-xl text-stone-800">123 Main Street</p>
                  <p className="text-xl text-stone-800">Austin, TX 78701</p>
                </div>
                <div className="mb-8">
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-2">Contact</p>
                  <p className="text-xl text-stone-800">(512) 555-1234</p>
                  <p className="text-xl text-amber-600">hello@cornerbistro.com</p>
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6">
                <h3 className="text-lg font-serif text-stone-800 mb-4">Opening Hours</h3>
                <div className="divide-y divide-stone-200">
                  {hours.map((row, i) => (
                    <div key={i} className="flex justify-between py-3">
                      <span className="text-stone-500">{row.days}</span>
                      <span className="text-amber-600 font-medium">{row.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-700 text-sm font-medium mb-0.5">Sunday Brunch</p>
                  <p className="text-stone-500 text-sm">Every Sunday 10am–1pm — special brunch menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-28 px-6">
        <img
          src="/ambiance.jpg"
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-serif mb-6">Your Table Awaits</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Experience the warmth of our hospitality and the artistry of our kitchen
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#reserve"
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-lg font-medium transition-colors inline-block"
            >
              Reserve a Table
            </a>
            <a
              href="tel:5125551234"
              className="border-2 border-white/40 hover:border-white text-white px-12 py-5 rounded-full text-lg font-medium transition-colors inline-block"
            >
              Call: (512) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <p className="text-2xl font-serif mb-4">The Corner Bistro</p>
            <p className="text-stone-500 leading-relaxed text-sm mb-6">
              Farm-to-table dining in the heart of Austin, Texas. Serving elevated comfort food since 2004.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-600 flex items-center justify-center transition-colors" aria-label="Yelp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.376-.558 1.227-.36 1.334.31l.686 4.295c.07.44-.314.792-.754.9zm-7.85 5.756l1.01-5.07c.19-.96-1.02-1.56-1.728-.854l-3.65 3.636c-.47.47-.172 1.27.467 1.254l3.16-.034c.44-.005.668-.487.74-.932zm-4.094-8.108l4.373 2.72c.825.513.53 1.76-.445 1.88l-5.03.634c-.65.082-1.1-.59-.71-1.06l2.22-3.04c.26-.354.78-.497 1.092-.334zM11.28 3.2l.96 5.064c.18.955-1.04 1.542-1.737.835l-3.59-3.636c-.463-.47-.16-1.268.476-1.248l3.148.056c.437.008.664.484.743.93z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-stone-500 mb-4">Quick Links</p>
            <div className="flex flex-col gap-3">
              <a href="#menu" className="text-stone-400 hover:text-white transition-colors">Menu</a>
              <a href="#about" className="text-stone-400 hover:text-white transition-colors">About</a>
              <a href="#reviews" className="text-stone-400 hover:text-white transition-colors">Reviews</a>
              <a href="#contact" className="text-stone-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-stone-500 mb-4">Contact</p>
            <p className="text-stone-400">123 Main Street</p>
            <p className="text-stone-400">Austin, TX 78701</p>
            <p className="text-stone-400 mt-3">(512) 555-1234</p>
            <p className="text-stone-400 mt-1">hello@cornerbistro.com</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-stone-500 mb-4">Hours</p>
            <p className="text-stone-400">Mon–Thu: 11am–9pm</p>
            <p className="text-stone-400">Fri–Sat: 11am–10pm</p>
            <p className="text-stone-400">Sun: 10am–8pm</p>
            <a
              href="#reserve"
              className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Reserve Now
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-600 text-sm">&copy; 2026 The Corner Bistro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
