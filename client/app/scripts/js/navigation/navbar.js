$(document).ready(function () {
    $.fn.scrollTo = function (options) {
        var settings = {offset: -89, speed: 'slow', override: null, easing: null};
        if (options) {
            if (options.override) {
                options.override = (override('#') != -1) ? options.override : '#' + options.override
            }
            $.extend(settings, options)
        }
        return this.each(function (i, el) {
            $(el).click(function (e) {
                var idToLookAt;
                if ($(el).attr('href').match(/#/) !== null) {
                    e.preventDefault();
                    idToLookAt = (settings.override) ? settings.override : $(el).attr('href');
                    if (history.pushState) {
                        history.pushState(null, null, idToLookAt);
                        $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing)
                    } else {
                        $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing, function (e) {
                            window.location.hash = idToLookAt
                        })
                    }
                }
            })
        })
    };
    $('.slideToHome, .slideToDescription, .slideToAbout, .slideToWhyUs, .slideToPricing, .slideToContact').scrollTo({speed: 1400});
    headerWrapper = parseInt($('.navbar').height());
    offsetTolerance = 89;
    $(window).scroll(function () {
        scrollPosition = parseInt($(this).scrollTop());
        $('.navbar-nav li a').each(function () {
            thisHref = $(this).attr('href');
            thisTruePosition = parseInt($(thisHref).offset().top);
            thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
            if (scrollPosition >= thisPosition) {
                $('.selected').removeClass('selected');
                $('.navbar-nav li a[href=' + thisHref + ']').addClass('selected')
            }
        });
        bottomPage = parseInt($(document).height()) - parseInt($(window).height());
        if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {
            $('.selected').removeClass('selected');
            $('navbar-nav li a:last').addClass('selected')
        }
    })
});