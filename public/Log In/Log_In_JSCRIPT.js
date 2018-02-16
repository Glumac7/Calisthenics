$(() =>
{
    $("#newUser").click(function()
    {
        $("h1").text("Registration");
        $(".logo").css(
        {
            "width":"170px",
            "height":"170px",
            "top":"10px"
        });
        $("#login-form").fadeOut(200);
        $("#registration-form").delay(300).fadeIn(500);
        $(".other-options").fadeOut(200);
    });

    $("#signup-btn,#getpass-btn").click(function()
    {
        $("h1").text("Log in");
        $(".logo").css(
        {
            "width":"190px",
            "height":"190px",
            "top":"30px"
        });

        $("#registration-form,#fpass-form").fadeOut(200);
        $("#login-form").delay(300).fadeIn(500);
        $(".other-options").fadeIn(300);
    });

    $("#fPass").click(function()
    {
        $("h1").text("Forgotten password");

        $(".logo").css(
        {
            "width":"240px",
            "height":"240px",
            "top":"35px"
        });
        $("#login-form").fadeOut(300);
        $("#fpass-form").delay(300).fadeIn(500);
        $(".other-options").fadeOut(200);
    });
});
