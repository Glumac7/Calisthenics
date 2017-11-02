//Navbar is sticky
$(window).scroll(function()
{

    if( $(this).scrollTop() > 103)
    {
        $(".navbar").addClass("navbar-scrolled");
    }
    else
    {
        $(".navbar").removeClass("navbar-scrolled");
    }
});
