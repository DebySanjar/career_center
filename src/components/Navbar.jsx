import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Kurslar', href: '#courses' },
    { label: 'Haqimizda', href: '#about' },
    { label: 'Aloqa', href: '#footer' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 24px',
      background: scrolled ? 'rgba(10,22,40,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,229,160,0.15)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, #00e5a0, #0f6b50)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 800, color: '#0a1628',
            boxShadow: '0 0 20px rgba(0,229,160,0.4)'
          }}>E</div>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>
            Edu<span style={{ color: '#00e5a0' }}>Career</span>
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
              fontSize: 15, fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#00e5a0'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
            >{link.label}</a>
          ))}
          <a href="#courses" style={{
            background: 'linear-gradient(135deg, #00e5a0, #0f6b50)',
            color: '#0a1628', padding: '10px 22px', borderRadius: 25,
            textDecoration: 'none', fontWeight: 700, fontSize: 14,
            boxShadow: '0 4px 15px rgba(0,229,160,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(0,229,160,0.5)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(0,229,160,0.3)' }}
          >Ro'yxatdan o'tish</a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: 8, color: '#fff', fontSize: 24
        }} className="burger-btn" aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,22,40,0.97)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(0,229,160,0.15)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
                fontSize: 16, fontWeight: 500, padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)'
              }}>{link.label}</a>
          ))}
          <a href="#courses" onClick={() => setMenuOpen(false)} style={{
            background: 'linear-gradient(135deg, #00e5a0, #0f6b50)',
            color: '#0a1628', padding: '12px 22px', borderRadius: 25,
            textDecoration: 'none', fontWeight: 700, textAlign: 'center'
          }}>Ro'yxatdan o'tish</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
