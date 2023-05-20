$(function () {
  // 팝업
  $(".popBtn").click(function () {
    $(".pop_wrap").css("display", "flex");
  });
  $(".popClose").click(function () {
    $(".pop_wrap").css("display", "none");
  });
  //   탭 컨텐츠
  $(".noticeBtn").click(function () {
    $(".boards").css("display", "block");
    $(".gallerys").css("display", "none");
    $(".noticeBtn").css("background", "white");
    $(".galleryBtn").css("background", "#e7e7e7");
  });
  $(".galleryBtn").click(function () {
    $(".boards").css("display", "none");
    $(".gallerys").css("display", "flex");
    $(".noticeBtn").css("background", "#e7e7e7");
    $(".galleryBtn").css("background", "white");
  });
  //   메뉴 AAAAA
  // $(".nav ul li").mouseenter(function () {
  //   $(".nav ul li ul").stop().slideDown();
  // });
  // $(".nav").mouseleave(function () {
  //   $(".nav ul li ul").stop().slideUp();
  // });

  //   메뉴 BBBBB
  // $(".nav ul li a").mouseenter(function () {
  //   $(this).siblings().stop().slideDown();
  //   console.log(0);
  // });
  // $(".nav ul li a").mouseleave(function () {
  //   $(this).siblings().stop().slideUp();
  // });

  //   메뉴 CCCCC
  $(".nav ul li").mouseenter(function () {
    $(this).children("ul").stop().slideDown(); /* fadeIn or slideDown */
  });
  $(".nav ul li").mouseleave(function () {
    $(this).children("ul").stop().slideUp(); /* fadeIn or slideUp */
  });

  // ↓↓↓↓ 슬라이더 가로
  // setInterval(function () {
  //   $(".slider").animate({ "margin-left": "-100%" }, function () {
  //     $(".img_wrap:first").appendTo(".slider");
  //     $(".slider").css({ "margin-left": "0" });
  //   });
  // }, 3000);

  // ↓↓↓↓ 슬라이더 세로
  // setInterval(function () {
  //   $(".slider").animate({ "margin-top": "-300px" }, function () {
  //     $(".img_wrap:first").appendTo(".slider");
  //     $(".slider").css({ "margin-top": "0" });
  //   });
  // }, 3000);
  //   ↓↓↓↓ 슬라이더 제자리
  $(".img_wrap:gt(0)").hide();
  setInterval(function () {
    $(".img_wrap:first").fadeOut(1500).next().fadeIn(1500);
    $(".img_wrap:first").appendTo(".slider");
  }, 3000);
});
