"use strict";

var _bootstrap = require("bootstrap");

var _jquery = _interopRequireDefault(require("jquery"));

var _hystmodal = _interopRequireDefault(require("./components/hystmodal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// burger en mobile
(0, _jquery["default"])(".burger-btn").on("click", function () {
  (0, _jquery["default"])(this).toggleClass("active");
  (0, _jquery["default"])(".mobile__header").toggleClass("active");
});
(0, _jquery["default"])(".main-slider").on("click", function () {
  (0, _jquery["default"])(".burger-btn").removeClass("active");
  (0, _jquery["default"])(".mobile__header").removeClass("active");
}); // active page

(0, _jquery["default"])(document).ready(function () {
  var current_menu_id = (0, _jquery["default"])("#info").data("current-id");
  var main_menu_id = (0, _jquery["default"])("#info").data("main-menu-current-id");
  var current__page = (0, _jquery["default"])("#info").data("current-page-id");
  (0, _jquery["default"])("#" + current_menu_id).addClass("current-bread");
  (0, _jquery["default"])("#" + main_menu_id).addClass("current-bread");
  (0, _jquery["default"])("#" + current__page).addClass("active");
});
(0, _jquery["default"])(".navigation__item").on("click", function () {
  (0, _jquery["default"])(".navigation__item").removeClass("active");
  (0, _jquery["default"])(this).addClass("active");
});
(0, _jquery["default"])("mobile__nav_item").on("click", function () {
  (0, _jquery["default"])("mobile__nav_item").removeClass("active");
  (0, _jquery["default"])(this).addClass("active");
}); // Selected title

(0, _jquery["default"])(".title__text").on("click", function () {
  (0, _jquery["default"])(".title__text").removeClass("selected");
  (0, _jquery["default"])(this).addClass("selected");
});
(0, _jquery["default"])(".link__text").on("click", function () {
  (0, _jquery["default"])(".link__text").removeClass("selected");
  (0, _jquery["default"])(this).addClass("selected");
}); // IBG function

function ibg() {
  _jquery["default"].each((0, _jquery["default"])(".ibg"), function (index, val) {
    if ((0, _jquery["default"])(this).find("img").length > 0) {
      (0, _jquery["default"])(this).find("img").first().css("width", 0);
      (0, _jquery["default"])(this).find("img").first().css("height", 0);
      (0, _jquery["default"])(this).find("img").first().css("display", "none");
      (0, _jquery["default"])(this).css("background-image", 'url("' + (0, _jquery["default"])(this).find("img").attr("src") + '")');
    }
  });
}

function RatioW() {
  _jquery["default"].each((0, _jquery["default"])(".ratio-w"), function (index, val) {
    var ratioMultiplier = parseFloat((0, _jquery["default"])(this).data("ratio-multiplier"));

    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    } ////console.log(ratioMultiplier);


    (0, _jquery["default"])(this).css("height", (parseFloat((0, _jquery["default"])(this).css("width")) * ratioMultiplier).toString() + "px");
  });
}

function RatioH() {
  _jquery["default"].each((0, _jquery["default"])(".ratio-h"), function (index, val) {
    var ratioMultiplier = parseFloat((0, _jquery["default"])(this).data("ratio-multiplier"));

    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    } ////console.log(ratioMultiplier);


    (0, _jquery["default"])(this).css("width", (parseFloat((0, _jquery["default"])(this).css("height")) * ratioMultiplier).toString() + "px");
  });
}

(0, _jquery["default"])(document).ready(function () {
  ibg();
  RatioW();
  RatioH();
});
(0, _jquery["default"])(window).resize(function () {
  RatioW();
  RatioH();
}); // language change

(0, _jquery["default"])(".lang").on("click", function (e) {
  (0, _jquery["default"])(".lang__list").addClass("active");
  e.stopPropagation(); // $('#'+$(this).data('lang-id')).
});
(0, _jquery["default"])(".lang__item").on("click", function () {
  (0, _jquery["default"])(".lang__item").removeClass("selected");
  (0, _jquery["default"])(this).addClass("selected");
  (0, _jquery["default"])(".lang").removeClass("active");
  (0, _jquery["default"])("#" + (0, _jquery["default"])(this).data("lang-id")).addClass("active");
});
(0, _jquery["default"])(document).on("click", function () {
  (0, _jquery["default"])(".lang__list").removeClass("active");
}); // Accordion

