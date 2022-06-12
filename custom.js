// Audio Buttons

function play(sound){
    var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
    audio.play();
}

function stopAudio(){
   var audio = document.getElementById("audio");
   audio.pause();
}

// Toggle Landing Image

function myFunction() {
  var element = document.getElementById("tw-toggle");
  element.classList.toggle("tw-toggle--close");
}
