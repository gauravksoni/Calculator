//http://www.w3schools.com/jquery/jquery_syntax.asp
//https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fb7%2F28%2F95%2Fb72895618be95619a15bd4a0befdf826.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F193021534007684252%2F&docid=bkB-kciTWIqByM&tbnid=CevFfdokhEyT_M%3A&w=736&h=736&safe=off&bih=742&biw=1439&ved=0ahUKEwif3t7J8vzOAhVLPY8KHTluC80QMwgvKBIwEg&iact=mrc&uact=8

$(document).ready(function(){
  var onNumberClick = function(e) {
    var number = $(e.target);

    console.log(number.text());

    $('#screen').html(number.text());
  };

  $('.number').click(onNumberClick);
  $('.operator').click(onOperatorClick);
});
