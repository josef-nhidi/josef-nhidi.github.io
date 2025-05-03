// Scroll animations
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function revealOnScroll() {
  // Initial animations for elements in viewport on page load
  const reveals = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
  
  // Animated elements with scroll detection
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = 150;
    
    if (sectionTop < windowHeight - sectionVisible) {
      const elements = section.querySelectorAll('.reveal');
      elements.forEach(element => {
        element.classList.add('active');
      });
    }
  });
}

// Image hover animations for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item, .gallery-item');

portfolioItems.forEach(item => {
  const img = item.querySelector('img');
  
  item.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
  });
  
  item.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

// Parallax effect for hero section
const hero = document.getElementById('hero');

if (hero) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
}

// Add reveal classes to elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Add reveal class to all section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    if (!title.classList.contains('fade-in')) {
      title.classList.add('reveal');
    }
  });
  
  // Add reveal to paragraphs in sections
  const sectionParagraphs = document.querySelectorAll('.section p');
  sectionParagraphs.forEach(paragraph => {
    if (!paragraph.parentElement.classList.contains('fade-in') && 
        !paragraph.parentElement.classList.contains('slide-in-left') && 
        !paragraph.parentElement.classList.contains('slide-in-right')) {
      paragraph.classList.add('reveal');
    }
  });
  
  // Trigger initial reveal check
  setTimeout(revealOnScroll, 100);
});