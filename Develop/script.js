$(document).ready(function(){
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); // var time = $(this).siblings(".hour").text(); is another way to do this.

    localStorage.setItem(time, value);
  });
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a'"));
});

//Next step is to retrieve data from local storage and put it into the day planner so when we refresh the planner the data persists
    
  


  