(0, _jquery["default"])(function () {
  var Accordion = function Accordion(el, multiple) {
    this.el = el || {}; // more then one submenu open?

    this.multiple = multiple || true;
    var dropdownlink = this.el.find(".dropdownlink, .rules__dropdownlink, .kuts__dropdownlink, .parents__dropdownlink");
    dropdownlink.on("click", {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
        $this = (0, _jquery["default"])(this),
        //this is the ul.submenuItems
    $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find(".submenuItems, .rules__submenuItems, .kuts__submenuItems, .parents__submenuItems").not($next).slideUp().parent().removeClass("open");
    }
  };

  var accordion = new Accordion((0, _jquery["default"])(".accordion"), false);
  var accordion = new Accordion((0, _jquery["default"])(".accordion-menu"), false);
  var accordion = new Accordion((0, _jquery["default"])(".accordion-parents"), false);
  var accordion = new Accordion((0, _jquery["default"])(".rules__accordion-menu"), false);
}); // Modal windows
///MODAL

var myModal = new _hystmodal["default"]({
  linkAttributeName: "data-hystmodal"
}); //Modal

(0, _jquery["default"])(document).on("click", ".modal-trigger", function (event) {
  (0, _jquery["default"])("body").css("overflow", "hidden");
  var modalID = (0, _jquery["default"])(this).data("modal-id");
  var modal = (0, _jquery["default"])("#" + modalID + ".modal");
  modal.addClass("modal-active");
  var modalTitle = (0, _jquery["default"])(this).data("modal-title");

  if (typeof modalTitle !== "undefined") {
    modal.find(".modal-title").html(modalTitle);
  }
});
(0, _jquery["default"])(document).on("click", ".modal-bg, .modal-cross", function (event) {
  (0, _jquery["default"])("body").css("overflow", "visible");
  var modal = (0, _jquery["default"])(this).closest(".modal");
  modal.removeClass("modal-active");
});
(0, _jquery["default"])(document).on("click", ".modal-window", function (event) {
  event.stopPropagation();
}); // tabs uudised

(0, _jquery["default"])("#new").click(function (e) {
  e.preventDefault();
  (0, _jquery["default"])("#new").addClass("current-link");
  (0, _jquery["default"])("#old").removeClass("current-link");
  (0, _jquery["default"])("#new-item").addClass("active");
  (0, _jquery["default"])("#old-item").removeClass("active");
});
(0, _jquery["default"])("#old").click(function (e) {
  e.preventDefault();
  (0, _jquery["default"])("#old").addClass("current-link");
  (0, _jquery["default"])("#new").removeClass("current-link");
  (0, _jquery["default"])("#old-item").addClass("active");
  (0, _jquery["default"])("#new-item").removeClass("active");
}); // Show more y less news
//READMORE START

(0, _jquery["default"])(document).on("click", ".readmore", function (event) {
  event.preventDefault();
  (0, _jquery["default"])(this).toggleClass("toggled");
  ToggleReadmoreObjects((0, _jquery["default"])(this));
});

function ToggleReadmoreObjects(readmore) {
  var readmoreObjects = (0, _jquery["default"])("[data-readmore-identifier=" + readmore.attr("id") + "]");

  if (readmoreObjects.length == 0) {
    return;
  }

  for (var i = 0; i < readmoreObjects.length; i++) {
    var readmoreObject = (0, _jquery["default"])(readmoreObjects[i]);

    if (readmore.hasClass("toggled")) {
      readmoreObject.removeClass("hidden");
    } else {
      readmoreObject.addClass("hidden");
    }
  }
} //First run through for every readmore when page loads


(0, _jquery["default"])(document).ready(function () {
  (0, _jquery["default"])(".readmore").each(function () {
    ToggleReadmoreObjects((0, _jquery["default"])(this));
  });
}); // Preloader

window.onload = function () {
  document.body.classList.add("loaded");
}; // Preview loader


function readURL(input) {
  if (input.files && input.files[0]) {
    for (i = 0; i < input.files.length; i++) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var oImg = document.createElement("img");
        oImg.setAttribute("src", e.target.result);
        document.getElementById("wrapper-img-form").appendChild(oImg);
      };

      reader.readAsDataURL(input.files[i]);
      console.log(input.files[i]);
    }
  }
}

(0, _jquery["default"])("#imgInp").change(function () {
  readURL(this);
});