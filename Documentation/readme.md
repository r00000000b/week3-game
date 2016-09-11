Roberto Ching

DESCRIPTION
Top down shooter (similar to 1942)

BREAK-DOWN aka OBJECTS, OBJECTS, OBJECTS

The Basics
Boundary
  width & height of current window. Or fixed size

Player character (TBD, some sort of ship) - will have the following stats
  size in pixels (e.g. 11 pixel square with border. it's center is it's origin (pixel 6))
  position for top - for collision & coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom
  'hitpoints' - just 1 (may not be needed)
  'lives' - keep track of when the game is over
  'bombs' - keep track of how many nukes player has

Player character bullet
  size in pixels
  position for top - for collision & coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom

Player character 'bomb' - used to clear screen of all enemies and bullets (not boss, but boss bullets are ok)
  size in pixels
  position for top - for collision & coordinates

Player Hud - semi-transparent display
  displays how many lives left
  displays how many bombs left


Enemy - tier 1 - first level to introduce enemies to Player (straight down movement)
  size in pixels
  position for top - coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom
  'hitpoints' - just 1 (may not be needed)

Enemy - tier 2 - diagonal movement from top
  size in pixels
  position for top - coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom
  'hitpoints' - 2

Enemy - tier 3 - fast diagonal movement from left or right sides
  size in pixels
  position for top - coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom
  'hitpoints' - just 1

Enemy - tier 4 - slow movement from top, much larger, more hit points
  size in pixels
  position for top - coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom
  'hitpoints' - 5

Boss - from top. stays at top with 'random' left & right
  size in pixels
  position for top - coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom
  'hitpoints' - tbd 30

Enemy Bullets - similar to player bullets
  size in pixels
  position for top - for collision & coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom

Boss Bullets - similar, but may be larger or more bullets
  size in pixels
  position for top - for collision & coordinates
  postion for left - for collision & coordinates
  position for right - collision only
  position bottom - collision only
  x-speed - how fast it goes left & right
  y-speed - how fast it goes top & bottom