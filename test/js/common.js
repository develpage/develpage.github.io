$(function() {
    $('input').keyup(function() {
        if ($(this).val().length >= 4) $(this).next('input').focus();
    });
});

$(window).resize(function() {
    if ($(window).width() <= 768) {
        $('nav').css('display', 'none');

    } else {
        $('nav').css('display', 'block');
    }
});

$(function() {
    $('.mobile-menu').on('click', function() {
        $('nav').fadeToggle('fast', 'linear');
        $('a').toggleClass('mobile-link');
    });

    $('a').on('click', function() {
        if ($('a').hasClass('mobile-link') == true) {
            $('nav').fadeToggle('fast', 'linear');
            $('a').toggleClass('mobile-link');
        }
    });

});