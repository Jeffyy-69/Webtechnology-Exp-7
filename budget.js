// Green Budget Planner
$(document).ready(function(){
  $("#btn").click(function(){
    let amt = Number($("#amt").val());
    let r = Number($("#rent").val());
    let a = Number($("#acc").val());
    let e = Number($("#emg").val());
    let s = Number($("#save").val());

    if(amt <= 0){
      alert("Please enter a valid amount!");
    }
    else if(r + a + e + s != 100){
      alert("Cannot divide the amount! Total must be 100%");
    }
    else{
      $("#b1").html("Solar Energy<br>Rs." + amt * r / 100);
      $("#b2").html("Organic Food<br>Rs." + amt * a / 100);
      $("#b3").html("Recycling<br>Rs." + amt * e / 100);
      $("#b4").html("Saving<br>Rs." + amt * s / 100);
      $(".box").show();
    }
  });
});
