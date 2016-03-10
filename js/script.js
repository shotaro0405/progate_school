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

//ヘッダーのスクロールナビ
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

//モーダル
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

});



