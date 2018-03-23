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

    $(document).ready(function()
    {
        $('.burger-container').click( function()
        {
            $(this).toggleClass('open');
            $('nav ul').toggleClass('dropdown');
        });
    });

    /*------FAQ------*/
    

    $('section .faqdiv').accordion({
        animate: 300,
        active: 'none',
        collapsible: true,
        event: 'click',
        heightStyle: 'content'
    });
});