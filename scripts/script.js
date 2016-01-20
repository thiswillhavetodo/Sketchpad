var side = 50;
var count = side*side;
var size = 800/side;

$('document').ready(draw());

function draw(){
  var html = "";
  for (var i=1; i <= count; i++) {
  html += "<div class='box'></div>";
  }   
  $('#wrapper').append(html);
  $('.box').css({'height': size, 'width': size });
  $('.box').mouseenter(function() {
    $(this).addClass('color');
  });
  $('.box').on('click', function() {
    $(this).toggleClass('color');
  });
}
$(document).ready(function() {
  $('#reset').on('click', 'button', function() {
  $('.box').remove();
  resolution = prompt('Please enter resolution', '1 to 100 (recommended: 50)');
  if (resolution<1){
    side = 1;
  }
  else if (resolution>100) {
    side = 100;
  } 
  else {
    side = resolution;
  }  
  count = side*side;
  size = 800/side;
  draw();
  });
});

function white(){
  $('#wrapper').css('background-color', 'white');
}
function black(){
  $('#wrapper').css('background-color', 'black');
}
function red(){
  $('#wrapper').css('background-color', 'red');
}
function blue(){
  $('#wrapper').css('background-color', 'blue');
}
function whiteP(){
  $('.color').css('background-color', 'white');
}
function blackP(){
  $('.color').css('background-color', 'black');
}
function redP(){
  $('.color').css('background-color', 'red');
}
function greenP(){
  $('.color').css('background-color', 'green');
}