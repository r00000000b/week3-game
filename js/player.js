var Player = function() {
  var that    = this;
  var element = null;

  var health   = 100;
  var godeMode = true;
  var position = {
    x: 500,
    y: 250,
    face: 90
  };
  var movementSpeed = 20;

  var bulletCooldown = 200;
  var currentTime    = new Date().getTime();
  var bullets        = [];

  // Create the div that contains the player;
  var create = function(){
    that.element = document.createElement('div');
    that.element.setAttribute('id','player');
    that.element.setAttribute('style', 'left: '+ position.x + 'px; top: ' + position.y + 'px');
    document.getElementsByTagName('body')[0].appendChild(that.element);
  };

  // var die = function() {

  //   if(godeMode){
  //     return;
  //   }

  //   // implement die;
  // };

  this.render = function(controls){
    // movmenet
    if(controls.key_up){
      position.y -= movementSpeed;
    }
    if(controls.key_down){
      position.y += movementSpeed;
    }
    if(controls.key_left){
      position.x -= movementSpeed;
    }
    if(controls.key_right){
      position.x += movementSpeed;
    }

    this.element.style.top = position.y + 'px';
    this.element.style.left = position.x + 'px';

    // bullet generation
    var newTime            = new Date().getTime();
    var availbleBulletTime = currentTime + bulletCooldown;
    if (controls.shootLeft && availbleBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'left');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootUp && availbleBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'up');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootRight && availbleBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'right');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootDown && availbleBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'down');
      bullets.push(bullet);
      currentTime = newTime;
    }

    // bullet movement
    for (var i = 0; i < bullets.length; i++){
      bullets[i].render();
    }
  };

  create();
};
