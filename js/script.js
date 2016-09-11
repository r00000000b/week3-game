$(document).ready(function() {
  console.log( "ready!" );

var key_up = false;
var key_down = false;
var key_right = false;
var key_left = false;
var bod = document.getElementById('bod');
var gameWindowWidth = bod.offsetWidth;
var gameWindowHeight = bod.offsetHeight;

var player = document.getElementById('player');
player.style.top = "100px";
player.style.left = "100px";

/*
 *  Keyup
 */
document.addEventListener('keyup', function(event){

  var keyName = event.key;

  switch(keyName) {
    case "d":
        key_right = false;
        break;
    case "a":
        key_left = false;
        break;
    case "w":
        key_up = false;
        break;
    case "s":
        key_down = false;
        break;
    default:
        break;
  }

  console.log("Key down " + keyName);

});


/*
 *  Keydown
 */
document.addEventListener('keydown', function(event){

  var keyName = event.key;

  switch(keyName) {
    case "d":
        key_right = true;
        break;
    case "a":
        key_left = true;
        break;
    case "w":
        key_up = true;
        break;
    case "s":
        key_down = true;
        break;
    default:
        break;
  }

  console.log("Key up " + keyName);

});

/*
 *  Render
 */
function render(){

  if(key_up){
    player.style.top = parseInt(player.style.top)-2+"px";
    console.log("move up");
  }

  if(key_down){
    player.style.top = parseInt(player.style.top)+2+"px";
    console.log("move down");
  }

  if(key_left){
    player.style.left = parseInt(player.style.left)-2+"px";
    console.log("move left");
  }

  if(key_right){
    player.style.left = parseInt(player.style.left)+2+"px";
    console.log("move right");
  }

}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


(function animloop(){
  requestAnimFrame(animloop);
  render();
})();
});

/* notes to self
look up html dom offset
*/