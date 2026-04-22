export default function Background() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0,
      background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 30%, #0d4f3c 70%, #0a1628 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient-shift 12s ease infinite',
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Blobs */}
      <div style={{
        position: 'absolute', width: 500, height: 500,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'radial-gradient(circle, rgba(0,229,160,0.12) 0%, transparent 70%)',
        top: '-100px', left: '-100px',
        animation: 'blob 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400,
        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
        background: 'radial-gradient(circle, rgba(255,64,129,0.1) 0%, transparent 70%)',
        bottom: '-80px', right: '-80px',
        animation: 'blob 10s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,92,0.4) 0%, transparent 70%)',
        top: '40%', left: '50%', transform: 'translate(-50%,-50%)'
      }} />
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,160,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,160,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
    </div>
  )
}
