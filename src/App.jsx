import { useState, useEffect } from 'react'
import FloatingParticles from './components/FloatingParticles'
import SignupForm from './components/SignupForm'
import ContactInfo from './components/ContactInfo'
import './App.css'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle domain redirect
  useEffect(() => {
    if (window.location.hostname === 'withperpetua.github.io') {
      window.location.href = 'https://withperpetua.com' + window.location.pathname + window.location.search + window.location.hash
    }
  }, [])

  // Prevent right-click and developer tools
  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault()
      return false
    }

    const preventDevTools = (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault()
        return false
      }
      // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault()
        return false
      }
      // Ctrl+U
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener('contextmenu', preventDefault)
    document.addEventListener('keydown', preventDevTools)

    return () => {
      document.removeEventListener('contextmenu', preventDefault)
      document.removeEventListener('keydown', preventDevTools)
    }
  }, [])

  const handleFormSubmit = (email) => {
    setIsSubmitted(true)
    // Reset form state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="app">
      <FloatingParticles />
      
      <div className="container">
        <div className="logo-image">
          <img src="/images/header.png" alt="Perpetua" className="logo-image" />
        </div>

        <p className="subheadline">
          We're building something to help you protect what matters most. Sign up for updates.
        </p>

        <SignupForm onSubmit={handleFormSubmit} isSubmitted={isSubmitted} />

        {isSubmitted && (
          <p className="confirmation-message">
            You're on the waitlist! 🎉
          </p>
        )}
      </div>

      <ContactInfo />
    </div>
  )
}

export default App 