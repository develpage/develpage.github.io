
$(function() {

    new WOW().init();

});



$(document).ready(function() {
    $('.navigation').click(function() {
        $('.navigation').toggleClass('active');
        $('.burger-menu').toggleClass('visible-menu');
    });
    $('.menu-link').click(function() {
        $('.navigation').removeClass('active');
        $('.burger-menu').removeClass('visible-menu');
    })
});


// START PALRALLAX ==================================================================


$(document).ready(function() {

    var controller = new ScrollMagic.Controller();

// Change menu Item Color *******************************************************************
   

function colorMenu(){ 
	var res;
    if ($(window).width() < 576) {
    	res = $(".slider-content-wrapper").height() + $(".short-services-mobile").height();
} else {
	res = $('.slider-content-wrapper').height();
}
return res;
};


    var changeColorMenu = new ScrollMagic.Scene({
            triggerElement: '.slider-content-wrapper',
            duration: colorMenu(),
            triggerHook: 0.05
        })
        .setClassToggle('.burger-item', 'changeColor')
        //.addIndicators()
        .addTo(controller);

    var changeColorMenu2 = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: 1800,
            duration: '140%',
            triggerHook: 0.05
        })
        .setClassToggle('.burger-item', 'changeColor')
        //.addIndicators()
        .addTo(controller);

    var changeColorMenu = new ScrollMagic.Scene({
            triggerElement: '#review',
            duration: $('#review').height(),
            triggerHook: 0.05
        })
        .setClassToggle('.burger-item', 'changeColor')
        //.addIndicators()
        .addTo(controller);
	

    //Bacground Scene ***************************************************

    var headScene1 = new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 400,
            triggerHook: 0
        })
        .setClassToggle('.bg-initial', 'fade-out')
        // .addIndicators()
        .addTo(controller);


    var headScene2 = new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 400,
            triggerHook: 0
        })
        .setClassToggle('.bg1', 'fade-out')
        //  .addIndicators()
        .addTo(controller);


    var headScene3 = new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 350,
            triggerHook: 0
        })
        .setClassToggle('.header-content', 'fade-out')
        //  .addIndicators()
        .addTo(controller);

    var headSceneContactsFade = new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 350,
            triggerHook: 0
        })
        .setClassToggle('.header-contacts', 'fade-out')
        //  .addIndicators()
        .addTo(controller);


    var bg2InScene = new ScrollMagic.Scene({
            triggerElement: '.header-content',
            offset: 400,
            duration: '100%',
            triggerHook: 0
        })
        .setClassToggle('.bg2', 'fade-in')
        //.addIndicators()
        .addTo(controller);




    //about line effect***************************************


    var lineLeftParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.about-company-content',
            triggerHook: 0.5,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-left', 1, { x: '-50%', ease: Linear.easeNone }))
        //    .addIndicators()
        .addTo(controller);

    var lineRightParallaxScene = new ScrollMagic.Scene({
            triggerElement: '#about',
            triggerHook: 0.5,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-right', 1, { x: '20%', ease: Linear.easeNone }))
        //    .addIndicators()
        .addTo(controller);


    // FAde out effect for about section
    var fadeAbout = new ScrollMagic.Scene({
            triggerElement: '.about-company-content',
            offset: 350,
            triggerHook: 0
        })
        .setClassToggle('.about-company-content', 'fade-out')
        //  .addIndicators()
        .addTo(controller);





    //Slider Pin Effect************************************************************

function windowHeight(){ 
	var res;
    if ($(window).height() < 700) {
    	res = $(".slider-section").height()*7.5;
} else {
	res = $(".slider-section").height()*5;
}
return res;
};


    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: 0,
            duration: windowHeight()
        })
        .setPin('.slider-section')
        //.addIndicators()
        .addTo(controller);




    //slider right bg img************************************************************


    var slider = new ScrollMagic.Controller();

    var sliderRight1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: 400,
            duration: "100%"
        })
        .setTween(TweenMax.from('.s-bg2', 1, { y: '100%', ease: Linear.easeNone }))
        //     .addIndicators()
        .addTo(slider);

    var sliderRight2 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: 1600,
            duration: "100%"
        })
        .setTween(TweenMax.from('.s-bg3', 1, { y: '100%', ease: Linear.easeNone }))
        //      .addIndicators()
        .addTo(slider);

    var sliderRight3 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: 2800,
            duration: "100%"
        })
        .setTween(TweenMax.from('.s-bg4', 1, { y: '100%', ease: Linear.easeNone }))
        //    .addIndicators()
        .addTo(slider);



    //slider top bg img************************************************************


    var sliderTop = new ScrollMagic.Controller();

    var sliderTop1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: 400,
            duration: "100%"
        })
        .setTween(TweenMax.from('.st-bg2', 1, { x: '100%', ease: Linear.easeNone }))
        // .addIndicators()
        .addTo(slider);

    var sliderTop2 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: 1600,
            duration: "100%"
        })
        .setTween(TweenMax.from('.st-bg3', 1, { x: '100%', ease: Linear.easeNone }))
        //      .addIndicators()
        .addTo(slider);

    var sliderTop3 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            triggerHook: "onLeave",
            offset: 2800,
            duration: "100%"
        })
        .setTween(TweenMax.from('.st-bg4', 1, { x: '100%', ease: Linear.easeNone }))
        //    .addIndicators()
        .addTo(slider);




    //slider content opacity ************************************************************


    var contentOpacity = new ScrollMagic.Controller();

    var SliderContentScene1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 1200,
            triggerHook: "onLeave"
        })
        .setClassToggle('.cont1', 'fade-out')
        // .addIndicators()
        .addTo(contentOpacity);

    var SliderContentScene2 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 1300,
            duration: "120%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.cont2', 'fade-in')
        // .addIndicators()
        .addTo(contentOpacity);


    var SliderContentScene3 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 2520,
            duration: "120%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.cont3', 'fade-in')
        // .addIndicators()
        .addTo(contentOpacity);

    var SliderContentScene4 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 3700,
            triggerHook: "onLeave"
        })
        .setClassToggle('.cont4', 'fade-in')
        //.addIndicators()
        .addTo(contentOpacity);



    // Slider NAme Opacity ************************************************************

    var nameOpacity = new ScrollMagic.Controller();

    var SliderNameScene1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 1200,
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-build', 'fade-out')
        // .addIndicators()
        .addTo(nameOpacity);

    var SliderNameScene2 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 1300,
            duration: "120%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-project', 'fade-in')
        // .addIndicators()
        .addTo(nameOpacity);


    var SliderNameScene3 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 2520,
            duration: "120%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-injer', 'fade-in')
        // .addIndicators()
        .addTo(nameOpacity);

    var SliderNameScene4 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 3700,
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-service', 'fade-in')
        // .addIndicators()
        .addTo(contentOpacity);



    // Slider Name line animated ************************************************************

    var sliderLine = new ScrollMagic.Controller();

    var sliderLineScene1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            duration: "130%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        // .addIndicators()
        .addTo(sliderLine);

    var sliderLineScene2 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 1325,
            duration: "110%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        // .addIndicators()
        .addTo(sliderLine);

    var sliderLineScene3 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 2525,
            duration: "120%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        // .addIndicators()
        .addTo(sliderLine);

    var sliderLineScene4 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 3750,
            triggerHook: "onLeave"
        })
        .setClassToggle('.slider-green-line', 'slider-green-line-animated')
        // .addIndicators()
        .addTo(sliderLine);


    // Slider anchor Link Animate ***********************************************************************


    var sliderLineScene1 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            duration: "130%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.lw1', 'active')
        // .addIndicators()
        .addTo(sliderLine);

    var sliderLineScene2 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 1325,
            duration: "110%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.lw2', 'active')
        // .addIndicators()
        .addTo(sliderLine);

    var sliderLineScene3 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 2525,
            duration: "120%",
            triggerHook: "onLeave"
        })
        .setClassToggle('.lw3', 'active')
        // .addIndicators()
        .addTo(sliderLine);

    var sliderLineScene4 = new ScrollMagic.Scene({
            triggerElement: '.slider-section',
            offset: 3750,
            triggerHook: "onLeave"
        })
        .setClassToggle('.lw4', 'active')
        // .addIndicators()
        .addTo(sliderLine);







    // Slider anchor Link ScrollerTO ************************************************************

    $(".build").click(function(e) {
        e.preventDefault();
        sliderLine.scrollTo(function(sliderLineScene1) {
            $("html, body").animate({ scrollTop: sliderLineScene1 });

        });
        sliderLine.scrollTo(sliderLineScene1);

    });

    $(".project").click(function(e) {
        e.preventDefault();
        sliderLine.scrollTo(function(sliderLineScene2) {
            $("html, body").animate({ scrollTop: sliderLineScene2 });
        });
        sliderLine.scrollTo(sliderLineScene2);

    });

    $(".injen").click(function(e) {
        e.preventDefault();
        sliderLine.scrollTo(function(sliderLineScene3) {
            $("html, body").animate({ scrollTop: sliderLineScene3 });
        });
        sliderLine.scrollTo(sliderLineScene3);

    });

    $(".service").click(function(e) {
        e.preventDefault();
        sliderLine.scrollTo(function(sliderLineScene4) {
            $("html, body").animate({ scrollTop: sliderLineScene4 });
        });
        sliderLine.scrollTo(sliderLineScene4);
    });



    // Short Services Scene ***************************************

    var bg3InScene = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: -1100,
            duration: '540%',
            triggerHook: 0
        })
        .setClassToggle('.bg3', 'display')
        .setPin('.bg3')
        //.addIndicators()
        .addTo(controller);

    var bg3ParallaxSceneIn = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: -1100,
            duration: '150%',
            triggerHook: 0
        })
        .setTween(TweenMax.from('.short-services', 0.1, { y: '100%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);


    var bg3ParallaxSceneOut = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: 2200,
            duration: '150%',
            triggerHook: 0
        })
        .setTween(TweenMax.to('.short-services', 0.1, { y: '-110%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);

    var shortServBG = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            duration: '300%',
            triggerHook: 0
        })
        .setPin('.short-services')
        //.addIndicators()
        .addTo(controller);

    var shortServBGParallax = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: 500,
            duration: '150%',
            triggerHook: 0
        })
        .setTween(TweenMax.to('.short-services', 1, { x: '100%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);

    // Short Services left content fade out ***************************************

    var shortServicesLeft = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: 1100,

            triggerHook: 0
        })
        .setClassToggle('.left', 'fade-out')
        // .addIndicators()
        .addTo(controller);

    // Short Services right contnt fade in ***************************************

    var shortServicesRight = new ScrollMagic.Scene({
            triggerElement: '.short-services',
            offset: 1300,

            triggerHook: 0
        })
        .setClassToggle('.right', 'fade-in')
        // .addIndicators()
        .addTo(controller);


    // achievements bg parallax **************************************************.

    var achievementsBgParallax = new ScrollMagic.Scene({
            triggerElement: '.achievements-section',
            duration: '100%',
            triggerHook: 1
        })
        .setTween('.achievements-bg', {
            y: "-20%",
            ease: Linear.easeNone
        })
        //	.addIndicators()
        .addTo(controller);




    // achievements line animate **************************************************.

    var achievementsLineParallax = new ScrollMagic.Scene({
            triggerElement: '.achievements-section',
            triggerHook: 1,
            duration: "80%"
        })
        .setTween(TweenMax.from('.achievements-green-line', 1, { x: '-50%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);

    var achievementsLineBottomScale = new ScrollMagic.Scene({
            triggerElement: '.achievements-section',
            triggerHook: 0.5,
            duration: "100%"
        })
        .setTween(TweenMax.from('.achievements-green-line-b1', 0.5, { transform: "scaleX(0)" }))
        // .addIndicators()
        .addTo(controller);



    //Parallax gallery ********************************************************************

    var galleryParallaxImg1 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi1', 1, { y: '-20%', ease: Linear.easeNone }))
        // .addIndicators()
        .addTo(controller);

    var galleryParallaxImg2 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi2', 1, { y: '-10%', ease: Linear.easeNone }))
        // .addIndicators()
        .addTo(controller);

    var galleryParallaxImg3 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi3', 1, { y: '10%', ease: Linear.easeNone }))
        //  .addIndicators()
        .addTo(controller);

    var galleryParallaxImg4 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi4', 1, { y: '15%', ease: Linear.easeNone }))
        // .addIndicators()
        .addTo(controller);

    var galleryParallaxImg5 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi5', 1, { y: '-25%', ease: Linear.easeNone }))
        // .addIndicators()
        .addTo(controller);


    var galleryParallaxImg6 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi6', 1, { y: '-15%', ease: Linear.easeNone }))
        //  .addIndicators()
        .addTo(controller);

    var galleryParallaxImg7 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi7', 1, { y: '-35%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);


    var galleryParallaxImg8 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi8', 1, { y: '30%', ease: Linear.easeNone }))
        // .addIndicators()
        .addTo(controller);


    var galleryParallaxImg9 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi9', 1, { y: '-45%', ease: Linear.easeNone }))
        // .addIndicators()
        .addTo(controller);

    var galleryParallaxImg10 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi10', 1, { y: '-40%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);

    var galleryParallaxImg11 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi11', 1, { y: '30%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);

    var galleryParallaxImg13 = new ScrollMagic.Scene({
            triggerElement: '.achievements-content',
            triggerHook: 0.5,
            duration: "300%"
        })
        .setTween(TweenMax.from('.gi13', 1, { y: '35%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);


    // Customers background Parallax effect **********************************************


    var customersParallaxBg = new ScrollMagic.Scene({
            triggerElement: '.customers-section',
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(TweenMax.from('.customers-bg', 1, { y: '-35%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);



    // Customers line animate effect **********************************************

    var CustomersLineParallax = new ScrollMagic.Scene({
            triggerElement: '.customers-section',
            triggerHook: 1,
            duration: "80%"
        })
        .setTween(TweenMax.from('.green-line-customers', 1, { x: '-50%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);



    // Reviews line animate effect **********************************************

    var reviewsLineParallax = new ScrollMagic.Scene({
            triggerElement: '.reviews-section',
            triggerHook: 1,
            offset: -300,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-reviews', 1, { x: '-50%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);


    // Contacts line animate effect **********************************************

    var contactsLineParallax = new ScrollMagic.Scene({
            triggerElement: '.contacts',
            triggerHook: 1,
            offset: -300,
            duration: "100%"
        })
        .setTween(TweenMax.from('.green-line-contacts', 1, { x: '-50%', ease: Linear.easeNone }))
        //.addIndicators()
        .addTo(controller);



});