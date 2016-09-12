var Player = function() {

  var health  = 100;

  var godeMode = true;

  var position = {
    x: 0,
    Y: 0,
    face: 90
  };

  var element = null;


  var create = function(){
    // Create the div that contains the player;

    element = document.createElement('div');
    element.setAttribute('id','player');
    element.setAttribute('style', 'left: 500px; top: 250px');
    document.getElementsByTagName('body')[0].appendChild(element);
  }


  var shoot = function(){
    // direction
    return new Bullet( direction );
  }


  var move = function(){

  }

  var die = function() {

    if(godeMode){
      return;
    }

    // implement die;
  }

  this.render = function(){

    if(key_up){
      p1.style.top = parseInt(p1.style.top)-20+"px";
      console.log("move up");
    }

    if(key_down){
      p1.style.top = parseInt(p1.style.top)+20+"px";
      console.log("move down");
    }

    if(key_left){
      p1.style.left = parseInt(p1.style.left)-20+"px";
      console.log("move left");
    }

    if(key_right){
      p1.style.left = parseInt(p1.style.left)+20+"px";
      console.log("move right");
    }
  }

  create();
}