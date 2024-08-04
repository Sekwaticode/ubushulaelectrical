(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

/*-----Service Tabs-----*/

// Dom Elements: Tabs
const constructionTab = document.getElementById("constructionService");
const electricalBackupTab = document.getElementById("electricalBackupService");
const electricianServiceTab = document.getElementById(
  "electricanServiceContainer"
);
const solarPanelTab = document.getElementById("solarPanelInstallation");

// Dom Elements: Button
const constructionButton = document.getElementById("constructionServiceButton");
const electricalBackupButton = document.getElementById(
  "electricalBackupButton"
);
const electricianServiceButton = document.getElementById(
  "electrianServicesButton"
);
const solarPanelButton = document.getElementById(
  "solarPanelInstallationButton"
);

function displayConstructionTab() {
  constructionTab.style.display = "block";
  electricalBackupTab.style.display = "none";
  electricianServiceTab.style.display = "none";
  solarPanelTab.style.display = "none";

}

function displayElectricalBackup() {
  constructionTab.style.display = "none";
  electricalBackupTab.style.display = "block";
  electricianServiceTab.style.display = "none";
  solarPanelTab.style.display = "none";
}

function displayElectricianServices() {
  constructionTab.style.display = "none";
  electricalBackupTab.style.display = "none";
  electricianServiceTab.style.display = "block";
  solarPanelTab.style.display = "none";
}

function displaySolarPanels() {
  constructionTab.style.display = "none";
  electricalBackupTab.style.display = "none";
  electricianServiceTab.style.display = "none";
  solarPanelTab.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  displayConstructionTab();
});

constructionButton.addEventListener("click", displayConstructionTab);
electricalBackupButton.addEventListener("click", displayElectricalBackup);
electricianServiceButton.addEventListener("click", displayElectricianServices);
solarPanelButton.addEventListener("click", displaySolarPanels);
