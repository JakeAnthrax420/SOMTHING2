document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed('.typed-text', {
    strings: ["Welcome to Kany Institute", "Unlocking your potential", "Shaping your future"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
});


// Initialize ScrollReveal
ScrollReveal({
    distance: '20px',
    duration: 800,
    easing: 'ease-in-out',
    mobile: false
  });
  
  // Configure the elements to animate
  ScrollReveal().reveal('.reveal', {
    origin: 'left',
    interval: 200
  });
  