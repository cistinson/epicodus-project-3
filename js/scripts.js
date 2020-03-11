$(document).ready(function() {

  $("#userSubmissionForm").submit(function(){

    //Prevent default submission of form
    event.preventDefault();

    //Obtain value from user input and convert to number
    var resultsValue = parseInt($("#userSubmissionForm input").val());

    //Set value of placeholder paragraph tag
    var resultsPlaceholder = $("#resultsPlaceholder");

    //Create placeholder variable for initial results array
    var initialResultsArray = [];

    //Loop through all numbers between zero and submitted number to create initial array
    for (var i = 0; i <= resultsValue; i++){      
      //Changing values from number to string type in prep for final for loop
      i = i.toString();
      initialResultsArray.push(i);
    }

    //Create placeholder variable for final results array
    var finalResultsArray = [];

    //Loop through initial array values to change based on whether number contains one, two or three
    for (var i = 0; i < initialResultsArray.length; i++){
      if (initialResultsArray[i].includes("3")){
        finalResultsArray.push("Won't you be my neighbor?");       
      } else if (initialResultsArray[i].includes("2") == true){
        finalResultsArray.push("Boop!");
      } else if (initialResultsArray[i].includes("1") == true){
        finalResultsArray.push("Beep!");
      } else {
        finalResultsArray.push(i);
      }
    }

    //Input results array to placeholder paragraph with additional spacing
    resultsPlaceholder.text(finalResultsArray.join(", "));

    $("#resetButton").show();
    $("#submitButton").hide();

  });

  $("#resetButton").click(function(){
    $("#userSubmissionForm").trigger("reset");
    $("#resultsPlaceholder").text("Your results will appear here once you’ve selected a number");

    $("#resetButton").hide();
    $("#submitButton").show();
  });

});