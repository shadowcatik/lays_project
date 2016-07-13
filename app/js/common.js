$(function(){

	//svg inject plugin

	$('[data-js-svg]').svgInject(function() {
	    // Injection complete
	});

	//Visible for animation

	

    
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
$(this).scroll(function(){
    function isVisible(elem) {
    
      var coords = elem.getBoundingClientRect();
    
      var windowHeight = document.documentElement.clientHeight;
    
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    
      return topVisible || bottomVisible;
    }
    
    if(isVisible(document.getAttribute('[data-js-animation]'))){
      $(".right").addClass("animated--right");
      $(".left").addClass("animated--left");
    }
    else{
      $(".left").removeClass("animated--left");
      $(".right").removeClass("animated--right");
    }
});