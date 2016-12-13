$(document).ready(function() {

   var plates = $('.plate');

   var randomPlates = function(){
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

randomPlates();

   $('.plate').click(function(){
      if($(this).hasClass('flipped')){
         $(this).transition({
            perpective: '0',
            rotateX: '0'
         }).removeClass('flipped').css('background', 'white');
      }else{

         $(this).transition({
            perspective: '100px',
            rotateX: '180deg'
         }).addClass('flipped').css('background',$(this).data('color'));
      }
   });

});


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
