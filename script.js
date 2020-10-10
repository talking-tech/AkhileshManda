$(function () {
    var roles = ["Student", "VITian", "Baller","Toastmaster","Reader","developer"];
    var count = 0;
    setInterval(() => {
      $("#intro .content h2 span").fadeOut("fast", function () {
        $(this).text(roles[count++ % roles.length]);
        $(this).fadeIn("fast");
      });
    }, 1000);
  });