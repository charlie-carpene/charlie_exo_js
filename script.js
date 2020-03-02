//Fonctionnalité 1 & 1-bis
var footer = document.getElementsByTagName("footer")[0];
let x = 1;
var onClickedFooter = function() {
  console.log("clique n°" + x);
  x += 1;
}
footer.addEventListener("click", onClickedFooter);

//Fonctionnalité 2 - Hamburger menu
var activateHamburger = document.getElementById("navbarHeader");

var hamburgerMenu = document.getElementsByTagName("header")[0].getElementsByTagName("Button")[0];

var hamburgerMenuClicked = function() {
  activateHamburger.classList.toggle("collapse");
};

hamburgerMenu.addEventListener("click", hamburgerMenuClicked);

//Fonctionnalité 3 - Edit red
var firstCard = document.getElementsByClassName("col-md-4")[0];
var buttonEdit = firstCard.children[0].children[1].children[1].children[0].children[1];

var colorTextCard1 = function() {
  firstCard.getElementsByTagName("p")[0].style.color = 'red';
};

buttonEdit.addEventListener("click", colorTextCard1);

//Fonctionnalité 4 - Edit green
var secondCard = document.getElementsByClassName("col-md-4")[1];
var button2Edit = secondCard.getElementsByClassName("btn-group")[0].children[1];

var colorTextCard2 = function() {
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
};

button2Edit.addEventListener("click", colorTextCard2);

//Fonctionnalité 5 - CSS
var cssLink = document.getElementsByTagName("link")[0];
var header = document.getElementsByTagName("header")[0];
let status = true;

var activateCss = function() {
  if(status === true) {
    cssLink.href = '#';
    status = false;
  } else {
    cssLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    status = true;
  };
  console.log(status);
};

header.addEventListener("dblclick", activateCss);
if(status === false) {
  document.addEventListener("dblclick", activateCss);
};
