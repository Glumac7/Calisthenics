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
        $(".tutorialsspan").addClass("flipInX");
        $(".tutorialsspan").removeClass("opacity");
        $(".tutorialsspan").addClass("opacity2");
    }
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 1500)
    {
        $(".tutorialsimage").addClass("flipInX");
        $(".tutorialsimage").removeClass("opacity");
        $(".tutorialsimage").addClass("opacity2");
    }
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 2000)
    {
        $(".transformspan").addClass("flipInX");
        $(".transformspan").removeClass("opacity");
        $(".transformspan").addClass("opacity2");
    }
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 2200)
    {
        $(".transformimage").addClass("flipInX");
        $(".transformimage").removeClass("opacity");
        $(".transformimage").addClass("opacity2");
    }
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 2550)
    {
        $(".qnaspan").addClass("fadeIn");
        $(".qnaspan").removeClass("o50city");
        $(".qnaspan").addClass("opacity2");
    }
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 2880)
    {
        $(".faqspan").addClass("fadeIn");
        $(".faqspan").removeClass("opacity");
        $(".faqspan").addClass("opacity2");
    }
});
