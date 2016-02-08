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

    link.on('mouseover', function(){
      img.css({'transform': 'scale(1.1)'});
    });
    link.on('mouseout', function(){
      img.css({'transform': 'scale(1)'});
    });
  });

});
