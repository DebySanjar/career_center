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
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      opacity: hiding ? 0 : 1,
      transform: hiding ? 'scale(1.04)' : 'scale(1)',
      pointerEvents: hiding ? 'none' : 'all',
    }}>
      <style>{`
        .sp-absolute { position: absolute; }
        .sp-inline { display: inline-block; }
        .sp-loader { display: flex; align-items: center; gap: 2px; }
        .sp-dash {
          animation: sp-dashArray 2s ease-in-out infinite, sp-dashOffset 2s linear infinite;
        }
        .sp-spin {
          animation: sp-spinDashArray 2s ease-in-out infinite, sp-spin 8s ease-in-out infinite, sp-dashOffset 2s linear infinite;
          transform-origin: center;
        }
        @keyframes sp-dashArray {
          0%   { stroke-dasharray: 0 1 359 0; }
          50%  { stroke-dasharray: 0 359 1 0; }
          100% { stroke-dasharray: 359 1 0 0; }
        }
        @keyframes sp-spinDashArray {
          0%   { stroke-dasharray: 270 90; }
          50%  { stroke-dasharray: 0 360; }
          100% { stroke-dasharray: 270 90; }
        }
        @keyframes sp-dashOffset {
          0%   { stroke-dashoffset: 365; }
          100% { stroke-dashoffset: 5; }
        }
        @keyframes sp-spin {
          0%           { rotate: 0deg; }
          12.5%, 25%   { rotate: 270deg; }
          37.5%, 50%   { rotate: 540deg; }
          62.5%, 75%   { rotate: 810deg; }
          87.5%, 100%  { rotate: 1080deg; }
        }
      `}</style>

      {/* Hidden gradient defs */}
      <svg height={0} width={0} viewBox="0 0 64 64" className="sp-absolute">
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="sp-b">
            <stop stopColor="#973BED" />
            <stop stopColor="#007CFF" offset={1} />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2={0} x2={0} y1={64} x1={0} id="sp-c">
            <stop stopColor="#FFC800" />
            <stop stopColor="#F0F" offset={1} />
            <animateTransform repeatCount="indefinite"
              keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
              keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
              dur="8s"
              values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
              type="rotate" attributeName="gradientTransform" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="sp-d">
            <stop stopColor="#00E0ED" />
            <stop stopColor="#00DA72" offset={1} />
          </linearGradient>
        </defs>
      </svg>

      <div className="sp-loader">
        {/* C - dash, gradient b */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-b)" pathLength={360}
            d="M 52,16 A 24,24 0 1 0 52,48" />
        </svg>

        {/* A - dash, gradient d */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-d)" pathLength={360}
            d="M 8,60 L 32,4 L 56,60 M 16,40 H 48" />
        </svg>

        {/* R - dash, gradient b */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-b)" pathLength={360}
            d="M 12,60 V 4 H 36 C 48,4 52,12 52,22 C 52,32 46,38 36,38 H 12 M 36,38 L 54,60" />
        </svg>

        {/* E - dash, gradient c */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-c)" pathLength={360}
            d="M 52,4 H 12 V 60 H 52 M 12,32 H 46" />
        </svg>

        {/* E - spin, gradient c */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-d)" pathLength={360}
            d="M 52,4 H 12 V 60 H 52 M 12,32 H 46" />
        </svg>

        {/* R - dash, gradient d */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-b)" pathLength={360}
            d="M 12,60 V 4 H 36 C 48,4 52,12 52,22 C 52,32 46,38 36,38 H 12 M 36,38 L 54,60" />
        </svg>

        {/* space */}
        <div style={{ width: 20 }} />

        {/* C - dash, gradient b */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-c)" pathLength={360}
            d="M 52,16 A 24,24 0 1 0 52,48" />
        </svg>

        {/* E - dash, gradient d */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-d)" pathLength={360}
            d="M 52,4 H 12 V 60 H 52 M 12,32 H 46" />
        </svg>

        {/* N - spin, gradient c */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-b)" pathLength={360}
            d="M 10,60 V 4 L 54,60 V 4" />
        </svg>

        {/* T - dash, gradient b */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-c)" pathLength={360}
            d="M 8,4 H 56 M 32,4 V 60" />
        </svg>

        {/* E - dash, gradient d */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-d)" pathLength={360}
            d="M 52,4 H 12 V 60 H 52 M 12,32 H 46" />
        </svg>

        {/* R - dash, gradient b */}
        <svg className="sp-inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64}>
          <path className="sp-dash" strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#sp-b)" pathLength={360}
            d="M 12,60 V 4 H 36 C 48,4 52,12 52,22 C 52,32 46,38 36,38 H 12 M 36,38 L 54,60" />
        </svg>
      </div>
    </div>
  )
}
