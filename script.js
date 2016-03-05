$(function(){

//もっと詳しく
  $('#read-more').click(function(){
    $('#more-text').fadeIn();
    $('#read-more').html('閉じる');
    //},function(){
    //$('#more-text').css('display','none');
  });

//学習する言語
  $('.languages-box').hover(function(){
    $(this).find('p').fadeIn();
  },function(){
    $(this).find('p').fadeOut();
  });
});
