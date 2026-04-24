import { useEffect, useRef, useState } from 'react'

const quotes = [
  { text: "Til o'rganish — dunyoga yangi deraza ochish.", author: "Frank Smith", role: "Tilshunos olim", color: '#b7e219', text_color: '#465512', label_color: '#7f9b1d' },
  { text: "Har bir yangi til — yangi hayot.", author: "Chexiya maqoli", role: "Xalq donishmandligi", color: '#a78bfa', text_color: '#2e1065', label_color: '#6d28d9' },
  { text: "Bilim — eng yaxshi boylik.", author: "Arastu", role: "Yunon faylasufi", color: '#fbbf24', text_color: '#78350f', label_color: '#b45309' },
  { text: "O'qish — muvaffaqiyatning kaliti.", author: "Benjamin Franklin", role: "Davlat arbobi", color: '#f9a8d4', text_color: '#831843', label_color: '#be185d' },
  { text: "Qancha ko'p til bilsang, shuncha ko'p insonsan.", author: "Goethe", role: "Nemis shoiri", color: '#6ee7b7', text_color: '#064e3b', label_color: '#059669' },
  { text: "Til — xalqning ruhi.", author: "Wilhelm von Humboldt", role: "Tilshunos", color: '#93c5fd', text_color: '#1e3a5f', label_color: '#2563eb' },
  { text: "Har kuni biror yangi narsa o'rgan.", author: "Konfutsiy", role: "Xitoy faylasufi", color: '#fca5a5', text_color: '#7f1d1d', label_color: '#dc2626' },
]

function QuoteCard({ quote }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 190, height: 264, flexShrink: 0,
        background: quote.color,
        borderRadius: 8, position: 'relative',
        fontFamily: "'Nunito', sans-serif",
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.18)' : '0 4px 16px rgba(0,0,0,0.1)',
        cursor: 'default',
      }}
    >
      {/* Label */}
      <div style={{
        textTransform: 'uppercase', fontWeight: 700,
        color: quote.label_color, padding: '24px 24px 0',
        fontSize: 11, lineHeight: '18px', letterSpacing: 0.5
      }}>
        Oyning iqtibosi
      </div>

      {/* Quote icon */}
      <div style={{ color: quote.label_color, opacity: 0.4, paddingLeft: 24, paddingTop: 4 }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height={40} width={40}>
          <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z" />
        </svg>
      </div>

      {/* Quote text */}
      <div style={{
        fontSize: 15, fontWeight: 900, color: quote.text_color,
        padding: '8px 20px 0', lineHeight: '22px',
      }}>
        {quote.text}
      </div>

      {/* Author - shows on hover */}
      <div style={{
        position: 'absolute', bottom: 16, left: 0, right: 0,
        paddingLeft: 24, fontWeight: 700, color: quote.label_color,
        fontSize: 12, lineHeight: '18px',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease',
      }}>
        — {quote.author}<br />
        <span style={{ fontWeight: 500, opacity: 0.8 }}>{quote.role}</span>
      </div>
    </div>
  )
}

export default function Quotes() {
  const trackRef = useRef(null)
  const animRef = useRef(null)
  const posRef = useRef(0)
  const pausedRef = useRef(false)

  const SPEED = 0.5
  const doubled = [...quotes, ...quotes]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED
        const half = track.scrollWidth / 2
        if (posRef.current >= half) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <section style={{ padding: '60px 0', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 40, padding: '0 24px' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: '#1e1b4b',
        }}>
          Ilhomlantiruv chi{' '}
          <span style={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>Iqtiboslar</span>
        </h2>
      </div>

      <div
        style={{ overflow: 'hidden', cursor: 'grab' }}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex', gap: 20,
            width: 'max-content', willChange: 'transform',
            paddingLeft: 24,
          }}
        >
          {doubled.map((q, i) => (
            <QuoteCard key={i} quote={q} />
          ))}
        </div>
      </div>
    </section>
  )
}
