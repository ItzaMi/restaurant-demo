export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#2C3A2E]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif tracking-tight text-[#2C3A2E]">The Corner Bistro</h1>
          <div className="flex gap-8 text-sm">
            <a href="#menu" className="text-[#2C3A2E] hover:text-[#5A7C5E] transition">Menu</a>
            <a href="#about" className="text-[#2C3A2E] hover:text-[#5A7C5E] transition">About</a>
            <a href="#reserve" className="bg-[#2C3A2E] text-[#FAF7F2] px-6 py-2 rounded-full hover:bg-[#5A7C5E] transition">Reserve</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #2C3A2E 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1 border border-[#2C3A2E]/20 rounded-full text-xs tracking-wider text-[#5A7C5E] uppercase">
            Est. 2004
          </div>
          <h2 className="text-7xl md:text-8xl font-serif text-[#2C3A2E] mb-6 leading-none">
            Where Flavor<br />Meets Tradition
          </h2>
          <p className="text-xl text-[#2C3A2E]/70 max-w-2xl mx-auto leading-relaxed mb-12">
            Farm-to-table cuisine crafted with locally sourced ingredients and family recipes 
            passed down through generations.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#2C3A2E] text-[#FAF7F2] px-8 py-4 rounded-full hover:bg-[#5A7C5E] transition-all hover:scale-105">
              View Our Menu
            </button>
            <button className="border-2 border-[#2C3A2E] text-[#2C3A2E] px-8 py-4 rounded-full hover:bg-[#2C3A2E] hover:text-[#FAF7F2] transition-all">
              Book a Table
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#5A7C5E]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-[#C4A574]/20 blur-3xl" />
      </section>

      {/* Featured Dishes */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm tracking-wider text-[#5A7C5E] uppercase mb-2">Signature Dishes</p>
            <h3 className="text-5xl font-serif text-[#2C3A2E]">Chef's Selection</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={i} className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5A7C5E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-1 bg-[#C4A574] mb-6" />
                  <h4 className="text-2xl font-serif text-[#2C3A2E] mb-3">{dish.name}</h4>
                  <p className="text-[#2C3A2E]/60 leading-relaxed mb-6">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-serif text-[#2C3A2E]">{dish.price}</span>
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

      {/* Hours & Location */}
      <section className="py-32 px-6 bg-[#2C3A2E] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-sm tracking-wider text-[#C4A574] uppercase mb-4">Visit Us</p>
            <h3 className="text-5xl font-serif mb-12">Location & Hours</h3>
            
            <div className="space-y-8">
              <div>
                <p className="text-[#FAF7F2]/50 text-sm mb-2">Address</p>
                <p className="text-xl leading-relaxed">
                  123 Main Street<br />
                  Austin, TX 78701
                </p>
              </div>
              
              <div>
                <p className="text-[#FAF7F2]/50 text-sm mb-2">Contact</p>
                <p className="text-xl">(512) 555-1234</p>
                <p className="text-xl">hello@cornerbistro.com</p>
              </div>

              <button className="mt-8 border-2 border-[#FAF7F2] text-[#FAF7F2] px-8 py-4 rounded-full hover:bg-[#FAF7F2] hover:text-[#2C3A2E] transition-all">
                Get Directions
              </button>
            </div>
          </div>

          <div>
            <div className="bg-[#1A221B] rounded-2xl p-10">
              <div className="space-y-6">
                {[
                  { day: "Monday – Thursday", hours: "11:00 AM – 9:00 PM" },
                  { day: "Friday – Saturday", hours: "11:00 AM – 10:00 PM" },
                  { day: "Sunday", hours: "10:00 AM – 8:00 PM" }
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-[#FAF7F2]/10 last:border-0">
                    <span className="text-lg font-serif">{schedule.day}</span>
                    <span className="text-[#C4A574]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-wider text-[#5A7C5E] uppercase mb-4">Our Story</p>
          <h3 className="text-5xl font-serif text-[#2C3A2E] mb-8">Twenty Years of Tradition</h3>
          <div className="space-y-6 text-lg text-[#2C3A2E]/70 leading-relaxed">
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

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#5A7C5E] to-[#2C3A2E] text-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-6xl font-serif mb-6">Join Us Tonight</h3>
          <p className="text-xl text-[#FAF7F2]/80 mb-12">
            Experience the warmth of our hospitality and the artistry of our kitchen
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#FAF7F2] text-[#2C3A2E] px-10 py-5 rounded-full hover:bg-[#C4A574] hover:text-[#FAF7F2] transition-all text-lg font-medium">
              Reserve Your Table
            </button>
            <button className="border-2 border-[#FAF7F2] text-[#FAF7F2] px-10 py-5 rounded-full hover:bg-[#FAF7F2]/10 transition-all text-lg">
              Order Takeout
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A221B] text-[#FAF7F2] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#FAF7F2]/50">© 2026 The Corner Bistro. All rights reserved.</p>
          <p className="text-[#FAF7F2]/30 mt-2 text-sm">123 Main Street, Austin, TX 78701 | (512) 555-1234</p>
        </div>
      </footer>
    </div>
  );
}
