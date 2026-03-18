'use client';

import { useState } from 'react';

const menuItems = {
  starters: [
    { name: "Queso & Chips", price: "$9", desc: "House-made white queso with roasted green chiles, served with warm tortilla chips" },
    { name: "Fried Pickles", price: "$8", desc: "Beer-battered dill pickles with ranch and our tangy comeback sauce" },
    { name: "Wings (8 pc)", price: "$12", desc: "Crispy fried wings tossed in your choice of buffalo, BBQ, or lemon pepper" },
  ],
  mains: [
    { name: "Chicken Fried Steak", price: "$16", desc: "Hand-breaded and golden fried, smothered in cream gravy with mashed potatoes and green beans", img: "/salmon.jpg" },
    { name: "The Smash Burger", price: "$14", desc: "Double smashed patties, American cheese, pickles, grilled onions, special sauce on a toasted bun", img: "/burger.jpg" },
    { name: "Grilled Chicken Salad", price: "$13", desc: "Chopped romaine, grilled chicken, avocado, corn, black beans, tomatoes, cilantro-lime dressing", img: "/salad.jpg" },
  ],
  desserts: [
    { name: "Pecan Pie", price: "$7", desc: "Classic Texas pecan pie with a buttery, flaky crust — served warm with vanilla ice cream" },
    { name: "Banana Pudding", price: "$6", desc: "Homemade with vanilla wafers, fresh bananas, and whipped cream" },
    { name: "Brownie Sundae", price: "$8", desc: "Warm chocolate brownie topped with Blue Bell ice cream, hot fudge, and whipped cream" },
  ],
};

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best chicken fried steak in Austin, hands down. My family has been coming here every Friday for three years. The kids love it too.",
    source: "Google",
  },
  {
    name: "James R.",
    rating: 5,
    text: "Finally a place that feels like home. Great burgers, cold drinks, and the staff remembers your name. You can't beat that.",
    source: "Yelp",
  },
  {
    name: "Maria G.",
    rating: 5,
    text: "We had my mom's birthday dinner here and they made it so special. The banana pudding alone is worth the trip. Love this place!",
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

  return (
    <div className="min-h-screen font-sans text-warm-800 bg-cream">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-300/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          <a href="#" className="text-forest-900 text-xl font-serif">
            Magnolia Kitchen
          </a>

          <button
            className="md:hidden text-warm-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-warm-600 hover:text-forest-700 transition-colors text-sm">Menu</a>
            <a href="#about" className="text-warm-600 hover:text-forest-700 transition-colors text-sm">About</a>
            <a href="#reviews" className="text-warm-600 hover:text-forest-700 transition-colors text-sm">Reviews</a>
            <a href="#contact" className="text-warm-600 hover:text-forest-700 transition-colors text-sm">Contact</a>
            <a
              href="#reserve"
              className="bg-forest-800 hover:bg-forest-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-warm-300/40 px-6 pb-6 pt-2">
            <div className="flex flex-col gap-4">
              <a href="#menu" onClick={() => setMenuOpen(false)} className="text-warm-700 py-2 text-lg">Menu</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-warm-700 py-2 text-lg">About</a>
              <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-warm-700 py-2 text-lg">Reviews</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-warm-700 py-2 text-lg">Contact</a>
              <a
                href="#reserve"
                onClick={() => setMenuOpen(false)}
                className="bg-forest-800 text-white px-5 py-3 rounded-lg text-center font-medium mt-2"
              >
                Book a Table
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Austin, Texas &middot; Family-Owned Since 2004
              </div>
              <h1 className="text-warm-800 text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
                Good food,{' '}
                <span className="text-forest-700">good people,</span>{' '}
                great time.
              </h1>
              <p className="text-warm-500 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
                Home-style cooking, family recipes, and a seat at the table for everyone. Come hungry, leave happy.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#menu"
                  className="bg-forest-800 hover:bg-forest-900 text-white px-8 py-4 rounded-lg text-base font-medium transition-colors"
                >
                  See the Menu
                </a>
                <a
                  href="#reserve"
                  className="border-2 border-warm-300 hover:border-forest-600 text-warm-700 hover:text-forest-700 px-8 py-4 rounded-lg text-base font-medium transition-colors"
                >
                  Book a Table
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/hero.jpg"
                  alt="Magnolia Kitchen dining room"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="text-warm-800 font-semibold text-lg">4.8 Stars</p>
                  <p className="text-warm-400 text-sm">200+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Dishes (visual strip) ─── */}
      <section className="py-6 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menuItems.mains.map((dish, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden h-64">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-semibold text-lg">{dish.name}</p>
                  <p className="text-white/70 text-sm">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Menu ─── */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-forest-600 text-sm font-medium mb-2">What We&apos;re Serving</p>
            <h2 className="text-4xl sm:text-5xl font-serif text-warm-800">
              The Menu
            </h2>
          </div>

          {/* Starters */}
          <div className="mb-16">
            <h3 className="text-forest-700 text-sm font-medium uppercase tracking-wider mb-6 flex items-center gap-3">
              <span className="h-px bg-forest-400/30 flex-1" />
              Starters
              <span className="h-px bg-forest-400/30 flex-1" />
            </h3>
            <div className="space-y-0">
              {menuItems.starters.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline py-5 border-b border-warm-300/40 last:border-0"
                >
                  <div className="pr-6">
                    <h4 className="text-warm-800 font-medium text-lg">{item.name}</h4>
                    <p className="text-warm-400 text-sm mt-1">{item.desc}</p>
                  </div>
                  <span className="text-forest-700 font-semibold text-lg shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mains */}
          <div className="mb-16">
            <h3 className="text-forest-700 text-sm font-medium uppercase tracking-wider mb-6 flex items-center gap-3">
              <span className="h-px bg-forest-400/30 flex-1" />
              Mains
              <span className="h-px bg-forest-400/30 flex-1" />
            </h3>
            <div className="space-y-0">
              {menuItems.mains.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline py-5 border-b border-warm-300/40 last:border-0"
                >
                  <div className="pr-6">
                    <h4 className="text-warm-800 font-medium text-lg">{item.name}</h4>
                    <p className="text-warm-400 text-sm mt-1">{item.desc}</p>
                  </div>
                  <span className="text-forest-700 font-semibold text-lg shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="text-forest-700 text-sm font-medium uppercase tracking-wider mb-6 flex items-center gap-3">
              <span className="h-px bg-forest-400/30 flex-1" />
              Desserts
              <span className="h-px bg-forest-400/30 flex-1" />
            </h3>
            <div className="space-y-0">
              {menuItems.desserts.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline py-5 border-b border-warm-300/40 last:border-0"
                >
                  <div className="pr-6">
                    <h4 className="text-warm-800 font-medium text-lg">{item.name}</h4>
                    <p className="text-warm-400 text-sm mt-1">{item.desc}</p>
                  </div>
                  <span className="text-forest-700 font-semibold text-lg shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 px-6 bg-forest-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-forest-400 text-sm font-medium mb-2">Our Story</p>
              <h2 className="text-4xl sm:text-5xl font-serif mb-8 leading-tight">
                Twenty years of feeding{' '}
                <span className="text-forest-400">our neighbors.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Since 2004, Magnolia Kitchen has been the place where Austin families come
                to eat, catch up, and feel at home. No fuss, just real food made right.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Everything&apos;s made from scratch, just like our grandma taught us. From our
                famous chicken fried steak to our weekend brunch, we keep it simple and keep it good.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl font-serif text-white">3</p>
                  <p className="text-white/50 text-sm mt-1">Generations Strong</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-white">4.8</p>
                  <p className="text-white/50 text-sm mt-1">Average Rating</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-white">20+</p>
                  <p className="text-white/50 text-sm mt-1">Years in Austin</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/chef.jpg"
                alt="Our kitchen"
                className="rounded-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-forest-600 text-sm font-medium mb-2">What People Say</p>
            <h2 className="text-4xl sm:text-5xl font-serif text-warm-800">
              Loved by our guests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-warm-300/40 hover:border-forest-400/40 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-warm-600 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-warm-300/30">
                  <p className="font-medium text-warm-800">{review.name}</p>
                  <span className="text-xs text-warm-400 uppercase tracking-wider bg-cream-dark px-3 py-1 rounded-full">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reservation ─── */}
      <section id="reserve" className="py-24 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-forest-600 text-sm font-medium mb-2">Reservations</p>
            <h2 className="text-4xl sm:text-5xl font-serif text-warm-800 mb-6 leading-tight">
              Save your spot.
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed mb-10">
              Whether it&apos;s a birthday, a family dinner, or just a Tuesday — we&apos;d love to have you. Walk-ins always welcome too.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-forest-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-warm-400 text-sm">Call us anytime</p>
                  <a href="tel:5125551234" className="text-warm-800 text-lg font-medium hover:text-forest-700 transition-colors">(512) 555-1234</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-forest-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-warm-400 text-sm">Private events</p>
                  <p className="text-warm-800 text-lg font-medium">Parties of 12+ welcome</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-warm-300/40 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-warm-600 text-sm mb-2 block font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-cream border border-warm-300/60 rounded-lg px-4 py-3 text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-warm-600 text-sm mb-2 block font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full bg-cream border border-warm-300/60 rounded-lg px-4 py-3 text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-warm-600 text-sm mb-2 block font-medium">Date</label>
                <input
                  type="date"
                  className="w-full bg-cream border border-warm-300/60 rounded-lg px-4 py-3 text-warm-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-warm-600 text-sm mb-2 block font-medium">Time</label>
                <select
                  className="w-full bg-cream border border-warm-300/60 rounded-lg px-4 py-3 text-warm-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors appearance-none"
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
              <label className="text-warm-600 text-sm mb-2 block font-medium">Party Size</label>
              <select
                className="w-full bg-cream border border-warm-300/60 rounded-lg px-4 py-3 text-warm-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors appearance-none"
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
              <label className="text-warm-600 text-sm mb-2 block font-medium">Special Requests</label>
              <textarea
                rows={3}
                placeholder="Allergies, celebrations, seating preferences..."
                className="w-full bg-cream border border-warm-300/60 rounded-lg px-4 py-3 text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-forest-800 hover:bg-forest-900 text-white py-4 rounded-lg text-base font-medium transition-colors"
            >
              Request Reservation
            </button>
          </form>
        </div>
      </section>

      {/* ─── Contact & Location ─── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-forest-600 text-sm font-medium mb-2">Visit Us</p>
            <h2 className="text-4xl sm:text-5xl font-serif text-warm-800">
              Come say hello.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Map — wider */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-md h-[400px]">
              <iframe
                title="Magnolia Kitchen location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.7252948088!2d-97.7430608!3d30.2671530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59f5c0e1b01%3A0x3f5cb19cd68bffc4!2sAustin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-white rounded-xl p-6 border border-warm-300/40">
                <p className="text-warm-400 text-sm font-medium mb-3">Address</p>
                <p className="text-warm-800 text-lg">123 Main Street</p>
                <p className="text-warm-800 text-lg">Austin, TX 78701</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-warm-300/40">
                <p className="text-warm-400 text-sm font-medium mb-3">Contact</p>
                <p className="text-warm-800 text-lg">(512) 555-1234</p>
                <p className="text-forest-600 text-lg">hello@magnoliakitchen.com</p>
              </div>
              <div className="bg-forest-900 rounded-xl p-6 text-white">
                <p className="text-forest-400 text-sm font-medium mb-4">Hours</p>
                <div className="space-y-3">
                  {hours.map((row, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-white/70">{row.days}</span>
                      <span className="text-white font-medium">{row.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-forest-400 text-sm font-medium">Sunday Brunch</p>
                  <p className="text-white/70 text-sm mt-1">Every Sunday 10am–1pm — special brunch menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-6 lg:mx-10 mb-12">
        <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden">
          <img
            src="/ambiance.jpg"
            alt="Restaurant ambiance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-900/80" />
          <div className="relative z-10 text-center text-white py-24 px-6">
            <h2 className="text-4xl sm:text-5xl font-serif mb-4">Your table is waiting.</h2>
            <p className="text-lg text-white/70 mb-10 max-w-md mx-auto">
              Good food, good company — come on in.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="#reserve"
                className="bg-white text-forest-900 hover:bg-forest-100 px-10 py-4 rounded-lg text-base font-medium transition-colors"
              >
                Reserve a Table
              </a>
              <a
                href="tel:5125551234"
                className="border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-lg text-base font-medium transition-colors"
              >
                Call: (512) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-forest-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <p className="text-xl font-serif mb-4">Magnolia Kitchen</p>
            <p className="text-white/50 leading-relaxed text-sm mb-6">
              Home-style cooking in the heart of Austin, Texas. Family-owned and operated since 2004.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-forest-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-forest-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-forest-600 flex items-center justify-center transition-colors" aria-label="Yelp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.376-.558 1.227-.36 1.334.31l.686 4.295c.07.44-.314.792-.754.9zm-7.85 5.756l1.01-5.07c.19-.96-1.02-1.56-1.728-.854l-3.65 3.636c-.47.47-.172 1.27.467 1.254l3.16-.034c.44-.005.668-.487.74-.932zm-4.094-8.108l4.373 2.72c.825.513.53 1.76-.445 1.88l-5.03.634c-.65.082-1.1-.59-.71-1.06l2.22-3.04c.26-.354.78-.497 1.092-.334zM11.28 3.2l.96 5.064c.18.955-1.04 1.542-1.737.835l-3.59-3.636c-.463-.47-.16-1.268.476-1.248l3.148.056c.437.008.664.484.743.93z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-white/40 mb-4">Quick Links</p>
            <div className="flex flex-col gap-3">
              <a href="#menu" className="text-white/60 hover:text-white transition-colors">Menu</a>
              <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
              <a href="#reviews" className="text-white/60 hover:text-white transition-colors">Reviews</a>
              <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-white/40 mb-4">Contact</p>
            <p className="text-white/60">123 Main Street</p>
            <p className="text-white/60">Austin, TX 78701</p>
            <p className="text-white/60 mt-3">(512) 555-1234</p>
            <p className="text-white/60 mt-1">hello@magnoliakitchen.com</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-white/40 mb-4">Hours</p>
            <p className="text-white/60">Mon–Thu: 11am–9pm</p>
            <p className="text-white/60">Fri–Sat: 11am–10pm</p>
            <p className="text-white/60">Sun: 10am–8pm</p>
            <a
              href="#reserve"
              className="inline-block mt-4 bg-forest-600 hover:bg-forest-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Reserve Now
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">&copy; 2026 Magnolia Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
