var Enemy = function(x, y) {
  var that    = this;
  var element = null;
  var position  = {
    x: x,
    y: y
  };
  var movementSpeed = 5;

  this.getPosition = function () {
    return position();
  }

  // Create the div that contains the enemy;
  var create = function(){
    that.element = document.createElement('div');
    that.element.setAttribute('class','enemy');
    that.element.setAttribute('style', 'left: '+ position.x +'px; top: ' + position.y +'px');
    document.getElementsByTagName('body')[0].appendChild(that.element);
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

    this.element.style.top = position.y + 'px';
    this.element.style.left = position.x + 'px';
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