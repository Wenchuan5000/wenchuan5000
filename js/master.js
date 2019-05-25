
// begin hide navition

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// end hide navition

function closeNav() {
  document.getElementById("sidenav").style.left = "-300px";
  document.getElementById("btn-openNav").style.opacity = "1";
  document.getElementById("btn-closeNav").style.display = "none";
}

function openNav() {
  document.getElementById("sidenav").style.left = "0";
  document.getElementById("btn-openNav").style.opacity = "0.9";
  document.getElementById("btn-closeNav").style.display = "block";
}

function forceOpenNav() {
  document.getElementById("sidenav").style.left = "0";
}


window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 1400px)").matches) {
        window.onresize = closeNav;
    } else {
        window.onresize = forceOpenNav;
    }
});
