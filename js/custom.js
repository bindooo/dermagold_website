(function($) {
  // Activate ScrollSpy
  $('body').scrollspy({target: ".spy-active", offset: 100})

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar').removeClass('spy-active');
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 25
      }, 1500, 'easeInOutExpo', function() { setTimeout(function() { $('.navbar').addClass('spy-active'), 1500});});

      event.preventDefault();
    }
    
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Remove focus when scrolling
  $(window).on('wheel', function(event){
    $('.navbar-nav li a').blur();
  });

  FB.CustomerChat.hideDialog();

  // Highlight current day
  var today = new Date();
  $('.opening-hours li').eq((today.getDay() + 6) % 7).addClass('today');

  // Gallery filter
  $("#gallery-flters li").click(function() {
    $("#gallery-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#gallery-wrapper").fadeTo(100, 0);

    $(".gallery-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function() {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#gallery-wrapper").fadeTo(300, 1);
    }, 300);
  });
})(jQuery);
