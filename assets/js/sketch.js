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
var circleDiv



function preload() {

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

  if (key === 'd') {
    animateCircleDiv();
    console.log("pressed")
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


function animateCircleDiv() {
  const circleDivs = document.querySelectorAll('.circleDiv');
  
  circleDivs.forEach(div => {
    div.style.display = 'none';
  });
  
  // pick a random div
  const randomDiv = circleDivs[Math.floor(Math.random() * circleDivs.length)];
  randomDiv.style.display = 'block';  // Display the selected div
  
  // determine animation based on div id
  let animationProps;
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

  
  // animation
  
  anime({
      targets: randomDiv,
      ...animationProps,
      scale: [1, 5],
      duration: 1000,
      easing: 'easeOutCubic',
      direction: 'alternate'
  });
}




