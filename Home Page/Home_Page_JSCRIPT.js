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

    if($(this).scrollTop() > 1000)
    {
        $('.tutorialsp').addClass('fadeInDown');
        $('.tutorialsp').removeClass('opacity');

        $('.tutorialsul li:nth-child(1)').addClass('fadeInLeft');
        $('.tutorialsul li:nth-child(1)').removeClass('opacity');

        $('.tutorialsul li:nth-child(2)').addClass('fadeIn');
        $('.tutorialsul li:nth-child(2)').removeClass('opacity');

        $('.tutorialsul li:nth-child(3)').addClass('fadeInRight');
        $('.tutorialsul li:nth-child(3)').removeClass('opacity');
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

    $('.ism-img-frame').hover(function() 
    {
        $(this)
            .addClass('zoomhover2')
            .removeClass('zoomleave2')

    }, function()
    {
        $(this)
            .removeClass('zoomhover2')
            .addClass('zoomleave2')
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