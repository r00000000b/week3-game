var Enemy = function(id, x, y, location, direction) {
  var that    = this;
  var element = null;

  var id = id;
  var location = location;
  var direction = direction;
  var position  = {
    x: x,
    y: y
  };
  var movementSpeed = 5;

  this.getPosition = function (x, y) {
    return position(x, y);
  }

  this.getDirection = function () {
    return direction;
  }

  //generate enemies
  var generateEnemies = function(){
    for (var i = 0; i < 10; i++) {
      var randomNum = Math.random();
      var newEnemy  = null;
      if (randomNum < .24) {
        newEnemy = new Enemy(randomNum, ((bod.offsetWidth)/2), -50, 'top');
      }
      if (randomNum > .24 < .49) {
        newEnemy = new Enemy(randomNum, ((bod.offsetWidth) + 50), ((bod.offsetHeight)/2), 'right');
      }
      if (randomNum > .49 < .74) {
        newEnemy = new Enemy(randomNum, ((bod.offsetWidth)/2), ((bod.offsetHeight) +50), 'bottom');
      }
      if (randomNum > .74 < .99) {
        newEnemy = new Enemy(randomNum, -50, ((bod.offsetHeight)/2), 'left');
      }
      enemies.push(newEnemy);
    };
  };

  for (var i = 0; i < enemies.length; i++) {
    if ((enemy.position.y == Player.position.y) && (enemy.position.x > Player.position.x)) {
      that.element.setAttribute('direction', 'right');
    }
    if ((enemy.position.y == Player.position.y) && (enemy.position.x > Player.position.x)) {
      that.element.setAttribute('direction', 'left');
    }
    if ((enemy.position.y < Player.position.y) && (enemy.position.x == Player.position.x)) {
      that.element.setAttribute('direction', 'up');
    }
    if ((enemy.position.y > Player.position.y) && (enemy.position.x == Player.position.x)) {
      that.element.setAttribute('direction', 'down');
    }
    if ((enemy.position.y < Player.position.y) && (enemy.position.x < Player.position.x)) {
      that.element.setAttribute('direction', 'upRight');
    }
    if ((enemy.position.y < Player.position.y) && (enemy.position.x > Player.position.x)) {
      that.element.setAttribute('direction', 'upLeft');
    }
    if ((enemy.position.y > Player.position.y) && (enemy.position.x > Player.position.x)) {
      that.element.setAttribute('direction', 'downLeft');
    }
    if ((enemy.position.y > Player.position.y) && (enemy.position.x < Player.position.x)) {
      that.element.setAttribute('direction', 'downRight');
    }
  };

  // Create the div that contains the enemy;
  var create = function(){
    that.element = document.createElement('div');
    that.element.setAttribute('class','enemy');
    that.element.setAttribute('style', 'left: '+ position.x +'px; top: ' + position.y +'px');
    document.getElementsByTagName('body')[0].appendChild(that.element);
  };

  this.render = function(){


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

    for (var i = 0; i < bullets.length; i++){
      bullets[i].render();
    }
  }
  generateEnemies();
  create();
};