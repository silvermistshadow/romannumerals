//Back end logic here
const romanNums = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'II', 'III', 'IV', 'VI', 'VII', 'VIII', 'IX', 'XX', 'XXX', 'XL', 'LX', 'LXX', 'LXXX', 'XC', 'CC', 'CCC', 'CD', 'DC', 'DCC', 'DCCC', 'CM']
const wholeRomanNums = [1, 5, 10, 50, 100, 500, 1000]
var swapArray = [];
var toRomanNum = function(inputNum){
  if (isNaN(inputNum)) {
    return false;
  }
  for (var x=0; x < wholeRomanNums.length; x++){
    if (inputNum === wholeRomanNums[x]) {
      convRomanNum = romanNums[x];
      x = wholeRomanNums.length;
      console.log(convRomanNum)
    }
    else if (inputNum < 4000) {
      
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
