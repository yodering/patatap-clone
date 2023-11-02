// asdfghjkl are the keys for the patatap clone

var originalColor = [32, 9, 18];
var backgroundColor = [...originalColor]
var flashCounter = 0
var flashInterval
var divState = 'up' // up, down, movingup, movingdown
let isMovingRight = true;
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
  sound1 = loadSound('assets/clap.wav')
  sound2 = loadSound('assets/808.wav')
  sound3 = loadSound('assets/shutter.wav')
  sound4 = loadSound('assets/rise.wav')
  sound5 = loadSound('assets/8082.wav')
  sound9 = loadSound('assets/snare.wav')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
   circleDiv = select('#circleDiv');
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundColor)


  
}

function keyPressed() {
  // for a
  if (key === 'a') {
    sound1.play()
    flashCounter = 0
    if (flashInterval) {
      clearInterval(flashInterval)
    }
    flashInterval = setInterval(flashPink, 40)
    return false;  // prevent default
  }



  // for s
  if (key === 's') {
    sound2.play()
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


  // for d
  if (key === 'd') {
    animateCircleDiv();
    sound3.play()
}


  // for f
  if (key === "f") {
    sound4.play()
    animateRectangle()
  }

// for g
if (key === 'g') {
  sound5.play()
  var fourthMotionDiv = document.querySelector('.fourth-motion')
  var fourthMotionState = 'left'; // Initialize the state for the fourth-motion div

  // if div currently animating, do nothing
  if (fourthMotionState === 'movingLeft' || fourthMotionState === 'movingRight') {
      return;
  }

  if (fourthMotionState === 'left') { // moves from left to right
      fourthMotionState = 'movingRight'
      fourthMotionDiv.style.left = "0%"

      setTimeout(function() {
          fourthMotionDiv.style.left = "100%"

          fourthMotionDiv.addEventListener('transitionend', function() {
              fourthMotionState = 'right' // update the state after the transition ends
          }, { once: true })  // ensure the event listener is called only once
      }, 800) // pause time

  } else if (fourthMotionState === 'right') { // moves from right to left
      fourthMotionState = 'movingLeft'
      fourthMotionDiv.style.left = "0%"

      setTimeout(function() {
          fourthMotionDiv.style.left = "-100%"

          fourthMotionDiv.addEventListener('transitionend', function() {
              fourthMotionState = 'left' // update the state after the transition ends
          }, { once: true })  // ensure the event listener is called only once
      }, 800) // pause time
  }

  return false  // prevent default
}


// for h
if (key === 'h') {
  circleFade()
}





 // for l
 if (key === 'l') {
  sound9.play()
  flashCounter = 0
  if (flashInterval) {
    clearInterval(flashInterval)
  }
  flashInterval = setInterval(flashDark, 40)
  return false;  // prevent default
}

}




function flashPink() { // toggle between the flash color and original color
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

function flashDark() { // toggle between the flash color and original color
  if (flashCounter % 2 === 0) { 
    backgroundColor = [10, 2, 5]
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


function animateCircleDiv() {
  const circleDivs = document.querySelectorAll('.circleDiv');
  
  circleDivs.forEach(div => {
    div.style.display = 'none';
  });
  
  // pick a random div
  const randomDiv = circleDivs[Math.floor(Math.random() * circleDivs.length)];
  randomDiv.style.display = 'block';  // display the selected div
  
  
  let animationProps; // determine animation based on div id
  switch (randomDiv.id) {
    case 'topLeft':
    case 'topRight':
      animationProps = {top: ['-100%', '40%']};  // coming down into view
      break;
    case 'bottomLeft':
    case 'bottomRight':
      animationProps = {top: ['100%', '40%']};  // coming up into view
      break;
  }

  anime({   // animation
      targets: randomDiv,
      ...animationProps,
      scale: [1, 5],
      duration: 1000,
      easing: 'easeOutCubic',
      direction: 'alternate'
  });
}




const rectangleDiv = document.querySelector(".rectangleDiv");

function animateRectangle() {
  const targetX = isMovingRight ? '800%' : '-810%';
  const animationDuration = 3000;

  anime({
    targets: rectangleDiv,
    translateX: targetX,
    duration: animationDuration,
    easing: 'easeOutCubic',
  });

  isMovingRight = !isMovingRight; // Toggle the direction for the next press of "f"
}


function circleFade() {
  anime({
    targets: circle-fade,
    opacity: [1,0],
    easing: 'easeInExpo',
    duration: 500,
  })
}
