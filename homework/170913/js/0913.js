$(document).ready(function() {
  var menu_span = $('span');
  var menu_li = $('ul li:first-child');
  var last_item = $('ul li:last-child a');
  var sub_menu = $('.submenu');

  menu_span.hover(function() {
    $(this).parent().siblings().find('.sub-menu').toggleClass('visible');
  });

  sub_menu.hover(function() {
    $(this).toggleClass('test');
  })

  menu_span.focusin(function() {
    $(this).parent().siblings().find('.sub-menu').addClass('visible');
  });

  last_item.focusout(function() {
    $(this).parents().find('.sub-menu').removeClass('visible');
  });

});

// 1. 다음 상황에서 하위메뉴들이 보여질것
// 1. 상위메뉴가 tab 이동을 통해 keyboard focus를 얻음
// 2. 상위메뉴에 mouse가 hovering됨
// 2. 다음 상황에서 하위메뉴들이 다시 보이지 않게 될 것
// 1. mark - up 순서상의 마지막 하위메뉴가 tab 이동을 통해 keyboard focus를 잃음
// 2. 상위메뉴 또는 하위메뉴에서 mouse hovering을 잃음