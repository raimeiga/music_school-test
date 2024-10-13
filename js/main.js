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

 // アコーディオンメニューの初期化とクリックイベント
 $('.p-qa-list__a').hide(); // 初期状態で非表示

 $('.p-qa-list__q').on('click', function() {
   $(this).toggleClass('active'); // 矢印の回転を制御
   $(this).addClass('active'); // 矢印の回転を制御
   $(this).next('.p-qa-list__a').slideToggle(); // 対応する要素を開閉
 });

 $('.p-qa-list__a').on('click', function() {
   $(this).slideUp(); // 閉じる
   $(this).prev('.p-qa-list__q').removeClass('active'); // 矢印をリセット
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
  var footerOffset = $('footer').offset().top;  // フッターの位置
  var scrollPosition = $(window).scrollTop() + $(window).height();  // 現在のスクロール位置 + ウィンドウの高さ
  var isPC = $(window).width() > 767;  // PC画面かSP画面かを判定

  // 要素の取得
  var topBackBtn91_79 = $('.c-top-back-btn--91-79');  // トップに戻るボタン（91/79）
  var topBackBtn30_18 = $('.c-top-back-btn--30-18');  // トップに戻るボタン（30/18）
  var contactBtn = $('.c-btn--fixed');  // お問い合わせボタン

  // フッターに到達しているかチェック
  if (scrollPosition >= footerOffset) {
      var footerHeight = $('footer').outerHeight();  // フッターの高さ

      if (isPC) {
          // PC画面の場合
          topBackBtn91_79.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (91 / 1080 * 100vw))',  // フッター上端から指定の余白分上に配置
              right: '10rem'
          });

          topBackBtn30_18.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (30 / 1080 * 100vw))',  // フッター上端から指定の余白分上に配置
              right: '10rem'
          });

          // お問い合わせボタンは常にフッターの上に配置
      contactBtn.css({
       position: 'absolute',
       bottom: footerHeight + 'px',  // フッターの上端にピタリと配置
       right: '0'
   });

      } else {
          // SP画面の場合
          topBackBtn91_79.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (79 / 375 * 100vw))',  // フッター上端からSP用の余白分上に配置
              right: '2rem'
          });

          topBackBtn30_18.css({
              position: 'absolute',
              bottom: 'calc(' + footerHeight + 'px + (18 / 375 * 100vw))',  // フッター上端からSP用の余白分上に配置
              right: '2rem'
          });

          // お問い合わせボタンは常にフッターの上に配置
      contactBtn.css({
       position: 'absolute',
       bottom: footerHeight + 'px',  // フッターの上端にピタリと配置
       right: '2rem'
   });
      }

      

  } else {
      if (isPC) {
          // PC画面の場合、通常時は画面右下に固定表示
          topBackBtn91_79.css({
              position: 'fixed',
              bottom: 'calc(91 / 1080 * 100vw)',  // 固定表示
              right: '10rem',
              opacity: 1,
              visibility: 'visible'
          });

          topBackBtn30_18.css({
              position: 'fixed',
              bottom: 'calc(30 / 1080 * 100vw)',  // 固定表示
              right: '10rem',
              opacity: 1,
              visibility: 'visible'
          });

                 // お問い合わせボタンは常に画面下端に固定
             contactBtn.css({
              position: 'fixed',
              bottom: '0',  // 固定表示
              right: '0',
              opacity: 1,
              visibility: 'visible'
          });

      } else {
          // SP画面の場合、通常時は画面右下に固定表示
          topBackBtn91_79.css({
              position: 'fixed',
              bottom: 'calc(79 / 375 * 100vw)',  // 固定表示
              right: '2rem',
              opacity: 1,
              visibility: 'visible'
          });

          topBackBtn30_18.css({
              position: 'fixed',
              bottom: 'calc(18 / 375 * 100vw)',  // 固定表示
              right: '2rem',
              opacity: 1,
              visibility: 'visible'
          });

                 // お問い合わせボタンは常に画面下端に固定
             contactBtn.css({
              position: 'fixed',
              bottom: '0',  // 固定表示
              right: '2rem',
              opacity: 1,
              visibility: 'visible'
          });
      }      
  }
  
});


//  $(window).on('scroll', function() {
//   var footerOffset = $('footer').offset().top;  // フッターの位置
//   var scrollPosition = $(window).scrollTop() + $(window).height();  // 現在のスクロール位置 + ウィンドウの高さ

//   // 要素の取得
//   var topBackBtn = $('.c-top-back-btn--91-79');  // トップに戻るボタン
//   var contactBtn = $('.c-contact__fixed');  // お問い合わせボタン

//   // フッターに到達しているかチェック
//   if (scrollPosition >= footerOffset) {
//       var footerHeight = $('footer').outerHeight();  // フッターの高さ
//       var topBackBtnBottom = 'calc(91 / 1080 * 100vw)';  // トップに戻るボタンの指定位置

//       // トップに戻るボタンはフッターの上に余白を持たせて配置（フッター上端から指定の余白分上に配置）
//       topBackBtn.css({
//           position: 'absolute',
//           bottom: footerHeight + 'px',  // フッターの高さに余白を足す
//           bottom: 'calc(' + footerHeight + 'px + ' + topBackBtnBottom + ')',
//           right: '10rem'
//       });

