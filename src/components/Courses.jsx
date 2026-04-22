import { useState } from 'react'
import { courses } from '../data/courses'

function CourseCard({ course, onEnroll, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? course.gradient : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? course.border : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 24, padding: 28, cursor: 'pointer',
        backdropFilter: 'blur(15px)',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${course.color}22` : '0 4px 20px rgba(0,0,0,0.2)',
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
        position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Badge */}
      {course.badge && (
        <div style={{
          position: 'absolute', top: 16, right: 16,
          background: `${course.color}22`, border: `1px solid ${course.color}55`,
          borderRadius: 20, padding: '4px 10px',
          fontSize: 11, fontWeight: 700, color: course.color, letterSpacing: 0.5
        }}>{course.badge}</div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: `${course.color}18`, border: `1px solid ${course.color}33`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28
        }}>{course.emoji}</div>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{course.title}</h3>
          <span style={{ fontSize: 13, color: course.color, fontWeight: 600 }}>{course.level}</span>
        </div>
      </div>

      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 18 }}>
        {course.desc}
      </p>

      {/* Features */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {course.features.map((f, i) => (
          <span key={i} style={{
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 20, padding: '4px 12px', fontSize: 12, color: 'rgba(255,255,255,0.75)'
          }}>{f}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: course.color }}>
            {course.price} <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>so'm/oy</span>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>
            ⏱ {course.duration} · 👥 {course.students} o'quvchi
          </div>
        </div>
        <button
          onClick={() => onEnroll(course)}
          style={{
            background: `linear-gradient(135deg, ${course.color}, ${course.color}99)`,
            color: '#0a1628', border: 'none', padding: '10px 20px',
            borderRadius: 25, fontSize: 13, fontWeight: 700, cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: `0 4px 15px ${course.color}44`
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          Yozilish →
        </button>
      </div>
    </div>
  )
}

export default function Courses({ onEnroll }) {
  return (
    <section id="courses" style={{ padding: '80px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.25)',
            borderRadius: 50, padding: '6px 18px', marginBottom: 20
          }}>
            <span style={{ fontSize: 12, color: '#00e5a0', fontWeight: 600, letterSpacing: 1 }}>
              📚 KURSLARIMIZ
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginBottom: 16,
            background: 'linear-gradient(135deg, #fff 0%, #00e5a0 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            Qaysi Tilni O'rganasiz?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 500, margin: '0 auto' }}>
            Professional o'qituvchilar bilan sifatli ta'lim oling
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24
        }}>
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} onEnroll={onEnroll} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 60, textAlign: 'center',
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,229,160,0.2)',
          borderRadius: 28, padding: '48px 32px', backdropFilter: 'blur(15px)'
        }}>
          <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            O'zingizga mos kurs topa olmadingizmi?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 28, fontSize: 16 }}>
            Biz siz uchun maxsus dastur tuzib beramiz
          </p>
          <button onClick={() => onEnroll({ name: 'Individual kurs', id: 0 })} style={{
            background: 'linear-gradient(135deg, #ff4081, #8b0057)',
            color: '#fff', border: 'none', padding: '14px 36px',
            borderRadius: 50, fontSize: 16, fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(255,64,129,0.4)',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            Bepul Maslahat Olish
          </button>
        </div>
      </div>
    </section>
  )
}
