jQuery(function() {
    "use strict";
    var wH = jQuery(window).height();
   
    if (jQuery('.link-yaku').length > 0) {
        var breadcrumbLength = jQuery('.link-yaku').html();
        jQuery('.link-yaku').html('');
        breadcrumbLength = 'Coder';

        for (var i = 0, len = breadcrumbLength.length; i < len; i++) {
            var actualTitleString = jQuery('.link-yaku').html();
            jQuery('.link-yaku').html(actualTitleString + '<span>' + breadcrumbLength[i] + '</span>');
        }
    }

    var wH = jQuery(window).height();
    jQuery('.starTitle > *').each(function() {
        var fadeStart = 0
          , fadeUntil = 400
          , fading = jQuery(this);
        jQuery(window).bind('scroll', function() {
            var offset = jQuery(document).scrollTop()
              , opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css('opacity', opacity);
        });
    });

    jQuery(".star").each(function() {
        postars(jQuery('.cover').get(0)).init();
    });


});

