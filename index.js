//(function() {
//this is IIFE - putting everything int his function to prevent polluting the global name space
'use strict';


//})();
//selectors
const stopButton = document.getElementById('stopButton')
const stopBulb = document.getElementById('stopLight')
const slowButton = document.getElementById('slowButton')
const slowBulb = document.getElementById('slowLight')
const goButton = document.getElementById('goButton')
const goBulb = document.getElementById('goLight')

//event listeners
//lights on and off
stopButton.addEventListener('click', () => stopBulb.classList.toggle('stop'))
slowButton.addEventListener('click', () => slowBulb.classList.toggle('slow'))
goButton.addEventListener('click', () => goBulb.classList.toggle('go'))

//enter exit logs
stopButton.addEventListener('mouseenter', () => console.log(`"Entered Stop button"`))
stopButton.addEventListener('mouseleave', () => console.log(`"Left Stop button"`))

slowButton.addEventListener('mouseenter', () => console.log(`"Entered Slow button"`))
slowButton.addEventListener('mouseleave', () => console.log(`"Left Slow button"`))

goButton.addEventListener('mouseenter', () => console.log(`"Entered Go button"`))
goButton.addEventListener('mouseleave', () => console.log(`"Left Go button"`))
//functions 

function redLight() {
  stopBulb.classList.toggle('stop')
}

