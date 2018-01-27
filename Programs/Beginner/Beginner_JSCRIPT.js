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
    if($(this).scrollTop() > 650)
    {
        $('aside').removeClass('parallax2');
    }
    else
        $('aside').addClass('parallax2');

    if($(this).scrollTop() > 900)
    {
        $('.aboutp').addClass('fadeInUp');
        $('.aboutp').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 900)
    {
        $('.aboutimg').addClass('bounceInRight');
        $('.aboutimg2').addClass('bounceInRight2');
        $('.aboutimg').removeClass('opacity');
        $('.aboutimg2').removeClass('opacity2');
    }
    
    if($(this).scrollTop() > 1600)
    {
        $('.whyp').addClass('fadeInUp');
        $('.whyp').removeClass('opacity');
        $('.whyimg').addClass('bounceInLeft');
        $('.whyimg').removeClass('opacity');
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
        $('.quotedowdiv').addClass('zoomleave')
        $('.quotedowdiv').removeClass('zoomhover')
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
		$('.parallax2').css('background-position','center -'+((scrolledY*.3))+'px');
   	}
});
