var contentboxCount = $('.contentbox').length;
var indexCount = 1;

$(document).ready(function() {
  for(var i=0; i<contentboxCount; i++) {
    randomPosition(i);
    dragFunction(i);
    toggle(i);
  };
});

// RANDOM Position

function randomPosition(randomCount){
  var randomItem = document.getElementById("contentbox-"+randomCount);
  var newtop = Math.floor(Math.random() * (window.innerHeight-randomItem.offsetHeight));
  var newleft = Math.floor(Math.random() * (window.innerWidth-randomItem.offsetWidth));
  randomItem.style.top = newtop+"px";
  randomItem.style.left = newleft+"px";
};

// DRAGGING FUNCTION

function dragFunction(dragcount){

  var dragItem = document.getElementById("contentbox-"+dragcount);
  var dragButton = document.getElementById("content-button-"+dragcount);

  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  document.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", dragEnd);


  var mouse = {x:0, y:0}; //mouse.x, mouse.y

  function dragStart(e){
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === dragItem) {
      active = true;
    }
  };

  function drag(e){
    if(active) {

      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);

      dragItem.style.zIndex = indexCount;

    };
  };

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
    indexCount ++;
  };
};

// TOGGLE KASTEN

function toggle(toggleCount) {

  document.getElementById("content-button-"+toggleCount).addEventListener("click", toggleFunct);

  function toggleFunct() {
    var toggleItem = document.getElementById("content-"+toggleCount);
    if (toggleItem.style.display === "none") {
      toggleItem.style.display = "block";
    } else {
      toggleItem.style.display = "none";
    };
  };
};
