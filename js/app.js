$(document).ready(function() {


   function gameStep(){
      plates = $('.active');

      plates.on('click',function(){
         flip($(this));
         var fli = $('.flipped');
         console.log(fli);

         if( fli.length == 2 ) {
            plates.off();

            if( compareColor(fli[0],fli[1]) ) {
               //  okey sound

               fli.each(function(i,element){
                  $(element).removeClass('active').removeClass('flipped');
               });

               gameStep();
            }else {
               var checkTime = setTimeout(function(){
                  fli.each(function(i,e){
                     flipBack($(e));
                  });

                  gameStep();
               }, 1500);

            }
         }
      });
   }

   // in new game , add Class 'active' to each plate

   function activatePlates(){
      plates.each(function(i,element){
         $(element).addClass('active');
      })
   }

   function compareColor(p1, p2){
      console.log("i'm checking", $(p1).data('color'), $(p2).data('color'));
      if ( $(p1).data('color') == $(p2).data('color') ){
         return true;
      }else{
         return false;
      }
   }



   // Whole Game Scenario:

   function startGame(){
      var plates = $('.plate');
      activatePlates();
      randomPlateColor();
      randomArrows('medium');

      gameStep();
   }

   startGame();









   // TEST BUTTONS:
   $('#flipUp').click(function(){
      boardFlip();
   });
   $('#flipDown').click(function(){
      boardFlipBack();
   });
   $('#rotateClockwise').click(function(){
      boardRotateClock();
   });
   $('#rotateCounterClockwise').click(function(){
      boardRotateCounterClock();
   });
   
   $('#upRight3D').click(function(){
      boardFlipUpRight3D();
   });
   $('#upLeft3D').click(function(){
      boardFlipUpLeft3D();
   });
});
