$(document).ready(function(){
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); // var time = $(this).siblings(".hour").text(); is another way to do this.
    localStorage.setItem(time, value);
  });

  //function to run moment.js and show Month Day Year Time
  function dayTime() {
    $("#currentDay").html(moment().format("MMMM Do YYYY HH:mm:ss a"));
    setInterval(dayTime, 1000);
  };
  
  //run moment.js on page load
  dayTime(); 


  //function to change textarea color based on time of day
  function colorChange() {
    var d = new Date();
    var n = d.getHours();
    $("textarea").css("background-color", "#77dd77");
    // if (n < 9) {
    //   $("textarea").css("background-color", "#77dd77");
    // }
    // else if (n = 9)

    // if (n >=10 && n < 18) {
    //   // If time is after 10AM or before 6PM, apply .past 
    //   document.body.className = "emeanight";
    // }
    // else {
    //   // Else use ‘day’ theme
    //   document.body.className = "emeaday";
    // }
    // setInterval(colorChange, 1000);
  }
  
  //run color changing function on page load
  colorChange();

 
  
  // is there a way to consolidate this with an object?
  var hourNine = localStorage.getItem("hour-9");
  $("#text9").text(hourNine);
  
  var hourTen = localStorage.getItem("hour-10");
  $("#text10").text(hourTen);

  var hourEleven = localStorage.getItem("hour-11");
  $("#text11").text(hourEleven);

  var hourTwelve = localStorage.getItem("hour-12");
  $("#text12").text(hourTwelve);

  var hourOne = localStorage.getItem("hour-1");
  $("#text1").text(hourOne);

  var hourTwo = localStorage.getItem("hour-2");
  $("#text2").text(hourTwo);

  var hourThree = localStorage.getItem("hour-3");
  $("#text3").text(hourThree);

  var hourFour = localStorage.getItem("hour-4");
  $("#text4").text(hourFour);

  var hourFive = localStorage.getItem("hour-5");
  $("#text5").text(hourFive);


});

/*==============================

Could run these functions every hour on the hour:

function its10am() {
  $("#hour-9").addClass("past");
  $("#hour-9").removeClass("present");
  $("#hour-10").addClass("present");
  $("#hour-10").removeClass("future");
}

function its11am() {
  $("#hour-10").addClass("past");
  $("#hour-10").removeClass("present");
  $("#hour-11").addClass("present");
  $("#hour-11").removeClass("future");
}
================================*/


/* 
  dynamically add/remove class of element. setInterval to check every 1000ms and when condition met, change element class. What is that condition?
  
  "present" doesn't know the time - it just knows it's not past or future. SO when 9am block turns gray, turn 10am block red and 11 and later should be green until 6pm when everything then becomes future again
    */

  