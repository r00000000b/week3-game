var Bullet = function(x, y, direction) {
  var that    = this;
  var element = null;

  var direction = direction;
  var position  = {
    x: x,
    y: y
  };
  var movementSpeed = 10;
  var area = {
    height: 10,
    width: 10
  };

  // Create the div that contains the bullet;
  var create = function(){
    element = document.createElement('div');
    element.setAttribute('class','bullet');
    element.setAttribute('style', 'left: '+ position.x + 20 +'px; top: ' + position.y + 20 +'px');
    document.getElementsByTagName('body')[0].appendChild(element);
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
/* combos
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
*/

    element.style.top = position.y + 'px';
    element.style.left = position.x + 'px';
  };

  this.getPosition = function () {
    return position;
  }

  this.getElement = function () {
    return element;
  };

  this.borderCollision = function () {
    // bullet boundaries
    if ((parseInt(element.style.top)) < 0){
      position.y = movementSpeed * 0;
      return true;
    }
    if ((parseInt(element.style.top)) > (bod.offsetHeight-10)){
      position.y = (bod.offsetHeight+50);
      return true;
    }
    if ((parseInt(element.style.left)) < 0){
      position.x = movementSpeed * 0;
      return true;
    }
    if ((parseInt(element.style.left)) > (bod.offsetWidth-10)){
      position.x = (bod.offsetWidth+50);
      return true;
    }
  };

  this.enemyCollision = function (enemies) {
    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      var enemyPos = enemy.getPosition();


      return {collided: true, enemyIndex: i}; // put this in the collision

    }

    return {collided: false}
  };

  create();
};
