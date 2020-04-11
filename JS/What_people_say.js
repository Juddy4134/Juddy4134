$(document).ready(function () {
   $(".people-say-slider-next").click(function () {
       const currentQuote = $(".current-people-say.active");
       const currentQuoteIndex = $(".current-people-say.active").index();
       const nextQuoteIndex = currentQuoteIndex + 1;
       const nextQuote = $(".current-people-say").eq(nextQuoteIndex);
       const currentPhoto = $(".current-people-photo.slider.active");
       const currentPhotoIndex = $(".current-people-photo.slider.active").index();
       const nextPhotoIndex = currentPhotoIndex + 1;
       const nextPhoto = $(".current-people-photo.slider").eq(nextPhotoIndex);

       currentPhoto.removeClass("active");
       currentQuote.fadeOut(600);
       currentQuote.removeClass("active");

       if (nextQuoteIndex === ($(".current-people-say:last").index()+1)){
           $(".current-people-say").eq(0).fadeIn(600);
           $(".current-people-say").eq(0).addClass("active");
           $(".current-people-photo.slider").eq(0).addClass("active");
       } else {
           nextQuote.fadeIn(600);
           nextPhoto.fadeIn(600);
           nextQuote.addClass("active");
           nextPhoto.addClass("active")
       }
   });
   $(".people-say-slider-prev").click(function () {
       const currentQuote = $(".current-people-say.active");
       const currentQuoteIndex = $(".current-people-say.active").index();
       const prevQuoteIndex = currentQuoteIndex - 1;
       const prevQuote = $(".current-people-say").eq(prevQuoteIndex);
       const currentPhoto = $(".current-people-photo.slider.active");
       const currentPhotoIndex = $(".current-people-photo.slider.active").index();
       const prevPhotoIndex = currentPhotoIndex - 1;
       const prevPhoto = $(".current-people-photo.slider").eq(prevPhotoIndex);

       currentPhoto.removeClass("active");
       currentQuote.fadeOut(600);
       currentQuote.removeClass("active");

       if (prevQuoteIndex === ($(".current-people-say:last").index()+1)){
           $(".current-people-say").eq(0).fadeIn(600);
           $(".current-people-say").eq(0).addClass("active");
           $(".current-people-say.slider").eq(0).addClass("active");
       } else {
           prevQuote.fadeIn(600);
           prevPhoto.fadeIn(600);
           prevQuote.addClass("active");
           prevPhoto.addClass("active")
       }
   });

   $(".current-people-photo.slider").click(function () {
       if (!(this.classList.contains("active"))){
           $(".current-people-photo.slider").removeClass("active");
           this.classList.add("active");
           const currentSlider = $(".current-people-photo.slider.active");
           const currentSliderIndex =  currentSlider.index();
           const quote = $(".current-people-say");
           const currentQuote = quote.eq(currentSliderIndex);
           const activeQuote = $(".current-people-say.active");
           console.log(currentSlider);
           activeQuote.fadeOut(600);
           currentQuote.fadeIn(600);
           activeQuote.removeClass("active");
           currentQuote.addClass("active");
           currentSlider.addClass("active");
       }
   });
});
