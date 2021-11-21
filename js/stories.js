var audioCount = $('.audiofile').length;

$(document).ready(function() {
  for (var i=0; i<audioCount; i++) {
    randomPosition(i);
    playAudio(i);
  };
  });

  // RANDOM POSITION

  function randomPosition(randomCount){
    var randomItem = document.getElementById("storybox-"+randomCount);
    var newtop = Math.floor(Math.random() * (window.innerHeight-randomItem.offsetHeight));
    var newleft = Math.floor(Math.random() * (window.innerWidth-randomItem.offsetWidth));
    randomItem.style.top = newtop+"px";
    randomItem.style.left = newleft+"px";
  };

  // PLAY AUDIO

  function playAudio(audioCount){
    var playButton = document.getElementById('play-button-'+audioCount);
    var state = 'play';
    const audio = document.getElementById('audiofile-'+audioCount);

    playButton.addEventListener('click', () => {
      if(state === 'play') {
        audio.play();
        state = 'pause';
      } else {
        audio.pause();
        state = 'play';
      }
    });
  };
