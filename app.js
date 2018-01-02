//function 
function playSound(e) {
   // console.log(e);
   const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
//console.log(audio); 
const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);

if(!audio) return;
audio.currentTime=0;
audio.play();   
//console.log(key); 
key.classList.add('playing');

};

function clickToPlay(e) {
    // extract keyCode from data-key attribute
    var keyCode = this.getAttribute('data-key');
    
    // check if there is associated audio
    var audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    // if not, ignore this key
    if (!audio) return;

    // if there is:
        // 1 - add class playing for style modification
        // 2 - reset audio, so we can play again before it finished
        // 3 - play that sound
    this.classList.add('playing'); // 1
    audio.currentTime = 0;        // 2
    audio.play();                 // 3
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    // this.classList.remove('playing'); // also working
}

// build an array of keys
const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);
// assign event listener to all of them. This event listener would then call removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// add support for click
keys.forEach(key => key.addEventListener('click', clickToPlay));
window.addEventListener('keydown', playSound);

