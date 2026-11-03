// Electric Car Workshop
$(document).ready(function(){
  let colors = ["green", "red", "blue", "orange"]; let i = 0;

  $("#color").click(function(){ i = (i + 1) % 4;
    $(".part").css("background", colors[i]);
  });
  $("#tint").click(function(){ $("#glass").toggleClass("dark"); });
  $("#size").click(function(){ $("#car").toggleClass("big"); });
  $("#tyre").click(function(){ $(".tyre").toggleClass("bigTyre"); });
  $("#reset").click(function(){ i = 0;
    $(".part").css("background", "green");
    $("#glass, #car, .tyre").removeClass("dark big bigTyre");
  });
});
