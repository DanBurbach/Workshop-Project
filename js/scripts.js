alert("I'm thinking I hear voices.... but my eyes DON'T lie!");
$(document).ready(function(){
  alert($("#css-item").text());
  alert($("#slimjim-item").text());
  $("#goal-button").click(function(){
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
