export default function Hero({ onEnroll }) {
  const stats = [
    { value: '500+', label: "O'quvchilar" },
    { value: '12+', label: 'Kurslar' },
    { value: '95%', label: 'Muvaffaqiyat' },
    { value: '5★', label: 'Reyting' },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 24px 60px', position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left */}
          <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.3)',
              borderRadius: 50, padding: '6px 16px', marginBottom: 24
            }}>
              <span style={{ fontSize: 12, color: '#00e5a0', fontWeight: 600, letterSpacing: 1 }}>
                🎓 TIL O'QUV MARKAZI
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800,
              lineHeight: 1.15, marginBottom: 24,
              background: 'linear-gradient(135deg, #ffffff 0%, #00e5a0 50%, #ff4081 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Kelajagingizni<br />Til Bilan<br />Quring
            </h1>

            <p style={{
              fontSize: 18, color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7, marginBottom: 36, maxWidth: 480
            }}>
              Ingliz, Rus, Xitoy va boshqa tillarda professional kurslar.
              Tajribali o'qituvchilar bilan tez va samarali o'rganing.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button onClick={onEnroll} style={{
                background: 'linear-gradient(135deg, #00e5a0, #0f6b50)',
                color: '#0a1628', border: 'none', padding: '16px 36px',
                borderRadius: 50, fontSize: 16, fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(0,229,160,0.4)',
                transition: 'all 0.3s ease', animation: 'pulse-glow 2s infinite'
              }}
                onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
              >
                Hozir Boshlash →
              </button>
              <a href="#courses" style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', padding: '16px 36px', borderRadius: 50,
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.12)'; e.target.style.borderColor = '#00e5a0' }}
                onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.07)'; e.target.style.borderColor = 'rgba(255,255,255,0.2)' }}
              >
                Kurslarni Ko'rish
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16, marginTop: 48
            }} className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16, padding: '16px 12px', textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#00e5a0'; e.currentTarget.style.background = 'rgba(0,229,160,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                >
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#00e5a0' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - floating card */}
          <div style={{ display: 'flex', justifyContent: 'center', animation: 'float 4s ease-in-out infinite' }}>
            <div style={{
              width: 340, background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 28, padding: 32, backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 16, textAlign: 'center' }}>🌍</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, textAlign: 'center', marginBottom: 20 }}>
                Qaysi tilni o'rganmoqchisiz?
              </h3>
              {['🇬🇧 Ingliz tili', '🇷🇺 Rus tili', '🇨🇳 Xitoy tili', '🇩🇪 Nemis tili', '🇫🇷 Fransuz tili'].map((lang, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px', borderRadius: 12, marginBottom: 8,
                  background: i === 0 ? 'rgba(0,229,160,0.15)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === 0 ? 'rgba(0,229,160,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,229,160,0.12)'; e.currentTarget.style.borderColor = 'rgba(0,229,160,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = i === 0 ? 'rgba(0,229,160,0.15)' : 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = i === 0 ? 'rgba(0,229,160,0.4)' : 'rgba(255,255,255,0.08)' }}
                >
                  <span style={{ fontSize: 15, color: i === 0 ? '#00e5a0' : 'rgba(255,255,255,0.8)' }}>{lang}</span>
                  {i === 0 && <span style={{ marginLeft: 'auto', fontSize: 11, color: '#00e5a0', fontWeight: 600 }}>MASHHUR</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
