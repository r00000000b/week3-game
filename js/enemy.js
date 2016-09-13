var Enemy = function(x, y, direction) {
  var that    = this;
  var element = null;

  var direction = direction;
  var position  = {
    x: x,
    y: y
  };
  var movementSpeed = 5;

  this.getPosition = function () {
    return position();
  }

  this.getDirection = function () {
    return direction;
  }

  // Create the div that contains the enemy;
  var create = function(){
    that.element = document.createElement('div');
    that.element.setAttribute('class','enemy');
    that.element.setAttribute('style', 'left: '+ position.x +'px; top: ' + position.y +'px');
    document.getElementsByTagName('body')[0].appendChild(that.element);
  };

  this.render = function(){

    /* gives enemy direction
    if ((position.y == Player.getPosition.y) && (position.x > Player.getPosition.x)) {
      that.element.setAttribute('direction', 'right');
    }
    if ((position.y == Player.getPosition.y) && (position.x > Player.getPosition.x)) {
      that.element.setAttribute('direction', 'left');
    }
    if ((position.y < Player.getPosition.y) && (position.x == Player.getPosition.x)) {
      that.element.setAttribute('direction', 'up');
    }
    if ((position.y > Player.getPosition.y) && (position.x == Player.getPosition.x)) {
      that.element.setAttribute('direction', 'down');
    }
    if ((position.y < Player.getPosition.y) && (position.x < Player.getPosition.x)) {
      that.element.setAttribute('direction', 'upRight');
    }
    if ((position.y < Player.getPosition.y) && (position.x > Player.getPosition.x)) {
      that.element.setAttribute('direction', 'upLeft');
    }
    if ((position.y > Player.getPosition.y) && (position.x > Player.getPosition.x)) {
      that.element.setAttribute('direction', 'downLeft');
    }
    if ((position.y > Player.getPosition.y) && (position.x < Player.getPosition.x)) {
      that.element.setAttribute('direction', 'downRight');
    }
    */

    //moves enemy
    if (direction === "left") {
      position.x -= movementSpeed;
    }
    if (direction === "right") {
      position.x += movementSpeed;
    }
    if (direction === "up") {
      position.y -= movementSpeed;
    }
    if (direction === "down") {
      position.y += movementSpeed;
    }
    // combos
    if (direction === "upLeft") {
      position.x -= movementSpeed;
      position.y -= movementSpeed;
    }
    if (direction === "downLeft") {
      position.x -= movementSpeed;
      position.y += movementSpeed;
    }
    if (direction === "upRight") {
      position.x += movementSpeed;
      position.y -= movementSpeed;
    }
    if (direction === "downRight") {
      position.x += movementSpeed;
      position.y += movementSpeed;
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