import { useState } from 'react'
import careerLogo from '../assets/career.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '2px solid rgba(124,58,237,0.12)',
      boxShadow: '0 4px 24px rgba(124,58,237,0.08)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src={careerLogo}
            alt="EduCareer Logo"
            style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 12 }}
          />
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              color: '#4c1d95', textDecoration: 'none',
              fontSize: 15, fontWeight: 700, transition: 'color 0.2s',
              borderRadius: 8, padding: '4px 8px'
            }}
              onMouseEnter={e => e.target.style.color = '#ec4899'}
              onMouseLeave={e => e.target.style.color = '#4c1d95'}
            >{link.label}</a>
          ))}
          <a href="#courses" style={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            color: '#fff', padding: '10px 24px', borderRadius: 50,
            textDecoration: 'none', fontWeight: 800, fontSize: 14,
            boxShadow: '0 4px 15px rgba(124,58,237,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(124,58,237,0.5)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(124,58,237,0.35)' }}
          >Ro'yxatdan o'tish ✨</a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'rgba(124,58,237,0.1)', border: 'none',
          cursor: 'pointer', padding: '8px 12px', color: '#7c3aed', fontSize: 22,
          borderRadius: 10, fontWeight: 700
        }} className="burger-btn" aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
          borderTop: '2px solid rgba(124,58,237,0.1)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 12
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#4c1d95', textDecoration: 'none',
                fontSize: 16, fontWeight: 700, padding: '10px 0',
                borderBottom: '1px solid rgba(124,58,237,0.08)'
              }}>{link.label}</a>
          ))}
          <a href="#courses" onClick={() => setMenuOpen(false)} style={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            color: '#fff', padding: '13px 22px', borderRadius: 50,
            textDecoration: 'none', fontWeight: 800, textAlign: 'center', marginTop: 4
          }}>Ro'yxatdan o'tish ✨</a>
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
