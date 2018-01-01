$(document).ready(function()
{
	$(window).bind('scroll',function(e)
    {
   		parallaxScroll();
   	});
 
   	function parallaxScroll()
    {
   		var scrolledY = $(window).scrollTop();
		$('.parallax').css('background-position','center -'+((scrolledY*.5))+'px');
   	}
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 900)
    {
        $('.aboutp').addClass('fadeInUp');
        $('.aboutp').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 900)
    {
        $('.aboutimg').addClass('bounceInRight');
        $('.aboutimg').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 1600)
    {
        $('.whyp').addClass('fadeInUp');
        $('.whyp').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 1600)
    {
        $('.whyimg').addClass('bounceInLeft');
        $('.whyimg').removeClass('opacity');
    }
});

$(() =>
{
    $('.quotedowp').hover(function() 
    {
        $('.quotedowdiv').addClass('zoomhover')
        $('.quotedowdiv').removeClass('zoomleave')
    });
    
    $('.quotedowp').mouseleave(function()
    {
        $('.quotedowdiv').removeClass('zoomhover')
        $('.quotedowdiv').addClass('zoomleave')
    });
});