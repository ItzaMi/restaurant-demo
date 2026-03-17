'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonPrimary = {
    backgroundColor: '#d97706',
    color: 'white',
    padding: '16px 40px',
    fontSize: '18px',
    borderRadius: '6px',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const buttonOutline = {
    border: '2px solid white',
    color: 'white',
    padding: '16px 40px',
    fontSize: '18px',
    borderRadius: '6px',
    textDecoration: 'none',
    display: 'inline-block',
    backgroundColor: 'transparent',
  };

  const navLink = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
        <img
          src="/hero.jpg"
          alt="Restaurant"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        
        {/* Nav */}
        <nav style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 48px' }}>
          <span style={{ color: 'white', fontSize: '28px' }}>The Corner Bistro</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#menu" style={navLink}>Menu</a>
            <a href="#about" style={navLink}>About</a>
            <a href="#contact" style={navLink}>Contact</a>
            <a href="tel:5125551234" style={{ ...buttonPrimary, padding: '12px 24px', fontSize: '16px' }}>
              Reserve: (512) 555-1234
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 100px)', textAlign: 'center', padding: '0 24px' }}>
          <p style={{ color: '#fbbf24', fontSize: '14px', letterSpacing: '4px', marginBottom: '16px' }}>EST. 2004 • AUSTIN, TEXAS</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(48px, 10vw, 96px)', marginBottom: '24px', lineHeight: 1.1 }}>
            Where Flavor<br />Meets Soul
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', marginBottom: '40px' }}>
            Farm-to-table cuisine with locally sourced ingredients and family recipes.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#menu" style={buttonPrimary}>View Menu</a>
            <a href="tel:5125551234" style={buttonOutline}>Book a Table</a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{ padding: '80px 24px', backgroundColor: '#fafaf9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#d97706', fontSize: '14px', letterSpacing: '3px', textAlign: 'center', marginBottom: '8px' }}>FROM OUR KITCHEN</p>
          <h2 style={{ fontSize: '48px', textAlign: 'center', color: '#292524', marginBottom: '64px' }}>Signature Dishes</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { name: "Herb-Crusted Salmon", price: "$32", desc: "Wild-caught Atlantic salmon with seasonal vegetables and lemon beurre blanc", img: "/salmon.jpg" },
              { name: "Wagyu Burger", price: "$28", desc: "House-ground wagyu beef, aged cheddar, caramelized onions, brioche bun", img: "/burger.jpg" },
              { name: "Heirloom Tomato Salad", price: "$18", desc: "Locally-grown tomatoes, burrata, basil, aged balsamic, olive oil", img: "/salad.jpg" },
            ].map((dish, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <img src={dish.img} alt={dish.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '20px', color: '#292524', margin: 0 }}>{dish.name}</h3>
                    <span style={{ color: '#d97706', fontSize: '20px' }}>{dish.price}</span>
                  </div>
                  <p style={{ color: '#78716c', margin: 0, lineHeight: 1.6 }}>{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <img src="/chef.jpg" alt="Our kitchen" style={{ borderRadius: '12px', width: '100%', height: '400px', objectFit: 'cover', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }} />
          <div>
            <p style={{ color: '#d97706', fontSize: '14px', letterSpacing: '3px', marginBottom: '8px' }}>OUR STORY</p>
            <h2 style={{ fontSize: '48px', color: '#292524', marginBottom: '32px' }}>Twenty Years of Tradition</h2>
            <p style={{ color: '#78716c', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px' }}>
              Since 2004, The Corner Bistro has been Austin's destination for elevated comfort food. 
              We believe in simple, honest cooking using the finest ingredients from local farms.
            </p>
            <p style={{ color: '#78716c', fontSize: '18px', lineHeight: 1.8 }}>
              Our menu changes with the seasons. From grandmother's pasta recipes to innovative 
              takes on American classics, every plate tells a story.
            </p>
            <div style={{ display: 'flex', gap: '48px', marginTop: '40px' }}>
              <div>
                <p style={{ fontSize: '36px', color: '#292524', margin: 0 }}>20+</p>
                <p style={{ color: '#a8a29e', margin: 0 }}>Years in Austin</p>
              </div>
              <div>
                <p style={{ fontSize: '36px', color: '#292524', margin: 0 }}>15</p>
                <p style={{ color: '#a8a29e', margin: 0 }}>Local Farm Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 24px', backgroundColor: '#292524', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
          <div>
            <p style={{ color: '#fbbf24', fontSize: '14px', letterSpacing: '3px', marginBottom: '8px' }}>VISIT US</p>
            <h2 style={{ fontSize: '48px', marginBottom: '40px' }}>Location & Hours</h2>
            
            <div style={{ marginBottom: '32px' }}>
              <p style={{ color: '#a8a29e', marginBottom: '4px' }}>Address</p>
              <p style={{ fontSize: '20px', margin: 0 }}>123 Main Street</p>
              <p style={{ fontSize: '20px', margin: 0 }}>Austin, TX 78701</p>
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <p style={{ color: '#a8a29e', marginBottom: '4px' }}>Contact</p>
              <p style={{ fontSize: '20px', margin: 0 }}>(512) 555-1234</p>
              <p style={{ fontSize: '20px', margin: 0, color: '#fbbf24' }}>hello@cornerbistro.com</p>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank"
              style={{ display: 'inline-block', border: '2px solid white', color: 'white', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none' }}
            >
              Get Directions →
            </a>
          </div>

          <div style={{ backgroundColor: '#1c1917', borderRadius: '12px', padding: '32px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '32px' }}>Opening Hours</h3>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #44403c' }}>
                <span>Monday – Thursday</span>
                <span style={{ color: '#fbbf24' }}>11am – 9pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #44403c' }}>
                <span>Friday – Saturday</span>
                <span style={{ color: '#fbbf24' }}>11am – 10pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
                <span>Sunday</span>
                <span style={{ color: '#fbbf24' }}>10am – 8pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ position: 'relative', padding: '120px 24px' }}>
        <img src="/ambiance.jpg" alt="Restaurant" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '56px', marginBottom: '24px' }}>Join Us Tonight</h2>
          <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '40px' }}>
            Experience the warmth of our hospitality and the artistry of our kitchen
          </p>
          <a href="tel:5125551234" style={{ ...buttonPrimary, padding: '20px 48px', fontSize: '20px' }}>
            Call Now: (512) 555-1234
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1c1917', color: 'white', padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '24px', marginBottom: '16px' }}>The Corner Bistro</p>
        <p style={{ color: '#a8a29e', marginBottom: '8px' }}>123 Main Street, Austin, TX 78701</p>
        <p style={{ color: '#a8a29e', marginBottom: '24px' }}>(512) 555-1234</p>
        <p style={{ color: '#78716c', fontSize: '14px' }}>© 2026 The Corner Bistro. All rights reserved.</p>
      </footer>
    </div>
  );
}
