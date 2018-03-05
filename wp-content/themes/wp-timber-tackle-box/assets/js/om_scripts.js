$(window).resize(function() {
  resizewindow();

  var altoventana = window.innerHeight - 150; // New height
var corrector = 200; // Corrector de altura
var ancho = window.innerWidth; // New height
var alto = window.innerHeight - corrector; // New height

});

$(window).ready(function() {
  resizewindow();
  enciende("#logo_outline",1000);
  enciende("#reel",800);
  //enciende(".navbar",800);
  enciende(".proyectos",1200);
  $("#logo_outline").css({'transform': 'scale(.9)'});

});

var altoventana = window.innerHeight - 150; // New height
var corrector = 200; // Corrector de altura
var ancho = window.innerWidth; // New height
var alto = window.innerHeight - corrector; // New height


function resizewindow(){
  // This will execute whenever the window is resized
  $(".logo").attr( "width", ancho );
  $(".logo").attr( "height", alto );

  $(".logo svg").attr( "width", ancho - 20 );
  $(".logo svg").attr( "height", alto );

  $(".cabecera-proyecto").css( "height", alto + corrector );
  $(".cabecera").css( "height", alto );
  $("#content").css( "padding-top", alto + corrector );
  alturaCabeceraProyecto();
}




function  alturaCabeceraProyecto(){
  $(".content-wrapper #content").css( "padding-top", alto + corrector );
  console.log("padding-top", alto + corrector);
}



// =========================
// =========================
// Apagar y encender elementos
// =========================
// =========================


// Funciones base

var luz_off = ".5";
var luz_on = "1";

function apaga(elem,este){
  $( elem ).not(este).stop().animate({ "opacity": luz_off },200);
}



function enciende(elem,tiempo){
    $(elem).stop();
    $(elem).animate({ "opacity": luz_on },tiempo);
}




// Cabecera. Apagado secuenciado

$( ".navbar ul li a" ).hover(
  function() {
    apaga(".navbar ul li a",$(this))

  }, function(){

    enciende(".navbar ul li a");
  }
);


$( ".navbar ul" ).hover(
  function() {
setTimeout(function(){
  apaga(".logo svg");
}, 400);
setTimeout(function(){
  apaga(".logo h2");
}, 200);  

  }, function(){
setTimeout(function(){

}, 100);
setTimeout(function(){
  enciende(".logo svg");
}, 400);
setTimeout(function(){
  enciende(".logo h2");
}, 200);  

    
  }
);

  function apagaclick() {

    
setTimeout(function(){
  console.log("hola");
  apaga(".navbar ul");
}, 400);
setTimeout(function(){
  apaga(".logo h2");
}, 200);  
setTimeout(function(){
  $("#logo_outline").fadeOut(200, "linear", "complete");
}, 400); 
  };



// Apagado secuenciado de cualquier elemento

/*
$(this).find('article.loading').each( function(k, v) {
    var el = this;
        setTimeout(function () {
        $(el).replaceWith($('#dumpster article:first'));
    }, k*speed);
});


$( "a" ).click(
  function() {
    apaga(".proyecto",$(this));
  }, function() {
    enciende(".proyecto");
  },

);
*/

// Apagado del proyecto. Para que funcione bien. Tiene que ir cargado en una capa superior.

/*
$( ".close" ).hover(
  function() {
setTimeout(function(){
  apaga(".cabecera-proyecto");
}, 400);
setTimeout(function(){
  apaga(".info-proyecto");
  apaga("h1");
}, 200);  

  }, function(){
setTimeout(function(){

}, 100);
setTimeout(function(){
  enciende(".cabecera-proyecto");
}, 400);
setTimeout(function(){
  enciende(".info-proyecto");
  enciende("h1");
}, 200);  

    
  }
);
*/


// =========================
// =========================
// Filtro de proyectos
// =========================
// =========================

