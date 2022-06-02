var buttonOpen = document.getElementById("button-open");
var buttonClose = document.getElementById("button-close");
var offcanvasMenu = document.getElementById("offcanvas-menu");
var listItems = document.getElementsByClassName("offcanvas-list-item");

buttonOpen.addEventListener("click", function () {
  offcanvasMenu.classList.remove("-left-full");
});

buttonClose.addEventListener("click", function () {
  offcanvasMenu.classList.add("-left-full");
});

// Add event listener to each list item in array
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    offcanvasMenu.classList.add("-left-full");
  });
}

new Plyr("#player");
new Plyr("#player2");
