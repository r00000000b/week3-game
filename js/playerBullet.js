$(document).ready(function() {
  console.log( "ready!" );

var playerBullet = {
  speed: 20,
  startX: player.style.left,
  startY: player.style.top
}

//need to create div & assign id

function shootLeft() {
  var bulletCreated = document.createElement('div');
  bulletCreated.setAttribute('id', 'bulletId');
  bulletCreated.setAttribute('class', 'invisBullet');
  bod.appendChild(bulletCreated);
  var bulletElement = document.getElementById('bulletId');
  var bulletLeft = bulletElement.offsetLeft;
  bulletElement.style.top = parseInt(playerBullet.startY)+20+"px";
  bulletElement.style.left = parseInt(playerBullet.startX)-10+"px";
  bulletCreated.setAttribute('class', 'bullet');

  var bulPos = (parseInt(bulletElement.style.left));
  var counter = bulPos -1;

  function moveLeft() {
    bulletElement.style.left = counter + "px";
  }

  for (var i = 0; counter > -10; counter) {
    setTimeout(moveLeft, 100);

    if (counter < 0) {
      bod.removeChild(bulletElement); //figure and confirm
    }
  }

};


});
/*
  //unused direction object
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

  var bulletElement = document.getElementById('bulletId'); //figure id's
  bulletElement.style.top = playerBullet.startY;
  bulletElement.style.left = playerBullet.startX;
  bulletCreated.setAttribute('class', 'bullet');

  //need to shoot this after creation

  function newBullet() {
  var bulletCreated = document.createElement('div');
  bulletCreated.setAttribute('id', 'bulletId');
  bulletCreated.setAttribute('class', 'invisBullet');
  bod.appendChild(bulletCreated);
}

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
*/

/*
  function moveLeft() {
    var counter = (parseInt(bulletElement.style.left)) - 1;
    bulletElement.style.left = counter + "px";
  }
*/