//       // お問い合わせボタンはフッター上端にピタリと固定
//       contactBtn.css({
//           position: 'absolute',
//           bottom: footerHeight + 'px',  // フッター上端にピッタリ
//           right: '0'
//       });
//   } else {
//       // 通常時は画面右下に固定表示
//       topBackBtn.css({
//           position: 'fixed',
//           bottom: 'calc(91 / 1080 * 100vw)',  // 通常時の画面下固定
//           right: '10rem',
//           opacity: 1,
//           visibility: 'visible'
//       });

//       contactBtn.css({
//           position: 'fixed',
//           bottom: '0',  // 通常時の画面下固定
//           right: '0',
//           opacity: 1,
//           visibility: 'visible'
//       });
//   }
// });



//  $(window).on('scroll', function() {
//   var footerOffset = $('footer').offset().top;  // フッターの位置
//   var scrollPosition = $(window).scrollTop() + $(window).height();  // 現在のスクロール位置 + ウィンドウの高さ

//   // 要素の取得
//   var topBackBtn = $('.c-top-back-btn');
//   var contactBtn = $('.c-contact__fixed');

//   // フッターに到達しているかチェック
//   if (scrollPosition >= footerOffset) {
//       // フッター上端に「トップに戻る」ボタンと「お問い合わせ」ボタンを配置
//       var footerHeight = $('footer').outerHeight();

//       // フッターの上にボタンをピタリと配置
//       topBackBtn.css({
//           position: 'absolute',
//           bottom: (scrollPosition - footerOffset) + 'px',  // フッターの上端にピッタリ
//           right: '10rem'
//       });

//       contactBtn.css({
//           position: 'absolute',
//           bottom: (scrollPosition - footerOffset) + 'px',  // フッターの上端にピッタリ
//           right: '0'
//       });

//   } else {
//       // 通常時は画面右下に固定表示
//       topBackBtn.css({
//           position: 'fixed',
//           bottom: 'calc(91 / 1080 * 100vw)',  // 固定表示
//           right: '10rem',
//           opacity: 1,
//           visibility: 'visible'
//       });

//       contactBtn.css({
//           position: 'fixed',
//           bottom: '0',  // 固定表示
//           right: '0',
//           opacity: 1,
//           visibility: 'visible'
//       });
//   }
// });





//  $(window).on('scroll', function() {
//   var footerOffset = $('footer').offset().top;
//   var scrollPosition = $(window).scrollTop() + $(window).height();
//   var windowHeight = $(window).height();
//   var isPC = $(window).width() > 767;

//   // スクロールが200px以上のときに表示する設定
//   if ($(this).scrollTop() > 200) {
//     $('.c-top-back-btn, .c-contact__fixed').addClass('active'); // ボタン表示
//   } else {
//     $('.c-top-back-btn, .c-contact__fixed').removeClass('active'); // ボタン非表示
//   }


//   // footerに到達したときの処理
//   if (scrollPosition >= footerOffset) {
//     if (isPC) { // PC画面の場合
//       var pcDistance91_79 = parseFloat($('html').width()) * (91 / 1080); // 91/1080の距離
//       var pcDistance30_18 = parseFloat($('html').width()) * (30 / 1080); // 30/1080の距離

//       $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px'); // footer上部0rem

//       if ($('.c-top-back-btn').hasClass('c-top-back-btn--91-79')) {
//         $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + pcDistance91_79) + 'px'); // 9.1rem
//       } else if ($('.c-top-back-btn').hasClass('c-top-back-btn--30-18')) {
//         $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + pcDistance30_18) + 'px'); // 3rem
//       }
//     } else { // SP画面の場合
//       var spDistance91_79 = parseFloat($('html').width()) * (79 / 375); // 79/375の距離
//       var spDistance30_18 = parseFloat($('html').width()) * (18 / 375); // 18/375の距離

//       $('.c-contact__fixed').css('bottom', (scrollPosition - footerOffset) + 'px'); // footer上部0rem

//       if ($('.c-top-back-btn').hasClass('c-top-back-btn--91-79')) {
//         $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + spDistance91_79) + 'px'); // 7.9rem
//       } else if ($('.c-top-back-btn').hasClass('c-top-back-btn--30-18')) {
//         $('.c-top-back-btn').css('bottom', (scrollPosition - footerOffset + spDistance30_18) + 'px'); // 1.8rem
//       }
//     }
//   } else {
//     // footerに到達していないときの通常状態
//     if (isPC) {
//       $('.c-contact__fixed').css('bottom', '0'); // ボタンは画面の下端に固定
//       $('.c-top-back-btn--91-79').css('bottom', 'calc(91 / 1080 * 100vw)'); // 通常位置に戻す
//       $('.c-top-back-btn--30-18').css('bottom', 'calc(30 / 1080 * 100vw)'); // 通常位置に戻す
//     } else {
//       $('.c-contact__fixed').css('bottom', '0'); // ボタンは画面の下端に固定
//       $('.c-top-back-btn--91-79').css('bottom', 'calc(79 / 375 * 100vw)'); // 通常位置に戻す
//       $('.c-top-back-btn--30-18').css('bottom', 'calc(18 / 375 * 100vw)'); // 通常位置に戻す
//     }
//   }
// });

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