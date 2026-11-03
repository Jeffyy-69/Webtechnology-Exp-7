// Home page: small jQuery effect on the cards
$(document).ready(function(){
  $(".card").hover(
    function(){ $(this).css("transform", "translateY(-4px)"); },
    function(){ $(this).css("transform", "none"); }
  );
});
