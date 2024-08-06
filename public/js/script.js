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
    const navLinks = document.querySelectorAll('nav ul li a');
    const homeLink = document.getElementById('nav-home');
  
    function setActiveLink() {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', setActiveLink);
  
    // Set "Home" as active on page load
    homeLink.classList.add('active');
    
    // Set active link on page load
    setActiveLink();
  });
  
  