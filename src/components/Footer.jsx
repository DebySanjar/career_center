export default function Footer() {
  return (
    <footer id="footer" style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(255,255,255,0.08)',
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
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #00e5a0, #0f6b50)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, fontWeight: 800, color: '#0a1628'
              }}>E</div>
              <span style={{ fontSize: 20, fontWeight: 700 }}>
                Edu<span style={{ color: '#00e5a0' }}>Career</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7 }}>
              Professional til o'quv markazi. Kelajagingizni til bilan quring.
            </p>
          </div>

          {/* Links */}
          <div id="about">
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: '#00e5a0' }}>Kurslar</h4>
            {['Ingliz tili', 'Rus tili', 'Xitoy tili', 'Nemis tili', 'Koreys tili'].map(item => (
              <a key={item} href="#courses" style={{
                display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                fontSize: 14, marginBottom: 10, transition: 'color 0.2s'
              }}
                onMouseEnter={e => e.target.style.color = '#00e5a0'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >{item}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: '#00e5a0' }}>Aloqa</h4>
            {[
              { icon: '📱', text: '+998 90 123 45 67' },
              { icon: '✉️', text: 'info@educareer.uz' },
              { icon: '📍', text: 'Toshkent, O\'zbekiston' },
              { icon: '⏰', text: 'Du-Sha: 9:00 - 20:00' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 10
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: '#00e5a0' }}>Ijtimoiy tarmoqlar</h4>
            {[
              { icon: '✈️', label: 'Telegram', href: '#' },
              { icon: '📸', label: 'Instagram', href: '#' },
              { icon: '▶️', label: 'YouTube', href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                fontSize: 14, marginBottom: 12, transition: 'color 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#00e5a0'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                <span>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24, textAlign: 'center',
          color: 'rgba(255,255,255,0.35)', fontSize: 13
        }}>
          © 2025 EduCareer. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}
