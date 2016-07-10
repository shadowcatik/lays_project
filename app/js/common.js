$(function(){

	//svg inject plugin

	$('[data-js-svg]').svgInject(function() {
	    // Injection complete
	});

	//canvas

	window.onload = function() {
	    var drawingCanvas = document.getElementById('instagram');
	    if(drawingCanvas && drawingCanvas.getContext) {
		    var context = drawingCanvas.getContext('2d');
		     // Внешняя окружность 
		    context.strokeStyle = "#f73934";
		    context.fillStyle = "#f73934";
		    context.shadowColor = '#f73934';
		    context.shadowBlur = 40;
		    context.beginPath();
		    context.arc(200,100,5,0,Math.PI*2,true);
		    context.closePath();
		    context.stroke();
		    context.fill();
		    //Внутренняя окружность
		    context.fillStyle = "#ff0000";
		    context.beginPath();
		    context.arc(100,100,1,0,Math.PI*2,true);
		    context.closePath();
		    context.stroke();
		    context.fill();
	    }
    }

    
});
//mobile menu

document.getElementById("show-menu").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("menu").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.icon--menu')) {
    var dropdowns = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}