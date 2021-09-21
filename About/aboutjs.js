var slideIndex = 1;
Slides(slideIndex);//using an array to store current input

function plusSlides(n) {
  Slides(slideIndex += n);
}

function currentSlide(n) {
  Slides(slideIndex = n);
}

function Slides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
 
}
//the loop loops through the code checking if the next button was pressed and next slide in array appeared
var slideIndex2 = 1;
Slides2(slideIndex2);

function plusSlides2(n) {
  Slides2(slideIndex2 += n);
}

function currentSlide2(n) {
  Slides2(slideIndex2 = n);
}

function Slides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  slides2[slideIndex2-1].style.display = "block";  
 
}
var slideIndex3 = 1;
Slides3(slideIndex3);

function plusSlides3(n) {
  Slides3(slideIndex3 += n);
}

function currentSlide3(n) {
  Slides3(slideIndex3 = n);
}

function Slides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
  slides3[slideIndex3-1].style.display = "block";  
 
}//repeating the slide code twice for two slideshows