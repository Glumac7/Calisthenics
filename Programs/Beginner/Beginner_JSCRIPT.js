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

    var header_width = $('header').width();
    if(header_width < 950)
        $('header').removeClass();
        
    else
        $('header').addClass('fixed');
       

    var body_width = $('body').width();
    if(body_width < 950)
    {
        $('body').find('.parallax2').removeClass('parallax2');

        $('aside.background').css({'height': '100%'});
    }
    else
        $('section:nth-child(1)').addClass('parallax2');
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 600)
    {
        $('.aboutp').addClass('fadeInUp');
        $('.aboutp').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 600)
    {
        $('.aboutimg').addClass('bounceInRight');
        $('.aboutimg2').addClass('bounceInRight2');
        $('.aboutimg').removeClass('opacity');
        $('.aboutimg2').removeClass('opacity2');
    }
    
    if($(this).scrollTop() > 1200)
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