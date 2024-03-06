// Check if the user is on a mobile device
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    var lastScrollTop = 0;
    window.addEventListener("scroll", function(){
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        this.document.querySelectorAll('.custom-mobile-setting').forEach(item => {
            if (currentScroll > lastScrollTop){    
                    // Scroll down
                    item.style.display="none";
                    this.document.querySelector('.custom-header').classList.remove('show');
                    this.document.querySelector('.custom-header').classList.add('hidden');
            } else {
                // Scroll up            
                    item.style.display="none";
                    this.document.querySelector('.custom-header').classList.remove('show');
                    this.document.querySelector('.custom-header').classList.add('hidden');    
                    if (currentScroll == 0) {
                        item.style.display="block";
                        this.document.querySelector('.custom-header').classList.add('show');
                        this.document.querySelector('.custom-header').classList.remove('hidden');
                    }    
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        })
    }, false);
    console.log("User is on a mobile device.");
} else {
    console.log("User is not on a mobile device.");
}

