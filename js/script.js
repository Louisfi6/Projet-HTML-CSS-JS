$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.dropdown-trigger').dropdown();
  $('.carousel').carousel({
    indicators: true,
  });
  var angle=45;
});

// -----------caroussel--------//
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 3000);
}
setTimeout(autoplay, 3000);


// -----------popup--------//
document.querySelector("#show-login").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function() {
  document.querySelector(".popup").classList.remove("active");
});

//-------egg1---------//
const containerSlot = document.querySelector(".slot");
const btnConfettis = document.querySelector(".btn-confettis");
const emojis = ["📱", "🎮", "🎧", "💎"];

btnConfettis.addEventListener("click", fiesta);

function fiesta() {

  if (isTweening()) return;

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    containerSlot.appendChild(confetti);
  }
  animateConfettis();
}

function animateConfettis() {

  const TLCONF = gsap.timeline();

  TLCONF.to(".slot div", {
    y: "random(-100,100)",
    x: "random(-100,100)",
    z: "random(0,1000)",
    rotation: "random(-90,90)",
    duration: 1,
  })
    .to(".slot div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
    .add(() => {
      containerSlot.innerHTML = "";
    });
}

function isTweening() {
  return gsap.isTweening('.slot div');
}

// --------egg2 ---------//

function easter2() {
  if ([event.keyCode === 13][$('#email').val().indexOf('meme')]) {
    console.log("Hello world!");
    $("body.white").css('background-image', "url('img/meme.jpeg')");
    $("#img1").attr('src', 'img/meme.jpeg')
    $("#img2").attr('src', 'img/meme.jpeg')
  }
};

// --------egg3 ---------//

$('.brand-logo').mouseover(function() {
  $('body').animate(
    { deg: 360 },
    {
      duration: 1500,
      step: function(now) {
        $('body').css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
});
