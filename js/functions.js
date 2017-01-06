//variables:
var plates = $('.plate');
// var activePlates=$('.active');

var gameBoard = $('.game_board');


// Array Shuffle method:
Array.prototype.shuffle = function(){
   var j, x, i;
   for (i = this.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = this[i - 1];
      this[i - 1] = this[j];
      this[j] = x;
   }
   return this;
}

/* Random Colors and assign to plates: */

function randomPlateColor(){
   var generated = palette('cb-Dark2',6).concat(palette('cb-Pastel2',6));
   var generated2 = palette('cb-Paired',11).concat(palette('cb-dark',4));
   // var generatedColors = randomColor({hue: });
   // 'cb-Pastel2'8, 'cb-Dark2' 8, tol-sq' 10, 'cb-Paired',11

   var colors = generated.concat(generated);
   colors.shuffle();
   console.log(colors);
   plates.each(function(i,plate){
      $(plate).data('color','#'+colors[0]);
      console.log($(plate).data('color'));
      colors.splice(0,1);
   });
   return colors;
}

/* Random Arrows and asign to Plates */

function randomArrows(level) {
   var a = 'images/';
   var arrowSrc = [a+'clockwise.png',a+'counterclock.png',a+ 'up.png', a+'down.png'];
   // ,a+'left.png', a+'right.png',a+'upLeft3D.png', a+'upRight3D.png'];

   var urls = arrowSrc.slice(0);
   urls.shuffle();

   switch (level = 'hard') {
      case 'hard':
      $(plates).each(function(i,element){
         if (urls.length>0) {
            $(element).data('arrow',urls[0]);
            urls.splice(0,1);
         } else {
            urls=arrowSrc.slice(0);
            urls.shuffle();

            $(element).data('arrow',urls[0]);
            urls.splice(0,1);
         }
         console.log($(element).data('arrow'));
      });
      break;
      case 'medium':
      var tmpPlates = plates.slice(0);
      Array.from(tmpPlates).shuffle();

      for (var i=0; i<12; i++) {
         if (urls.length>0) {
            $(tmpPlates[i]).data('arrow',urls[0]);
            urls.splice(0,1);
         } else {
            urls=arrowSrc.slice(0);
            urls.shuffle();
            $(tmpPlates[i]).data('arrow',urls[0]);
            urls.splice(0,1);
         }
      }
      break;
      default: return;
   };


}


/* Plates Flipping: */
function platesRotate(deg) {
   var plates = $('.plate');
   plates.each(function(index,element){
      $(element).transition({
         perspective: '100px',
         rotate: deg,
         duration: 1000
      })
   })
}
function flip(plate){
   plate.transition({
      perspective: '100px',
      rotateX: '180deg'
   }).addClass('flipped').css({

      'background': 'url('+ plate.data("arrow") + ') center / 80% no-repeat ' + plate.data('color'),
   });

   if($(plate).data('arrow')){
      switch (plate.data('arrow')) {
         case 'images/up.png':
         boardFlip();
         flipCounter++;
         break;
         case 'images/down.png':
         boardFlipBack();
         flipCounter++;
         break;
         case 'images/clockwise.png':
         if(flipCounter%2 == 0) {
            boardRotateCounterClock();
         }else {
            boardRotateClock();
         }
         break;
         case 'images/counterclock.png':
         if(flipCounter%2 == 0) {
            boardRotateClock();
         }else {
            boardRotateCounterClock();
         }
         break;
         default: return;

      }
   }
}

function flipBack(plate){
   plate.transition({
      perpective: '100px',
      rotateX: '0',
   }).removeClass('flipped').css('background', 'white');
}

/*GameBoard Flipping and Rotating*/

var flipCounter = 0;
function boardFlip() {
   gameBoard.transition({
      perspective: '500px',
      rotateX: '+=180deg',
      duration: 2000,
   });
}

function boardFlipBack() {
   gameBoard.transition({
      perspective: '500px',
      rotateX: '-=180deg',
      duration: 2000,
   });
}

function boardRotateClock(){
   gameBoard.transition({
      perspective: '500px',
      rotate: '+=90deg',
      duration: 2000,
   });
   platesRotate('-=90deg');
}
function boardRotateCounterClock(){
   gameBoard.transition({
      perspective: '500px',
      rotate: '-=90deg',
      duration: 2000,
   });
   platesRotate('+=90deg');
}

// IMPORTANT!
var rotate3D_counter=0;
function boardFlipUpRight3D() {
   rotate3D_counter+=180;
   gameBoard.transition({
      perspective: '500px',
      rotate3d: '1,1,0,'+rotate3D_counter +'deg'
   });
};
function boardFlipDownLeft3D() {
   rotate3D_counter-=180;
   gameBoard.transition({
      perspective: '500px',
      rotate3d: '1,1,0,'+rotate3D_counter +'deg'
   });
};
