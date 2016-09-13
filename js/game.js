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
  var lastEnemySpawn = new Date().getTime();
  var cooldown = 200;
  var currentTime    = new Date().getTime();
  var enemies = [];
  var enemyCounter = 0;

  var generateEnemies = function() {
    if (enemyCounter < 100) {
      var cooldown = (Math.random())*500000;
      var newTime            = new Date().getTime();
      var availableTime = currentTime + cooldown;
      var randomNum = Math.random();
      var newEnemy  = null;
      if (availableTime < newTime) {
        if (randomNum < .24) {
          newEnemy = new Enemy(((bod.offsetWidth)/2), -50, 'top');
        }
        if (randomNum > .24 < .49) {
          newEnemy = new Enemy(((bod.offsetWidth) + 50), ((bod.offsetHeight)/2), 'right');
        }
        if (randomNum > .49 < .74) {
          newEnemy = new Enemy(((bod.offsetWidth)/2), ((bod.offsetHeight) +50), 'bottom');
        }
        if (randomNum > .74 < .99) {
          newEnemy = new Enemy(-50, ((bod.offsetHeight)/2), 'left');
        }
        enemies.push(newEnemy);
        enemyCounter++;
      }
    }
  };

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
    //enemy generation
    generateEnemies();

    //enemy render engine
    for (var i = 0; i < enemies.length; i++){
      enemies[i].render();
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
