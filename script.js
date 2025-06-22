// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('.cta-button');
    const originalText = button.textContent;
    
    button.textContent = 'Thanks for joining!';
    button.style.background = '#bff5a3';
    button.style.color = '#03312e';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '#03312e';
        button.style.color = 'white';
        document.getElementById('emailInput').value = '';
    }, 3000);
});

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';