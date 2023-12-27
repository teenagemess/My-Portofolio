/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        var parallaxElements = document.querySelectorAll(".parallax-image");
        var parallaxKiri = document.querySelector('.parallax-kiri');
        var parallaxKanan = document.querySelector('.parallax-kanan');
        parallaxElements.forEach(function (element) {
          var distanceFromTop = element.getBoundingClientRect().top;
          var screenHeight = window.innerHeight;

            // Check if the parallax-kiri element exists
  if (parallaxKiri) {
    // Add 'show' class after a short delay (adjust the delay as needed)
    setTimeout(function () {
      parallaxKiri.classList.add('show');
    }, 500); // 500 milliseconds delay
  }
  if (parallaxKanan) {
    // Add 'show' class after a short delay (adjust the delay as needed)
    setTimeout(function () {
      parallaxKanan.classList.add('show');
    }, 1000); // 500 milliseconds delay
  }

          if (distanceFromTop < screenHeight * 0.75) {
            element.classList.add("parallax-show");
          } else {
            element.classList.remove("parallax-show");
          }

          if (distanceFromTop < screenHeight * 0.75) {
            element.classList.add("parallax-show2");
          } else {
            element.classList.remove("parallax-show2");
          }

        });

                var parallaxElements2 = document.querySelectorAll(".parallax-container");
        parallaxElements2.forEach(function (element) {
            var distanceFromTop = element.getBoundingClientRect().top;
            var screenHeight = window.innerHeight;
  
            if (distanceFromTop < screenHeight * 0.75) {
              element.classList.add("parallax-show");
            } else {
              element.classList.remove("parallax-show");
            }
  
            if (distanceFromTop < screenHeight * 0.75) {
              element.classList.add("parallax-show2");
            } else {
              element.classList.remove("parallax-show2");
            }
  
          });


        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
