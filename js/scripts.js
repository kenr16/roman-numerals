// **********************************************
// Back End Code
// **********************************************

function coinSort (numberToBeSorted) {
  if (numberToBeSorted < 4000 && numberToBeSorted >= 1000) {
    while (numberToBeSorted >= 1000) {
      $("#displayHere").append("M");
      numberToBeSorted -= 1000;
    }
  }
  if (numberToBeSorted < 1000 && numberToBeSorted >= 900) {
    numberToBeSorted -= 900;
    $("#displayHere").append("CM");
  }
  if (numberToBeSorted < 900 && numberToBeSorted >= 500) {
    numberToBeSorted -= 500;
    $("#displayHere").append("D");
      while (numberToBeSorted >= 100) {
        $("#displayHere").append("C");
        numberToBeSorted -= 100;
      }
  }
  if (numberToBeSorted < 500 && numberToBeSorted >= 400) {
    numberToBeSorted -= 400;
    $("#displayHere").append("CD");
  }
  if (numberToBeSorted < 400 && numberToBeSorted >= 100) {
    while (numberToBeSorted >= 100) {
      $("#displayHere").append("C");
      numberToBeSorted -= 100;
    }
  }
  if (numberToBeSorted < 100 && numberToBeSorted  >= 90) {
    numberToBeSorted -= 90;
    $("#displayHere").append("XC");
  }
  if (numberToBeSorted < 90 && numberToBeSorted >= 50) {
    numberToBeSorted -= 50;
    $("#displayHere").append("L");
      while (numberToBeSorted >= 10) {
        $("#displayHere").append("X");
        numberToBeSorted -= 10;
      }
  }
  if (numberToBeSorted < 50 && numberToBeSorted >= 40) {
    numberToBeSorted -= 40;
    $("#displayHere").append("XL");
  }
  if (numberToBeSorted < 40 && numberToBeSorted >= 10) {
    while (numberToBeSorted >= 10) {
      $("#displayHere").append("X");
      numberToBeSorted -= 10;
    }
  }
  if (numberToBeSorted < 10 && numberToBeSorted  >= 9) {
    numberToBeSorted -= 9;
    $("#displayHere").append("IX");
  }
  if (numberToBeSorted < 9 && numberToBeSorted >= 5) {
    numberToBeSorted -= 5;
    $("#displayHere").append("V");
      while (numberToBeSorted >= 1) {
        $("#displayHere").append("I");
        numberToBeSorted -= 1;
      }
  }
  if (numberToBeSorted < 5 && numberToBeSorted >= 4) {
    numberToBeSorted -= 4;
    $("#displayHere").append("IV");
  }
  if (numberToBeSorted < 4 && numberToBeSorted >= 1) {
    while (numberToBeSorted >= 1) {
      $("#displayHere").append("I");
      numberToBeSorted -= 1;
    }
  }
}



// **********************************************
// Front End Code
// **********************************************
$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var inputNumber = parseInt($('input#uxInput').val());
    $("#displayHere").empty();
    coinSort(inputNumber);
  });
});
