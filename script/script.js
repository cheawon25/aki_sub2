$(function(){
  $(".mainmenu").hover(function(){
    $("#sub").stop().slideDown();
  },
  function(){
    $("#sub").stop().slideUp();
  });
});

$(function(){
  $(".MENUBOX li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  })
});