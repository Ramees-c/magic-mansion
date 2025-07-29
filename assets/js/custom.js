(function ($) {
  "use strict";

  // Cache jQuery Selector
  var $window = $(window),
    $header = $("header"),
    $brand = $(".partner-slider"),
    $navigation = $("#navbarSupportedContent"),
    $dropdown = $(".dropdown-toggle"),
    $single_carusel = $(".single-carusel"),
    $three_item = $(".3block-carusel"),
    $four_item = $(".4block-carusel"),
    $five_item = $(".5block-carusel"),
    $six_item = $(".6block-carusel"),
    $single_carusel_text = $(".text-carusel"),
    $contact = $("#contact-form"),
    $mix_tab = $(".mix-tab");

  // Preloader For Hide loader
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(500).fadeOut(100);
    }
  }
  $window.on("load", function () {
    handlePreloader();
  });

  if (document.querySelector(".area_filter") !== null) {
    $(".area_filter").slider({
      from: 0,
      to: 10000,
      step: 10,
      smooth: true,
      round: 0,
      dimension: "sq ft",
      skin: "plastic",
    });
  }

  // Parallax - START CODE
  if ($(".paraxify").length) {
    $(function () {
      $window.on("load resize scroll", function () {
        paraxify(".paraxify");
      });
    });
  }

  // Custom accordion useable settings for any type of accordion system
  if (document.querySelector(".bb-accordion") !== null) {
    $(".ac-toggle").on("click", function (e) {
      e.preventDefault();

      var $this = $(this);

      if ($this.hasClass("active") && $this.next().hasClass("show")) {
        $this.removeClass("active");
        $this.next().removeClass("show");
        $this.next().slideUp(350);
      } else {
        // Check accordion type: for single item open
        if ($this.parents(".bb-accordion").hasClass("ac-single-show")) {
          $(".ac-card .ac-toggle").removeClass("active");
          $(".ac-card .ac-collapse").removeClass("show");
          $(".ac-card .ac-collapse").slideUp(350);
          $this.addClass("active");
          $this.next().addClass("show");
          $this.next().slideDown(350);
        }

        // Default if not use any accordion type
        else {
          $this
            .parent(".ac-block")
            .find(".ac-card .ac-toggle")
            .removeClass("active");
          $this
            .parent(".ac-block")
            .find(".ac-card .ac-collapse")
            .removeClass("show");
          $this.parent(".ac-block").find(".ac-card .ac-collapse").slideUp(350);
          $this.addClass("active");
          $this.next().addClass("show");
          $this.next().slideDown(350);
        }
      }
    });
  }

  // MixIt-up tab calling
  if ($mix_tab.length) {
    var containerEl = document.querySelector(".mix-element");
    var mixer = mixitup(containerEl);
  }

  // Our Partner Logos Slider Auto
  if ($brand.length) {
    $brand.owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplay: 4000,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1400: {
          items: 6,
        },
      },
    });
  }

  // Testimonial slide
  if ($single_carusel.length) {
    $single_carusel.owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      dots: true,
      smartSpeed: 500,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1400: {
          items: 1,
        },
      },
    });
  }

  // Three Block Slide
  if ($three_item.length) {
    $three_item.owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      dots: false,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1400: {
          items: 3,
        },
      },
    });
  }

  // Four Block Slide
  if ($four_item.length) {
    $four_item.owlCarousel({
      loop: false,
      margin: 15,
      nav: true,
      dots: true,
      smartSpeed: 500,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1400: {
          items: 4,
        },
      },
    });
  }

  // Five Block Slide
  if ($five_item.length) {
    $five_item.owlCarousel({
      loop: false,
      margin: 15,
      nav: true,
      dots: true,
      smartSpeed: 500,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1400: {
          items: 5,
        },
      },
    });
  }

  // Five Block Slide
  if ($six_item.length) {
    $six_item.owlCarousel({
      loop: false,
      margin: 15,
      nav: true,
      dots: true,
      smartSpeed: 500,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1400: {
          items: 6,
        },
      },
    });
  }

  // Single Text Carusel
  if ($single_carusel_text.length) {
    $single_carusel_text.owlCarousel({
      loop: false,
      margin: 15,
      nav: false,
      dots: true,
      smartSpeed: 500,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  // Single Accordean
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})(jQuery);

// property single page sidebar
const toggleBtn = document.getElementById("toggleSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("rightSidebar");
  const overlay = document.getElementById("overlay");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");
  });

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  }

  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar); // Clicking outside also closes


  