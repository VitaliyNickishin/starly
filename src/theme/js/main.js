$(function() {

  headerFixed();
  initSliderRoadmap();

  
  // Mobile menu
  var menuBtn = $('.header').find('.burger'),
      menuBox = $('.header').find('ul'),
      menuLink = menuBox.find('a')
  menuBtn.on('click', function() {
    menuBtn.toggleClass('active')
    menuBox.toggleClass('active')
    $('body').toggleClass('overflow')
  })
  menuLink.on('click', function() {
    menuBtn.removeClass('active')
    menuBox.removeClass('active')
    $('body').removeClass('overflow')
  })

  // Countdown timer
  var countDownBox = $('#counter'),
      countDownDate = null,
      countDownItems = countDownBox.find('li > span > i'),
      endDate = countDownBox.data('timer')
  if(endDate) {
    countDownDate = new Date(endDate).getTime()
    var countInterval = setInterval(function() {
      var now = new Date().getTime(),
          distance = countDownDate - now,
          days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000)
      days = String((days < 10) ? '0' + days : days)
      hours = String((hours < 10) ? '0' + hours : hours)
      minutes = String((minutes < 10) ? '0' + minutes : minutes)
      seconds = String((seconds < 10) ? '0' + seconds : seconds)
      if(typeof countDownItems[0] != 'undefined') {
        $(countDownItems[0]).html(days[0])
        $(countDownItems[1]).html(days[1])
      }
      if(typeof countDownItems[1] != 'undefined') {
        $(countDownItems[2]).html(hours[0])
        $(countDownItems[3]).html(hours[1])
      }
      if(typeof countDownItems[2] != 'undefined') {
        $(countDownItems[4]).html(minutes[0])
        $(countDownItems[5]).html(minutes[1])
      }
      if(typeof countDownItems[3] != 'undefined') {
        $(countDownItems[6]).html(seconds[0])
        $(countDownItems[7]).html(seconds[1])
      }
      if(distance < 0) {
        clearInterval(countInterval)
      }
    }, 1000)
  }
});

/* sticky header */ 
let headerFixed = function () {
    let header = jQuery('.header');
    
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 50) {
			header.addClass('fixed');
		} else {
      header.removeClass('fixed');
    }

	});
}

//sleder Roadmap
let initSliderRoadmap = function () {
  $('.roadmap-slider').slick({
    variableWidth: true,
    slidesToScroll: 4,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    centerMode: true,
    infinite: false,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      
      ]
    });
    
};
