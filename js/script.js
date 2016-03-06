$(function(){

//もっと詳しく
  $('#read-more').click(function(){
    var $read = $('#more-text');
    if($read.hasClass('open')){
      $read.removeClass('open');
      $read.fadeIn();
      $('#read-more').html('閉じる');
    }else{
      $read.addClass('open');
      $read.fadeOut();
      $('#read-more').html('もっと詳しく');
    }
  });

//学習する言語
  $('.item').hover(function(){
    $(this).find('p').fadeIn();
  },function(){
    $(this).find('p').fadeOut();
  });


//カルーセル
$('.single-item').slick({
  autoplay:true,
  autoplaySpeed:1500,
  dots:true,
  pauseOnHover:true
});

//コラム画像ホバー機能
$('.article').hover(function(){
  $(this).find('img').addClass('zoom-black');
},function(){
  $(this).find('img').removeClass('zoom-black');
});


});



