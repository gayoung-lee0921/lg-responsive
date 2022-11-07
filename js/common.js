const tab = $(".tab");
const tabMenu = $(".tab .tab-menu li");
const tabContents = $(".tab .tab-contents > li");
tabMenu.on("click", function () {
  // .index()는 배열이라 0부터 시작
  const idx = $(this).index();
  const siblings = $(this).siblings();
  $(this).addClass("on");
  siblings.removeClass("on");
  const selectedContents = tabContents.eq(idx);
  const contentsSiblings = selectedContents.siblings();
  selectedContents.addClass("on");
  contentsSiblings.removeClass("on");
});

const btnAll = $(".btn-all");
const gnb = $("#gnb");
btnAll.on("click", function (e) {
  e.preventDefault();
  const icon = $(this).find(".material-icons");

  if (gnb.hasClass("on")) {
    icon.text("menu");
  } else {
    icon.text("close");
  }

  gnb.toggleClass("on");
});

//js에서 크기를 제어
$(window).on("resize", function () {
  // 스크롤의 너비까지 포함해서 width 길이를 구하기 위해선 .outerWidh()를 해줘야 함
  const w = $(window).outerWidth();
  console.log(w);
  if (w > 1280) {
    $("html").removeClass("m").addClass("pc");
    $("#gnb .depth02").removeAttr("style");
    $("#gnb").removeAttr("on");
    const icon = $(".btn-all .material-icons");
    icon.text("menu");

    // gnb에 on을 제거하고 tnb-all 안에 있는 material-icons의 텍스트 바꿔서 원래대로 바꾸기(menu로 바꾸기)
  } else {
    $("html").removeClass("pc").addClass("m");
  }
});

const depth01 = $("#gnb .depth01");

depth01.on("click", function (e) {
  if ($("html").hasClass("m")) {
    const depth02 = $(this).next();
    const siblings = $(this).parent().siblings().find(".depth02");
    const siblingsDepth01 = $(this).parent().siblings().find(".depth01");
    $(this).toggleClass("on");
    siblingsDepth01.removeClass("on");
    siblings.slideUp();
    if (depth02.length > 0) {
      e.preventDefault();
      depth02.stop().slideToggle();
    }
  }
});

// 이벤트를 임의로 한번 해줌
$(window).trigger("resize");