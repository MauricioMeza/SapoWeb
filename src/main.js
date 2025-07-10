
// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => observer.observe(card));

  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => observer.observe(section));

  // Hero video fallback
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('error', function() {
      // If video fails to load, show a fallback background
      const hero = document.querySelector('.hero');
      hero.style.background = 'linear-gradient(135deg, #1F3327 0%, #2A4A35 50%, #1F3327 100%)';
    });
  }
  

});