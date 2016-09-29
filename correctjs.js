
$(document).ready(function(){
  var selectedoperator;
$('.operator').click(function(){
  selectedoperator= $(this).val()
});
  $('.button').click(function(){
    var a=$(this).val();
  $('#screen').text($('#screen').text()+a);
  });
  $('#button1').click(function() {
    var a=$('#screen').text();
    var oprtr=selectedoperator;
    var b= a.split(oprtr);
    var c = parseInt(b[0]);
    var d = parseInt(b[1]);

if (oprtr=='/'){
  var e = eval(c/d);
}
if (oprtr=='*'){
  var e = eval(c*d);
}
if (oprtr=='+'){
  var e = eval(c+d);
}
if (oprtr=='-'){
  var e = eval(c-d);
}
$('#screen').text(e);
  });
});



//division
