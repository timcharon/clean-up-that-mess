var audioCount = $('.audiofile').length;
var storyboxCount = $('.storybox').length;
var categories = $('.category').length;
var brickCount = 10;
var indexCount = 1;

$(document).ready(function() {
  brickPicture();
  toggleTrigger();
  toggleManifesto();
  for (var i=0; i<audioCount; i++) {
    playAudio(i);
  };
  for (var i=0; i<storyboxCount; i++) {
    brickToggle(i);
  };
});

// TOGGLE trigger

function toggleTrigger() {
  var trigger = document.getElementById('trigger-button');
  var triggerbox = document.getElementById('trigger-container-1');
  trigger.addEventListener('click', () => {
    triggerbox.style.zIndex = "-2000";
  });
};

// BRICK PICTURE

function brickPicture(){
  for (var i=0; i<storyboxCount; i++) {
    var brickNumber = Math.floor(Math.random() * brickCount);
    var thisStorybox = document.getElementById('storybox-'+i);
    thisStorybox.style.background = "url('./css/images/brick-wall/brick-"+brickNumber+".png') no-repeat";
    thisStorybox.style.backgroundSize = "100% 100%";
  };
};

// BRICK TOGGLE

function brickToggle(brick) {
  var thisStorybox = document.getElementById('storybox-'+brick);
  var lastRow = document.getElementById('row-last');
  thisStorybox.addEventListener('click', () => {
    thisStorybox.style.zIndex = "-1000";
    // $('.row-container').css("zIndex", "-1000");
  });
  lastRow.addEventListener('click', () => {
    $('.row-container').css("zIndex", "-1000");
  });
};

// PLAY AUDIO

function playAudio(audioCount){
  var playButton = document.getElementById('storybox-'+audioCount);
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

// MANIFESTO

function toggleManifesto() {
  for (var i=0; i<categories; i++){
    $('.manifesto-textbox').css('display', 'none');
    const thisManifesto = document.getElementById('manifesto-textbox-'+i);
    var thisBookmark = document.getElementById('category-'+i);
    var state = 'play';
    const audio = document.getElementById('cat-audio-'+i);

    thisBookmark.addEventListener('click', () => {
      thisManifesto.style.display = "block";
      thisManifesto.style.zIndex = indexCount;
      indexCount ++;
      
      if(state === 'play') {
        audio.play();
        state = 'pause';
      } else {
        audio.pause();
        state = 'play';
      }
    });
  };
};

//MANIFESTO AUDIO
