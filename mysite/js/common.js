document.onload = $(function () {
particlesJS('particles-js', { 
		
		
  "particles": {
    "number": {
      "value": 114,
      "density": {
        "enable": true,
        "value_area": 631.3181133058181
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
      "value": 0.4734885849793636,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 4.795204795204795,
        "size_min": 0.7992007992007992,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 142.0465754938091,
      "color": "#ffffff",
      "opacity": 0.5129459670609773,
      "width": 0.6313181133058181
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 394.57382081613633,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 231.44200550588337,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
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
	
	
  const svg = document.querySelector('svg');

var translations = {};

function translateLayer(id, hDistance, vDistance, factor) {
  var hDistanceScaled = hDistance / factor;
  var vDistanceScaled = vDistance / factor;

  var counter = { value: 0 };
  var precision = 4.0;
  TweenLite.killTweensOf(id);

  var thisTranslations = translations[id] || {};
  var x = thisTranslations.x || 0;
  var y = thisTranslations.y || 0;
  var finalX = hDistanceScaled;
  var finalY = vDistanceScaled;
  var stepX = (finalX - x) / precision;
  var stepY = (finalY - y) / precision;

  TweenLite.to(counter, 0.8, {
    value: precision,
    onUpdate: function() {
      var currentX = x + stepX * counter.value;
      var currentY = y + stepY * counter.value;
      $(svg).find(id)[0].setAttribute('transform', 'translate(' + currentX + ', ' + currentY + ')');
      translations[id] = { x: currentX, y: currentY };
    }
  });
}

function parallax(e) {
  var amountMovedX = e.pageX;
  var amountMovedY = e.pageY;
  var hDistance = (window.innerWidth/2) - amountMovedX;
  var vDistance = (window.innerHeight/2) - amountMovedY;

  translateLayer("#distance-3x", hDistance, vDistance, 45);
  translateLayer("#distance-2x", hDistance, vDistance, -65);
  translateLayer("#distance-1x", hDistance, vDistance, 85);
}



svg.addEventListener("mousemove", parallax, false);



	
	
});
