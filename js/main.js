$(document).ready(function(){

//nav scroll fade color
  $(window).scroll(function() {
      if ($(this).scrollTop() > 250) { // this refers to window
        $('nav.nav-fade').addClass('nav-color');
      }

      else {
        $('nav.navbar-default').removeClass('nav-color');
      }
  });       
  
//Replazar imagenes por svg inline
  function svg() {
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
  }

//Masonery (pinterest board - Media)
  function masonery() {
    $('.board-media').masonry({
      itemSelector: '.mision-card',
      columnWidth: 1,
      fitWidth: true,
      gutter: 10
    });
  }

//Clonar solo para dev--- 
  function clonar(){
    var e = $('.clone');
    for (var i = 0; i < 5; i++) {
      e.clone().insertAfter(e);
    }
    svg();
    masonery();
  }

  clonar()
});


