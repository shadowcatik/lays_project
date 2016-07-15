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
    
    if(isVisible(document.getElementById('js-animation'))){
      $(".right").addClass("animated--right");
      $(".left").addClass("animated--left");
    }
    else{
      $(".left").removeClass("animated--left");
      $(".right").removeClass("animated--right");
    }
});