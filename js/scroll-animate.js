/*滚动animate特效*/
$(window).scroll(function(){
    $("[data-animation]").each(function(){
        let ani = $(this).attr('data-animation');
        let delay = $(this).attr('data-delay')!=undefined?$(this).attr('data-delay')*0.2:0;
        if( $(window).scrollTop() > ($(this).offset().top-$(window).height()+100) && !$(this).attr('animation-status')){
            $(this).attr('animation-status','true');

            $(this).css({
                'visibility':'visible',
                'animationName':ani,
                'animationDelay':delay+'s'
            });
        }
    });
});
$(window).trigger('scroll');