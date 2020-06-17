import $ from '../local_modules/jquery/dist/jquery.min'

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  $("body").toggleClass("locked"); 
});