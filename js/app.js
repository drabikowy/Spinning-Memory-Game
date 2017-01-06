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
      });
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
      randomArrows('hard');

      gameStep();
   }

   startGame();


function Game() {
   this.score = 0;
   this.time = 0;

}





   gameBoard.transition({
      perspective: '500px',
      rotateX: '0deg'
   });
   // TEST BUTTONS:
   $('#flipUp').click(function(){
      boardFlip();
      flipCounter++;
   });
   $('#flipDown').click(function(){
      boardFlipBack();
      flipCounter++;
   });
   $('#rotateClockwise').click(function(){
      if(flipCounter%2 == 0) {
         boardRotateClock();
      }else {
         boardRotateCounterClock();
      }
   });
   $('#rotateCounterClockwise').click(function(){
      if(flipCounter%2 == 0) {
         boardRotateCounterClock();
      }else {
         boardRotateClock();
      }
   });

   $('#upRight3D').click(function(){
      boardFlipUpRight3D();
   });
   $('#downLeft3D').click(function(){
      boardFlipDownLeft3D();
   });
});
