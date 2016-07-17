$(function(){

	//svg inject plugin

	$('[data-js-svg]').svgInject(function() {
	    // Injection complete
	});

    //mobile menu
	
	$(document).ready(function() {
	    $('#show-menu').click(function() {
	      $('.menu, .icon--close').fadeIn();
	      $('.icon--menu').fadeOut();
	      return false;
	    });
	    $('.close').click(function() {
	      $('.menu, .icon--close').fadeOut();
	      $('.icon--menu').fadeIn();
	      return false;
	    });
	});

	//Visible for animation
	$(this).scroll(function(){
    function isVisible(elem) {
    
      var coords = elem.getBoundingClientRect();
    
      var windowHeight = document.documentElement.clientHeight;
    
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    
      return topVisible || bottomVisible;
    }
    $('[data-js-animation]').each(function(index, elem){
      if(isVisible(elem)){
        $(elem).hasClass("left") && $(elem).addClass("animated--right");
        $(elem).hasClass("right") && $(elem).addClass("animated--left");
      }
      else{
        $(elem).removeClass("animated--right animated--left");
      }
    });
  });

});
