
// Set the date we're counting down to
var countingDate = new Date("Feb 14, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countingDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector("#count span._day").innerHTML =  (days < 10? "0": "") + days;
  document.querySelector("#count span._hour").innerHTML = (hours < 10? "0": "") + hours;
  document.querySelector("#count span._minute").innerHTML = (minutes < 10? "0": "") + minutes;
  document.querySelector("#count span._second").innerHTML = (seconds < 10? "0": "") + seconds;
}, 1000);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let opacity_var = (300 - document.documentElement.scrollTop)/300;
  opacity_var = (opacity_var > 0)? opacity_var: 0;
  if (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150) {
    document.querySelector('#text').style.opacity = opacity_var;
  } else {
    document.querySelector('#text').style.display = 'none';
  }
}

$('.carousel').carousel({
  interval: 500
})