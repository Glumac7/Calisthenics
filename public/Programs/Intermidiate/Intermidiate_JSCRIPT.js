$(document).ready(function()
{
	$(window).bind('scroll',function(e)
    {
   		parallaxScroll();
   	});
 
   	function parallaxScroll()
    {
   		var scrolledY = $(window).scrollTop();
		$('.parallax').css('background-position','center -'+((scrolledY*.3))+'px');
    }
    var header_width = $('header').width();

    if(header_width < 950)
        $('header').removeClass();
        
    else
        $('header').addClass('fixed');      

    var body_width = $('body').width();
    if(body_width < 950)
    {
        $('.parallax2').removeClass('parallax2');

        $('.parallax').removeClass('parallax');
    
        $('aside.background').css({'height': '100%'});
    }

    if(body_width >= 640)
    {
        $('header').css({"position": "fixed", "width": "100%", "z-index": "5"})
    }

    var counter;

    $("#burger-nav").on("click", function()
    {
		if(counter === 1)
		{
			$("#burger-nav").css({"background": "url(../../Home%20Page/Images/burger.png) no-repeat 98% center"});
			$("header nav ul").removeClass("open");
			counter = 0;
		} 
		else
		{
			$("#burger-nav").css({"background": "url(../../Home%20Page/Images/closed.png) no-repeat 98% center"});
			$("header nav ul").addClass("open");
			counter = 1;
		}
    });
    
    $('.quotedowp').hover(function() 
    {
        $('.quotedowdiv').addClass('zoomhover').removeClass('zoomleave');
    }, function()
    {
        $('.quotedowdiv').removeClass('zoomhover').addClass('zoomleave');
    });

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

$(window).scroll(function()
{
    if($(this).scrollTop() > 800)
    {
        $('.aboutp').addClass('fadeInUp').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 1250)
    {
        $('.subprogli').addClass('zoomInDown').removeClass('opacity');
        $('.subprogli2').addClass('zoomInDown2').removeClass('opacity');
        $('.subprogli3').addClass('zoomInDown3').removeClass('opacity');
        $('.subprogli4').addClass('zoomInDown4').removeClass('opacity');
    }

    if($(this).scrollTop() > 1740)
    {
        $('.subp').addClass('fadeInUp').removeClass('opacity');
    }
});