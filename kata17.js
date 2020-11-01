const blocksAway = function(directions) {
  // Put your solution here

  // Final location from (0,0)
  let finLocation = {east:0, north:0};
  let coordinate = [0,0];

  // Indicate which direction the taxi is heading
  let direction = "";

  
  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] === 'right' && direction === "") {
      coordinate[0] += directions[i + 1];
      direction = 'east';
    } else if (directions[i] === 'left' && direction === "east") {
      coordinate[1] += directions[i + 1];
      direction = 'north';
    } else if (directions[i] === 'left' && direction === "north") {
      coordinate[0] -= directions[i + 1];
      direction = 'west';
    } else if (directions[i] === 'left' && direction === "west") {
      coordinate[1] -= directions[i + 1];
      direction = 'south';
    } else if (directions[i] === 'left' && direction === "") {
      coordinate[1] += directions[i + 1];
      direction = 'north';
    } else if (directions[i] === 'right' && direction === "north") {
      coordinate[0] += directions[i + 1];
      direction = 'east';
    } else if (directions[i] === 'right' && direction === "east") {
      coordinate[1] -= directions[i + 1];
      direction = 'south';
    } else if (directions[i] === 'right' && direction === "south") {
      coordinate[0] -= directions[i + 1];
      direction = 'west';
    }

  }

  finLocation["east"] = coordinate[0];
  finLocation["north"] = coordinate[1];


  return finLocation;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));