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
  var allscrolls = 0, 
      startMockupPosition = $('.mockup').offset().top - $('.section_02').offset().top,
      heightSec2 = $('.mockup .mockup_imgs').height();
      
      $('.section_02').css({"height": heightSec2});
 
	$(document).on('scroll', function() {
    scrollImg();
    //let imgs = $('.mockup_imgs').children();
    //console.log(imgs[0].height);
    
  });

  function scrollText(imgs) {
    //let imgs = $('.mockup_imgs').children();
    //whatImg(imgs);
    let summImg = 0;
    for(let i = 0; i < imgs.length; i++){
      summImg += imgs[i].height;

    }
    $('.info_content_text').height(summImg);
    
  }

  /*function whatImg(imgs) { // Узнает какой проект сейчас показан. Отдает номер объекта
    let summImg = 0, mockupPosition = $('.mockup').offset().top - $('.section_02').offset().top;
    for(let i = 0; i < imgs.length; i++){
      summImg += imgs[i].height;
      if(summImg >= mockupPosition) {
        let imgPosition = mockupPosition - (summImg - imgs[i].height);
        textAnim(imgs[i], imgPosition);
        return 0;
      }
    }
  }

  function textAnim(thisImg, imgPosition) {
    console.log(imgPosition);
    let textPosition = imgPosition / 10;
    $('.info_content .title_2').css({"transform": "translate(0, "+ -textPosition + "px)"});
  }*/

  function whatImg(imgs) { // Узнает какой проект сейчас показан. Отдает номер объекта
    let summImg = 0, mockupPosition = $('.mockup').offset().top - $('.section_02').offset().top;
    for(let i = 0; i < imgs.length; i++){
      summImg += imgs[i].height;
      if(summImg >= mockupPosition) {
        return i + 1;
      }
    }
  }

  function scrollImg(){
    $('.section_02').each(function() {

			var self = $(this),
      height = self.offset().top;
			if ($(document).scrollTop() >= height && $(document).scrollTop() <= height+heightSec2 - 200) {

        let imgs = $('.mockup_imgs').children();
        $('.numb_count').text(whatImg(imgs) + '/' + imgs.length);
        

        self.find('.content').addClass('fixed');
        allscrolls = $('.mockup').offset().top - height - startMockupPosition;
        $('.mockup .mockup_imgs').css({"transform": "translate(0, "+ -allscrolls+ "px)"});
        $('.info_content_text').css({"transform": "translate(0, "+ -allscrolls+ "px)"});

        scrollText(imgs);
        $('.info_content_text').each(function() {
          if($(this).offset().top < $('.content').offset().top && $(this).offset().top > $('.content').offset().top - $('.content').height()){
            $(this).addClass('purple');
          }else{
            $(this).removeClass('purple');
          }
        })

      }else{
        if($(document).scrollTop() > height+heightSec2-200){
          self.addClass('content_to_bottom');
        }else{
          self.removeClass('content_to_bottom');
        }
        self.find('.content').removeClass('fixed');

      }

    });
  }

  //$(window).on('load resize', function () { })

    
});