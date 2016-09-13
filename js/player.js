var Player = function() {
  var that    = this;
  var element = null;

  var health   = 100;
  var godeMode = true;
  var position = {
    x: ((bod.offsetWidth)/2),
    y: ((bod.offsetHeight)/2),
    face: 90
  };
  var movementSpeed = 8;

  var bulletCooldown = 200;
  var currentTime    = new Date().getTime();
  var bullets        = [];

  this.getPosition = function () {
    return position;
  }

  this.getHealth = function () {
    return health;
  }

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

  this.getBullets = function (index) {
    if (index){
      return bullets[index];
    } else {
      return bullets;
    }
  }

  this.render = function(controls){
    // movement
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
    // bounding box
    if ((parseInt(this.element.style.top)) < 0){
      position.y = movementSpeed * 0;
    }
    if ((parseInt(this.element.style.top)) > (bod.offsetHeight-50)){
      position.y = (bod.offsetHeight-50);
    }
    if ((parseInt(this.element.style.left)) < 0){
      position.x = movementSpeed * 0;
    }
    if ((parseInt(this.element.style.left)) > (bod.offsetWidth-50)){
      position.x = (bod.offsetWidth-50);
    }

    this.element.style.top = position.y + 'px';
    this.element.style.left = position.x + 'px';

    // bullet generation
    var newTime            = new Date().getTime();
    var availableBulletTime = currentTime + bulletCooldown;
    if (controls.shootLeft && availableBulletTime < newTime) {
      var bullet = new Bullet(position.x, ((position.y)+20), 'left');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootUp && availableBulletTime < newTime) {
      var bullet = new Bullet(((position.x)+20), position.y, 'up');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootRight && availableBulletTime < newTime) {
      var bullet = new Bullet(((position.x)+40), ((position.y)+20), 'right');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootDown && availableBulletTime < newTime) {
      var bullet = new Bullet(((position.x)+20), ((position.y)+50), 'down');
      bullets.push(bullet);
      currentTime = newTime;
    }
/* figure out combos
    if (controls.shootUpLeft && availableBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'upLeft');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootDownLeft && availableBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'downLeft');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootUpRight && availableBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'upRight');
      bullets.push(bullet);
      currentTime = newTime;
    }
    if (controls.shootDownRight && availableBulletTime < newTime) {
      var bullet = new Bullet(position.x, position.y, 'downRight');
      bullets.push(bullet);
      currentTime = newTime;
    }
*/

  /* bullet boundaries
    for (var i = 0; i < bullets.length; i++) {
      if (position.x < -10) {
      delete Player.bullets[i];
      }
      if (position.x > (bod.offsetWidth)){
      delete bullets[i];
      }
      if (position.y < 0){
      delete bullets[i];
      }
      if (position.y > (bod.offsetHeight)){
      delete bullets[i];
      }
    }
*/
    var bulletsToRemove = [];

    for (var i = 0; i < bullets.length; i++){
      bullets[i].render(); // bullet movement
      var collided = bullets[i].collision();

      if (collided) {
        bulletsToRemove.push(i);
      }
    }

    for (var i = 0; i < bulletsToRemove.length; i++){
      var bIndex = bulletsToRemove[i];

      bullets[bIndex].getElement.remove();
      bullets.splice(bIndex, 1);
    }
  };

  create();
};


