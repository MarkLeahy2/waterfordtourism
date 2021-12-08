
<!--Slideshow-->

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const showHide1 = () => {
  let readMoreDiv = document.querySelector("#more1");
  if (readMoreDiv.style.display === "block") {
	  readMoreDiv.style.transform = 'scale(0)'
	   setTimeout(function() {
            readMoreDiv.style.display = 'none';
        }, 300);
     readMoreDiv.style.display = 'none'
     btn1.textContent = "Read More"
    } else {
        readMoreDiv.style.display = "block";
		setTimeout(function() {
            readMoreDiv.style.transform = 'scale(1)';
        }, 300);
		btn1.textContent = "Read Less..."
    }
	}
		




 const showHide2 = () => {
  let readMoreDiv = document.querySelector("#more2");
  if (readMoreDiv.style.display === "block") {
	  readMoreDiv.style.transform = 'scale(0)'
	   setTimeout(function() {
            readMoreDiv.style.display = 'none';
        }, 300);
     readMoreDiv.style.display = 'none'
     btn2.textContent = "Read More"
    } else {
        readMoreDiv.style.display = "block";
		setTimeout(function() {
            readMoreDiv.style.transform = 'scale(1)';
        }, 300);
		btn2.textContent = "Read Less..."
    }
	}
	
	const showHide3 = () => {
  let readMoreDiv = document.querySelector("#more3");
  if (readMoreDiv.style.display === "block") {
	  readMoreDiv.style.transform = 'scale(0)'
	   setTimeout(function() {
            readMoreDiv.style.display = 'none';
        }, 300);
     readMoreDiv.style.display = 'none'
     btn3.textContent = "Read More"
    } else {
        readMoreDiv.style.display = "block";
		setTimeout(function() {
            readMoreDiv.style.transform = 'scale(1)';
        }, 300);
		btn3.textContent = "Read Less..."
    }
	}
	
	const showHide4 = () => {
  let readMoreDiv = document.querySelector("#more4");
  if (readMoreDiv.style.display === "block") {
	  readMoreDiv.style.transform = 'scale(0)'
	   setTimeout(function() {
            readMoreDiv.style.display = 'none';
        }, 300);
     readMoreDiv.style.display = 'none'
     btn4.textContent = "Read More"
    } else {
        readMoreDiv.style.display = "block";
		setTimeout(function() {
            readMoreDiv.style.transform = 'scale(1)';
        }, 300);
		btn4.textContent = "Read Less..."
    }
	}
	
	
	
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', showHide1);	


let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', showHide2);

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', showHide3);

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', showHide4);
