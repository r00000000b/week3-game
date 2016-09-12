var Enemy = function(id, x, y, location) {
  var that    = this;
  var element = null;

  var id = id;
  var location = location;
  var position  = {
    x: x,
    y: y
  };
  var movementSpeed = 5;

  // Create the div that contains the enemy;
  var create = function(){
    that.element = document.createElement('div');
    that.element.setAttribute('class','enemy');
    that.element.setAttribute('style', 'left: '+ position.x +'px; top: ' + position.y +'px');
    document.getElementsByTagName('body')[0].appendChild(that.element);
  };

  this.render = function(){
    var generateEnemies = function(){
      for (var i = 0; i < 10; i++) {
        var randomNum = Math.random();
        if (randomNum < .24) {
          var newEnemy = new Enemy(randomNum, ((bod.offsetWidth)/2), -50, 'top');
          enemies.push(newEnemy);
        }
        if (randomNum > .24 < .49) {
          var newEnemy = new Enemy(randomNum, ((bod.offsetHeight)/2), ((bod.offsetWidth) + 50), 'right');
          enemies.push(newEnemy);
        }
        if (randomNum > .49 < .74) {
          var newEnemy = new Enemy(randomNum, ((bod.offsetWidth)/2), ((bod.offsetHeight) +50), 'bottom');
          enemies.push(newEnemy);
        }
        if (randomNum > .74 < .99) {
          var newEnemy = new Enemy(randomNum, -50, ((bod.offsetHeight)/2), 'left');
          enemies.push(newEnemy);
        }
      }
    };



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

    this.element.style.top = position.y + 'px';
    this.element.style.left = position.x + 'px';

    for (var i = 0; i < bullets.length; i++){
      bullets[i].render();
    }
  }

  create();
};