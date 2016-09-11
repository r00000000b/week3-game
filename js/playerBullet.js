$(document).ready(function() {
  console.log( "ready!" );

var playerBullet = {
  id: id,
  speed: speed,
  direction: {
    up: up, //create coords for this
    upright: upright, //create
    right: right, //create
    downright: downright, //create
    down: down, //create
    downleft: downleft, //create
    left: left, //create
    upleft: upleft //create
  },
  startX: player.offsetWidth,
  startY: player.offsetHeight
}

//need to create div & assign id

function newBullet() {
  var bullet = document.createElement('div');
  bullet.setAttribute('id', 'bulletId');
  bullet.setAttribute('class', 'bullet')
  body.appendChild(bullet);

  var bulletElement = document.getElementById('bulletId') //figure id's
  bulletElement.style.top = playerBullet.startY;
  bulletElement.style.left = playerBullet.startX;

  //need to shoot this after creation

  var bulletTop = bulletElement.offsetTop;
  var bulletLeft = bulletElement.offsetLeft;
  var bulletBottom = bulletElement.offsetTop + bulletElement.offsetHeight;
  var bulletRight = bulletElement.offsetLeft + bulletElement.offsetWidth;

  if (bulletBottom > gameWindowHeight) {
    bod.removeChild(bulletElement); //figure and confirm
  }
  if (bulletTop < 0) {
    bod.removeChild(bulletElement); //figure and confirm
  }
  if (bulletLeft < 0) {
    bod.removeChild(bulletElement); //figure and confirm
  }
  if (bulletRight > gameWindowWidth) {
    bod.removeChild(bulletElement); //figure and confirm
  }
}



  });