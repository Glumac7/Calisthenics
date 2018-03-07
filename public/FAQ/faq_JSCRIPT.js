$(document).ready(function()
{

    /*------VARIABLES-----*/
    var $body_width = $('body').width();
    var $header_width = $('header').width();

    /*------FOR MOBILE PHONES------*/
    if($body_width < 600)
	{
		$('.footer-icons a:nth-child(1)').attr("href", "fb://facewebmodal/f?href=https://www.facebook.com/nemanja.glumicic");
		$('.footer-icons a:nth-child(3)').attr("href", "instagram://user?username=nemanjaglumicic");
		$('.footer-mail').attr("href", "mailto:necaglumicic@gmail.com");
    }

    var counter;

    $("#burger-nav").on("click", function()
    {
		if(counter === 1)
		{
			$("#burger-nav").css({"background": "url(../Home%20Page/Images/burger.png) no-repeat 98% center"});
			$("header nav ul").removeClass("open");
			counter = 0;
		} 
		else
		{
			$("#burger-nav").css({"background": "url(../Home%20Page/Images/closed.png) no-repeat 98% center"});
			$("header nav ul").addClass("open");
			counter = 1;
		}
	});
    
    if($body_width >= 640)
    {
        $('header').css({ "width": "100%", "z-index": "5"})
    }

    /*------FAQ------*/
    

    $('section .faqdiv').accordion({
        animate: 300,
        active: 'none',
        collapsible: true,
        event: 'click',
        heightStyle: 'content'
    });
});