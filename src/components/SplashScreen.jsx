import { useState, useEffect } from 'react'

export default function SplashScreen({ onDone }) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2600)
    const t2 = setTimeout(() => onDone(), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'linear-gradient(160deg, #ede9fe 0%, #fce7f3 40%, #dbeafe 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 24,
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      opacity: hiding ? 0 : 1,
      transform: hiding ? 'scale(1.04)' : 'scale(1)',
      pointerEvents: hiding ? 'none' : 'all',
    }}>
      <style>{`
        @keyframes splash-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes splash-text-in {
          0%   { opacity: 0; transform: translateY(20px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes splash-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes splash-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Spinning gradient ring */}
      <div style={{
        position: 'absolute',
        width: 280, height: 280,
        borderRadius: '50%',
        background: 'conic-gradient(from 0deg, #973BED, #007CFF, #FFC800, #FF00FF, #00E0ED, #00DA72, #973BED)',
        animation: 'splash-rotate 3s linear infinite',
        opacity: 0.15,
        filter: 'blur(20px)',
      }} />

      {/* Career Center text with animated gradient */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        animation: 'splash-text-in 0.8s ease 0.2s both, splash-pulse 2s ease-in-out infinite',
        position: 'relative', zIndex: 1,
      }}>
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900,
          background: 'linear-gradient(90deg, #973BED, #007CFF, #FFC800, #FF00FF, #00E0ED, #00DA72, #973BED)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: -2,
          animation: 'splash-gradient 3s ease infinite',
          textAlign: 'center',
          lineHeight: 1.1,
        }}>
          Career<br />Center
        </h1>
        <span style={{
          fontSize: 14, color: '#9ca3af', fontWeight: 700,
          letterSpacing: 3, textTransform: 'uppercase',
          animation: 'splash-text-in 0.8s ease 0.5s both'
        }}>
          Til O'quv Markazi
        </span>
      </div>

      {/* Decorative dots */}
      <div style={{
        display: 'flex', gap: 8, marginTop: 16,
        animation: 'splash-text-in 0.8s ease 0.7s both'
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            animation: `splash-pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  )
}
