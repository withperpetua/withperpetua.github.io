import { useState } from 'react'
import './SignupForm.css'

const SignupForm = ({ onSubmit, isSubmitted }) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) return

    setIsSubmitting(true)
    
    try {
      // Submit to Google Apps Script
      const webhookURL = "https://script.google.com/macros/s/AKfycbwWmXBSgMLeyMYgVIcktRc3nJq3WBZjphxDvj5LbshTHM2QC31m-RFQLAl3L0Vw11-7/exec"
      
      await fetch(webhookURL, {
        method: "POST",
        mode: "no-cors", // suppresses CORS errors
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email: email }),
      })

      // Call parent callback
      onSubmit(email)
      setEmail('')
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        className="email-input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isSubmitting || isSubmitted}
      />
      <button 
        type="submit" 
        className="cta-button"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? 'Joining...' : 'Join Our Waitlist'}
      </button>
    </form>
  )
}

export default SignupForm 