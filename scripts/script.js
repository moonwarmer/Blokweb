// JavaScript Document
var deMenuButton = document.querySelector('header nav button');

deMenuButton.addEventListener('click',openMenu);

function openMenu() {
  var hetMenu = document.querySelector('header nav ul');
  hetMenu.classList.toggle('open');
}