$(document).ready(function() {

$( ".filtro-proyectos li" ).click(
  function () { 
    console.log($( this ).attr("class") + "<<-- Mostrando");
  if ( $( this ).hasClass("active") ){
    $(" .filtro-proyectos li").not(" .filtro-proyectos li." + $( this ).attr("class")).removeClass("active");
    $(" .grid-proyecto .proyecto div").stop().animate({ "opacity": luz_on },400).removeClass("off");
  } else {
    // A todos los filtros menos el selecionado se le elimina el activo
  $(" .filtro-proyectos li").not(" .filtro-proyectos li." + $( this ).attr("class")).removeClass("active");
  // Se le añade el activo al seleccionado
  $(" .filtro-proyectos li." + $( this ).attr("class")).addClass("active");
  //A los proyectos que tienen el 
  console.log(" .grid-proyecto .proyecto div." + $( this ).attr("class").split(' ')[0])
  $(" .grid-proyecto .proyecto div").stop().animate({ "opacity": luz_on },400).removeClass("off");
  //Se añade la clase off a todos los proyectos que no son la clase seleccionada
  $(" .grid-proyecto .proyecto div").not(" .grid-proyecto .proyecto div." + $( this ).attr("class").split(' ')[0]).stop().animate({ "opacity": luz_off },400).addClass("off");
  }
  }
);


});





// =========================
// =========================
// Iluminación logo
// =========================
// =========================

$( "#logo_outline" ).hover(
  function() {
    
    $("#OMEN").stop();
    $("#OMEN").css({fill: "white", transition: "1.0s"});
    $("#logo_outline").css({'transform': 'scale(.95)'});
    //$("#OMEN").css({'stroke-width': '0', transition: "0.5s"});
    $("#playreel").css({fill: "black", transition: "1.0s"});
  }, function() {
      $("#OMEN").css({fill: "transparent", transition: "1.0s"});
      $("#playreel").css({fill: "transparent", transition: "1.0s"});
      $("#logo_outline").css({'transform': 'scale(.9)'});
      //$("#OMEN").css({'stroke-width': '9', transition: "0.5s"});
  },

);




// =========================
// =========================
// Fade off en el scroll
// =========================
// =========================


    var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=altoventana // 200px scroll or more will equiv to 0 opacity
    ,fadingproyectos = $('.cabecera-proyecto'),
    fadinghome = $('.cabecera');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0;
    if( offset<=fadeStart ){
        opacity=1;

    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;

    }
    fadingproyectos.css('opacity',opacity);
    fadinghome.css('opacity',opacity);

});


// =========================
// =========================
// Lazy Load
// =========================
// =========================


$(document).ready(function() {

    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });

  });



// =========================
// =========================
// Sticky navbar filtro proyectos
// =========================
// =========================



$(document).ready(function() {

  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };
  
  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });
    
    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});








$(document).ready(function() {
  $('.person').cluetip({
    splitTitle: '|', 
    showTitle: false,
  cluetipClass: 'jtip',
  topOffset: -100, 
  leftOffset: -100,
  cursor: 'default'
  });

  $('.hola').cluetip({
    splitTitle: '|', 
    showTitle: false,
  cluetipClass: 'jtip',
  topOffset: -60, 
  leftOffset: -100,
  cursor: 'default'
  });


});









/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function($) {
  $.fn.rwdImageMaps = function() {
    var $img = this;

    var rwdImageMap = function() {
      $img.each(function() {
        if (typeof($(this).attr('usemap')) == 'undefined')
          return;

        var that = this,
          $that = $(that);

        // Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
        $('<img />').on('load', function() {
          var attrW = 'width',
            attrH = 'height',
            w = $that.attr(attrW),
            h = $that.attr(attrH);

          if (!w || !h) {
            var temp = new Image();
            temp.src = $that.attr('src');
            if (!w)
              w = temp.width;
            if (!h)
              h = temp.height;
          }

          var wPercent = $that.width()/100,
            hPercent = $that.height()/100,
            map = $that.attr('usemap').replace('#', ''),
            c = 'coords';

          $('map[name="' + map + '"]').find('area').each(function() {
            var $this = $(this);
            if (!$this.data(c))
              $this.data(c, $this.attr(c));

            var coords = $this.data(c).split(','),
              coordsPercent = new Array(coords.length);

            for (var i = 0; i < coordsPercent.length; ++i) {
              if (i % 2 === 0)
                coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
              else
                coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
            }
            $this.attr(c, coordsPercent.toString());
          });
        }).attr('src', $that.attr('src'));
      });
    };
    $(window).resize(rwdImageMap).trigger('resize');

    return this;
  };
})(jQuery);






$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});






