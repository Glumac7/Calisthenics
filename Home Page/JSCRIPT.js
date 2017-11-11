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
