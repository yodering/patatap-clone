// asdfghjkl are the keys for the patatap clone

var originalColor = [32, 9, 18];
var backgroundColor = [...originalColor];
var flashCounter = 0
var flashInterval

function setup() {
  createCanvas(windowWidth, windowHeight)
  
}



function draw() {
  background(backgroundColor)


  
}

function keyPressed() {
  if (key === 'a') {
    flashCounter = 0 // reset flashing counter and start the flashing effect
    if (flashInterval) { 
      clearInterval(flashInterval)
    }
    flashInterval = setInterval(flashColor, 40)  // change color every 40ms
  }
  return false
}

function flashColor() { // toggle between the flash color and original color
  if (flashCounter % 2 === 0) { 
    backgroundColor = [177, 114, 138]
  } else {
    backgroundColor = [...originalColor]
  }
  
  flashCounter++
  
  // stops flash
  if (flashCounter >= 6) {
    clearInterval(flashInterval)
    backgroundColor = [...originalColor]
  }

  redraw()  // reset canvas
}