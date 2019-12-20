$(document).ready(function(){

  //function to run moment.js and show Month Day Year Time
  function dayTime() {
    $("#currentDay").html(moment().format("MMMM Do YYYY HH:mm:ss"));
    setInterval(dayTime, 1000);
  };
  
  //run moment.js on page load
  dayTime(); 


  //function to change textarea color based on time of day
  function colorChange() {
    var d = new Date();
    var n = d.getHours();

    console.log("test"); //this showed me that the function was running every second, but also led me to see the performance of the app tanks very quickly because I think I'm adding classes by the 10,000s. Need to add some kind of check before adding.
    
    if (n < 9) { //resets planner to next day at midnight
      $("textarea").addClass("future");
    }
    else if (n === 9) {
      $("textarea").addClass("future");
      $("#text9").removeClass("future");
      $("#text9").addClass("present");

    }
    else if (n === 10) {
      $("#text9").removeClass("present");
      $("#text9").addClass("past");
      $("#text10").addClass("present");
    }
    else if (n === 11) {
      $("#text10").removeClass("present");
      $("#text10").addClass("past");
      $("#text11").addClass("present");
    }
    else if (n === 12) {
      $("#text11").removeClass("present");
      $("#text11").addClass("past");
      $("#text12").addClass("present");
    }
    else if (n === 13) {
      $("#text12").removeClass("present");
      $("#text12").addClass("past");
      $("#text13").addClass("present");
    }
    else if (n === 14) {
      $("#text13").removeClass("present");
      $("#text13").addClass("past");
      $("#text14").addClass("present");
    }
    else if (n === 15) {
      $("#text14").removeClass("present");
      $("#text14").addClass("past");
      $("#text15").addClass("present");
    }
    else if (n === 16) {
      $("#text15").removeClass("present");
      $("#text15").addClass("past");
      $("#text16").addClass("present");
    }
    else if (n === 17) {
      $("#text16").removeClass("present");
      $("#text16").addClass("past");
      $("#text17").addClass("present");
    }
    else if (n > 17) {
      $("textarea").addClass("past");
      $("#text17").removeClass("present");
    }
  }
  
  //run color changing function on page load and every 1000ms thereafter
    setInterval(colorChange, 1000);
  

 //function to save entered text to local storage when save button is clicked
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); // var time = $(this).siblings(".hour").text(); is another way to do this.
    localStorage.setItem(time, value);
  });

  //gets items back from local storage on page load so user-entered data persists when they reload
  // is there a way to consolidate all this with an object?
  var hourNine = localStorage.getItem("hour-9");
  $("#text9").text(hourNine);
  
  var hourTen = localStorage.getItem("hour-10");
  $("#text10").text(hourTen);

  var hourEleven = localStorage.getItem("hour-11");
  $("#text11").text(hourEleven);

  var hourTwelve = localStorage.getItem("hour-12");
  $("#text12").text(hourTwelve);

  var hourThirteen = localStorage.getItem("hour-13");
  $("#text13").text(hourThirteen);

  var hourFourteen = localStorage.getItem("hour-14");
  $("#text14").text(hourFourteen);

  var hourFifteen = localStorage.getItem("hour-15");
  $("#text15").text(hourFifteen);

  var hourSixteen = localStorage.getItem("hour-16");
  $("#text16").text(hourSixteen);

  var hourSeventeen = localStorage.getItem("hour-17");
  $("#text17").text(hourSeventeen);

});






  