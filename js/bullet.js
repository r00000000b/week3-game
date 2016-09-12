var Bullet = function() {

  var position = {
    x: 0,
    y: 0
  }

  var bulLement = null;


  var create = function(){
    // Create the div that contains the player;

    bulLement = document.createElement('div');
    bulLement.setAttribute('class','invisBullet');
    bulLement.setAttribute('style', 'left: 500px; top: 250px');
    document.getElementsByTagName('body')[0].appendChild(element);
  }
}