$(function() {

 // ハンバーガー
 $('.c-hamburger').click(function(){
   $(this).toggleClass('active')
   $('.p-header-nav').toggleClass('active')
 })

 $('.header__nav ul li a').click(function(){
   $('.c-hamburger').removeClass('active')
   $('.p-header-nav').removeClass('active')
 })


 // FVのスライダー
$('.js-slider').slick({ 
 autoplay: false, 
 arrows: true,
 slidesToShow: 3, // 3枚ずつ表示
 slidesToScroll: 1, // 1枚ずつスクロール
 prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',  
 nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
 responsive: [
   {
     breakpoint: 767, // スマホサイズ
     settings: {      
      slidesToShow: 1, // 1枚表示
      slidesToScroll: 1,     
      // autoplay,arrows,prevArrow,nextArrowはpc版と重複しているので省略可。
     }
   }
 ]
});


// アコーディオンメニュー
$('.p-qa-list__q').on('click', function(){
 $(this).toggleClass('active');
 $(this).next().slideToggle();
});


// トップに戻るボタンの表示・非表示の切り替え
// ページトップから、200pxスクロールしたら、トップに
// 戻るボタンが表示され、200px以下だと非表示に戻る設定

$(window).on('scroll', function() {
 if ($(this).scrollTop() > 200) {
     $('.c-top-back-btn, .c-btn').addClass('active');
 } else {
     $('.c-top-back-btn, .c-btn').removeClass('active');
 }
});

})

