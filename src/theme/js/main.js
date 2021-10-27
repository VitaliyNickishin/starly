$(function() {

  headerFixed();

  // Menu links
  var links = $('.header').find('li > a')
  links.on('click', function() {
    let target = $(this).attr('href'),
        anchor = target.split('#')
    if(anchor.length == 2) {
      if(target == '#media' || window.location.pathname == '/') {
        let offset = Number($(target).css('padding-top').replace('px', ''))
        offset += Number($(target).css('margin-top').replace('px', ''))
        offset = (target == '#games') ? offset + 50 : offset - 100
        $('html, body').animate({
          scrollTop: $(target).position().top + offset
        }, 1000)
      } else {
        localStorage.setItem('target', target)
        window.location.replace('/')
      }
    } else {
      window.location.replace(anchor)
    }
    return false
  })



  
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

  // Modal
  var modalBtn = $('.openmodal'),
      modalBox = $('.modalbox'),
      modalSuccess = $('.modalsuccess')
  modalBtn.on('click', function() {
    if($(this).hasClass('active')) {
      modalBox.removeClass('open')
      setTimeout(function() {
        modalBox.removeClass('active')
      }, 350)
    } else {
      modalBox.addClass('active')
      setTimeout(function() {
        modalBox.addClass('open')
      }, 350)
    }
    modalBtn.toggleClass('active')
  })
  modalBox.on('click', function(e) {
    if(!$(e.target).closest('.modalinfo').length) {
      modalBox.removeClass('open')
      setTimeout(function() {
        modalBox.removeClass('active')
      }, 350)
      modalBtn.toggleClass('active')
    }
  })
  modalSuccess.on('click', function(e) {
    if($(e.target).hasClass('close_modalsuccess') || !$(e.target).closest('.info').length) {
      modalSuccess.removeClass('open')
    }
  })

  // Accordion
  var accordionBtn = $('button.accordionbtn')
  accordionBtn.on('click', function() {
    let el = $(this)
    el.parents('.accordion').find('.info').slideToggle()
    el.toggleClass('open')
  })
})

$(window).on('load', function() {
  if(window.location.pathname == '/' && localStorage.getItem('target')) {
    let target = $(localStorage.getItem('target')),
        offset = Number(target.css('padding-top').replace('px', ''))
        offset += Number(target.css('margin-top').replace('px', ''))
    offset = (localStorage.getItem('target') == '#games') ? offset + 50 : offset - 100
    $('html, body').animate({
      scrollTop: target.position().top + offset - 100
    }, 1000, 'swing', function() {
      localStorage.removeItem('target')
    })
  }
  $('.modalbox, .modalsuccess').show(0)
})


/* sticky header */ 
function headerFixed() {
    let header = jQuery('.header');
    
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 50) {
			header.addClass('fixed');
		} else {
      header.removeClass('fixed');
    }

	});
}
