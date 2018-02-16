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
        $('body').find('.parallax2').removeClass('parallax2');

        $('body').find('.parallax').removeClass('parallax');
    
        $('aside.background').css({'height': '100%'});
    }
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 700)
    {
        $('.descp').addClass('fadeInUp');
        $('.descp').removeClass('opacity');
        $('.descimg').addClass('bounceInRight');
        $('.descimg').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 1250)
    {
        $('.subprogli').addClass('zoomInDown');
        $('.subprogli').removeClass('opacity');
        $('.subprogli2').addClass('zoomInDown2');
        $('.subprogli2').removeClass('opacity');
        $('.subprogli3').addClass('zoomInDown3');
        $('.subprogli3').removeClass('opacity');
        $('.subprogli4').addClass('zoomInDown4');
        $('.subprogli4').removeClass('opacity');
    }

    if($(this).scrollTop() > 1800)
    {
        $('.subprogsp').addClass('fadeInUp');
        $('.subprogsp').removeClass('opacity');
        $('.subprogsimg').addClass('bounceInLeft');
        $('.subprogsimg').removeClass('opacity');
    }
});

$(document).ready(function()
{
    $('.quotedowp').hover(function() 
    {
        $('.quotedowdiv').addClass('zoomhover')
        $('.quotedowdiv').removeClass('zoomleave')
    }, function()
    {
        $('.quotedowdiv').removeClass('zoomhover')
        $('.quotedowdiv').addClass('zoomleave')
    });
});

$(document).ready(function()
{
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
