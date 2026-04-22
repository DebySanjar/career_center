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
    <div style={{ marginTop: 60 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
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
        background: hovered ? course.bgColor : '#fff',
        border: `3px solid ${hovered ? course.color : course.borderColor}`,
        borderRadius: 28, padding: 28, cursor: 'pointer',
        transition: hovered ? 'background 0.2s, border 0.2s, box-shadow 0.2s' : 'all 0.5s ease',
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-10px) scale(1.02)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
        boxShadow: hovered
          ? `0 24px 60px ${course.color}44, 0 0 0 1px ${course.color}22`
          : '0 4px 20px rgba(0,0,0,0.07)',
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
        position: 'relative', overflow: 'hidden',
        willChange: 'transform'
      }}
    >
      {/* Shine overlay */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 26, pointerEvents: 'none',
          background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
          zIndex: 1
        }} />
      )}

      {/* Badge */}
      {course.badge && (
        <div style={{
          position: 'absolute', top: 16, right: 16, zIndex: 2,
          background: course.bgColor,
          border: `2px solid ${course.color}44`,
          borderRadius: 20, padding: '4px 12px',
          fontSize: 11, fontWeight: 800, color: course.color
        }}>{course.badge}</div>
      )}

      {/* Icon + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, position: 'relative', zIndex: 2 }}>
        <div style={{
          width: 72, height: 72, borderRadius: 20,
          background: course.bgColor,
          border: `2px solid ${course.borderColor}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', flexShrink: 0,
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.1) rotate(-4deg)' : 'scale(1) rotate(0deg)'
        }}>
          <img src={courseImages[course.id]} alt={course.title} style={{ width: 50, height: 50, objectFit: 'contain' }} />
        </div>
        <div>
          <div style={{ fontSize: 12, color: course.color, fontWeight: 800, marginBottom: 2 }}>{course.subtitle}</div>
          <h3 style={{ fontSize: 19, fontWeight: 900, color: '#1e1b4b' }}>{course.title}</h3>
          <span style={{ fontSize: 12, color: '#fff', fontWeight: 700, background: course.color, borderRadius: 20, padding: '2px 10px' }}>{course.level}</span>
        </div>
      </div>

      <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginBottom: 18, fontWeight: 600, position: 'relative', zIndex: 2 }}>
        {course.desc}
      </p>

      {/* Features */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20, position: 'relative', zIndex: 2 }}>
        {course.features.map((f, i) => (
          <span key={i} style={{
            background: course.bgColor, border: `1px solid ${course.borderColor}`,
            borderRadius: 20, padding: '4px 12px', fontSize: 12, color: course.color, fontWeight: 700
          }}>✓ {f}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 16, borderTop: `2px dashed ${course.borderColor}`,
        position: 'relative', zIndex: 2
      }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 900, color: course.color }}>
            {course.price} <span style={{ fontSize: 12, fontWeight: 600, color: '#9ca3af' }}>so'm/oy</span>
          </div>
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2, fontWeight: 600 }}>⏱ {course.duration}</div>
        </div>
        <button
          onClick={() => onEnroll(course)}
          style={{
            background: `linear-gradient(135deg, ${course.color}, ${course.color}cc)`,
            color: '#fff', border: 'none', padding: '11px 22px',
            borderRadius: 50, fontSize: 13, fontWeight: 800, cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: `0 4px 15px ${course.color}44`,
            transform: hovered ? 'scale(1.08)' : 'scale(1)'
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.12)'; e.target.style.boxShadow = `0 8px 25px ${course.color}66` }}
          onMouseLeave={e => { e.target.style.transform = hovered ? 'scale(1.08)' : 'scale(1)'; e.target.style.boxShadow = `0 4px 15px ${course.color}44` }}
        >
          Yozilish →
        </button>
      </div>
    </div>
  )
}

function CtaButton({ onClick }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #4c1d95, #7c3aed, #ec4899)'
          : 'linear-gradient(135deg, #7c3aed, #ec4899)',
        color: '#fff', border: 'none', padding: hovered ? '16px 44px' : '14px 36px',
        borderRadius: 50, fontSize: 16, fontWeight: 800, cursor: 'pointer',
        boxShadow: hovered
          ? '0 16px 40px rgba(124,58,237,0.6), 0 0 0 6px rgba(124,58,237,0.15)'
          : '0 8px 25px rgba(124,58,237,0.4)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: clicked ? 'scale(0.95)' : hovered ? 'translateY(-4px) scale(1.04)' : 'translateY(0) scale(1)',
        letterSpacing: hovered ? 0.5 : 0,
      }}
    >
      {clicked ? '✅ Zo\'r tanlov!' : hovered ? '🎯 Hoziroq Bog\'laning!' : 'Bepul Maslahat Olish 🎯'}
    </button>
  )
}

export default function Courses({ onEnroll }) {
  return (
    <section id="courses" style={{ padding: '80px 24px', position: 'relative', zIndex: 1 }}>
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

        {/* CTA */}
        <div style={{
          marginTop: 60, textAlign: 'center',
          background: 'linear-gradient(135deg, #ede9fe, #fce7f3)',
          border: '3px solid #c4b5fd',
          borderRadius: 32, padding: '48px 32px',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🤔</div>
          <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12, color: '#1e1b4b' }}>
            O'zingizga mos kurs topa olmadingizmi?
          </h3>
          <p style={{ color: '#6b7280', marginBottom: 28, fontSize: 16, fontWeight: 600 }}>
            Biz siz uchun maxsus dastur tuzib beramiz 💡
          </p>
          <CtaButton onClick={() => onEnroll({ name: 'Individual kurs', id: 0, emoji: '🎯' })} />
        </div>

        {/* Map Section */}
        <MapSection />
      </div>
    </section>
  )
}
