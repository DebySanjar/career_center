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
              <img src={careerLogo} alt="Logo" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 12, background: '#fff', padding: 4 }} />
              <span style={{ fontSize: 22, fontWeight: 900, color: '#fff' }}>
                Edu<span style={{ color: '#fbbf24' }}>Career</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.7, fontWeight: 600 }}>
              Professional til o'quv markazi. Kelajagingizni til bilan quring. 🚀
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['✈️', '📸', '▶️'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, textDecoration: 'none', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >{icon}</a>
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

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 16, color: '#fbbf24' }}>Aloqa</h4>
            {[
              { icon: '📱', text: '+998 90 123 45 67' },
              { icon: '✉️', text: 'info@educareer.uz' },
              { icon: '📍', text: "Toshkent, O'zbekiston" },
              { icon: '⏰', text: 'Du-Sha: 9:00 - 20:00' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 10, fontWeight: 600
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '2px solid rgba(255,255,255,0.15)',
          paddingTop: 24, textAlign: 'center',
          color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600
        }}>
          © 2025 EduCareer. Barcha huquqlar himoyalangan. 💜
        </div>
      </div>
    </footer>
  )
}
