$(document).ready(function() {


    /*---FOR THE STICKY NAVIGATION-----*/
    var waypoint = new Waypoint({
        element: $(".js--section-features"),
        handler: function(direction) {
            $('.js--main-nav').toggleClass("sticky");
        },
        offset: '60px;'
    });

    /*------SCROLL ON ACTION BUTTONS-------*/
    $(".js--scroll-to-plans").click(function() {
        $("html, body").animate({ scrollTop: $(".js--section-plans").offset().top }, 1000);
    });

    $(".js--scroll-to-features").click(function() {
        $("html, body").animate({ scrollTop: $(".js--section-features").offset().top }, 500);
    });

    /*---FOR MOBILE NAVIGATION-----*/
    $('.js--mobile-nav-icon').click(function() {
        var navElem = $('.js--main-nav-ul');
        var icon = $('.js--mobile-nav-icon i');
        navElem.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });

    /*--------NAVIGATION SCROLL--------*/
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /**---------------Animations on scroll---------------*/
    /**Features block fade in up */
    var waypoint = new Waypoint({
        element: $(".js--waypoint-1"),
        handler: function(direction) {
            $(".js--waypoint-1").addClass("animate__animated animate__fadeInUp");
        },
        offset: '50%;'
    });

    /**Features section fadeInUp */
    var waypoint = new Waypoint({
        element: $(".js--waypoint-1"),
        handler: function(direction) {
            $(".js--waypoint-1").addClass("animate__animated animate__fadeInUp");
        },
        offset: '50%;'
    });

    /**Steps section image fadeInUpBig */
    var waypoint = new Waypoint({
        element: $(".js--waypoint-2"),
        handler: function(direction) {
            $(".js--waypoint-2").addClass("animate__animated animate__fadeInUpBig");
        },
        offset: '50%;'
    });

    /**Cities section fadeIn */
    var waypoint = new Waypoint({
        element: $(".js--waypoint-3"),
        handler: function(direction) {
            $(".js--waypoint-3").addClass("animate__animated animate__fadeIn");
        },
        offset: '50%;'
    });

    /**Plans section premium plan pulse */
    var waypoint = new Waypoint({
        element: $(".js--waypoint-4"),
        handler: function(direction) {
            $(".js--waypoint-4").addClass("animate__animated animate__pulse");
        },
        offset: '50%;'
    });
});