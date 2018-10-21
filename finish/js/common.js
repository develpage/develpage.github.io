$(function() {

	new WOW().init();

	$("#mobile-burger").on("click", function () {
		$(".burger-item").toggleClass("active-burger");
		$(".modile-menu").css("display", "block");
		setTimeout(function(){
			$(".modile-menu").toggleClass("mobile-menu__active");
		}, 300);

	});

	$(".mobile-link").on("click", function () {
		$(".burger-item").toggleClass("active-burger");			
		$(".modile-menu").toggleClass("mobile-menu__active");
		setTimeout(function(){
			$(".modile-menu").css("display", "none");	
		}, 1000);
	});


	var $photos = $(".client-photo"),
		$reviews = $(".review"),
		$count = 0;
	$($photos[$count]).css("display", "inline").addClass("active-photo");
	$($reviews[$count]).css("display", "flex").addClass("active-review");

	// $(".review-wrapper").css("height", $(".active-photo").innerHeight());
	// $(".review-container").css("height", $(".active-review").innerHeight());

	if( $(window).innerWidth() >= 768 ) { 
		$(".review-wrapper").css("height", $(".active-photo").innerHeight());
		$(".review-container").css("height", $(".active-review").innerHeight());
	}

	if (  $(window).innerWidth() <= 420 ) {
		$(".tables").addClass("p-0");
		$(".empty").css("display", "none");
	} else {
		$(".tables").removeClass("p-0");
		$(".empty").css("display", "table-cell");
	}

	function reviewSelect(){
		$photos.removeClass("active-photo");
		$reviews.removeClass("active-review");
		
		setTimeout(function(){
			$photos.css("display", "none");
			$reviews.css("display", "none");
		}, 200);

		setTimeout(function(){
			$($photos[$count]).css("display", "inline");			
			$($reviews[$count]).css("display", "flex");
		}, 300);

		setTimeout(function(){
			$($reviews[$count]).addClass("active-review");
			$($photos[$count]).addClass("active-photo");
		}, 500);	
	}
	
	var autoChangeReview = setInterval(changeReeview, 5000); 
	
	function changeReeview() {
		if ( $count >= $photos.length - 1 ){
			$count = 0;
			reviewSelect();
		} else {
			$count++;
			reviewSelect();
		}
	}

	$(".prev-review").on("click", function(){
		if ( $count <= 0 ){
			$count = $photos.length - 1;
			reviewSelect();
			clearInterval(autoChangeReview);
		} else {
			$count--;
			reviewSelect();
			clearInterval(autoChangeReview);
		}
		autoChangeReview = setInterval(changeReeview, 5000);
	});

	$(".next-review").on("click", function(){
		if ( $count >= $photos.length - 1 ){
			$count = 0;
			reviewSelect();
			clearInterval(autoChangeReview);
		} else {
			$count++;
			reviewSelect();
			clearInterval(autoChangeReview);
		}
		autoChangeReview = setInterval(changeReeview, 5000);
	});

	$('.anchor').on('click', function(e) {
		e.preventDefault();
		var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
		var $section = $(section);
	  
		$('html, body').animate({
		  scrollTop: $section.offset().top + 'px'
		}, 1000);
	  });

});

$(window).on("resize", function(){
	if( $(window).innerWidth() >= 768 ) { 
		$(".review-wrapper").css("height", $(".active-photo").innerHeight());
		$(".review-container").css("height", $(".active-review").innerHeight());
	}
	if (  $(window).innerWidth() <= 420 ) {
		$(".tables").addClass("p-0");
		$(".empty").css("display", "none");
	} else {
		$(".tables").removeClass("p-0");
		$(".empty").css("display", "table-cell");
	}
	
});