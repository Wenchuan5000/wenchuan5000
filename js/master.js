
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
  document.getElementById("btn-closeNav").style.display = "none";
}

function openNav() {
  document.getElementById("sidenav").style.left = "0";
  document.getElementById("btn-closeNav").style.display = "block";
}

function forceOpenNav() {
  document.getElementById("sidenav").style.left = "0";
  document.getElementById("btn-closeNav").style.display = "none";
}


window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 1400px)").matches) {
        window.onresize = closeNav;
    } else {
        console.log('match');
        window.onresize = forceOpenNav;
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.06)";
  } else {
    document.getElementById("nav").style.boxShadow = "0 1px 0px rgba(0, 0, 0, 0.08)";
  }
}
