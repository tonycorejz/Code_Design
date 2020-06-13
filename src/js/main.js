import $ from '../local_modules/jquery/dist/jquery.min'

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  $("body").toggleClass("locked"); 
});

var titleArray= [
  'Профессиональный барбершоп в Новосибирске',
  'Профессиональный барбершоп в',
  'Профессиональный барбершоп'
]

var textArray= [
  'Landing page',
  'Landing',
  'page'
]

$(document).ready(function() {
	$(document).on('scroll', function() {
    scrollImg();
  });
  //$(window).on('load resize', function () { })

    
});

function anim_back(inp) {
  $('.back_'+inp).animate({backgroundPositionY: "-1000px"}, 5000, (function(){$('.back_'+inp).css({"background-position-y": "0px"});}));
}

var old_inp;
var img = new Image;
function change_back(inp) {
  
  if(old_inp == undefined){
    old_inp = inp;
    if(inp != 1){
      for(let i = inp-1; i>=1; i--){
        $('.back_'+i).css({"background-position-x": -$('.back_'+old_inp).width()});
      }
    }
  } 
  

  if($('.back_'+inp).css("background-position-y") == "0px"){
    img.src = $('.back_'+inp).css('background-image').replace('url', '').replace('(', '').replace(')', '').replace('"', '').replace('"', '');
    $('.back_'+inp).animate({backgroundPositionY: -(($('.back_'+inp).width()*img.height) / img.width)+$('.back_'+inp).height()}, 5000, (function(){$('.back_'+inp).css({"background-position-y": "0px"});}));
  }
  if(old_inp < inp){

    $('.back_'+old_inp).stop();
    $('.back_'+old_inp).css({"background-position-y": "0px"});
    $('.back_'+inp).css({"background-position-y": "0px"});
    $('.back_'+old_inp).animate({backgroundPositionX: -$('.back_'+old_inp).width()}, { duration: 300, queue: false });
  }else if(old_inp > inp){
    
    $('.back_'+old_inp).stop();
    $('.back_'+inp).css({"background-position-y": "0px"});
    $('.back_'+old_inp).css({"background-position": "0px 0px"});
    $('.back_'+inp).animate({backgroundPositionX: 0}, { duration: 300, queue: false });

  }
  old_inp = inp;

}

function scrollImg() {
  $('.section_02').each(function() {
  
    var self = $(this),
    height = self.offset().top;
    let url;

    if ($(document).scrollTop() >= height && $(document).scrollTop() < height + self.height() - self.find('.sec_2_main').height()) {

      self.find('.sec_2_main').addClass('fixed');

      if($('.info #2').offset().top >  $('.content').offset().top + $('.content').height()){
        change_back(1);
      }
      else if($('.info #3').offset().top >  $('.content').offset().top + $('.content').height()){
        change_back(2);
      }
      else{ //if($('.info #3').offset().top >  $('.content').offset().top + $('.content').height()){
        change_back(3);
      }

      
      //allscrolls = $('.content').offset().top - height;
      //$('.content').css({"background-position": "0, "+ -allscrolls+ "px"});

    }else{

      if($(document).scrollTop() > height + self.height() - self.find('.sec_2_main').height()){
        self.addClass('content_to_bottom');
      }else{
        self.removeClass('content_to_bottom');
      }

      self.find('.sec_2_main').removeClass('fixed');

    }

  });
}