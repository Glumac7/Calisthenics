$(document).ready(function()
{

    /*------VARIABLES-----*/
    var $body_width = $('body').width();
    var $header_width = $('header').width();
    var $tutorials_ul_li =  $('.tutorialsdiv ul li .overlay');

    /*------FOR MOBILE PHONES------*/
    if($body_width < 600)
	{
		$('.footer-icons a:nth-child(1)').attr("href", "fb://facewebmodal/f?href=https://www.facebook.com/nemanja.glumicic");
		$('.footer-icons a:nth-child(3)').attr("href", "instagram://user?username=nemanjaglumicic");
		$('.footer-mail').attr("href", "mailto:necaglumicic@gmail.com");
    }

    $(document).ready(function()
    {
        $('.burger-container').click( function()
        {
            $(this).toggleClass('open');
            $('nav ul').toggleClass('dropdown');
        });
    });
    if($body_width < 800)
    {
        $($tutorials_ul_li).css({'height': '35%'});

        $('.transformationsdiv ul li .overlay2').css({'bottom': '0', 'height': '100%'});

        $('aside').removeClass('parallax2');

        $('.opacity').removeClass('opacity');
        $('.opacity2').removeClass('opacity2');
    }
});

/*-----ANIMATIONS-----*/
$(window).scroll(function() {

    $body_width = $('body').width();

    if($(this).scrollTop() > 350 && $body_width > 800)
    {
        $('.programsul li:nth-child(1)').addClass('rotateInDownLeft').removeClass('opacity');

        $('.programsul li:nth-child(2)').addClass('fadeInUp').removeClass('opacity');

        $('.programsul li:nth-child(3)').addClass('rotateInDownRight').removeClass('opacity');
    }

    if($(this).scrollTop() > 800 && $body_width > 800)
    {
        $('.tutorialsp').addClass('fadeInDown').removeClass('opacity');

        $('.tutorialsul li:nth-child(1)').addClass('fadeInLeft').removeClass('opacity');

        $('.tutorialsul li:nth-child(2)').addClass('fadeIn').removeClass('opacity');

        $('.tutorialsul li:nth-child(3)').addClass('fadeInRight').removeClass('opacity');
    }

    if($(this).scrollTop() > 1250 && $body_width > 800)
    {
        $('.transformationsp').addClass('fadeInDown').removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(1)')
            .addClass('fadeInUp')
            .css({"animation-delay": ".2s"})
            .removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(2)')
            .addClass('fadeInUp')
            .css({"animation-delay": ".3s"})
            .removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(3)')
            .addClass('fadeInUp')
            .css({"animation-delay": ".4s"})
            .removeClass('opacity');


        $('.transformationsdiv ul').addClass('fadeIn').removeClass('opacity');
    }
});

/*------PROGRAMS IMAGE HOVER------*/
$(document).ready(function()
{
    $('.programsimg').hover(function() 
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

/*------SMOOTH TRANSITION FOR THE NAV LINKS------*/
jQuery.easing.def = "easeInOutCubic";

$(document).ready(function($) 
{
    $(".scroll").click(function(event)
    {		
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
});

/*-----PARALLAX-----*/
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