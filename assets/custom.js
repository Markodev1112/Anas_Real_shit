

// Check if the user is on a mobile device
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
       console.log("down");
   } else {
       // Scroll up
       console.log(currentScroll, "up");
       
       this.document.querySelector('.scroll-display').style.display = "none";

        if (currentScroll == 0) {
        this.document.querySelector('.scroll-display').style.display = "block";
        console.log("0");
        }

   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
    console.log("User is on a mobile device.");
} else {
    console.log("User is not on a mobile device.");
}
