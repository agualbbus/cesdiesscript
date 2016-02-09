jQuery(function() {
 "use strict";

 jQuery(window).load(function(){
   var items = jQuery('.menu-cesdies-areasdepesquisa-container li ul li a');
   var subjects = [
     {
       img: '#emblemata'
     },
     {
       img: '#mitica-brasil-portugal'
     },

     {
       img: '#iconografia-e-simbolica-na-arte-portuguesa'
     },
     {
       img: '#imperios-do-divino-espirito-santo'
     },
     {
       img: '#monumento-de-mafra'
     },
     {
       img: '#hermetica'
     },
     {
       img: '#quinto_imperio'
     },
     {
       img: '#rotas-do-sagrado'
     },
     {
       img: '#ordem-templaria-de-portugal'
     },
   ];

   subjects.forEach(function(element, index){
     var link = items.eq(index);
     var img = jQuery(element.img);
     var imgCont = img.parent();

     img.css({
       'transition-property': 'transform',
       'transition-duration': '0.3s',
       'transition-timing-function': 'linear',
       'transition-delay': '0'
     });

     var pulseProps = {
       height: 30,
       width: 30,
       opacity: 0.7,
       duration: 400
     };

     var pulseCont = jQuery('<div/>')
       .css({
         'position': 'absolute',
         'width': '100%',
         'height': '100%',
         'z-index': '999999',
         'top': imgCont.height() / 2 - (pulseProps.height / 2),
         'left': 0
       });

     var pulse = jQuery('<div/>')
       .css({
         'position': 'relative',
         'margin': '0 auto',
         'width': pulseProps.height,
         'height': pulseProps.height,
         'border-radius': 100,
         'border': '3px solid #78C8Ce',
         'opacity': 0,
         'transform':'scale(1)',
         'transition-property': 'all',
         'transition-duration': pulseProps.duration / 1000 + 's',
         'transition-timing-function': 'linear',
         'transition-delay': '0'
       });


     imgCont.append(pulseCont);
     var runningAnimation = false;
     var pulseInstance = null;
     var killTimeout;

     function handleAnimation(repeater) {
       var count = 0;
       repeater = repeater || 1;

       var start = function() {
         pulseInstance = pulse.clone();
         pulseCont.append(pulseInstance);

         setTimeout(function(){
           pulseInstance.css({
             'transition-property': 'all',
             'transform': 'scale(2.5)',
             'opacity':  pulseProps.opacity
           });
         },100);

         killTimeout = setTimeout(function() {
           pulseInstance.remove();
           count = count + 1;
           if(count !== repeater){
             start();
           }

         },  pulseProps.duration + 100);
       };

       if(!runningAnimation){
         start();
         runningAnimation = true;
       }

     }


     link.on('mouseover', function(){
       img.css({'transform': 'scale(1.1)'});
       clearTimeout(killTimeout);
       setTimeout(function(){ handleAnimation(2);}, 10);
     });

     link.on('mouseout', function(){
       clearTimeout(killTimeout);
       pulseInstance.remove();
       runningAnimation = false;
       img.css({'transform': 'scale(1)'});
     });


   });

 });
});
