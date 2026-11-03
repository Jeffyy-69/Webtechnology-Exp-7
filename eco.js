// Eco Product Order
$(document).ready(function(){
  $("#order").click(function(){
    let total = Number($("#c1").val()) * 300 + Number($("#c2").val()) * 200
              + Number($("#c3").val()) * 250 + Number($("#c4").val()) * 500;
    $("#total").text("Rs." + total);
    $("#bill").show();
  });
});
