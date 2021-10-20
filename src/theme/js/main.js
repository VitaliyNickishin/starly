$(function() {
  window.appScroll = 0

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

$(window).on('scroll', function () {
  var header = $('.header'),
      appScroll = $(this).scrollTop()
  if(appScroll > 0) {
    header.addClass('scrolled')
    if(appScroll < window.appScroll) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  } else {
    header.removeClass('fixed')
    header.removeClass('scrolled')
  }
  window.appScroll = appScroll
});
