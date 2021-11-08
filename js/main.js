var contentboxCount = 2;



$(document).ready(function() {
  for(var i=0; i<contentboxCount; i++) {
    dragFunction(i);
  };
});

function dragFunction(dragcount){

  var dragItem = document.getElementById("contentbox-"+dragcount);

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
    };
  };

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  };
  console.log(1);
};
