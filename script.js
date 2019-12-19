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
    if (n < 9 ) {
      $("textarea").addClass("future");
    }
    else if (n > 17) {
      $("textarea").addClass("future");
    }
    else if (n === 9) {
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
    else if (n === 18) {
      $("textarea").addClass("future");
      $("textarea").removeClass("past");
    }
    
    setInterval(colorChange, 1000);
  }
  
  //run color changing function on page load
    colorChange();
  

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

  var hourOne = localStorage.getItem("hour-13");
  $("#text13").text(hourOne);

  var hourTwo = localStorage.getItem("hour-14");
  $("#text14").text(hourTwo);

  var hourThree = localStorage.getItem("hour-15");
  $("#text15").text(hourThree);

  var hourFour = localStorage.getItem("hour-16");
  $("#text16").text(hourFour);

  var hourFive = localStorage.getItem("hour-17");
  $("#text17").text(hourFive);


});

/*============================== Notes while developing:

Could run these functions every hour on the hour:

function its10am() {
  $("#hour-9").addClass(""past"");
  $("#hour-9").removeClass("present");
  $("#hour-10").addClass("present");
  $("#hour-10").removeClass("future");
}

function its11am() {
  $("#hour-10").addClass(""past"");
  $("#hour-10").removeClass("present");
  $("#hour-11").addClass("present");
  $("#hour-11").removeClass("future");
}
================================*/


/* 
  dynamically add/remove class of element. setInterval to check every 1000ms and when condition met, change element class. What is that condition?
  
  "present" doesn't know the time - it just knows it's not "past" or future. SO when 9am block turns gray, turn 10am block red and 11 and later should be green until 6pm when everything then becomes future again
    */

  