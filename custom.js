function play(sound){
    var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
    audio.play();
}

function stopAudio(){
   var audio = document.getElementById("audio");
   audio.pause();
}
