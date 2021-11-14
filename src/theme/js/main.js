$(function() {

  headerFixed();
  mobileBurger();
  initCountTime();
  initSliderRoadmap();
  // initStarSky();
  initAos();
  initCounterNumber();
  initCoinParallax();
  // initParticlesJS();
  
});

/* Countdown timer */ 
let initCountTime = () => {
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
}
/* added smoothness of appearance for section */ 
let initAos = () => {
  AOS.init();
}
/* sticky header */ 
let headerFixed = () => {
    let header = jQuery('.header');
    
	$(window).on('scroll', () => {
		if ($(this).scrollTop() > 50) {
			header.addClass('fixed');
		} else {
      header.removeClass('fixed');
    }

	});
}
// Mobile menu
let mobileBurger = () => {
  const menuBtn = $('.header').find('.burger'),
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
}
/* sleder Roadmap */
let initSliderRoadmap = () => {
  const roadmapSlider = $('.roadmap-slider');
  roadmapSlider.slick({
    variableWidth: true,
    slidesToScroll: 4,
    slidesToScroll: 1,
    initialSlide: 1,
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
    
  //   roadmapSlider.on('wheel', function(e) {
  //     e.preventDefault();
  //     if (e.originalEvent.deltaX > 0) {
  //         $(this).slick('slickNext');
  //     } else {
  //         $(this).slick('slickPrev');
  //     }
  // });
};
/* background Star Sky */
let initStarSky = () => {
  for (let i = 0; i < 100; i++) {
    let star = '<div class="star-sky" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('.hero, .benefits, .best-team, .roadmap').append(star);
  }
}
/* counter for benefits */ 
let initCounterNumber = () => {
  var stop = $(".hero").offset().top;
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > stop ) {
      $(window).off("scroll");
      $('.count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.attr("data-count") }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
      });
    };
  });
}
/* use parallax for coin in roadmap section */ 
let initCoinParallax = () => {
  const image = document.getElementsByClassName('coin-parallax');
  new simpleParallax(image, {
    delay: 5,
    transition: 'cubic-bezier(0,0,0,1)',
    maxTransition: 60,
    overflow: true,
    scale: 1.5
  });
}

// let initParticlesJS = function () {
//   particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 355,
//         "density": {
//           "enable": true,
//           "value_area": 789.1476416322727
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.48927153781200905,
//         "random": false,
//         "anim": {
//           "enable": true,
//           "speed": 0.2,
//           "opacity_min": 0,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 2,
//         "random": true,
//         "anim": {
//           "enable": true,
//           "speed": 2,
//           "size_min": 0,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": false,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 0.2,
//         "direction": "none",
//         "random": true,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "bubble"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 83.91608391608392,
//           "size": 1,
//           "duration": 3,
//           "opacity": 1,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });
// }


