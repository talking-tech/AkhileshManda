$(document).ready(function(){
  setInterval(swapRoles,1000);
  var masterroles = ["Student", "VITian", "Baller","Toastmaster","Reader","Web Developer"]; 
  var count = 0;
  function swapRoles(){
      $('.roles').fadeOut("fast", function(){
        $(this).text(masterroles[count++ % masterroles.length]);
        $(this).fadeIn("fast");
      });
  };
});
