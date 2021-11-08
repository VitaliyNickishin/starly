$(function() {

  headerFixed();
  initSliderRoadmap();
  initStarSky();
  // initParticlesJS();
  // initParallax();

  
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

  // var scene = document.getElementById('coin-4');
  // var parallaxInstance = new Parallax(scene, {
  //   relativeInput: true
  //   });

  //   parallaxInstance.friction(0.2, 0.2);


    var image = document.getElementsByClassName('test');
    new simpleParallax(image, {
      delay: 5,
      transition: 'cubic-bezier(0,0,0,1)',
      maxTransition: 60,
      overflow: true,
      scale: 1.5
    });
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

//background Star Sky
let initStarSky = function () {
  for (var i = 0; i < 100; i++) {
    var star = '<div class="star-sky" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('.hero, .benefit, .best-team, .roadmap').append(star);
  }
}

let initParticlesJS = function () {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

// function for Home page
// var initParallax = function () {
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

//     } else {
//         jQuery( '.coin-4' ).parallax({
//             mouseport: jQuery(".roadmap"),
//             xparallax: '50px',
//             yparallax: '50px',
//             xorigin: 0,
//             yorigin: 0
//         });

//         jQuery( '.v-2' ).parallax({
//             mouseport: jQuery(".section-1"),
//             xparallax: '140px',
//             yparallax: '40px',
//             xorigin: 0,
//             yorigin: 0
//         });

//         jQuery( '.v-3' ).parallax({
//             mouseport: jQuery(".section-1"),
//             xparallax: '100px',
//             yparallax: '20px',
//             xorigin: 0,
//             yorigin: 0
//         });

//         jQuery( '.bg-computer' ).parallax({
//             mouseport: jQuery(".section-1"),
//             xparallax: '60px',
//             yparallax: '30px',
//             xorigin: 0,
//             yorigin: 0
//         });

//         jQuery( '.bg-service' ).parallax({
//             mouseport: jQuery(".section-1"),
//             xparallax: '30px',
//             yparallax: '15px',
//             xorigin: 0,
//             yorigin: 0
//         });

//         jQuery( '.bg-phone' ).parallax({
//             mouseport: jQuery(".section-1"),
//             xparallax: '100px',
//             yparallax: '50px',
//             xorigin: 0,
//             yorigin: 0
//         });
//     }
// };

