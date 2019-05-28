// begin nav

window.onscroll = function() {
  scrollFunction(),
  scrollSidenav0(),
  scrollSidenav1(),
  scrollSidenav2(),
  scrollSidenav3(),
  scrollSidenav4(),
  scrollSidenav5(),
  scrollSidenav6(),
  scrollSidenav7(),
  scrollSidenav8(),
  scrollSidenav9()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.06)";
  } else {
    document.getElementById("nav").style.boxShadow = "0 1px 0px rgba(0, 0, 0, 0.08)";
  }
}

// end nav


// begin sidenav

function closeNav() {
  document.getElementById("sidenav").style.left = "-300px";
  document.getElementById("btn-closeNav").style.display = "none";
}

function openNav() {
  document.getElementById("sidenav").scrollTop = "0";
  document.getElementById("sidenav").style.left = "0";
  document.getElementById("btn-closeNav").style.display = "block";
}

function forceOpenNav() {
  document.getElementById("sidenav").scrollTop = "0";
  document.getElementById("sidenav").style.left = "0";
  document.getElementById("btn-closeNav").style.display = "none";
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 1400px)").matches) {
    closeNav()
  } else {
    forceOpenNav()
  }
});

// end sidenav






// sidenav ...

function scrollSidenav0() {
  var beginDiv = 0;
  var nextDiv = document.getElementById("bigDiv1");

  var current = 0;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "12px";
    document.getElementById("sub-group-li-0").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-0").style.color = "#858585";
  }
}

function scrollSidenav1() {
  var beginDiv = document.getElementById("bigDiv1");
  var nextDiv = document.getElementById("bigDiv2");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "60px";
    document.getElementById("sub-group-li-1").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-1").style.color = "#858585";
  }
}

function scrollSidenav2() {
  var beginDiv = document.getElementById("bigDiv2");
  var nextDiv = document.getElementById("bigDiv3");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "108px";
    document.getElementById("sub-group-li-2").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-2").style.color = "#858585";
  }
}

function scrollSidenav3() {
  var beginDiv = document.getElementById("bigDiv3");
  var nextDiv = document.getElementById("bigDiv4");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "156px";
    document.getElementById("sub-group-li-3").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-3").style.color = "#858585";
  }
}

function scrollSidenav5() {
  var beginDiv = document.getElementById("bigDiv5");
  var nextDiv = document.getElementById("bigDiv6");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "252px";
    document.getElementById("sub-group-li-5").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-5").style.color = "#858585";
  }
}

function scrollSidenav6() {
  var beginDiv = document.getElementById("bigDiv6");
  var nextDiv = document.getElementById("bigDiv7");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "300px";
    document.getElementById("sub-group-li-6").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-6").style.color = "#858585";
  }
}

function scrollSidenav7() {
  var beginDiv = document.getElementById("bigDiv7");
  var nextDiv = document.getElementById("bigDiv8");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "348px";
    document.getElementById("sub-group-li-7").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-7").style.color = "#858585";
  }
}

function scrollSidenav8() {
  var beginDiv = document.getElementById("bigDiv8");
  var nextDiv = document.getElementById("bigDiv9");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "396px";
    document.getElementById("sub-group-li-8").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-8").style.color = "#858585";
  }
}

function scrollSidenav9() {
  var beginDiv = document.getElementById("bigDiv9");
  var nextDiv = document.getElementById("bigDiv10");

  var current = beginDiv.offsetTop;
  var next = nextDiv.offsetTop;

  if (window.pageYOffset >= current & window.pageYOffset < next) {

    document.getElementById("selector").style.marginTop = "444px";
    document.getElementById("sub-group-li-9").style.color = "#333333";

  } else {
    document.getElementById("sub-group-li-9").style.color = "#858585";
  }
}
