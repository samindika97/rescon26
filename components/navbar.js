function initNavbar() {

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navLinks && navbar) {

    // Hamburger
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close mobile menu when clicking actual navigation links
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {

        // Don't close when clicking a dropdown button
        if (link.classList.contains("dropdown-toggle")) {
          return;
        }

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });

    // Close everything when clicking outside navbar
    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

        navbar.querySelectorAll(".dropdown-menu").forEach(menu => {
          menu.classList.remove("show");
        });
      }
    });
  }
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (!button || !menu) return;

    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          const otherMenu = otherDropdown.querySelector(".dropdown-menu");
          if (otherMenu) {
            otherMenu.classList.remove("show");
          }
        }
      });

      // Toggle current dropdown
      menu.classList.toggle("show");
    });

    // Close when clicking a menu item
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        menu.classList.remove("show");
      });
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        const menu = dropdown.querySelector(".dropdown-menu");

        if (menu) {
          menu.classList.remove("show");
        }
      }
    });
  });

  // Remove "new" glow from Technical Programme after first click
  const technicalBtn = document.getElementById("technicalBtn");
  if (technicalBtn) {
    technicalBtn.addEventListener("click", function () {
      technicalBtn.classList.remove("nav-new");
    }, { once: true });
  }
}