//Navbar is sticky
$(window).scroll(function()
{

    if( $(this).scrollTop() > 101)
    {
        $(".navbar").addClass("navbar-scrolled");
    }
    else
    {
        $(".navbar").removeClass("navbar-scrolled");
    }
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 400)
    {
        $(".beginnerpre").addClass("flip");
        $(".intermidiatepre").addClass("flip2");
        $(".advancedpre").addClass("flip3");
        $(".beginnerpre").removeClass("opacity");
        $(".beginnerpre").addClass("opacity2");
        $(".intermidiatepre").removeClass("opacity");
        $(".intermidiatepre").addClass("opacity2");
        $(".advancedpre").removeClass("opacity");
        $(".advancedpre").addClass("opacity2");
    }             
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 1200)
    {
        $(".tutorialsspan").addClass("flip");
        $(".tutorialsspan").removeClass("opacity");
        $(".tutorialsspan").addClass("opacity2");
    }             
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 1270)
    {
        $(".clickherespan").addClass("fadeIn");
        $(".clickherespan").removeClass("opacity");
        $(".clickherespan").addClass("opacity2");
    }             
});