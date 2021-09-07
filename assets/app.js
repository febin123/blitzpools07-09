/*start of spining wheel */

window.onload = function() {
  document.getElementById('button').onclick = function() {
    document.getElementById('modalOverlay').style.display = 'none'
  };
};






//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function(){
	
	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		
		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				console.log(aoY);
				
				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	});
	
	
	
});//DOCUMENT READY
	







// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  
  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "Congratulations! You won free Frog Sticker on BLITZPOOLS",
    2: "Congratulations! You won free Snails Sticker on BLITZPOOLS",
    3: "Congratulations! You won free Dolphin Sticker on BLITZPOOLS",
    4: "Congratulations! You won free LadyBug Sticker on BLITZPOOLS",
    5: "Congratulations! You won free Koala Sticker on BLITZPOOLS",
    6: "Congratulations! You won free Unicron Sticker on BLITZPOOLS",
    7: "Congratulations! You won free Dragon Sticker on BLITZPOOLS",
    8: "Congratulations! You won free Snowman Sticker on BLITZPOOLS",
  }

    
  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
  }

  startButton.addEventListener('click', () => {
    // Reset display
    display.innerHTML = "Spinning..";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 2000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 5s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();

/*end of spining wheel */



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const header=document.getElementById('hea');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',close1);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
function close1(){
  mainMenu.style.top = '110%';
  mainMenu.style.display = 'flex';
    // mainMenu.style.top = '0';
}

window.addEventListener("scroll",function(){
    var header=document.querySelectorAll("nav");
    header.classList.bottom("sticky",window.scrollY>0)

})

/*end of pop up */

/* scroll up*/

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 560) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

/*end of scroll up*/




/*Download now */

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
  });






/*end of download now*/
/* typing animation*/





var acordion = document.getElementsByClassName('accordion');

var i;
var len = acordion.length;
for(i = 0; i<len; i++){
    acordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panal = this.nextElementSibling;
        if(panal.style.maxHeight){
            panal.style.maxHeight = null;
        }else{
            panal.style.maxHeight = panal.scrollHeight + 'px';
        }
    })
}








/*review tab*/

function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});


/*start of FAQs*/ 

const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
  faq.addEventListener("click",()=>{

  faq.classList.toggle("active");
})
})

/*end of FAQs*/


/*contact*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});








/*start of marquee */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
/*end of marquee */