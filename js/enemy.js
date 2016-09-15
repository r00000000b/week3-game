var Enemy = function(x, y) {
  var that    = this;
  var element = null;
  var position  = {
    x: x,
    y: y
  };
  var movementSpeed = 5;
  var area = {
    height: 50,
    width: 50
  };

  this.getPosition = function () {
    return position;
  }

  this.getArea = function () {
    return area;
  }

  // Create the div that contains the enemy;
  var create = function(){
    element = document.createElement('div');
    element.setAttribute('class','enemy');
    element.setAttribute('style', 'left: '+ position.x +'px; top: ' + position.y +'px');
    document.getElementsByTagName('body')[0].appendChild(element);
  };

  this.getElement = function () {
    return element;
  };

  this.render = function(playerPos){
    if (position.y < playerPos.y) {
      position.y += movementSpeed;
    } else if (position.y > playerPos.y) {
      position.y -= movementSpeed;
    }

    if (position.x < playerPos.x) {
      position.x += movementSpeed;
    } else if (position.x > playerPos.x) {
      position.x -= movementSpeed;
    }

    element.style.top = position.y + 'px';
    element.style.left = position.x + 'px';
  }

  this.playerCollision = function (player, enemies) {
    for (var i = 0; i < enemies.length; i++) {
      var playerPos = player.getPosition();
      var playerArea = player.getArea();
      var enemy = enemies[i];
      var attacked = null;

      if (playerPos.x < position.x + area.width &&
          playerPos.x + playerArea.width > position.x &&
          playerPos.y < position.y + area.height &&
          playerArea.height + playerPos.y > position.y) {
        return {attacked: true, enemyIndex: i};
      }
      return {attacked: false}
    }
    }

  create();
};

/* generate Enemies function

var generateEnemies = function() {
  if (enemyCounter < 100) {
    var cooldown = (Math.random())*10000;
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
*/