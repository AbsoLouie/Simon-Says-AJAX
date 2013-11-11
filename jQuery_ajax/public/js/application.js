$(document).ready(function(){

  $("#get_color").on("click", function () {
    var i = 0
    var interval = setInterval(function() {
      color_random_cell();
      i++;
      if (i == 10) {
        clearInterval(interval);
      }
    }, 500)
  })

  var color_random_cell = function() {
    console.log("Start color_random_cell")
    $.ajax({
      url: "/color",
      type: "post"
    }).done(function(response) {
      obj = JSON.parse(response)
      color_me(obj.cell, obj.color)
      console.log("End color_random_cell")
    })
  }

  var color_me = function(cell, color) {
    console.log(cell);
    $("#color_me li:nth-child("+cell+")").css("background-color", color);
  }

});