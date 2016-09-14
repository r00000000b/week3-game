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
  var enemies            = [];
  var enemyCounter       = 0;
  var lastEnemySpawn     = null;
  var enemyCooldownRange = 1000;
  var nextEnemyCooldown  = null;

  var generateEnemies = function() {
    var newEnemy  = null;
    var randomNum = Math.random();
    if (randomNum <= .25) {
      newEnemy = new Enemy((bod.offsetWidth)/2, -50);
    } else if (randomNum <= .50) {
      newEnemy = new Enemy((bod.offsetWidth) + 50, (bod.offsetHeight)/2);
    } else if (randomNum <= .75) {
      newEnemy = new Enemy((bod.offsetWidth)/2, (bod.offsetHeight) +50);
    } else if (randomNum <= 1) {
      newEnemy = new Enemy(-50, (bod.offsetHeight)/2);
    }
    enemies.push(newEnemy);
    enemyCounter++;
  };

  /*
   *  Init
   */
  var init = function(){
    // Create world

    // Create player
    player = new Player(bod);

    // Reset score and player object
    lastEnemySpawn    = new Date().getTime();
    nextEnemyCooldown = Math.random() * enemyCooldownRange;
  };

  /*
   *  Game loop
   */
  var loop = function(){
    if(player != null){
      player.render(controls);
    }

    // Bullet movement and check collision
    var bulletsToRemove = [];
    var bullets         = player.getBullets();
    for (var i = 0; i < bullets.length; i++){
      bullets[i].render(); // bullet movement
      var collided = bullets[i].collision();

      if (collided) {
        bulletsToRemove.push(i);
      }
    }

    // Bullet removal
    for (var i = 0; i < bulletsToRemove.length; i++){
      var bIndex = bulletsToRemove[i];
      bullets[bIndex].getElement().remove();
      bullets.splice(bIndex, 1);
    }

    //enemy generation
    var newTime = new Date().getTime();
    if (enemyCounter < 100 && lastEnemySpawn + nextEnemyCooldown < newTime) {
      nextEnemyCooldown = Math.random() * enemyCooldownRange;
      lastEnemySpawn    = newTime;
      generateEnemies();
    }

    //enemy render engine
    var playerPos = player.getPosition();
    for (var i = 0; i < enemies.length; i++){
      enemies[i].render(playerPos);
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
