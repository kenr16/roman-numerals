# Roman Numerals

## Overview

This website will allow a user to enter a number and see that number converted to Roman Numerals.

## Specifications

For the numbers in the entry, the program will perform the following operations:

* For number decimal numbers that translate to whole roman numerals, display correct roman numeral.
  - Example Input: '1'
  - Example Output: 'I'
* Use a "coin sorter" method to sort larger numbers to smaller ones.
  - Example Input: '3500'
  - Example Output: Print out 'MMM' and pass along 500 to be further sorted later on.
* For numbers less than or equal to 3000, display that number of 'M's.
  - Example Input: '3000'
  - Example Output: 'MMM'
* Never display the same symbol more than thee times in a row:
  - Example Input: '900'
  - Example Output:  'CM' NOT 'DCCCC'
* Further for instances where more than three of the same symbol is required, instead make it 1 less than the next highest symbol:
  - Example Input: '9'
  - Example Output: 'IX'
* Carry the remaining unsorted value for further sorting later on.
  - Example Input: '749'
  - Example Output: 'DCC' with a remainder of 49.
* Continue from there...

## Installation

-Clone the repository to the folder of your choice.
-Locate the file index.html.
-Open the index.html file.
-In the browser of your choice.

## Usage

Input a number and click the "translate" button.

## Contributors

Dana Weiss and Ken Rutan

## License

Licensed under MIT. Copyright 2017
