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
       breakpoint: 768,
       settings: {      
         slidesToShow: 1, // 1枚表示
         slidesToScroll: 1     
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
 $(window).on('scroll', function() {
   if ($(this).scrollTop() > 200) {
     $('.c-top-back-btn, .c-btn').addClass('active');
   } else {
     $('.c-top-back-btn, .c-btn').removeClass('active');
   }
 });

 // SimpleBarの初期化
 const tableWrap = document.querySelector('.p-plan__table-wrap');
 if (tableWrap) {
   new SimpleBar(tableWrap, {
     autoHide: false,  // スクロールバーを常に表示
   });
 }

 

 $(window).on('scroll', function() {
  var footerOffset = $('footer').offset().top;
  var scrollPosition = $(window).scrollTop() + $(window).height();
  var windowHeight = $(window).height();
  var isPC = $(window).width() > 767;

  // スクロールが200px以上のときに表示する設定
  if ($(this).scrollTop() > 200) {
    $('.c-top-back-btn, .c-contact__fixed').addClass('active'); // ボタン表示
  } else {
    $('.c-top-back-btn, .c-contact__fixed').removeClass('active'); // ボタン非表示
  }


  // footerに到達したときの処理
  if (scrollPosition >= footerOffset) {
    if (isPC) { // PC画面の場合
      var pcDistance91_79 = parseFloat($('html').width()) * (91 / 1080); // 91/1080の距離
      var pcDistance30_18 = parseFloat($('html').width()) * (30 / 1080); // 30/1080の距離

      $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px'); // footer上部0rem

      if ($('.c-top-back-btn').hasClass('c-top-back-btn--91-79')) {
        $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + pcDistance91_79) + 'px'); // 9.1rem
      } else if ($('.c-top-back-btn').hasClass('c-top-back-btn--30-18')) {
        $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + pcDistance30_18) + 'px'); // 3rem
      }
    } else { // SP画面の場合
      var spDistance91_79 = parseFloat($('html').width()) * (79 / 375); // 79/375の距離
      var spDistance30_18 = parseFloat($('html').width()) * (18 / 375); // 18/375の距離

      $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px'); // footer上部0rem

      if ($('.c-top-back-btn').hasClass('c-top-back-btn--91-79')) {
        $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + spDistance91_79) + 'px'); // 7.9rem
      } else if ($('.c-top-back-btn').hasClass('c-top-back-btn--30-18')) {
        $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + spDistance30_18) + 'px'); // 1.8rem
      }
    }
  } else {
    // footerに到達していないときの通常状態
    if (isPC) {
      $('.c-contact__fixed').css('bottom', '0'); // ボタンは画面の下端に固定
      $('.c-top-back-btn--91-79').css('bottom', 'calc(91 / 1080 * 100vw)'); // 通常位置に戻す
      $('.c-top-back-btn--30-18').css('bottom', 'calc(30 / 1080 * 100vw)'); // 通常位置に戻す
    } else {
      $('.c-contact__fixed').css('bottom', '0'); // ボタンは画面の下端に固定
      $('.c-top-back-btn--91-79').css('bottom', 'calc(79 / 375 * 100vw)'); // 通常位置に戻す
      $('.c-top-back-btn--30-18').css('bottom', 'calc(18 / 375 * 100vw)'); // 通常位置に戻す
    }
  }
});



});


// フッターの位置調整
 // $(window).on('scroll', function() {
 //   var footerOffset = $('footer').offset().top;
 //   var scrollPosition = $(window).scrollTop() + $(window).height();
 //   var windowHeight = $(window).height();

 //   $('.c-contact__fixed, .c-top-back-btn').css('transition', 'none');

 //   if (scrollPosition >= footerOffset) {
 //     if ($(window).width() > 767) {
 //       var pcDistance = parseFloat($('html').width()) * (91 / 1080);
 //       $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px');
 //       $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + pcDistance) + 'px');
 //     } else {
 //       var spDistance = parseFloat($('html').width()) * (79 / 375);
 //       $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px');
 //       $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + spDistance) + 'px');
 //     }
 //   } else {
 //     if ($(window).width() > 767) {
 //       $('.c-contact__fixed').css('bottom', '0');
 //       $('.c-top-back-btn').css('bottom', 'calc(91 / 1080 * 100vw)');
 //     } else {
 //       $('.c-contact__fixed').css('bottom', '0');
 //       $('.c-top-back-btn').css('bottom', 'calc(79 / 375 * 100vw)');
 //     }
 //   }
 // });

