/* eslint-disable no-undef */
const buttonOpen = document.getElementById('button-open')
const buttonClose = document.getElementById('button-close')
const offcanvasMenu = document.getElementById('offcanvas-menu')
const listItems = document.getElementsByClassName('offcanvas-list-item')

buttonOpen.addEventListener('click', function () {
  offcanvasMenu.classList.remove('-left-full')
})

buttonClose.addEventListener('click', function () {
  offcanvasMenu.classList.add('-left-full')
})

// Add event listener to each list item in array
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function () {
    offcanvasMenu.classList.add('-left-full')
  })
}

// eslint-disable-next-line no-new
new Plyr('#player')
// eslint-disable-next-line no-new
new Plyr('#player2')
