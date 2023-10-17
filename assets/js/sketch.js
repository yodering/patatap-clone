// asdfghjkl are the keys for the patatap clone

var originalColor = [32, 9, 18];
var backgroundColor = [...originalColor]
var flashCounter = 0
var flashInterval
var divState = 'up' // up, down, movingup, movingdown
var sound1
var sound2
var sound3
var sound4
var sound5
var sound6
var sound7
var sound8
var sound9


function preload() {
  sound1 = loadSound("assets/sound1.wav")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
}



function draw() {
  background(backgroundColor)


  
}

function keyPressed() {
  // for a
  if (key === 'a') {
    sound1.play()
    console.log('sound')
    flashCounter = 0
    if (flashInterval) {
      clearInterval(flashInterval)
    }
    flashInterval = setInterval(flashColor, 40)
    return false;  // prevent default
  }

  // for s
  if (key === 's') {
    var secondMotionDiv = document.querySelector('.second-motion')

    // if div currently animating, do nothing
    if (divState === 'movingUp' || divState === 'movingDown') {
      return
    }

    if (divState === 'up') { // moves from up to down
      divState = 'movingDown'
      secondMotionDiv.style.top = "0%"

      setTimeout(function() {
      secondMotionDiv.style.top = "100%"

      secondMotionDiv.addEventListener('transitionend', function() {
      divState = 'down' // update the state after the transition ends
      }, { once: true })  // ensure the event listener is called only once
    }, 800) // pause time

  } else if (divState === 'down') { // moves from down to up
      divState = 'movingUp'
      secondMotionDiv.style.top = "0%"

      setTimeout(function() {
      secondMotionDiv.style.top = "-100%"

      secondMotionDiv.addEventListener('transitionend', function() {
      divState = 'up' // update the state after the transition ends
      }, { once: true })  // ensure the event listener is called only once
    }, 800) // pause time
  }

   return false  // prevent default
  }
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





