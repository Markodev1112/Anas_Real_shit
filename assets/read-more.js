// document.querySelector('.readmore').addEventListener('click', function(event) {
//     event.preventDefault();
//     var description = document.querySelector('#product-description');
//     console.log(description.style.height, "height")
//     if (description.style.height === ''){
//         description.style.height = 'auto';

//         description.classList.add('active');
//         description.classList.remove('non-active');

//         document.querySelector('.readmore').classList.remove('arrow-down');
//         document.querySelector('.readmore').classList.add('arrow-up');
//     } else if (description.style.height === 'auto'){
//         description.style.height = '';

//         description.classList.remove('active');
//         description.classList.add('non-active');

//         document.querySelector('.readmore').classList.remove('arrow-up');
//         document.querySelector('.readmore').classList.add('arrow-down');
//     }
//     else{
//         description.style.height = '200px';
//     }

//     var element = document.querySelector('.readmore'); // Replace 'your-selector' with the appropriate selector
//     element.textContent = element.textContent === 'Show Less' ? 'Show More' : 'Show Less';


// })





$(document).ready(function(){
   // resize the slide-read-more Div
   var box = $(".slide-read-more");
   var minimumHeight = 200; // max height in pixels
   var initialHeight = box.innerHeight();
   // reduce the text if it's longer than 200px
   if (initialHeight > minimumHeight) {
      box.css('height', minimumHeight);
      $(".read-more-button").show();
   }
  
   SliderReadMore();

   function SliderReadMore() {
      $(".slide-read-more-button").on('click', function () {
         // get current height
         var currentHeight = box.innerHeight();

         // get height with auto applied
         var autoHeight = box.css('height', 'auto').innerHeight();

         // reset height and revert to original if current and auto are equal
         var newHeight = (currentHeight | 0) === (autoHeight | 0) ? minimumHeight : autoHeight;

         box.css('height', currentHeight).animate({
            height: (newHeight)
         })
         $('html, body').animate({
            scrollTop: box.offset().top
         });
        $(".slide-read-more-button").toggle();
      });
   }
});


