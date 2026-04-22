import { useState } from 'react'
import { courses } from '../data/courses'

const courseImages = {
  1: 'https://cdn-icons-png.flaticon.com/512/3898/3898082.png',
  2: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png',
  3: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
  4: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
  5: 'https://cdn-icons-png.flaticon.com/512/3209/3209267.png',
}

function CourseCard({ course, onEnroll, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? course.bgColor : '#fff',
        border: `3px solid ${hovered ? course.color : course.borderColor}`,
        borderRadius: 28, padding: 28, cursor: 'pointer',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered
          ? `0 20px 50px ${course.color}33`
          : '0 4px 20px rgba(0,0,0,0.07)',
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
        position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Badge */}
      {course.badge && (
        <div style={{
          position: 'absolute', top: 16, right: 16,
          background: course.bgColor,
          border: `2px solid ${course.color}44`,
          borderRadius: 20, padding: '4px 12px',
          fontSize: 11, fontWeight: 800, color: course.color
        }}>{course.badge}</div>
      )}

      {/* Icon + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{
          width: 72, height: 72, borderRadius: 20,
          background: course.bgColor,
          border: `2px solid ${course.borderColor}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', flexShrink: 0
        }}>
          <img
            src={courseImages[course.id]}
            alt={course.title}
            style={{ width: 50, height: 50, objectFit: 'contain' }}
          />
        </div>
        <div>
          <div style={{ fontSize: 12, color: course.color, fontWeight: 800, marginBottom: 2 }}>
            {course.subtitle}
          </div>
          <h3 style={{ fontSize: 19, fontWeight: 900, color: '#1e1b4b' }}>{course.title}</h3>
          <span style={{
            fontSize: 12, color: '#fff', fontWeight: 700,
            background: course.color, borderRadius: 20, padding: '2px 10px'
          }}>{course.level}</span>
        </div>
      </div>

      <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginBottom: 18, fontWeight: 600 }}>
        {course.desc}
      </p>

      {/* Features */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {course.features.map((f, i) => (
          <span key={i} style={{
            background: course.bgColor,
            border: `1px solid ${course.borderColor}`,
            borderRadius: 20, padding: '4px 12px',
            fontSize: 12, color: course.color, fontWeight: 700
          }}>✓ {f}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 16, borderTop: `2px dashed ${course.borderColor}`
      }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 900, color: course.color }}>
            {course.price} <span style={{ fontSize: 12, fontWeight: 600, color: '#9ca3af' }}>so'm/oy</span>
          </div>
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2, fontWeight: 600 }}>
            ⏱ {course.duration}
          </div>
        </div>
        <button
          onClick={() => onEnroll(course)}
          style={{
            background: `linear-gradient(135deg, ${course.color}, ${course.color}cc)`,
            color: '#fff', border: 'none', padding: '11px 22px',
            borderRadius: 50, fontSize: 13, fontWeight: 800, cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: `0 4px 15px ${course.color}44`
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
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

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #ede9fe, #fce7f3)',
            border: '2px solid #c4b5fd',
            borderRadius: 50, padding: '8px 20px', marginBottom: 20
          }}>
            <span style={{ fontSize: 18 }}>📚</span>
            <span style={{ fontSize: 13, color: '#7c3aed', fontWeight: 800, letterSpacing: 0.5 }}>
              KURSLARIMIZ
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 16, color: '#1e1b4b'
          }}>
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
          <button onClick={() => onEnroll({ name: 'Individual kurs', id: 0, emoji: '🎯' })} style={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            color: '#fff', border: 'none', padding: '14px 36px',
            borderRadius: 50, fontSize: 16, fontWeight: 800, cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(124,58,237,0.4)',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            Bepul Maslahat Olish 🎯
          </button>
        </div>
      </div>
    </section>
  )
}
