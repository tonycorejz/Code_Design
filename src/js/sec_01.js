import anime from '../local_modules/animejs/lib/anime.min.js'
import $ from '../local_modules/jquery/dist/jquery.min'

let action_position = 0;
$(".big_font").click(function() {

  if(action_position == 0){

    $(".code span").text("-");
    $(".design span").text("+");

    anime({
      targets: 'path',
      d: [
        { value: 'M 0 800 V 0 200 C 250 200, 400 200, 480 200 S 800 200, 1000 200  V 1100 800 z' },
        { value: 'M 0 800 V 0 0 C 300 20, 350 10, 450 150 S 800 200, 1000 300  V 900 800 z' }
      ],
      easing: 'linear',
      duration: 200,
      loop: false
    });
    anime({
      targets: '.code',
      translateY: function(){
        if($(window).width() > 1168) return 100
        else return 60
      },
      color: '#fff'
    });
    anime({
      targets: '.design',
      translateY: function(){
        if($(window).width() > 1168) return -100
        else return -60
      },
      color: '#5052d0'
    });
    anime({
      targets: '.wht_u_nd hr',
      translateX: 320
    });

    action_position = 1;

  }else{
    
    $(".code span").text("+");
    $(".design span").text("-");

    anime({
      targets: '.action',
      d: [
        { value: 'M 0 800 V 0 200 C 250 200, 400 200, 480 200 S 800 200, 1000 200  V 1100 800 z' },
        { value: 'M 0 800 V 0 300 C 250 200, 400 300, 480 140 S 800 60, 1000 0  V 1100 800 z' }
      ],
      easing: 'linear',
      duration: 200,
      loop: false
    });
    anime({
      targets: '.code',
      translateY: 0,
      color: '#5052d0'
    });
    anime({
      targets: '.design',
      translateY: 0,
      color: '#fff'
    });
    anime({
      targets: '.wht_u_nd hr',
      translateX: 0
    });

    action_position = 0;

  }
  
});