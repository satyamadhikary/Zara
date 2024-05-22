// TIMER

// Set the date we're counting down to
let countDownDate = new Date("Jan 22, 2024 24:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days +":" + hours + ":"
  + minutes + ":" + seconds + "";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Sale Ended";
  }
}, 1000);


// ANIMATION
const the_animation = document.querySelectorAll('.animation-up,.anime-right,.anime-right-delay,.anime-left,.animation-down,.play,.animation-down-delay')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add('scroll-animation')
        }
        else {

            entry.target.classList.remove('scroll-animation')
        }
        
    })
},
   { threshold: 0.2
   })

  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  }


  // LOGO Animation
let timeline = gsap.timeline()

timeline.from(".z1", {
	x:-250,
	opacity:0,
	duration:1.5,
},
"0.1"
)
.from(".a2", {   		
	y:350,
	opacity:0,
	duration:1.8,
},
"0.1"
)
.from(".r3", {   		
	y:-350,
	opacity:0,
	duration:2.2,
},
"0.1"
)
.from(".a4", {   		
	x:350,
	opacity:0,
	duration:2.6,
},
"0.1"
);

  // FOR MOMENTUM SCROLLING EFFECT

const body = document.body;
const main = document.getElementById('main');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;


body.style.height = main.clientHeight + 'px';


main.style.position = 'absolute';
main.style.top = 0;
main.style.left = 0;

// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  
  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}



// AUTOPLAY AND PAUSING OF VIDEO

// window.addEventListener('load', videoScroll);
// window.addEventListener('scroll', videoScroll);

// function videoScroll() {

//   if ( document.querySelectorAll('video[autoplay]').length > 0) {
//     var windowHeight = window.innerHeight,
//         videoEl = document.querySelectorAll('video[autoplay]');

//     for (var i = 0; i < videoEl.length; i++) {
//         var thisVideoEl = videoEl[i],
//             videoHeight = thisVideoEl.clientHeight,
//             videoClientRect = thisVideoEl.getBoundingClientRect().top;

//         videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ? thisVideoEl.play() : thisVideoEl.pause();
//     }
//   }
// }


window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

function checkScreenSize() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    // Execute the videoScroll function only for screens wider than 768px
    window.addEventListener('scroll', videoScroll);
  } else {
    // Remove the event listener if the screen width is less than or equal to 768px
    window.removeEventListener('scroll', videoScroll);
  }
}

function videoScroll() {
  if (document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (videoClientRect <= ((windowHeight) - (videoHeight * 0.5)) && videoClientRect >= (0 - (videoHeight * 0.5))) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}
