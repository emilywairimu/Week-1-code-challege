function calculatePoints() {
    const speedInput = document.getElementById("speed");
    const speed = Number(speedInput.value);

if(speed <= 0 ) {
    
        document.getElementById("result").innerHTML = "Please enter valid speed value"; //brings correct input values
        document.getElementById("result").innerHTML = "Points: " + demeritPoints;
        // const demeritPoints = Math.floor((speed - 70) / 5);
}

  
if (speed > 0 && speed < 70) {
      document.getElementById("result").innerHTML = "Okay"; //shows the speed is within allowed range
      document.getElementById("result").innerHTML = "Points: " + demeritPoints;
}  

else {
      const demeritPoints = Math.floor((speed - 70) / 5);
       document.getElementById("result").innerHTML = "Points: " + demeritPoints;
     //math.floor returns the largest integer <= the value
      if (demeritPoints > 12) {
        document.getElementById("result").innerHTML = "LICENSE SUSPENDED!"; //logs the suspension message
      } else {
        document.getElementById("result").innerHTML = "Points: " + demeritPoints;
      }
    }
    return "Points" + demeritPoints
  }