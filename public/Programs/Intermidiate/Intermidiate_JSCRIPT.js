$(document).ready(function()
{
    var body_width = $('body').width();

    /*------FOR MOBILE PHONES------*/
    if(body_width < 600)
	{
		$('.footer-icons a:nth-child(1)').attr("href", "fb://facewebmodal/f?href=https://www.facebook.com/nemanja.glumicic");
		$('.footer-icons a:nth-child(3)').attr("href", "instagram://user?username=nemanjaglumicic");
		$('.footer-mail').attr("href", "mailto:nullgym@gmail.com");
    }

    
    if(body_width < 950)
    {
        $('.parallax2').removeClass('parallax2');

        $('.parallax').removeClass('parallax');
    
        $('aside.background').css({'height': '100%'});
    }

    if(body_width < 732)
    {
        $('.opacity').removeClass('opacity');
    }

    $(document).ready(function()
    {
        $('.burger-container').click( function()
        {
            $(this).toggleClass('open');
            $('nav ul').toggleClass('dropdown');
        });
    });
    
    /*------GET IT BUTTON-----*/
    $('.quotedowp').hover(function() 
    {
        $('.quotedowdiv').css({
            transform: 'scale(1.3)',
	        transition: '.2s ease-in-out'
        });
    }, function()
    {
        $('.quotedowdiv').css({
            transform: 'scale(1)',
	        transition: '.2s ease-in-out'
        });;
    });

    /*------PARALLAX------*/
    $(window).bind('scroll',function(e)
    {
   		parallaxScroll();
   	});
 
   	function parallaxScroll()
    {
   		var scrolledY = $(window).scrollTop();
		$('.parallax2').css('background-position','center -'+((scrolledY*.2))+'px');
   	}
});

/*------ANIMATIONS------*/
$(window).scroll(function()
{
    var body_width = $('body').width();

    if($(this).scrollTop() > 800 && body_width > 732)
    {
        $('.aboutp').addClass('fadeInUp').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 1250 && body_width > 732)
    {
        $('.subprogli').addClass('zoomInDown').removeClass('opacity');
        $('.subprogli2').css({"animation-delay": ".15s"});
        $('.subprogli3').css({"animation-delay": ".25s"});
        $('.subprogli4').css({"animation-delay": ".35s"});
    }

    if($(this).scrollTop() > 1740 && body_width > 732)
    {
        $('.subp').addClass('fadeInUp').removeClass('opacity');
    }
});