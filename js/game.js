window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 3000 / 60);
          };
})();

var Game = function(){
  // Globals
  var score            = 0;
  var frame            = 0;
  var player           = null;
  var controls         = new Controls();
  var bod              = document.getElementById('bod');
  var gameWindowWidth  = bod.offsetWidth;
  var gameWindowHeight = bod.offsetHeight;
  var enemies = [];

  /*
   *  Init
   */
  var init = function(){

    // Create world

    // Create player
    player = new Player();

    // Create enemies

    // Reset score and player object
  }

  /*
   *  Game loop
   */
  var loop = function(){
    if(player != null){
      player.render(controls);
    }
  }


  var animloop = function (){
    requestAnimFrame(animloop);
    loop();
  };

  this.start = function () {
    init();
    animloop();
  };
};
