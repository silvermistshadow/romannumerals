//Back end logic here
const romanThousands = ['M', "MM", "MMM"];
const romanHundrends = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const romanTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const romanOnes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const romanNums = [romanThousands, romanHundrends, romanTens, romanOnes];
const wholeRomanNums = [1, 5, 10, 50, 100, 500, 1000]
var convRomanNum;
var toRomanNum = function(inputNum){
  if (isNaN(inputNum)) {
    return false;
  }
  var digits = [];
  for (var x=0; x < wholeRomanNums.length; x++){
    if (inputNum == wholeRomanNums[x]) {
       if (inputNum == 500) {
         convRomanNum = 'D'
         x = wholeRomanNums.length;
         console.log(convRomanNum)
       }
       else if (inputNum == 5) {
         convRomanNum = 'V'
         x = wholeRomanNums.length;
       }
       else if (inputNum == 50) {
         convRomanNum = 'L'
         x = wholeRomanNums.length;
       }
    }
    else if (inputNum < 4000) {
      digits = String(+inputNum).split("");
      var convArray = [];
      console.log(digits.length);
      if (digits.length == 4) {
        var thousands = parseInt(digits[0])
        var hundreds = parseInt(digits[1])
        var tens = parseInt(digits[2])
        var ones = parseInt(digits[3])
        convArray.push(romanNums[0][thousands-1], romanNums[1][hundreds-1], romanNums[2][tens-1], romanNums[3][ones-1]);
        convRomanNum = convArray.join("");
        x = wholeRomanNums.length;
        console.log(convRomanNum);
      }
      else if (digits.length == 3) {
        var hundreds = parseInt(digits[0]);
        var tens = parseInt(digits[1]);
        var ones = parseInt(digits[2]);
        convArray.push(romanNums[1][hundreds-1], romanNums[2][tens-1], romanNums[3][ones-1]);
        convRomanNum = convArray.join("");
        x = wholeRomanNums.length;
        console.log(convRomanNum);
      }
      else if (digits.length == 2) {
        var tens = parseInt(digits[0]);
        var ones = parseInt(digits[1]);
        convArray.push(romanNums[2][tens-1], romanNums[3][ones-1]);
        convRomanNum = convArray.join("");
        x = wholeRomanNums.length;
        console.log(convRomanNum);
      }
      else if (digits.length == 1) {
        var ones = parseInt(digits[0]);
        convArray.push(romanNums[3][ones-1]);
        convRomanNum = convArray.join("");
        x = wholeRomanNums.length;
        console.log(convRomanNum);
      }
    }
    else {

    }
  };
  return convRomanNum;
};



//User Interface here
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var inputNum = parseInt($("input#input").val());
    var outputNum = toRomanNum(inputNum);
    if (outputNum != false) {
      $("#output").text(outputNum)
      $("#output").show();
    }
    else {
      $("#outputErr").show();
    }

  });

});
