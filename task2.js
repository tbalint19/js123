var doors = []

for (var number = 1; number <= 100; number++) {
  doors.push({ doorNumber: number, isOpen: false })
}

for (var round = 1; round <=100; round++) {
  for (var door of doors) {
    var shouldToggle = (door.doorNumber & round) == 0
    if (shouldToggle) {
      door.isOpen = !door.isOpen
    }
  }
}

for (var door of doors) {
  if (door.isOpen) {
    console.log(door.doorNumber)
  }
}
