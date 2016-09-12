var Game = function(){

  // Globals
  var score = 0;
  var frame = 0;
  var p1 = document.getElementById('player');
  var

  // Sprites
  var enemies = [];
  var player = null;

  /*
   *  Init
   */
  var init = function(){

    // Create world

    // Create player
    player = new Player();

    // Create emenies

    // Reset score and player object
  }

  /*
   *  Game loop
   */
  var loop = function(){
    if(player != null){
      player.render();
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
    loop();
  })();

  init();

}

var game = new Game();