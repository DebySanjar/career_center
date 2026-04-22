export default function Background() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0,
      background: 'linear-gradient(160deg, #ede9fe 0%, #fce7f3 40%, #dbeafe 100%)',
      overflow: 'hidden', pointerEvents: 'none'
    }}>
      {/* Big blobs */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)',
        top: '-150px', left: '-150px',
        animation: 'blob 10s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500,
        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
        background: 'radial-gradient(circle, rgba(249,168,212,0.3) 0%, transparent 70%)',
        bottom: '-100px', right: '-100px',
        animation: 'blob 12s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute', width: 350, height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 70%)',
        top: '45%', left: '55%', transform: 'translate(-50%,-50%)',
        animation: 'blob 8s ease-in-out infinite 2s'
      }} />
      {/* Floating decorative shapes */}
      <div style={{
        position: 'absolute', width: 80, height: 80,
        borderRadius: '50%', background: 'rgba(251,191,36,0.2)',
        top: '15%', right: '10%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', width: 50, height: 50,
        borderRadius: 12, background: 'rgba(16,185,129,0.2)',
        top: '60%', left: '5%',
        animation: 'float2 7s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', width: 40, height: 40,
        borderRadius: '50%', background: 'rgba(236,72,153,0.2)',
        bottom: '25%', right: '20%',
        animation: 'float 5s ease-in-out infinite 1s'
      }} />
    </div>
  )
}
