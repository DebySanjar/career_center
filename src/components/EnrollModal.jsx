import { useState } from 'react'

const BOT_TOKEN = '8610789641:AAELm5VGy-0QUiO5s_zC5tVTV4b28CsgS0Q'
const ADMIN_ID = '7790099540'

const ACCENT = '#e9b50b'
const BLACK = '#000'

const fields = [
  {
    name: 'name', label: 'ISM FAMILIYA', placeholder: 'MASALAN: Sanjar...',
    type: 'text', icon: (
      <svg viewBox="0 0 24 24" fill={BLACK} width="22" height="22">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    )
  },
  {
    name: 'phone', label: 'TELEFON RAQAM', placeholder: '+998 90 000 00 00',
    type: 'tel', icon: (
      <svg viewBox="0 0 24 24" fill={BLACK} width="22" height="22">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
      </svg>
    )
  },
  {
    name: 'age', label: 'YOSH', placeholder: 'MASALAN: 17',
    type: 'number', icon: (
      <svg viewBox="0 0 24 24" fill={BLACK} width="22" height="22">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
      </svg>
    )
  },
]

function Input3D({ label, name, value, onChange, placeholder, type, icon }) {
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)

  const active = focused || hovered

  return (
    <div style={{ position: 'relative', marginBottom: 36 }}>
      {/* Label tag */}
      <div style={{
        position: 'absolute', top: -14, left: 16, zIndex: 4,
        background: ACCENT, color: BLACK,
        fontWeight: 900, padding: '4px 12px', fontSize: 12,
        border: `2px solid ${BLACK}`,
        letterSpacing: 1,
        transform: 'translateZ(50px)',
        userSelect: 'none'
      }}>{label}</div>

      {/* Container */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          background: '#f0f0f0',
          padding: '14px 14px',
          display: 'flex', alignItems: 'center', gap: 12,
          border: `3px solid ${BLACK}`,
          transition: 'all 350ms cubic-bezier(0.23, 1, 0.32, 1)',
          transformStyle: 'preserve-3d',
          transform: active
            ? 'rotateX(3deg) rotateY(0.5deg) scale(1.03)'
            : 'rotateX(8deg) rotateY(-6deg)',
          perspective: '1000px',
          boxShadow: active
            ? `18px 18px 0 -3px ${ACCENT}, 18px 18px 0 0 ${BLACK}`
            : `8px 8px 0 ${BLACK}`,
        }}
      >
        {/* Shadow layer */}
        <div style={{
          content: '""', position: 'absolute', width: '100%', height: '100%',
          left: 0, bottom: 0, zIndex: -1,
          transform: 'translateZ(-50px)',
          background: 'linear-gradient(45deg, rgba(233,181,11,0.3) 0%, rgba(233,181,11,0.05) 100%)',
          filter: 'blur(16px)'
        }} />

        {/* Icon button */}
        <button type="button" style={{
          cursor: 'default', border: `2.5px solid ${BLACK}`,
          background: ACCENT,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '8px', transform: 'translateZ(20px)',
          position: 'relative', zIndex: 3, flexShrink: 0,
          boxShadow: active ? `4px 4px 0 ${BLACK}` : `2px 2px 0 ${BLACK}`,
          transition: 'all 350ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}>
          {icon}
        </button>

        {/* Input */}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', outline: 'none',
            border: `2.5px solid ${BLACK}`,
            padding: '12px 14px', fontSize: 15,
            background: '#fff', color: BLACK,
            transform: active ? 'translateZ(20px) translateX(-3px) translateY(-3px)' : 'translateZ(10px)',
            transition: 'all 350ms cubic-bezier(0.23, 1, 0.32, 1)',
            position: 'relative', zIndex: 3,
            fontFamily: "'Nunito', Arial, sans-serif",
            fontWeight: 700, letterSpacing: 0.3,
            boxShadow: active ? `4px 4px 0 ${BLACK}` : 'none',
          }}
        />
      </div>
    </div>
  )
}

function LevelDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)

  const levels = [
    "Boshlang'ich (A1)",
    "Elementar (A2)",
    "O'rta (B1)",
    "O'rta-yuqori (B2)",
    "Bilmayman",
  ]

  const handleSelect = (level) => {
    onChange({ target: { name: 'level', value: level } })
    setOpen(false)
  }

  return (
    <div style={{ position: 'relative', marginBottom: 46 }}>
      {/* Label tag */}
      <div style={{
        position: 'absolute', top: -14, left: 16, zIndex: 4,
        background: ACCENT, color: BLACK, fontWeight: 900,
        padding: '4px 12px', fontSize: 12,
        border: `3px solid ${BLACK}`, letterSpacing: 1, userSelect: 'none'
      }}>TIL DARAJASI</div>

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: open ? '#7c3aed' : '#7c3aed',
          color: '#fff', fontWeight: 800, fontSize: 16,
          padding: '14px 20px', borderRadius: 20, cursor: 'pointer',
          border: `3px solid ${BLACK}`,
          boxShadow: open ? `4px 4px 0 ${BLACK}` : `6px 6px 0 ${BLACK}`,
          transition: 'all 0.3s',
          transform: open ? 'translate(-2px,-2px)' : 'translate(0,0)',
          position: 'relative', zIndex: 3,
        }}
      >
        <span>{value || 'DARAJANGIZNI TANLANG'}</span>
        {/* Hamburger / X bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 22, height: 18, justifyContent: 'center' }}>
          <span style={{
            display: 'block', height: 3, borderRadius: 50, background: '#fff',
            transition: 'all 0.4s',
            transformOrigin: 'top right',
            transform: open ? 'translateY(-25%) rotate(-45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', height: 3, borderRadius: 50, background: '#fff',
            transition: 'all 0.4s',
            transform: open ? 'translateX(-50%)' : 'none',
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: 'block', height: 3, borderRadius: 50, background: '#fff',
            transition: 'all 0.4s',
            transformOrigin: 'bottom right',
            transform: open ? 'translateY(25%) rotate(45deg)' : 'none',
          }} />
        </div>
      </button>

      {/* Dropdown menu */}
      <div style={{
        background: '#fff', borderRadius: 10,
        border: `3px solid ${BLACK}`,
        position: 'absolute', width: '100%', left: 0, top: 'calc(100% + 8px)',
        overflow: 'hidden', zIndex: 20,
        boxShadow: `6px 6px 0 ${BLACK}`,
        clipPath: open ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(10% 50% 90% 50% round 10px)',
        transition: 'clip-path 0.4s cubic-bezier(0.23,1,0.32,1)',
        pointerEvents: open ? 'all' : 'none',
      }}>
        {levels.map((level, i) => (
          <div
            key={level}
            onClick={() => handleSelect(level)}
            style={{
              padding: '12px 18px', cursor: 'pointer',
              color: value === level ? '#7c3aed' : '#7c3aed',
              fontWeight: 800, fontSize: 15,
              background: value === level ? '#ede9fe' : '#fff',
              borderBottom: i < levels.length - 1 ? '1px solid rgba(0,0,0,0.12)' : 'none',
              transition: 'background 0.2s',
              transform: open ? 'translateY(0)' : 'translateY(30px)',
              opacity: open ? 1 : 0,
              transitionDelay: open ? `${0.4 + i * 0.07}s` : '0s',
              transitionProperty: 'transform, opacity, background',
              transitionDuration: '0.35s',
            }}
            onMouseEnter={e => { if (value !== level) e.currentTarget.style.background = '#f3f4f6' }}
            onMouseLeave={e => { if (value !== level) e.currentTarget.style.background = '#fff' }}
          >
            {value === level && <span style={{ marginRight: 8 }}>✓</span>}
            {level}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function EnrollModal({ course, onClose, tg }) {
  const [form, setForm] = useState({ name: '', phone: '', age: '', level: '', comment: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) { setError("Ism va telefon raqam majburiy!"); return }
    setLoading(true); setError('')

    const tgUser = tg?.initDataUnsafe?.user
    const userInfo = tgUser ? `\n👤 Telegram: @${tgUser.username || "noma'lum"} (ID: ${tgUser.id})` : ''
    const message = `🎓 <b>YANGI ARIZA!</b>\n\n📚 <b>Kurs:</b> ${course.name || course.title}\n👤 <b>Ism:</b> ${form.name}\n📞 <b>Telefon:</b> ${form.phone}\n🎂 <b>Yosh:</b> ${form.age || "Ko'rsatilmagan"}\n📊 <b>Daraja:</b> ${form.level || "Ko'rsatilmagan"}\n💬 <b>Izoh:</b> ${form.comment || "Yo'q"}${userInfo}\n\n⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}`

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: ADMIN_ID, text: message, parse_mode: 'HTML' })
      })
      const data = await res.json()
      if (data.ok) { setSent(true); if (tg) tg.showAlert("Arizangiz yuborildi!") }
      else setError("Xatolik yuz berdi. Qayta urinib ko'ring.")
    } catch { setError("Internet aloqasi yo'q.") }
    finally { setLoading(false) }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'linear-gradient(160deg, #ede9fe 0%, #fce7f3 40%, #dbeafe 100%)',
      display: 'flex', flexDirection: 'column',
      overflowY: 'auto', animation: 'fadeIn 0.3s ease'
    }}>
      {/* Decorative blobs */}
      <div style={{ position: 'fixed', width: 400, height: 400, borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%', background: 'rgba(233,181,11,0.12)', top: -100, right: -100, pointerEvents: 'none', animation: 'blob 10s ease-in-out infinite' }} />
      <div style={{ position: 'fixed', width: 300, height: 300, borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%', background: 'rgba(124,58,237,0.1)', bottom: -80, left: -80, pointerEvents: 'none', animation: 'blob 12s ease-in-out infinite reverse' }} />

      {/* Header bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 32px',
        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)',
        borderBottom: `3px solid ${BLACK}`,
        position: 'sticky', top: 0, zIndex: 10,
        boxShadow: `0 4px 0 ${BLACK}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            background: ACCENT, border: `2.5px solid ${BLACK}`,
            borderRadius: 10, padding: '6px 14px',
            fontWeight: 900, fontSize: 20, boxShadow: `3px 3px 0 ${BLACK}`
          }}>{course.emoji || '📝'}</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#7c3aed', letterSpacing: 1 }}>KURSGA YOZILISH</div>
            <div style={{ fontSize: 17, fontWeight: 900, color: BLACK }}>{course.name || course.title}</div>
          </div>
        </div>
        <button onClick={onClose} style={{
          background: '#fef2f2', border: `2.5px solid ${BLACK}`,
          color: BLACK, width: 40, height: 40, borderRadius: 10,
          cursor: 'pointer', fontSize: 18, fontWeight: 900,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `3px 3px 0 ${BLACK}`, transition: 'all 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `5px 5px 0 ${BLACK}` }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `3px 3px 0 ${BLACK}` }}
        >✕</button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '48px 24px 60px' }}>
        <div style={{ width: '100%', maxWidth: 560 }}>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{
                fontSize: 80, marginBottom: 24,
                animation: 'bounce-in 0.5s ease'
              }}>🎉</div>
              <div style={{
                display: 'inline-block',
                background: ACCENT, border: `3px solid ${BLACK}`,
                borderRadius: 16, padding: '32px 48px',
                boxShadow: `8px 8px 0 ${BLACK}`
              }}>
                <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12, color: BLACK }}>
                  Ariza Yuborildi!
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.6, marginBottom: 28, fontWeight: 700, fontSize: 16 }}>
                  Tez orada siz bilan bog'lanamiz! 🚀
                </p>
                <button onClick={onClose} style={{
                  background: BLACK, color: '#fff', border: `2.5px solid ${BLACK}`,
                  padding: '13px 36px', borderRadius: 10, fontSize: 16, fontWeight: 900,
                  cursor: 'pointer', boxShadow: `4px 4px 0 #555`, transition: 'all 0.15s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `6px 6px 0 #555` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = `4px 4px 0 #555` }}
                >Yopish 👋</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ perspective: '1200px' }}>
              {fields.map(f => (
                <Input3D
                  key={f.name}
                  label={f.label}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  type={f.type}
                  icon={f.icon}
                />
              ))}

              <LevelDropdown value={form.level} onChange={handleChange} />

              {/* Comment */}
              <div style={{ position: 'relative', marginBottom: 36 }}>
                <div style={{
                  position: 'absolute', top: -14, left: 16, zIndex: 4,
                  background: ACCENT, color: BLACK, fontWeight: 900,
                  padding: '4px 12px', fontSize: 12, border: `2px solid ${BLACK}`, letterSpacing: 1
                }}>IZOH</div>
                <div style={{
                  background: '#f0f0f0', padding: '14px',
                  border: `3px solid ${BLACK}`,
                  boxShadow: `8px 8px 0 ${BLACK}`,
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(8deg) rotateY(-6deg)',
                  transition: 'all 350ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'rotateX(3deg) rotateY(0.5deg) scale(1.02)'; e.currentTarget.style.boxShadow = `18px 18px 0 -3px ${ACCENT}, 18px 18px 0 0 ${BLACK}` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'rotateX(8deg) rotateY(-6deg)'; e.currentTarget.style.boxShadow = `8px 8px 0 ${BLACK}` }}
                >
                  <textarea
                    name="comment" value={form.comment} onChange={handleChange}
                    placeholder="QO'SHIMCHA SAVOLLAR YOKI MA'LUMOT..."
                    rows={3}
                    style={{
                      width: '100%', outline: 'none', border: `2.5px solid ${BLACK}`,
                      padding: '12px 14px', fontSize: 15, background: '#fff', color: BLACK,
                      fontFamily: "'Nunito', Arial, sans-serif", fontWeight: 700,
                      resize: 'vertical', display: 'block',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {error && (
                <div style={{
                  background: '#fef2f2', border: `2.5px solid #dc2626`,
                  borderRadius: 10, padding: '12px 16px', marginBottom: 24,
                  color: '#dc2626', fontSize: 14, fontWeight: 800,
                  boxShadow: `3px 3px 0 #dc2626`
                }}>{error}</div>
              )}

              {/* Submit */}
              <div style={{ position: 'relative', marginTop: 8 }}>
                <div style={{
                  position: 'absolute', top: -14, left: 16, zIndex: 4,
                  background: '#7c3aed', color: '#fff', fontWeight: 900,
                  padding: '4px 12px', fontSize: 12, border: `2px solid ${BLACK}`, letterSpacing: 1
                }}>YUBORISH</div>
                <button
                  type="submit" disabled={loading}
                  style={{
                    width: '100%', padding: '18px',
                    background: loading ? '#ccc' : BLACK,
                    color: loading ? '#666' : ACCENT,
                    border: `3px solid ${BLACK}`,
                    fontSize: 17, fontWeight: 900, cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.15s ease',
                    boxShadow: loading ? 'none' : `6px 6px 0 ${ACCENT}`,
                    letterSpacing: 1,
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(5deg)',
                  }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'rotateX(2deg) translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `9px 9px 0 ${ACCENT}` } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'rotateX(5deg)'; e.currentTarget.style.boxShadow = loading ? 'none' : `6px 6px 0 ${ACCENT}` }}
                >
                  {loading ? '⏳ YUBORILMOQDA...' : '📤 ARIZA YUBORISH'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
