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

        $('.opacity').removeClass('opacity');
        $('.opacity2').removeClass('opacity2');

        $('p.tutorialsp')
            .html("Before starting any of the programs listed above please make sure that you have the best tehnique posible. Without it you are putting your self at risk of getting hurt, and, you will never be at your full potencial.<br/><br/><span>Listed below are 3 general groups of tutorials...</span><br/><br/>")
            .css({"padding": "0 10px"});
        
        $('.programsul li:nth-child(1)').css({"margin-bottom": "17px"});
        $('.programsul li:nth-child(2)').css({"margin-bottom": "17px"});

        $('.tutorialsul li:nth-child(1)').css({"margin-bottom": "17px"});
        $('.tutorialsul li:nth-child(2)').css({"margin-bottom": "17px"});

        $('.transformationsp')
            .html("Listed below are some <q>SUCCESS</q> stories of the programs listed above. The reason it exists isto show <span>YOU</span> that <span>anything is possible!</span><br/><br/><br/>")
            .css({"padding": "0 10px", "font-size": "17px"});

        $('#s li:nth-child(1)').css({"margin-bottom": "17px"});
        $('#s li:nth-child(2)').css({"margin-bottom": "17px"});

        $('.programsdiv, .tutorialsdiv, .transformationsdiv3').removeClass('parallax2');
    }
});

$(window).scroll(() => {

    if($(this).scrollTop() > 400 && $('body').width() > 800)
    {
        $('.programsul li:nth-child(1)').addClass('rotateInDownLeft');
        $('.programsul li:nth-child(1)').removeClass('opacity');

        $('.programsul li:nth-child(2)').addClass('fadeInUp');
        $('.programsul li:nth-child(2)').removeClass('opacity');

        $('.programsul li:nth-child(3)').addClass('rotateInDownRight');
        $('.programsul li:nth-child(3)').removeClass('opacity');
    }

    if($(this).scrollTop() > 1000 && $('body').width() > 800)
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

    if($(this).scrollTop() > 1500 && $('body').width() > 800)
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

jQuery.easing.def = "easeInOutCubic";

$(document).ready(function($) 
{
    $(".scroll").click(function(event)
    {		
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top}, 1000);
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