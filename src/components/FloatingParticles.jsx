import { useEffect, useRef } from 'react'

const FloatingParticles = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = particlesRef.current
      if (!particlesContainer) return

      const particleCount = 15
      
      // Clear existing particles
      particlesContainer.innerHTML = ''
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 20 + 's'
        particle.style.animationDuration = (15 + Math.random() * 10) + 's'
        particlesContainer.appendChild(particle)
      }
    }

    createParticles()

    // Recreate particles on window resize
    const handleResize = () => {
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <div id="particles" ref={particlesRef} className="particles-container" />
}

export default FloatingParticles 