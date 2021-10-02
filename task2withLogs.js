console.log("script (task2withLogs.js) will run now...")

var doors = []

console.log("the empty array is created, the first for loop will run now");
console.log("(we will work with 10 doors wof now for the sake of logs' readability)")
for (var number = 1; number <= 10; number++) {
  console.log("Iteration number ", number)
  console.log("value of 'number' variable in this iteration: ", number)
  var door = { doorNumber: number, isOpen: false }
  console.log("a door is created, it will be pushed to the doors array", door)
  doors.push(door)
  console.log("a door was added to the 'doors' array, its current size is ", doors.length)
}
console.log("'doors' array is filled with objects (that model a door with a doorNumber property and an isOpen property)")

console.log("the second for loop will run now")
for (var round = 1; round <= 10; round++) {
  console.log("--- block will run now ---")
  console.log("Round number ", round)
  console.log("will walk by all of the doors now")
  for (var door of doors) {
    console.log("--- nested(!) block will run now ---")
    console.log("value of door variable in this iteration is ", door)
    console.log("value of round is still", round)
    console.log("if we divide the door's doorNumber by round the remainder will be ", door.doorNumber % round)
    var shouldToggle = (door.doorNumber % round) == 0
    if (shouldToggle) {
      console.log("this block runs, because the remainder is 0")
      console.log( "will change the current doors isOpen property")
      door.isOpen = !door.isOpen
    }
    console.log("after passing by the door, the door looks like this: ", door)
    console.log("--- end of nested(!) block (next iteration will come if there are more doors in the array) ---")
  }
  console.log("--- end of block (next iteration will come, if round number is still under 10) ---")
}

console.log("the third for loop will run now")
console.log("we are iterating through the doors array one last time");
for (var door of doors) {
  console.log("--- block will run now ---")
  console.log("the value of door variable is ", door)
  if (door.isOpen) {
    console.log("! This is the original console.log, this only runs when the door is open !")
    console.log(door.doorNumber)
    console.log("! This was the original console.log !");
  }
  console.log("--- end of block (next iteration will come, if there are more doors in the array) ---")
}

console.log("...script (task2withLogs.js) has run")
