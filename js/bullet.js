var Bullet = function(x, y, direction) {
  var that    = this;
  var element = null;

  var direction = direction;
  var position  = {
    x: x,
    y: y
  };
  var movementSpeed = 30;


  // Create the div that contains the bullet;
  var create = function(){
    that.element = document.createElement('div');
    that.element.setAttribute('class','bullet');
    that.element.setAttribute('style', 'left: '+ position.x + 20 +'px; top: ' + position.y + 20 +'px');
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

    this.element.style.top = position.y + 'px';
    this.element.style.left = position.x + 'px';
  }

  create();
};
