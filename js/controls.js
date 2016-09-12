var Controls = function () {
  var that = this;

  /*
  * Player key variables
  */
  this.key_up         = false;
  this.key_down       = false;
  this.key_right      = false;
  this.key_left       = false;
  this.shootUp        = false;
  this.shootUpRight   = false;
  this.shootRight     = false;
  this.shootDownRight = false;
  this.shootDown      = false;
  this.shootDownLeft  = false;
  this.shootLeft      = false;
  this.shootUpLeft    = false;

  /*
  * Player event listener for keys going up
  */
  document.addEventListener('keyup', function(event){
    event.preventDefault();
    var keyName = event.key;

    switch(keyName) {
      case "d":
          that.key_right = false;
          break;
      case "a":
          that.key_left = false;
          break;
      case "w":
          that.key_up = false;
          break;
      case "s":
          that.key_down = false;
          break;
      case "ArrowUp":
          that.shootUp = false;
          break;
      case "ArrowRight":
          that.shootRight = false;
          break;
      case "ArrowDown":
          that.shootDown = false;
          break;
      case "ArrowLeft":
          that.shootLeft = false;
          break;
      default:
          break;
    }
  });

  /*
  * Player event listener for keys going down
  */
  document.addEventListener('keydown', function(event){
    event.preventDefault();
    var keyName = event.key;

    switch(keyName) {
      case "d":
          that.key_right = true;
          break;
      case "a":
          that.key_left = true;
          break;
      case "w":
          that.key_up = true;
          break;
      case "s":
          that.key_down = true;
          break;
      case "ArrowUp":
          that.shootUp = true;
          break;
      case "ArrowRight":
          that.shootRight = true;
          break;
      case "ArrowDown":
          that.shootDown = true;
          break;
      case "ArrowLeft":
          that.shootLeft = true;
          break;
      default:
          break;
    }
  });
};
