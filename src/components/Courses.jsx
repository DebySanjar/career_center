import { useState, useRef } from 'react'
import { courses } from '../data/courses'

function MapSection() {
  const [mapHovered, setMapHovered] = useState(false)
  const [pinBounce, setPinBounce] = useState(false)

  const handleMapClick = () => {
    window.open('https://yandex.uz/maps/-/CPChy2Zi', '_blank')
  }

  const handlePinClick = (e) => {
    e.stopPropagation()
    setPinBounce(true)
    setTimeout(() => setPinBounce(false), 600)
    handleMapClick()
  }

  return (
    <div style={{ marginTop: 8 }} className="map-section">
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <h3 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#1e1b4b', marginBottom: 8 }}>
          Bizni{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f97316, #fbbf24)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>Toping!</span>
        </h3>
        <p style={{ color: '#6b7280', fontWeight: 600, fontSize: 15 }}>
          Xaritaga bosing va yo'l topishni boshlang 🗺️
        </p>
      </div>

      {/* Map card */}
      <div
        onClick={handleMapClick}
        onMouseEnter={() => setMapHovered(true)}
        onMouseLeave={() => setMapHovered(false)}
        style={{
          borderRadius: 32, overflow: 'hidden', cursor: 'pointer',
          border: 'none',
          boxShadow: mapHovered
            ? '0 24px 60px rgba(249,115,22,0.3), 0 0 0 6px rgba(249,115,22,0.1)'
            : '0 8px 30px rgba(0,0,0,0.12)',
          transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          transform: mapHovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: 380 }}>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=71.786419%2C40.391460&z=16&pt=71.786419%2C40.391460%2Cpm2rdm"
            width="100%"
            height="380"
            style={{ display: 'block', border: 'none', filter: mapHovered ? 'brightness(1.05)' : 'brightness(1)', transition: 'filter 0.3s' }}
            title="Bizning manzil"
            allowFullScreen
          />

          <div style={{
            position: 'absolute', inset: 0,
            background: mapHovered ? 'rgba(249,115,22,0.06)' : 'transparent',
            transition: 'background 0.3s', pointerEvents: 'none'
          }} />

          {/* Phone badge - bottom left */}
          <div style={{
            position: 'absolute', bottom: 16, left: 16, zIndex: 10,
            background: 'linear-gradient(135deg, #f97316, #fbbf24)',
            borderRadius: 20, padding: '10px 18px',
            boxShadow: '0 8px 24px rgba(249,115,22,0.5)',
            fontWeight: 900, fontSize: 13, color: '#fff',
            display: 'flex', alignItems: 'center', gap: 6,
            animation: 'float2 3s ease-in-out infinite',
            pointerEvents: 'none'
          }}>
            📞 +998 99 300 31 28
          </div>

          {/* "Xaritada ko'rish" - top right */}
          <div
            onClick={handlePinClick}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 10,
              background: 'linear-gradient(135deg, #f97316, #fbbf24)',
              borderRadius: 20, padding: '10px 18px',
              boxShadow: '0 8px 24px rgba(249,115,22,0.5)',
              fontWeight: 900, fontSize: 13, color: '#fff',
              cursor: 'pointer',
              animation: pinBounce ? 'bounce-in 0.5s ease' : 'float 4s ease-in-out infinite',
              display: 'flex', alignItems: 'center', gap: 6,
              pointerEvents: 'all'
            }}
          >
            📍 Xaritada ko'rish
          </div>
        </div>
      </div>
    </div>
  )
}

const courseImages = {  1: 'https://cdn-icons-png.flaticon.com/512/3898/3898082.png',
  2: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png',
  3: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
  4: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
  5: 'https://cdn-icons-png.flaticon.com/512/3209/3209267.png',
}

