$(document).ready(function() {
  console.log( "ready!" );

var key_up = false;
var key_down = false;
var key_right = false;
var key_left = false;
var shootUp = false;
var shootUpRight = false;
var shootRight = false;
var shootDownRight = false;
var shootDown = false;
var shootDownLeft = false;
var shootLeft = false;
var shootUpLeft = false;
var bod = document.getElementById('bod');
var gameWindowWidth = bod.offsetWidth;
var gameWindowHeight = bod.offsetHeight;

var player = document.getElementById('player');
player.style.top = "250px";
player.style.left = "500px";

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
    case "ArrowUp":
        key_down = false;
        break;
    case "ArrowRight":
        key_down = false;
        break;
    case "ArrowDown":
        key_down = false;
        break;
    case "ArrowUp":
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
    case "ArrowUp":
        key_down = true;
        break;
    case "ArrowRight":
        key_down = true;
        break;
    case "ArrowDown":
        key_down = true;
        break;
    case "ArrowUp":
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
    player.style.top = parseInt(player.style.top)-10+"px";
    console.log("move up");
  }

  if(key_down){
    player.style.top = parseInt(player.style.top)+10+"px";
    console.log("move down");
  }

  if(key_left){
    player.style.left = parseInt(player.style.left)-10+"px";
    console.log("move left");
  }

  if(key_right){
    player.style.left = parseInt(player.style.left)+10+"px";
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

shooting event:
  if (ArrowUp) {
    bulletElement.style.top = parseInt(bulletElement.style.top)-20+"px";
    console.log("bullet up");
  }
  if (ArrowLeft) {
    bulletElement.style.left = parseInt(bulletElement.style.left)-20+"px";
    console.log("bullet left");
  }
  if (ArrowDown) {
    bulletElement.style.top = parseInt(bulletElement.style.top)+20+"px";
    console.log("bullet down");
  }
  if (ArrowRight) {
    bulletElement.style.top = parseInt(bulletElement.style.left)+20+"px";
    console.log("bullet right");
  }

*/