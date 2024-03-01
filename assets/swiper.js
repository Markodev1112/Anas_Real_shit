var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 0,
  grabCursor: true,
  preventClicks: true,
  freeMode: true,
  freeModeSticky: true,
  slideToClickedSlide: true,
  speed: 1500,
  freeModeMomentumRatio: 0.3,
  freeModeMomentumVelocityRatio: 1,
  // centeredSlidesBounds: true,
  on: {
	snapGridLengthChange:function(){
		if( this.snapGrid.length != this.slidesGrid.length ){
			this.snapGrid = this.slidesGrid.slice(0);
		}
	}
}
});





var swiper = new Swiper(".swiper-header-container", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 10,
  grabCursor: true,
  preventClicks: true,
  slideToClickedSlide: true,
  speed: 1500,
  freeModeMomentumRatio: 0.3,
  freeModeMomentumVelocityRatio: 1,
  loop: true
});

// Featured-collection on mobile

var swiper = new Swiper(".swiper-container-list", {
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 10,
  grabCursor: true,
  preventClicks: true,
  freeMode: true,
  freeModeSticky: true,
  slideToClickedSlide: true,
  speed: 1500,
  freeModeMomentumRatio: 0.3,
  freeModeMomentumVelocityRatio: 1,
  // centeredSlidesBounds: true,
  on: {
	snapGridLengthChange:function(){
		if( this.snapGrid.length != this.slidesGrid.length ){
			this.snapGrid = this.slidesGrid.slice(1);
		}
	}
}
});

// Featured-collection on desktop

var swiper = new Swiper(".swiper-container-list-desktop", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 20,
  grabCursor: true,
  preventClicks: true,
  freeMode: true,
  freeModeSticky: true,
  slideToClickedSlide: true,
  speed: 1500,
  freeModeMomentumRatio: 0.3,
  freeModeMomentumVelocityRatio: 1,
  // centeredSlidesBounds: true,
  on: {
	snapGridLengthChange:function(){
		if( this.snapGrid.length != this.slidesGrid.length ){
			this.snapGrid = this.slidesGrid.slice(3);
		}
	}
}
});

// circle slider
var swiper = new Swiper(".swiper-ss-container", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 10,
  grabCursor: true,
  preventClicks: true,
  freeMode: true,
  freeModeSticky: true,
  slideToClickedSlide: true,
  speed: 1500,
  freeModeMomentumRatio: 0.3,
  freeModeMomentumVelocityRatio: 1,
  // centeredSlidesBounds: true,
//   on: {
// 	snapGridLengthChange:function(){
// 		if( this.snapGrid.length != this.slidesGrid.length ){
// 			this.snapGrid = this.slidesGrid.slice(0);
// 		}
// 	}
// }
});