function CourseCard({ course, onEnroll, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -12, y: dx * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        background: course.bgColor,
        border: '2.5px solid #1a1a2e',
        borderRadius: 28, padding: 28, cursor: 'pointer',
        transition: hovered ? 'box-shadow 0.2s, background 0.2s' : 'all 0.5s ease',
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px) scale(1.02)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
        boxShadow: hovered
          ? `6px 10px 0px #1a1a2e, 0 20px 40px ${course.shadow}`
          : `4px 6px 0px #1a1a2e, 0 4px 20px ${course.shadow}`,
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
        position: 'relative', overflow: 'hidden',
        willChange: 'transform'
      }}
    >
      {/* Shine overlay */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 26, pointerEvents: 'none',
          background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(255,255,255,0.22) 0%, transparent 60%)`,
          zIndex: 1
        }} />
      )}

      {/* Badge */}
      {course.badge && (
        <div style={{
          position: 'absolute', top: 16, right: 16, zIndex: 2,
          background: course.color,
          border: '2px solid #1a1a2e',
          borderRadius: 12, padding: '5px 12px',
          fontSize: 11, fontWeight: 800, color: '#fff',
          boxShadow: '2px 3px 0px #1a1a2e'
        }}>{course.badge}</div>
      )}

      {/* Icon + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, position: 'relative', zIndex: 2 }}>
        <div style={{
          width: 68, height: 68, borderRadius: 18,
          background: 'rgba(255,255,255,0.7)',
          border: '2px solid #1a1a2e',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', flexShrink: 0,
          boxShadow: '3px 3px 0px #1a1a2e',
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.1) rotate(-4deg)' : 'scale(1) rotate(0deg)'
        }}>
          <img src={courseImages[course.id]} alt={course.title} style={{ width: 48, height: 48, objectFit: 'contain' }} />
        </div>
        <div>
          <div style={{ fontSize: 12, color: course.color, fontWeight: 800, marginBottom: 2 }}>{course.subtitle}</div>
          <h3 style={{ fontSize: 19, fontWeight: 900, color: '#1a1a2e' }}>{course.title}</h3>
          <span style={{
            fontSize: 12, color: '#fff', fontWeight: 700,
            background: course.color, borderRadius: 8, padding: '2px 10px',
            border: '1.5px solid #1a1a2e', display: 'inline-block', marginTop: 2
          }}>{course.level}</span>
        </div>
      </div>

      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, marginBottom: 18, fontWeight: 600, position: 'relative', zIndex: 2 }}>
        {course.desc}
      </p>

      {/* Features */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20, position: 'relative', zIndex: 2 }}>
        {course.features.map((f, i) => (
          <span key={i} style={{
            background: 'rgba(255,255,255,0.65)',
            border: '1.5px solid #1a1a2e',
            borderRadius: 10, padding: '4px 12px',
            fontSize: 12, color: '#1a1a2e', fontWeight: 700,
            boxShadow: '1px 2px 0px #1a1a2e'
          }}>✓ {f}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 16, borderTop: '2px dashed rgba(26,26,46,0.3)',
        position: 'relative', zIndex: 2
      }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: '#1a1a2e' }}>
          {course.price} <span style={{ fontSize: 12, fontWeight: 600, color: '#6b7280' }}>so'm/oy</span>
        </div>
        <button
          onClick={() => onEnroll(course)}
          style={{
            background: course.color,
            color: '#fff', border: '2px solid #1a1a2e', padding: '10px 22px',
            borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: 'pointer',
            transition: 'all 0.15s ease',
            boxShadow: '3px 3px 0px #1a1a2e'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '5px 5px 0px #1a1a2e' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = '3px 3px 0px #1a1a2e' }}
        >
          Yozilish →
        </button>
      </div>
    </div>
  )
}

export default function Courses({ onEnroll }) {
  return (
    <section id="courses" style={{ padding: '60px 24px 16px', position: 'relative', zIndex: 1 }}>
      <style>{`
        @media (max-width: 768px) {
          .courses-section { padding: 40px 16px 24px !important; }
          .map-section { margin-top: 12px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #ede9fe, #fce7f3)',
            border: '2px solid #c4b5fd',
            borderRadius: 50, padding: '8px 20px', marginBottom: 20
          }}>
            <span style={{ fontSize: 18 }}>📚</span>
            <span style={{ fontSize: 13, color: '#7c3aed', fontWeight: 800, letterSpacing: 0.5 }}>KURSLARIMIZ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 16, color: '#1e1b4b' }}>
            Qaysi Tilni{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>O'rganasiz?</span>
          </h2>
          <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 500, margin: '0 auto', fontWeight: 600 }}>
            Professional o'qituvchilar bilan sifatli ta'lim oling 🌟
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} onEnroll={onEnroll} index={i} />
          ))}
        </div>

        {/* Map Section */}
        <MapSection />
      </div>
    </section>
  )
}
