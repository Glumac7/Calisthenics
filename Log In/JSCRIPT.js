$("#newUser").click(function(){
  $("h1").text("Registration");
  $(".logo").css({
    "width":"150px",
    "height":"150px",
    "top":"-10px"
  });
  $("#login-form").fadeOut(200);
  $("#registration-form").delay(300).fadeIn(500);
  $(".other-options").fadeOut(200);
});

$("#signup-btn,#getpass-btn").click(function(){
  $("h1").text("Log in");
  $(".logo").css({
    "width":"150px",
    "height":"150px",
    "top":"30px"
  });

  $("#registration-form,#fpass-form").fadeOut(200);
  $("#login-form").delay(300).fadeIn(500);
  $(".other-options").fadeIn(300);
});

$("#fPass").click(function(){
  $("h1").text("Forgot password?");
  $(".logo").css({
    "width":"230px",
    "height":"230px",
    "top":"15px";
  });

  $("#login-form").fadeOut(200);
  $("#fpass-form").delay(300).fadeIn(500);
  $(".other-options").fadeOut(200);
});