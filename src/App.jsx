import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import EnrollModal from './components/EnrollModal'
import Footer from './components/Footer'
import Background from './components/Background'
import SplashScreen from './components/SplashScreen'

export default function App() {
  const [enrollCourse, setEnrollCourse] = useState(null)
  const [tg, setTg] = useState(null)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webapp = window.Telegram.WebApp
      webapp.ready()
      webapp.expand()
      setTg(webapp)
    }
  }, [])

  return (
    <>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Background />
        <Navbar />
        <Hero onEnroll={() => setEnrollCourse({ name: 'Umumiy' })} tg={tg} />
        <Courses onEnroll={(course) => setEnrollCourse(course)} />
        <Footer />
        {enrollCourse && (
          <EnrollModal
            course={enrollCourse}
            tg={tg}
            onClose={() => setEnrollCourse(null)}
          />
        )}
      </div>
    </>
  )
}
