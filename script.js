// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Smooth Scrolling for Navigation Links
  $('.nav-link').click(function() {
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 70
      }, 800);
      return false;
  });
  
  // Sticky Navbar on Scroll
  $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
          $('#navbar').addClass('scrolled');
      } else {
          $('#navbar').removeClass('scrolled');
      }
  });
  
  // Dark Mode Toggle
  $('#theme-toggle').click(function() {
    $('body').toggleClass('dark-mode');
    $('.navbar, footer, .card, h5, p, ul').toggleClass('dark-mode');
    let icon = $(this).find('i');
    if ($('body').hasClass('dark-mode')) {
        icon.removeClass('fa-moon').addClass('fa-sun');
    } else {
        icon.removeClass('fa-sun').addClass('fa-moon');
    }
});

  
  // Initialize Tooltips
  $(function () {
      $('[data-toggle="tooltip"]').tooltip();
  });
  

  AOS.init({
    duration: 1000,
    once: true
});
