document.querySelector('.custom-search__input').addEventListener('keydown', function(){
    console.log("search");
    document.querySelector('.search__button').css('display', 'none')
// document.querySelector('.show_search').addEventListener('mouseleave', function() {
//     // Your code to execute when the mouse leaves the element
//     console.log('Mouse left the element!');
});


var flkty = new Flickity('.carousel', {
  // Set the speed of transitions
  selectedAttraction: 0.01, // Adjust the attraction speed
  friction: 0.15 // Adjust the friction/damping effect
});