// Smooth scrolling to section on nav link click
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links li a');
  
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          const targetOffsetTop = targetSection.offsetTop;
          const scrollToOptions = {
            top: targetOffsetTop,
            behavior: 'smooth'
          };
  
          window.scrollTo(scrollToOptions);
        }
      });
    });
  });
  
  // Update active navigation link on scroll
  window.addEventListener('scroll', function () {
    const navLinks = document.querySelectorAll('.nav-links li a');
    const sections = document.querySelectorAll('section');
  
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
        const sectionId = section.getAttribute('id');
  
        navLinks.forEach(function (navLink) {
          navLink.classList.remove('active');
          if (navLink.getAttribute('href') === `#${sectionId}`) {
            navLink.classList.add('active');
          }
        });
      }
    });
  });
  
  
