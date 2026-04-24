import { useEffect, useRef, useState } from 'react'

const quotes = [
  { text: "Til o'rganish — dunyoga yangi deraza ochish. Har bir yangi so'z — yangi imkoniyat.", author: "Frank Smith", role: "Tilshunos olim" },
  { text: "Har bir yangi til — yangi hayot. Ikki til bilgan odam ikki marta yashaydi.", author: "Chexiya maqoli", role: "Xalq donishmandligi" },
  { text: "Bilim — eng yaxshi boylik. Uni hech kim sizdan tortib ololmaydi.", author: "Arastu", role: "Yunon faylasufi" },
  { text: "O'qish — muvaffaqiyatning kaliti. Har kuni o'qigan odam oldinga boradi.", author: "Benjamin Franklin", role: "Davlat arbobi" },
  { text: "Qancha ko'p til bilsang, shuncha ko'p insonsan. Til — ko'prik.", author: "Goethe", role: "Nemis shoiri" },
  { text: "Til — xalqning ruhi. Tilni yo'qotgan xalq o'zini yo'qotadi.", author: "Wilhelm von Humboldt", role: "Tilshunos" },
  { text: "Har kuni biror yangi narsa o'rgan. Bilim — cheksiz xazina.", author: "Konfutsiy", role: "Xitoy faylasufi" },
]

function QuoteCard({ quote }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 210, height: 280, flexShrink: 0,
        background: hovered ? '#faf5ff' : '#ffffff',
        borderRadius: 28,
        border: `2px solid ${hovered ? '#c4b5fd' : '#e5e7eb'}`,
        position: 'relative',
        fontFamily: "'Nunito', sans-serif",
        transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        transform: hovered
          ? 'perspective(700px) rotateY(-5deg) rotateX(3deg) translateY(-10px) scale(1.03)'
          : 'perspective(700px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)',
        boxShadow: hovered
          ? '0 20px 40px rgba(124,58,237,0.15)'
          : '0 2px 8px rgba(0,0,0,0.06)',
        cursor: 'default',
        padding: '20px 20px 16px',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Quote icon */}
      <div style={{ color: '#a78bfa', marginBottom: 10 }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height={32} width={32}>
          <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z" />
        </svg>
      </div>

      {/* Quote text */}
      <div style={{
        fontSize: 13, fontWeight: 700, color: '#1e1b4b',
        lineHeight: '20px', flex: 1,
      }}>
        {quote.text}
      </div>

      {/* Author */}
      <div style={{
        marginTop: 14, fontWeight: 800, color: '#7c3aed',
        fontSize: 12, lineHeight: '18px',
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.3s ease',
        borderTop: '1px solid #ede9fe', paddingTop: 10,
      }}>
        — {quote.author}
        <span style={{ fontWeight: 500, color: '#9ca3af', display: 'block' }}>{quote.role}</span>
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
    <section style={{ padding: '24px 0 40px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 32, padding: '0 24px' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: '#1e1b4b',
        }}>
          Siz uchun
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
