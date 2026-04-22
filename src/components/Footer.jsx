import careerLogo from '../assets/career.png'

export default function Footer() {
  return (
    <footer id="footer" style={{
      position: 'relative', zIndex: 1,
      background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
      padding: '60px 24px 32px'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 40, marginBottom: 48
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src={careerLogo} alt="Logo" style={{ height: 48, width: 48, objectFit: 'contain', borderRadius: 12, background: '#fff', padding: 4 }} />
              <span style={{ fontSize: 22, fontWeight: 900, color: '#fff' }}>
                Career <span style={{ color: '#fbbf24' }}>Center</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.7, fontWeight: 600 }}>
              Professional til o'quv markazi. Kelajagingizni til bilan quring. 🚀
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[
                { icon: '✈️', label: 'Telegram', href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
                { icon: '▶️', label: 'YouTube', href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, textDecoration: 'none', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div id="about">
            <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 16, color: '#fbbf24' }}>Kurslar</h4>
            {['IELTS & CEFR', 'General English', 'Kids English', 'Turk tili (TYS, CEFR)', 'Arab tili (At-Tanal, CEFR)'].map(item => (
              <a key={item} href="#courses" style={{
                display: 'block', color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                fontSize: 14, marginBottom: 10, transition: 'color 0.2s', fontWeight: 600
              }}
                onMouseEnter={e => e.target.style.color = '#fbbf24'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
              >→ {item}</a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '2px solid rgba(255,255,255,0.15)',
          paddingTop: 24, textAlign: 'center',
          color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600
        }}>
          © 2025 Career Center. Barcha huquqlar himoyalangan. 💜
        </div>
      </div>
    </footer>
  )
}
