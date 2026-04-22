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
      ? `\n👤 Telegram: @${tgUser.username || "noma'lum"} (ID: ${tgUser.id})`
      : ''

    const message = `
🎓 <b>YANGI ARIZA!</b>

📚 <b>Kurs:</b> ${course.name || course.title}
👤 <b>Ism:</b> ${form.name}
📞 <b>Telefon:</b> ${form.phone}
🎂 <b>Yosh:</b> ${form.age || "Ko'rsatilmagan"}
📊 <b>Daraja:</b> ${form.level || "Ko'rsatilmagan"}
💬 <b>Izoh:</b> ${form.comment || "Yo'q"}${userInfo}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
    `.trim()

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: ADMIN_ID, text: message, parse_mode: 'HTML' })
      })
      const data = await res.json()
      if (data.ok) {
        setSent(true)
        if (tg) tg.showAlert("Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.")
      } else {
        setError('Xatolik yuz berdi. Qayta urinib ko\'ring.')
      }
    } catch {
      setError('Internet aloqasi yo\'q. Qayta urinib ko\'ring.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: '#f9fafb', border: '2px solid #e5e7eb',
    borderRadius: 14, color: '#1e1b4b', fontSize: 15,
    outline: 'none', transition: 'border-color 0.2s',
    fontFamily: 'Nunito, sans-serif', fontWeight: 600
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(76,29,149,0.5)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16, animation: 'fadeIn 0.3s ease'
    }} onClick={(e) => e.target === e.currentTarget && onClose()}>

      <div style={{
        background: '#fff',
        border: '3px solid #ede9fe',
        borderRadius: 32, padding: '36px 32px', width: '100%', maxWidth: 480,
        boxShadow: '0 30px 80px rgba(124,58,237,0.25)',
        maxHeight: '90vh', overflowY: 'auto',
        animation: 'fadeInUp 0.4s ease', position: 'relative'
      }}>

        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: '#ede9fe', border: 'none',
          color: '#7c3aed', width: 36, height: 36, borderRadius: '50%',
          cursor: 'pointer', fontSize: 16, display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontWeight: 800
        }}>✕</button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 72, marginBottom: 16, animation: 'bounce-in 0.5s ease' }}>🎉</div>
            <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, color: '#7c3aed' }}>
              Ariza Yuborildi!
            </h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: 28, fontWeight: 600 }}>
              Arizangiz adminimizga yetkazildi. Tez orada siz bilan bog'lanamiz! 🚀
            </p>
            <button onClick={onClose} style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              color: '#fff', border: 'none', padding: '14px 36px',
              borderRadius: 50, fontSize: 16, fontWeight: 800, cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(124,58,237,0.4)'
            }}>Yopish 👋</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>{course.emoji || '📝'}</div>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6, color: '#1e1b4b' }}>
                Kursga Yozilish
              </h2>
              <p style={{
                color: '#7c3aed', fontWeight: 800, fontSize: 15,
                background: '#ede9fe', display: 'inline-block',
                padding: '4px 14px', borderRadius: 20
              }}>
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
                  <label style={{ display: 'block', fontSize: 13, color: '#374151', marginBottom: 6, fontWeight: 800 }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#7c3aed'}
                    onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, color: '#374151', marginBottom: 6, fontWeight: 800 }}>
                  Til darajangiz
                </label>
                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = '#7c3aed'}
                  onBlur={e => e.target.style.borderColor = '#e5e7eb'}
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
                <label style={{ display: 'block', fontSize: 13, color: '#374151', marginBottom: 6, fontWeight: 800 }}>
                  Qo'shimcha izoh
                </label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Savollaringiz yoki qo'shimcha ma'lumot..."
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#7c3aed'}
                  onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              {error && (
                <div style={{
                  background: '#fef2f2', border: '2px solid #fca5a5',
                  borderRadius: 12, padding: '10px 14px', marginBottom: 16,
                  color: '#dc2626', fontSize: 14, fontWeight: 700
                }}>{error}</div>
              )}

              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '15px',
                background: loading ? '#c4b5fd' : 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: '#fff', border: 'none', borderRadius: 50,
                fontSize: 16, fontWeight: 800, cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: loading ? 'none' : '0 8px 25px rgba(124,58,237,0.4)'
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
