/*
* key variables
*/
  var key_up = false;
  var key_down = false;
  var key_right = false;
  var key_left = false;

/*
* event listener for keys going up
*/

document.addEventListener('keyup', function(event){

  var keyName = event.key;

  switch(keyName) {
    case "d":
        key_right = false;
        break;
    case "a":
        key_left = false;
        break;
    case "w":
        key_up = false;
        break;
    case "s":
        key_down = false;
        break;
    default:
        break;
  }

  console.log("Key down" + keyName);

});

/*
* event listener for keys going down
*/

document.addEventListener('keydown', function(event){

  var keyName = event.key;

  switch(keyName) {
    case "d":
        key_right = true;
        break;
    case "a":
        key_left = true;
        break;
    case "w":
        key_up = true;
        break;
    case "s":
        key_down = true;
        break;
    default:
        break;
  }

  console.log("Key up" + keyName);

});