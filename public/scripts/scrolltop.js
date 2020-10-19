jQuery(document).ready(function () {

    jQuery("#subir").hide();

    jQuery('a#subir').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#subir').fadeIn();
        } else {
            jQuery('#subir').fadeOut();
        }
    });
});