// $(function() {

//  // ハンバーガー
//  $('.c-hamburger').click(function(){
//    $(this).toggleClass('active')
//    $('.p-header-nav').toggleClass('active')
//  })

//  $('.header__nav ul li a').click(function(){
//    $('.c-hamburger').removeClass('active')
//    $('.p-header-nav').removeClass('active')
//  })


//  // FVのスライダー
// $('.js-slider').slick({ 
//  autoplay: false, 
//  arrows: true,
//  slidesToShow: 3, // 3枚ずつ表示
//  slidesToScroll: 1, // 1枚ずつスクロール
//  prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',  
//  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
//  responsive: [
//    {
//      breakpoint: 768, // ここを767にすると、スタイルの適用は画面幅766px以下からになってしまう。
//      settings: {      
//       slidesToShow: 1, // 1枚表示
//       slidesToScroll: 1,     
//       // autoplay,arrows,prevArrow,nextArrowはpc版と重複しているので省略可。
//      }
//    }
//  ]
// });


// // アコーディオンメニュー
// $('.p-qa-list__q').on('click', function(){
//  $(this).toggleClass('active');
//  $(this).next().slideToggle();
// });

// // トップに戻るボタンの表示・非表示の切り替え
// // ページトップから、200pxスクロールしたら、トップに
// // 戻るボタンが表示され、200px以下だと非表示に戻る設定
// $(window).on('scroll', function() {
//  if ($(this).scrollTop() > 200) {
//      $('.c-top-back-btn, .c-btn').addClass('active');
//  } else {
//      $('.c-top-back-btn, .c-btn').removeClass('active');
//  }
// });

// // スクロールバー（SimpleBar）
// // document.addEventListener('DOMContentLoaded', function() {
// //  // SimpleBarの初期化コード

//  const tableWrap = document.querySelector('.p-plan__table-wrap');
//  // SimpleBarを手動で適用
//  new SimpleBar(tableWrap, {
//    autoHide: false,  // スクロールバーを常に表示
//  });

// // });


// $(function() {
//  $(window).on('scroll', function() {
//    // フッターの上端位置を取得
//    var footerOffset = $('footer').offset().top;
//    // 現在のスクロール位置 + ウィンドウの高さ
//    var scrollPosition = $(window).scrollTop() + $(window).height();
//    // ウィンドウの高さを取得
//    var windowHeight = $(window).height();

//    // アニメーションを無効にする
//    $('.c-contact__fixed, .c-top-back-btn').css('transition', 'none');

//    // 画面のスクロールがフッターに達した場合
//    if (scrollPosition >= footerOffset) {
//      // PCとSPでの処理を分ける
//      if ($(window).width() > 767) { // PC画面の場合
//        var pcDistance = parseFloat($('html').width()) * (91 / 1080); // calc(91 / 1080 * 100vw)をピクセルに変換
//        // フッターの上端にぴったり表示（0rem）し、ボタンは上端からcalc(91 / 1080 * 100vw)分離す
//        $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px');
//        $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + pcDistance) + 'px');
//      } else { // SP画面の場合
//        var spDistance = parseFloat($('html').width()) * (79 / 375); // calc(79 / 375 * 100vw)をピクセルに変換
//        // フッターの上端にぴったり表示（0rem）し、ボタンは上端からcalc(79 / 375 * 100vw)分離す
//        $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px');
//        $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + spDistance) + 'px');
//      }
//    } else {
//      // フッターが表示されていない場合は通常の位置に戻す
//      if ($(window).width() > 767) { // PC画面の場合
//        $('.c-contact__fixed').css('bottom', '0');
//        $('.c-top-back-btn').css('bottom', 'calc(91 / 1080 * 100vw)');
//      } else { // SP画面の場合
//        $('.c-contact__fixed').css('bottom', '0');
//        $('.c-top-back-btn').css('bottom', 'calc(79 / 375 * 100vw)');
//      }
//    }
//  });
// });


// });