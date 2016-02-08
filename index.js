jQuery(function() {
 "use strict";
  var items = jQuery('.menu-cesdies-areasdepesquisa-container li ul li');
  var subjects = [
    {
      link: items.eq(0),
      img: '#emblemata'
    }
  ];

  subjects.forEach(function(element){
    var link = element.link;
    var img = jQuery(element.img);

    img.css({
      'transition-property': 'transform',
      'transition-duration': '0s',
      'transition-timing-function': 'linear',
      'transition-delay': '0.3s'
    });

    link.on('mouseover', function(){
      img.css({'transform': 'scale(1.1)'});
    });
    link.on('mouseout', function(){
      img.css({'transform': 'scale(1)'});
    });
  });

});
