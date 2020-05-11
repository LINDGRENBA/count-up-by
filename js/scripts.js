$(document).ready(function() {
  $(".numbers").submit(function(event) {
    event.preventDefault();

    let goalNumber = parseInt($("#number1").val()); 
    let countUpBy = parseInt($("#number2").val());
    let numbers = [];
    let result = $(".result");

    if(countUpBy >= goalNumber) {
      result.text("Please begin with a multiple that is less than the number to count up to.")
    } else if(goalNumber <= 0 || countUpBy <= 1) {
      result.text("Oh dear, please enter a positive number higher than 1. Thank you!")
    } else {
      for (let index = countUpBy; index <= goalNumber; index += countUpBy) {
        numbers.push(index);
      };
      result.text(numbers + ", ta da!");
    }   

  });
});