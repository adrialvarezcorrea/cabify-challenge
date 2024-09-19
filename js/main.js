/* Window Scroll */
var lastScrollTop = 0;

$(window).on('scroll', function() {
  var wtop = $(window).scrollTop();

  /* nav */
  if (wtop > lastScrollTop) { if(wtop >= $('.navbar').outerHeight()) {$('html').removeClass('scroll-up').addClass('scroll-down');} } 
  else { $('html').addClass('scroll-up').removeClass('scroll-down'); }
  lastScrollTop = wtop;
});

