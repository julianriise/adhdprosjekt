// --- Burger menu events --- //
const menuButton = document.getElementById('burger-menu');
const navList = document.querySelector('.nav-list');

function toggleButton() {
  navList.classList.toggle('show');
}

menuButton.addEventListener('click', toggleButton)
console.log(menuButton);




/*// --- Form submission events --- //

// Target submitButton by constant
const submitButton = document.getElementById('submit');
const submitForm = document.getElementById('submission-form');

submitButton.addEventListener('click', function (submit) {
  // Actions to perform on submitButton click
  // - Prevent default auto-scroll, ect.
  submit.preventDefault();
  submit.stopPropagation();
  // - Print "Clicked" in console to confirm action
  console.log("Clicked");
  // - Submit form

});*/

