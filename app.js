var rover = {
  direction: "N",
  x:0,
  y:0,
  travelLog:[{x:0,y:0}]
};



function turnLeft(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("Rover direction is " + rover.direction);
}

function turnRight(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "W":
    rover.direction = "N";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
  }
  console.log("Rover direction is " + rover.direction);
}

function moveForward(rover){
  if(rover.direction === "N" && (rover.y > 0)){
    rover.y-=1;
    return true
  }
  else if(rover.direction === "S" && (rover.y < 9)){
    rover.y+=1;
    return true;
  }
  else if(rover.direction === "W" && (rover.x > 0)){
    rover.x-=1;
    return true
  }
  else if(rover.direction === "E" && (rover.x < 9)){
    rover.x+=1;
    return true
  }
  return false;
console.log(rover.x + rover.y)

}


function moveBackward(rover){
  if(rover.direction === "N" && (rover.y < 9)){
    rover.y+=1;
    return true

  }
  else if(rover.direction === "S" && (rover.y > 0)){
    rover.y-=1;
    return true

  }
  else if(rover.direction === "W" && (rover.x < 9)){
    rover.x+=1;
    return true

  }
  else if(rover.direction === "E" && (rover.x > 0)){
    rover.x-=1;
    return true

  }
  return false;
console.log(rover.x + rover.y)

}






function listCommands(commands){
  for(i=0; i<commands.length;i++){
    switch(commands[i]){
      case "l":
      turnLeft(rover)
      break;
      case "r":
      turnRight(rover);

      break;
      case "f":
      if(moveForward(rover));
      rover.travelLog.push({x:rover.x,y:rover.y})

      break;
      case "b":
      if(moveBackward(rover));
      rover.travelLog.push({x:rover.x,y:rover.y})

      break;
      default:
      console.log("wrong command");
    }
  }
}
listCommands("rffrfflfrff")
console.log(rover)
