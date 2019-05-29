//Back end logic here
const romanNums = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const wholeRomanNums = ['1', '5', '10', '50', '100', '500', '1000']
var toRomanNum = function(inputNum){
  for (var x=0; x < wholeRomanNums.length; x++){
    if (inputNum === wholeRomanNums[x]) {
      convRomanNum = romanNums[x];
      x = wholeRomanNums.length;
      console.log(convRomanNum)
    }

  };
};











//User Interface here
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var inputNum = parseInt($("input#input").val());
    var outputNum = toRomanNum(inputNum);
    $("#output").text(outputNum)
    $("#output").show();
  });

});
