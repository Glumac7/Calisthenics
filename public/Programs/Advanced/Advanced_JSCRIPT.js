$(document).ready(function()
{
    var body_width = $('body').width();

    /*------FOR MOBILE PHONES------*/
    if(body_width < 600)
	{
		$('.footer-icons a:nth-child(1)').attr("href", "fb://facewebmodal/f?href=https://www.facebook.com/nemanja.glumicic");
		$('.footer-icons a:nth-child(3)').attr("href", "instagram://user?username=nemanjaglumicic");
		$('.footer-mail').attr("href", "mailto:nullgym@gmail.com");
    }

    var header_width = $('header').width();
    
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

    var ul = $('.subprogul').width();
    var li = $('.subprogul li').outerWidth();
    if(body_width < 342)
    {
        li = $('.subprogul li').outerWidth(true);
    }
    var margin = (ul - li) / 2;

    if(body_width < 732)
    {
        $('.subprogul li').css('margin-left', margin);

        $('.aboutp').removeClass('opacity');
        $('.subprogli').removeClass('opacity');
        $('.subprogli2').removeClass('opacity');
        $('.subprogli3').removeClass('opacity');
        $('.subprogli4').removeClass('opacity');
        $('.subp').removeClass('opacity');
    }

    /*------OPEN AND CLOSE FOR THE HEADER------*/
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
    
    /*------GET IT BUTTON-----*/
    $('.quotedowp').hover(function() 
    {
        $('.quotedowdiv').css({
            transform: 'scale(1.3)',
	        transition: '.2s ease-in-out'
        });
    }, function()
    {
        $('.quotedowdiv').css({
            transform: 'scale(1)',
	        transition: '.2s ease-in-out'
        });;
    });

    /*------PARALLAX------*/
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

/*------ANIMATIONS------*/
$(window).scroll(function()
{
    var body_width = $('body').width();

    if($(this).scrollTop() > 800 && body_width > 732)
    {
        $('.aboutp').addClass('fadeInUp').removeClass('opacity');
    }
    
    if($(this).scrollTop() > 1250 && body_width > 732)
    {
        $('.subprogli').addClass('zoomInDown').removeClass('opacity');
        $('.subprogli2').addClass('zoomInDown2').removeClass('opacity');
        $('.subprogli3').addClass('zoomInDown3').removeClass('opacity');
        $('.subprogli4').addClass('zoomInDown4').removeClass('opacity');
    }

    if($(this).scrollTop() > 1740 && body_width > 732)
    {
        $('.subp').addClass('fadeInUp').removeClass('opacity');
    }
});