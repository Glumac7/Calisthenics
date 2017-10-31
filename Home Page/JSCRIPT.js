var mn = $(".navbar");

$(window).scroll(function()
{
    if( $(this).scrollTop() > 111)
    {
        mn.addClass("navbar-scrolled");
    }
    else
    {
        mn.removeClass("navbar-scrolled");
    }
});