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

  //There is a repetitive math relationship to be put in here DRY!
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

var disqualifyTest = function(numInput) {
  return /^[0-9]*$/gi.test(numInput);
}

// **********************************************
// Secret Square Function Back End
// **********************************************

function secretSquare(inputArray) {

  var singleLetterArr = [];
  inputArray.forEach(function(letter) {
    if (letter === " ") {
    } else {
      singleLetterArr.push(letter);
    }
  });

  var mesLength = singleLetterArr.length;
  //alert(mesLength);//

  var cubeSize  = function(mesLength) {
    var sL = 2;
    var square = 0;
    while (square < mesLength) {
      sL++;
      square = sL*sL;
    }
    return(sL);
  }

  var sL = cubeSize(mesLength);
  //alert(sL);//

  var sLLettersSpace = [];

  while(singleLetterArr.length > 0) {
    for (var i=0; i<sL;i++) {
      sLLettersSpace.push(singleLetterArr[0])
      singleLetterArr.shift();
    }
    sLLettersSpace.push(" ");
    //alert(sLLettersSpace);//
  }

  var finalArray = [];
  var inx = 0;
  var i = 0;
  for (var j=0; j < sL; j=j) {
    while(i < sL) {
      finalArray.push(sLLettersSpace[inx]);
      inx += (sL + 1);
      i++
    }
    i = 0;
    j++;
    inx = j;
  }
  //alert(finalArray);//

  var finalFinalArray = [];

  while(finalArray.length > 0) {
    for (var i = 0; i < 5 ; i++) {
      finalFinalArray.push(finalArray[0]);
      finalArray.shift();
    }
    finalFinalArray.push(" ");
  }
  $("#messageHere").text(finalFinalArray.join(""));
}













// **********************************************
// Front End Code
// **********************************************
$(document).ready(function() {
  $(".formOne").submit(function(e) {
    e.preventDefault();
    var inputNumber = parseInt($('input#uxInput').val());

    if (disqualifyTest(inputNumber) === true) {
        $("#displayHere").empty();
        coinSort(inputNumber);
        } else {
        alert("Please don't be ridiculous!");
        }

  });


  $(".formTwo").submit(function(e) {
    e.preventDefault();
    var inputArray = $('input#txInput').val().split("");

    secretSquare(inputArray);




    // pseudocode:
    // if entry exists:
    // take [0] of each rowArray.
    // else if entry does not exist: (returns undefined?)
    // take the [1] of each rowArray.
    //
    // if (typeof map !== 'undefined' && map.getCenter) {
    //   // code for both map and map.getCenter exists
    // } else {
    //   // if they dont exist
    // }






  });
});
