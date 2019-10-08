$(document).ready(function() {
  var scrollLink = $('.scroll');

  // Smooth Scrolling

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({ scrollTop: $(this.hash).offset().top }, 10000);
  });
});
