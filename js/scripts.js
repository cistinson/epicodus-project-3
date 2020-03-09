$(document).ready(function() {

  $("#userSubmissionForm").submit(function(){

    //Prevent default submission of form
    event.preventDefault();

    //Obtain value from user input and convert to number
    var resultsValue = parseInt($("#userSubmissionForm input").val());

    //Set value of placeholder paragraph tag
    var resultsPlaceholder = $("#resultsPlaceholder");

    //Create placeholder variable for results array
    var resultsArray = [];

    //Loop through all numbers between zero and submitted number
    for (var i = 0; i <= resultsValue; i++){
      resultsArray.push(i);
      console.log("hey");
    }

    //Input results array to placeholder paragraph
    resultsPlaceholder.text(resultsArray);

    console.log(resultsArray);
    console.log("Console.log value:" + resultsValue);
    console.log("Results Placeholder value:" + resultsPlaceholder.text());
  });


});