
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
  document.getElementById("sidenav2").style.left = "-300px";
  document.getElementById("btn-openNav").style.opacity = "1";
  document.getElementById("btn-closeNav").style.display = "none";
}

function openNav() {
  document.getElementById("sidenav2").style.left = "0";
  document.getElementById("btn-openNav").style.opacity = "0.9";
  document.getElementById("btn-closeNav").style.display = "block";
}
