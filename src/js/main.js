import { Modal } from "bootstrap";
import $ from "jquery";
import HystModal from "./components/hystmodal";

// burger en mobile

$(".burger-btn").on("click", function () {
  $(this).toggleClass("active");
  $(".mobile__header").toggleClass("active");
});
$(".main-slider").on("click", function () {
  $(".burger-btn").removeClass("active");
  $(".mobile__header").removeClass("active");
});

// active page

$(document).ready(function () {
  let current_menu_id = $("#info").data("current-id");
  let main_menu_id = $("#info").data("main-menu-current-id");
  let current__page = $("#info").data("current-page-id");
  $("#" + current_menu_id).addClass("current-bread");
  $("#" + main_menu_id).addClass("current-bread");
  $("#" + current__page).addClass("active");
});

$(".navigation__item").on("click", function () {
  $(".navigation__item").removeClass("active");
  $(this).addClass("active");
});
$("mobile__nav_item").on("click", function () {
  $("mobile__nav_item").removeClass("active");
  $(this).addClass("active");
});

// Selected title

$(".title__text").on("click", function () {
  $(".title__text").removeClass("selected");
  $(this).addClass("selected");
});
$(".link__text").on("click", function () {
  $(".link__text").removeClass("selected");
  $(this).addClass("selected");
});

// IBG function

function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).find("img").first().css("width", 0);
      $(this).find("img").first().css("height", 0);
      $(this).find("img").first().css("display", "none");
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

function RatioW() {
  $.each($(".ratio-w"), function (index, val) {
    var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    }
    ////console.log(ratioMultiplier);
    $(this).css(
      "height",
      (parseFloat($(this).css("width")) * ratioMultiplier).toString() + "px"
    );
  });
}
function RatioH() {
  $.each($(".ratio-h"), function (index, val) {
    var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    }
    ////console.log(ratioMultiplier);
    $(this).css(
      "width",
      (parseFloat($(this).css("height")) * ratioMultiplier).toString() + "px"
    );
  });
}
$(document).ready(function () {
  ibg();
  RatioW();
  RatioH();
});

$(window).resize(function () {
  RatioW();
  RatioH();
});

// language change

$(".lang").on("click", function (e) {
  $(".lang__list").addClass("active");
  e.stopPropagation();
  // $('#'+$(this).data('lang-id')).
});
$(".lang__item").on("click", function () {
  $(".lang__item").removeClass("selected");
  $(this).addClass("selected");

  $(".lang").removeClass("active");
  $("#" + $(this).data("lang-id")).addClass("active");
});

$(document).on("click", function () {
  $(".lang__list").removeClass("active");
});

// Accordion

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find(
      ".dropdownlink, .rules__dropdownlink, .kuts__dropdownlink, .parents__dropdownlink"
    );
    dropdownlink.on(
      "click",
      { el: this.el, multiple: this.multiple },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el
        .find(
          ".submenuItems, .rules__submenuItems, .kuts__submenuItems, .parents__submenuItems"
        )
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };

  var accordion = new Accordion($(".accordion"), false);
  var accordion = new Accordion($(".accordion-menu"), false);
  var accordion = new Accordion($(".accordion-parents"), false);
  var accordion = new Accordion($(".rules__accordion-menu"), false);
});

// Modal windows

///MODAL

const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

//Modal
$(document).on("click", ".modal-trigger", function (event) {
  $("body").css("overflow", "hidden");

  var modalID = $(this).data("modal-id");
  var modal = $("#" + modalID + ".modal");
  modal.addClass("modal-active");

  var modalTitle = $(this).data("modal-title");
  if (typeof modalTitle !== "undefined") {
    modal.find(".modal-title").html(modalTitle);
  }
});
$(document).on("click", ".modal-bg, .modal-cross", function (event) {
  $("body").css("overflow", "visible");
  var modal = $(this).closest(".modal");
  modal.removeClass("modal-active");
});
$(document).on("click", ".modal-window", function (event) {
  event.stopPropagation();
});

// tabs uudised

$("#new").click(function (e) {
  e.preventDefault();
  $("#new").addClass("current-link");
  $("#old").removeClass("current-link");
  // $("#up").removeClass("current-link");
  // $("#custom").removeClass("current-link");
  $("#new-item").addClass("active");
  $("#old-item").removeClass("active");
  // $("#up-item").removeClass("active");
  // $("#custom-item").removeClass("active");
});
$("#old").click(function (e) {
  e.preventDefault();
  $("#old").addClass("current-link");
  $("#new").removeClass("current-link");
  // $("#up").removeClass("current-link");
  // $("#custom").removeClass("current-link");
  $("#old-item").addClass("active");
  $("#new-item").removeClass("active");
  // $("#up-item").removeClass("active");
  // $("#custom-item").removeClass("active");
});

// Show more y less news

//READMORE START
$(document).on("click", ".readmore", function (event) {
  event.preventDefault();
  $(this).toggleClass("toggled");
  ToggleReadmoreObjects($(this));
});
function ToggleReadmoreObjects(readmore) {
  let readmoreObjects = $(
    "[data-readmore-identifier=" + readmore.attr("id") + "]"
  );
  if (readmoreObjects.length == 0) {
    return;
  }
  for (var i = 0; i < readmoreObjects.length; i++) {
    let readmoreObject = $(readmoreObjects[i]);
    if (readmore.hasClass("toggled")) {
      readmoreObject.removeClass("hidden");
    } else {
      readmoreObject.addClass("hidden");
    }
  }
}
//First run through for every readmore when page loads
$(document).ready(function () {
  $(".readmore").each(function () {
    ToggleReadmoreObjects($(this));
  });
});

// Preloader

window.onload = function () {
  document.body.classList.add("loaded");
};
