$(document).ready(function(){
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); // var time = $(this).siblings(".hour").text(); is another way to do this.
    localStorage.setItem(time, value);
  });


  function update() {
    $("#currentDay").html(moment().format("MMMM Do YYYY hh:mm:ss a"));
    setInterval(update, 1000);
  };
  
  update(); 
  
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

// next/last requirement:  Each timeblock is color coded to indicate whether it is in a past, present, or future hour.