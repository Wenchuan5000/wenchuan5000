
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

function openNav() {
  document.getElementById("sidenav").style.left = "0";
  // document.getElementById("sidenav").style.display = "block";
  document.getElementById("nav-mask").style.display = "block";
}

function closeNav() {
  document.getElementById("sidenav").style.left = "-300px";
  document.getElementById("nav-mask").style.display = "none";
}
