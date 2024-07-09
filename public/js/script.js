document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Navbar fixed
    window.onscroll = function() {
      console.log('Scroll event detected');
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
  
      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        console.log('Added navbar-fixed class');
      } else {
        header.classList.remove('navbar-fixed');
        console.log('Removed navbar-fixed class');
      }
    };
  
    // Hamburger menu toggle
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
  
    if (hamburger) {
      console.log('Hamburger button found');
      hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked');
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
      });
    } else {
      console.log('Hamburger button not found');
    }
  });

  // nav-active
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
  
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
  
      navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
          a.classList.add('active');
        }
      });
    });
  });
  
  