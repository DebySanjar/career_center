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
      <span style={{
        display: 'inline-block', width: 2, height: '1em',
        background: '#ec4899', marginLeft: 2, verticalAlign: 'middle',
        animation: 'blink-cursor 0.7s step-end infinite'
      }} />
      <style>{`@keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
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

  const menuColors = [
    { bg: 'linear-gradient(135deg, #7c3aed, #a78bfa)', shadow: 'rgba(124,58,237,0.4)' },
    { bg: 'linear-gradient(135deg, #0891b2, #67e8f9)', shadow: 'rgba(8,145,178,0.4)' },
    { bg: 'linear-gradient(135deg, #f97316, #fbbf24)', shadow: 'rgba(249,115,22,0.4)' },
    { bg: 'linear-gradient(135deg, #059669, #6ee7b7)', shadow: 'rgba(5,150,105,0.4)' },
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
          cursor: 'pointer', padding: '10px 16px', color: '#7c3aed', fontSize: 28,
          borderRadius: 14, fontWeight: 700, lineHeight: 1,
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
                color: '#fff', textDecoration: 'none',
                fontSize: 16, fontWeight: 800, padding: '14px 20px',
                borderRadius: 16,
                background: menuColors[i].bg,
                boxShadow: `0 4px 16px ${menuColors[i].shadow}`,
                display: 'flex', alignItems: 'center', gap: 10,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'perspective(400px) rotateX(-4deg) translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${menuColors[i].shadow}` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'perspective(400px) rotateX(0deg)'; e.currentTarget.style.boxShadow = `0 4px 16px ${menuColors[i].shadow}` }}
            >
              <span style={{ fontSize: 20 }}>{['🏠', '📚', 'ℹ️', '📞'][i]}</span>
              {link.label}
            </a>
          ))}
          <a href="#courses" onClick={() => setMenuOpen(false)} style={{
            background: 'linear-gradient(135deg, #0a1628, #0d4f3c)',
            color: '#fff', padding: '15px 22px', borderRadius: 10,
            textDecoration: 'none', fontWeight: 800, textAlign: 'center',
            marginTop: 4, fontSize: 16,
            boxShadow: '0 6px 20px rgba(10,22,40,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
          }}>
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
