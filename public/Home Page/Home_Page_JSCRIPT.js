$(document).ready(function()
{
	$(window).bind('scroll',function(e)
    {
   		parallaxScroll();
   	});
 
   	function parallaxScroll()
    {
   		var scrolledY = $(window).scrollTop();
		$('.parallax').css('background-position','center -'+((scrolledY*.2))+'px');
    }
    var header_width = $('header').width();

    if(header_width < 900)
        $('header').removeClass();
        
    else
        $('header').addClass('fixed');
    

    var body_width = $('body').width();

    if(body_width < 800)
    {
        $('.tutorialsdiv ul li .overlay').css({'height': '35%'});

        $('.transformationsdiv ul li .overlay2').css({'bottom': '0', 'height': '100%'});

        $('aside').removeClass('parallax');

        $('.programsdiv, .tutorialsdiv, .transformationsdiv3').removeClass('parallax2');
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

    if($(this).scrollTop() > 1500)
    {
        $('.transformationsp').addClass('fadeInDown');
        $('.transformationsp').removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(1)').addClass('fadeInUp')
                                                    .css({"animation-delay": ".2s"})
        $('.transformationsdiv ul li:nth-child(1)').removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(2)').addClass('fadeInUp')
                                                    .css({"animation-delay": ".3s"});

        $('.transformationsdiv ul li:nth-child(2)').removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(3)').addClass('fadeInUp')
                                                    .css({"animation-delay": ".4s"});

        $('.transformationsdiv ul li:nth-child(3)').removeClass('opacity');

        $('.transformationsdiv ul').addClass('fadeIn');
        $('.transformationsdiv ul').removeClass('opacity');
    }
});

$(document).ready(function()
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
		$('.parallax2').css('background-position','center -'+((scrolledY*.2))+'px');
   	}
});