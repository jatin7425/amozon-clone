// Scroll to a specific section on button click
var button = document.getElementById('scrolltopbtn'); // Replace 'button-id' with the actual ID of your button
var section = document.getElementById('scrolltop'); // Replace 'section-id' with the actual ID of your section

button.addEventListener('click', function() {
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
});