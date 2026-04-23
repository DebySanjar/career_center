export default function Hero({ onEnroll, tg }) {
  const stats = [
    { value: '500+', label: "O'quvchilar", emoji: '👨‍🎓', color: '#7c3aed', bg: '#ede9fe' },
    { value: '5', label: 'Kurslar', emoji: '📚', color: '#ec4899', bg: '#fce7f3' },
    { value: '95%', label: 'Muvaffaqiyat', emoji: '🏆', color: '#f97316', bg: '#fff7ed' },
    { value: '5★', label: 'Reyting', emoji: '⭐', color: '#0891b2', bg: '#e0f2fe' },
  ]

  const tgUser = tg?.initDataUnsafe?.user
  const avatarUrl = tgUser?.photo_url

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
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 900,
              lineHeight: 1.15, marginBottom: 24, color: '#1e1b4b'
            }}>
              Tillarni{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>O'rganing</span>,<br />
              Kelajakni{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f97316, #fbbf24)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>Quring!</span>
            </h1>

            <p style={{
              fontSize: 18, color: '#6b7280',
              lineHeight: 1.7, marginBottom: 36, maxWidth: 480, fontWeight: 600
            }}>
              IELTS, General English, Kids English, Turk tili va Arab tili kurslarida
              professional o'qituvchilar bilan o'rganing! 🚀
            </p>

            {/* Buttons - always side by side */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: 14, flexWrap: 'nowrap' }}>
              <button onClick={onEnroll} style={{
                background: 'linear-gradient(135deg, #0a1628, #0d4f3c)',
                color: '#fff', border: 'none', padding: '15px 28px',
                borderRadius: 10, fontSize: 15, fontWeight: 800, cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(10,22,40,0.35)',
                transition: 'all 0.3s ease', whiteSpace: 'nowrap', flex: '0 0 auto'
              }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 14px 40px rgba(10,22,40,0.5)' }}
                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 30px rgba(10,22,40,0.35)' }}
              >
                Hozir Boshlash 🚀
              </button>
              <a href="#courses" style={{
                background: '#fff', border: '2px solid #c4b5fd',
                color: '#7c3aed', padding: '15px 28px', borderRadius: 10,
                fontSize: 15, fontWeight: 800, textDecoration: 'none',
                transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(124,58,237,0.1)',
                whiteSpace: 'nowrap', flex: '0 0 auto',
                display: 'inline-flex', alignItems: 'center'
              }}
                onMouseEnter={e => { e.target.style.background = '#ede9fe'; e.target.style.borderColor = '#7c3aed' }}
                onMouseLeave={e => { e.target.style.background = '#fff'; e.target.style.borderColor = '#c4b5fd' }}
              >
                Kurslar 📚
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12, marginTop: 48
            }} className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: s.bg, border: `2px solid ${s.color}33`,
                  borderRadius: 20, padding: '16px 10px', textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  animation: `fadeInUp 0.6s ease ${i * 0.1 + 0.4}s both`
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 8px 25px ${s.color}33` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)' }}
                >
                  <div style={{ fontSize: 22 }}>{s.emoji}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: s.color, marginTop: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2, fontWeight: 700 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - static card, only badges float */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'relative', minHeight: 420
          }}>
            <div style={{
              background: '#fff', borderRadius: 32, padding: 32,
              boxShadow: '0 20px 60px rgba(124,58,237,0.15)',
              border: '3px solid #ede9fe',
              width: 320, position: 'relative', zIndex: 2
            }}>
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                {avatarUrl ? (
                  <img src={avatarUrl} alt="User avatar" style={{
                    width: 80, height: 80, borderRadius: '50%', objectFit: 'cover',
                    border: '3px solid #ede9fe', boxShadow: '0 4px 16px rgba(124,58,237,0.2)'
                  }} />
                ) : (
                  <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="Teacher"
                    style={{ width: 100, height: 100, objectFit: 'contain' }} />
                )}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 900, textAlign: 'center', marginBottom: 16, color: '#1e1b4b' }}>
                Qaysi tilni o'rganasiz? 🌍
              </h3>
              {[
                { flag: '🇬🇧', name: 'IELTS & General English', color: '#7c3aed', bg: '#ede9fe' },
                { flag: '🧒', name: 'Kids English', color: '#f97316', bg: '#fff7ed' },
                { flag: '🇹🇷', name: 'Turk tili (TYS, CEFR)', color: '#dc2626', bg: '#fef2f2' },
                { flag: '🕌', name: 'Arab tili (At-Tanal)', color: '#059669', bg: '#ecfdf5' },
              ].map((lang, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 14px', borderRadius: 14, marginBottom: 8,
                  background: i === 0 ? lang.bg : '#f9fafb',
                  border: `2px solid ${i === 0 ? lang.color + '44' : '#e5e7eb'}`,
                  cursor: 'pointer', transition: 'all 0.2s', fontWeight: 700
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = lang.bg; e.currentTarget.style.borderColor = lang.color + '44' }}
                  onMouseLeave={e => { e.currentTarget.style.background = i === 0 ? lang.bg : '#f9fafb'; e.currentTarget.style.borderColor = i === 0 ? lang.color + '44' : '#e5e7eb' }}
                >
                  <span style={{ fontSize: 18 }}>{lang.flag}</span>
                  <span style={{ fontSize: 13, color: i === 0 ? lang.color : '#374151' }}>{lang.name}</span>
                  {i === 0 && (
                    <span style={{ marginLeft: 'auto', fontSize: 10, color: lang.color, fontWeight: 800, background: lang.bg, padding: '2px 8px', borderRadius: 20, border: `1px solid ${lang.color}44` }}>
                      MASHHUR
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Only badges float */}
            <div style={{
              position: 'absolute', top: 20, right: -10, zIndex: 3,
              background: '#fbbf24', borderRadius: 20, padding: '10px 16px',
              boxShadow: '0 8px 20px rgba(251,191,36,0.4)',
              animation: 'float2 4s ease-in-out infinite',
              fontWeight: 900, fontSize: 13, color: '#fff'
            }}>⭐ 5.0 Reyting</div>

            <div style={{
              position: 'absolute', bottom: 30, left: -20, zIndex: 3,
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              borderRadius: 20, padding: '10px 16px',
              boxShadow: '0 8px 20px rgba(124,58,237,0.4)',
              animation: 'float 6s ease-in-out infinite 1s',
              fontWeight: 900, fontSize: 13, color: '#fff'
            }}>🎓 500+ O'quvchi</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-btns { flex-direction: row !important; flex-wrap: wrap !important; }
          .hero-btns a, .hero-btns button { flex: 1 1 auto; text-align: center; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
