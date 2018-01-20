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
});

$(window).scroll(() => {
    if($(this).scrollTop() > 400)
    {
        $('.programsul li:nth-child(1)').addClass('rotateInDownLeft');
        $('.programsul li:nth-child(1)').removeClass('opacity');

        $('.programsul li:nth-child(2)').addClass('fadeInUp');
        $('.programsul li:nth-child(2)').removeClass('opacity');

        $('.programsul li:nth-child(3)').addClass('rotateInDownRight');
        $('.programsul li:nth-child(3)').removeClass('opacity');
    }
});

$(() =>
{
    $('.beginnerimg').hover(function() 
    {
        $(this)
            .addClass('zoomhover')
            .removeClass('zoomleave')

    }, function()
    {
        $(this)
            .removeClass('zoomhover')
            .addClass('zoomleave')
    });

    $('.intermidiateimg').hover(function() 
    {
        $(this)
            .addClass('zoomhover')
            .removeClass('zoomleave')

    }, function()
    {
        $(this)
            .removeClass('zoomhover')
            .addClass('zoomleave')
    });

    $('.advancedimg').hover(function() 
    {
        $(this)
            .addClass('zoomhover')
            .removeClass('zoomleave')

    }, function()
    {
        $(this)
            .removeClass('zoomhover')
            .addClass('zoomleave')
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
		$('.parallax2').css('background-position','center -'+((scrolledY*.4))+'px');
   	}
});