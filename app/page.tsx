export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">The Corner Bistro</h1>
          <p className="text-center text-amber-100 mt-2">Classic American Cuisine</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4">Welcome to Our Table</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Fresh, locally-sourced ingredients. Family recipes passed down for generations.
          </p>
          <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            View Menu
          </button>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Hours</h3>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold">Monday - Thursday</span>
                <span>11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold">Friday - Saturday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold">Sunday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Location</h3>
            <div className="space-y-3 text-lg">
              <p className="text-slate-700">123 Main Street</p>
              <p className="text-slate-700">Austin, TX 78701</p>
              <p className="text-slate-700 font-semibold mt-4">(512) 555-1234</p>
              <p className="text-slate-700">info@cornerbistro.com</p>
            </div>
            <button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-800 mb-12">Menu Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Classic Burger", desc: "Angus beef, cheddar, lettuce, tomato, house sauce", price: "$14" },
              { name: "Grilled Salmon", desc: "Fresh Atlantic salmon, lemon butter, seasonal vegetables", price: "$22" },
              { name: "Caesar Salad", desc: "Romaine, parmesan, croutons, house-made dressing", price: "$12" }
            ].map((item) => (
              <div key={item.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-2xl font-bold text-slate-800 mb-2">{item.name}</h4>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <p className="text-amber-600 font-bold text-xl">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-slate-800 mb-6">Our Story</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            For over 20 years, The Corner Bistro has been serving the Austin community with fresh, 
            home-cooked meals made from locally-sourced ingredients.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our family recipes and warm atmosphere have made us a neighborhood favorite. 
            Come experience the difference that quality ingredients and genuine hospitality make.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Dine With Us?</h3>
          <p className="text-xl text-amber-100 mb-8">
            Call ahead for reservations or walk-ins welcome!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition">
              Call Now
            </button>
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold transition">
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2026 The Corner Bistro. All rights reserved.</p>
          <p className="text-slate-400 mt-2">123 Main Street, Austin, TX 78701 | (512) 555-1234</p>
        </div>
      </footer>
    </div>
  );
}
