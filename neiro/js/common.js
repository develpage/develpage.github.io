/* var lineW = document.querySelector('.nav-line');
function mouseOverNav() {
    lineW.style.opacity = 1;
}
function mouseEscapeNav() {
    lineW.style.opacity = 0;
} 
 function navLineWidth(event) {
    lineW.style.width = (this.event.clientX + 6) + 'px';
}
onmouseover="mouseOverNav()" onmouseout="mouseEscapeNav()" onmousemove="navLineWidth()"
 */

$(function () {
	new WOW().init();
});

// ScrollBar script


window.onscroll = function () {
	scrollBar()
};

function scrollBar() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.querySelector(".scrollBar").style.width = scrolled + "%";
	var lineBottom = document.querySelector('.menu-bottom-line-wrapper');
	winScroll >= 200 ? lineBottom.style.opacity = 1 : lineBottom.style.opacity = 0;
}


// Buttons effects

$(function () {


	if ($(window).width() > 576) {
		$('.btn-create').mouseenter(function () {
			$('.menu-btn-hover').css('opacity', '1');
		});
		$('.btn-create').mouseleave(function () {
			$('.menu-btn-hover').css('opacity', '0');
		});
	}
});


$(function () {

	if ($(window).width() > 576) {
	$('.btn-create-big').mouseenter(function () {
		$('.btn-big').fadeOut();
		$('.about-btn-hover').css('opacity', '1');
	});
	$('.btn-create-big').mouseleave(function () {
		$('.btn-big').fadeIn();
		$('.about-btn-hover').css('opacity', '0');
	});
	}
});

// Label ebbects for inputs

$(function () {
	$('.input-block input').focus(function () {
		$(this).prev('.input-label').css({
			"font-size": "14px",
			"color": "#9b9b9b",
			"transform": "translateY(-10px)"
		});
	});
	$('.input-block input').blur(function () {
		if ($(this).val() == '') {
			$(this).prev('.input-label').css({
				"font-size": "16px",
				"color": "#4a4a4a",
				"transform": "translateY(0)"
			});
		}
	});
});

// Mobile navigation script

$(window).resize(function () {
	if ($(window).width() <= 992) {
		$('nav').css('display', 'none');
	} else {
		$('nav').css('display', 'block');
	}
});

$(function () {
	$('.burger').on('click', function showNav() {
		$('.mobile-menu').fadeToggle('fast', 'linear');
		$('.top').toggleClass('activeT');
		$('.bottom').toggleClass('activeB');
		$('.middle').toggleClass('noactive');

	});

	$('.mobile-link').on('click', function () {
		$('.mobile-menu').fadeToggle('fast', 'linear');
		$('.top').toggleClass('activeT');
		$('.bottom').toggleClass('activeB');
		$('.middle').toggleClass('noactive');

	});

});

// Anchor smooth scroll script

$(function () {
	$("a").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
});

//Inputs on focus border color change

$(function () {

	$('.input-border').focus(function () {
		$(this).css('border-color', '#4a90e2');
		$(this).blur(
			function () {
				$(this).css('border-color', '#9faac2');
			});
	});
});

// Rus - Eng language select

$(function () {
	$('.language').on('click', function () {
		if ($(this).hasClass('active-lang')) {} else {
			$('.language').toggleClass('active-lang');
		}
	});
});


//function for put header img on center 




$(document).ready(function () {

	centerElem();

	function centerElem() {

		var container = document.querySelector('.head-discription');

		var w = $('.head-discription').innerWidth();
		var h = $('.head-discription').innerHeight();
		var block = document.querySelector(".head-img");
		var blockW = block.offsetWidth;
		var blockH = block.offsetHeight;
		

		if (w <= 768 && w >= 320) {
			block.style.left = (w - blockW) / 2 + 'px';
			block.style.top = (h - blockH) / 2 + 'px';
		} else if (w <= 992 && w > 768 ) {
			block.style.left = (w - blockW) / 2 + 'px';
			block.style.top = (h - blockH) / 2 + 'px';
		}

	};

	window.onresize = function () {
		centerElem();
	};


});



// Scroll header block function on press separator arrow
$(function () {
	$('.question-arrow').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.question-arrow').offset().top
		}, 700);
	});
});