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

  $('.faq-list-item').click(function() {
    var $answer = $(this).children('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('＋');

    } else {
      $answer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');

    }
  });

//学習する言語
  $('.item').hover(function(){
    $(this).find('p').fadeIn();
  },function(){
    $(this).find('p').fadeOut();
  });
});
