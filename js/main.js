$(function () {
  /**
   * ハンバーガーメニュー
   */
  // var openImage = "img/open.svg";
  // var closeImage = "img/close.svg";

  $("#menuButton").on("click", function () {
    $("#menuButton").toggleClass("active");
    $("#nav").toggleClass("active");
  });
});
