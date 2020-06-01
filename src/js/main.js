import $ from '../local_modules/jquery/dist/jquery.min'
import anime from '../local_modules/animejs/lib/anime.min.js'

$("svg").click(function() { 
  anime({
    targets: 'path',
    d: [
      { value: 'M 0 800 V 0 200 C 250 200, 400 200, 480 200 S 800 200, 1000 200  V 1100 800 z' },
      { value: 'M 0 800 V 0 0 C 300 20, 350 10, 450 150 S 800 200, 1000 300  V 900 800 z' }
    ],
    easing: 'linear',
    duration: 500,
    loop: false
  });
});


$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});