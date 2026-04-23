import { useState, useEffect } from 'react'
import careerLogo from '../assets/career.png'

const TYPEWRITER_TEXT = 'Career Center'

function TypewriterText() {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'deleting' | 'pause'
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    let timeout
    if (phase === 'typing') {
      if (idx < TYPEWRITER_TEXT.length) {
        timeout = setTimeout(() => {
          setDisplayed(TYPEWRITER_TEXT.slice(0, idx + 1))
          setIdx(idx + 1)
        }, 90)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 1400)
      }
    } else if (phase === 'deleting') {
      if (idx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(TYPEWRITER_TEXT.slice(0, idx - 1))
          setIdx(idx - 1)
        }, 55)
      } else {
        timeout = setTimeout(() => setPhase('typing'), 400)
      }
    }
    return () => clearTimeout(timeout)
  }, [phase, idx])

  return (
    <span style={{
      fontSize: 18, fontWeight: 900, color: '#7c3aed',
      letterSpacing: -0.3, minWidth: 140, display: 'inline-block'
    }}>
      {displayed}
    </span>
  )
}

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
      background: 'linear-gradient(160deg, #ede9fe 0%, #fce7f3 40%, #dbeafe 100%)',
      borderBottom: '2px solid rgba(124,58,237,0.12)',
      boxShadow: '0 4px 24px rgba(124,58,237,0.08)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70
      }}>
        {/* Logo + typewriter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src={careerLogo}
            alt="Career Center Logo"
            style={{ height: 58, width: 58, objectFit: 'contain', borderRadius: 14 }}
          />
          <TypewriterText />
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
            background: 'linear-gradient(135deg, #0a1628, #0d4f3c)',
            color: '#fff', padding: '10px 24px', borderRadius: 10,
            textDecoration: 'none', fontWeight: 800, fontSize: 14,
            boxShadow: '0 4px 15px rgba(10,22,40,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(10,22,40,0.5)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(10,22,40,0.35)' }}
          >Ro'yxatdan o'tish ✨</a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none',
          background: menuOpen ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.12)',
          border: '2px solid rgba(124,58,237,0.25)',
          cursor: 'pointer', padding: '7px 11px', color: '#7c3aed', fontSize: 20,
          borderRadius: 10, fontWeight: 700, lineHeight: 1,
          transition: 'all 0.2s'
        }} className="burger-btn" aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'linear-gradient(160deg, #ede9fe 0%, #fce7f3 100%)',
          borderTop: '2px solid rgba(124,58,237,0.1)',
          padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 10
        }}>
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#1e1b4b', textDecoration: 'none',
                fontSize: 15, fontWeight: 800, padding: '13px 18px',
                borderRadius: 14,
                background: '#fff',
                border: '2px solid rgba(124,58,237,0.15)',
                boxShadow: '4px 4px 0px rgba(124,58,237,0.2)',
                display: 'flex', alignItems: 'center', gap: 10,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(-2px,-2px)'
                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(124,58,237,0.3)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translate(0,0)'
                e.currentTarget.style.boxShadow = '4px 4px 0px rgba(124,58,237,0.2)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.15)'
              }}
            >
              <span style={{ fontSize: 18, width: 28, textAlign: 'center' }}>{['🏠', '📚', 'ℹ️', '📞'][i]}</span>
              <span>{link.label}</span>
              <span style={{ marginLeft: 'auto', color: '#c4b5fd', fontSize: 16 }}>›</span>
            </a>
          ))}
          <a href="#courses" onClick={() => setMenuOpen(false)} style={{
            background: 'linear-gradient(135deg, #0a1628, #0d4f3c)',
            color: '#fff', padding: '14px 22px', borderRadius: 14,
            textDecoration: 'none', fontWeight: 800, textAlign: 'center',
            marginTop: 4, fontSize: 15,
            border: '2px solid #000',
            boxShadow: '4px 4px 0px #000',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'all 0.15s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0px #000' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = '4px 4px 0px #000' }}
          >
            <span>✨</span> Ro'yxatdan o'tish
          </a>
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
