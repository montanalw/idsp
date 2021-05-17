$(document).ready(function(){
  backToTop()
  scrollNav()
  document.getElementsByClassName("promoVid")[0].volume = 0.5
})

// BACK TO TOP FUNCTION
function backToTop(){
  $(".backToTop").click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
  })
}

// NAVIGATION SCROLL DOWN
function scrollNav(){
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });
          
  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }      
      lastScrollTop = st;
  } 
}
