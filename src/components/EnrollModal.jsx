import { useState } from 'react'

const BOT_TOKEN = '8610789641:AAELm5VGy-0QUiO5s_zC5tVTV4b28CsgS0Q'
const ADMIN_ID = '7790099540'


export default function EnrollModal({ course, onClose, tg }) {
  const [form, setForm] = useState({ name: '', phone: '', age: '', level: '', comment: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Ism va telefon raqam majburiy!")
      return
    }
    setLoading(true)
    setError('')

    const tgUser = tg?.initDataUnsafe?.user
    const userInfo = tgUser
      ? `\n👤 Telegram: @${tgUser.username || 'noma\'lum'} (ID: ${tgUser.id})`
      : ''

    const message = `
🎓 <b>YANGI ARIZA!</b>

📚 <b>Kurs:</b> ${course.name || course.title}
👤 <b>Ism:</b> ${form.name}
📞 <b>Telefon:</b> ${form.phone}
🎂 <b>Yosh:</b> ${form.age || 'Ko\'rsatilmagan'}
📊 <b>Daraja:</b> ${form.level || 'Ko\'rsatilmagan'}
💬 <b>Izoh:</b> ${form.comment || 'Yo\'q'}${userInfo}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
    `.trim()

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: ADMIN_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })
      const data = await res.json()
      if (data.ok) {
        setSent(true)
        if (tg) tg.showAlert('Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.')
      } else {
        setError('Xatolik yuz berdi. Qayta urinib ko\'ring.')
      }
    } catch {
      setError('Internet aloqasi yo\'q. Qayta urinib ko\'ring.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16, animation: 'fadeIn 0.3s ease'
    }} onClick={(e) => e.target === e.currentTarget && onClose()}>

      <div style={{
        background: 'linear-gradient(135deg, rgba(13,33,55,0.98), rgba(13,79,60,0.95))',
        border: '1px solid rgba(0,229,160,0.25)',
        borderRadius: 28, padding: '36px 32px', width: '100%', maxWidth: 480,
        boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,229,160,0.1)',
        maxHeight: '90vh', overflowY: 'auto',
        animation: 'fadeInUp 0.4s ease'
      }}>

        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.1)', border: 'none',
          color: '#fff', width: 36, height: 36, borderRadius: '50%',
          cursor: 'pointer', fontSize: 18, display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>✕</button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: '#00e5a0' }}>
              Ariza Yuborildi!
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 28 }}>
              Arizangiz adminimizga yetkazildi. Tez orada siz bilan bog'lanamiz!
            </p>
            <button onClick={onClose} style={{
              background: 'linear-gradient(135deg, #00e5a0, #0f6b50)',
              color: '#0a1628', border: 'none', padding: '14px 36px',
              borderRadius: 50, fontSize: 16, fontWeight: 700, cursor: 'pointer'
            }}>Yopish</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>
                {course.emoji || '📝'}
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
                Kursga Yozilish
              </h2>
              <p style={{ color: '#00e5a0', fontWeight: 600, fontSize: 15 }}>
                {course.name || course.title}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {[
                { name: 'name', label: 'Ism Familiya *', placeholder: 'Masalan: Alisher Karimov', type: 'text' },
                { name: 'phone', label: 'Telefon raqam *', placeholder: '+998 90 123 45 67', type: 'tel' },
                { name: 'age', label: 'Yoshingiz', placeholder: 'Masalan: 22', type: 'number' },
              ].map(field => (
                <div key={field.name} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 6, fontWeight: 500 }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 12, color: '#fff', fontSize: 15,
                      outline: 'none', transition: 'border-color 0.2s',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    onFocus={e => e.target.style.borderColor = '#00e5a0'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 6, fontWeight: 500 }}>
                  Til darajangiz
                </label>
                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  style={{
                    width: '100%', padding: '12px 16px',
                    background: 'rgba(13,33,55,0.9)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 12, color: form.level ? '#fff' : 'rgba(255,255,255,0.4)',
                    fontSize: 15, outline: 'none', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onFocus={e => e.target.style.borderColor = '#00e5a0'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                >
                  <option value="">Darajani tanlang</option>
                  <option value="Boshlang'ich (A1)">Boshlang'ich (A1)</option>
                  <option value="Elementar (A2)">Elementar (A2)</option>
                  <option value="O'rta (B1)">O'rta (B1)</option>
                  <option value="O'rta-yuqori (B2)">O'rta-yuqori (B2)</option>
                  <option value="Ilg'or (C1)">Ilg'or (C1)</option>
                  <option value="Bilmayman">Bilmayman</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 6, fontWeight: 500 }}>
                  Qo'shimcha izoh
                </label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Savollaringiz yoki qo'shimcha ma'lumot..."
                  rows={3}
                  style={{
                    width: '100%', padding: '12px 16px',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 12, color: '#fff', fontSize: 15,
                    outline: 'none', resize: 'vertical',
                    fontFamily: 'Inter, sans-serif', transition: 'border-color 0.2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#00e5a0'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                />
              </div>

              {error && (
                <div style={{
                  background: 'rgba(255,64,129,0.15)', border: '1px solid rgba(255,64,129,0.3)',
                  borderRadius: 10, padding: '10px 14px', marginBottom: 16,
                  color: '#ff4081', fontSize: 14
                }}>{error}</div>
              )}

              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '15px',
                background: loading ? 'rgba(0,229,160,0.4)' : 'linear-gradient(135deg, #00e5a0, #0f6b50)',
                color: '#0a1628', border: 'none', borderRadius: 50,
                fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: loading ? 'none' : '0 8px 25px rgba(0,229,160,0.4)'
              }}>
                {loading ? '⏳ Yuborilmoqda...' : '📤 Ariza Yuborish'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
