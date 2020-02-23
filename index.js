//SCROLL
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage'], #eventitem").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})



// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
document.getElementById("img01").src = element.src;
document.getElementById("modal01").style.display = "block";
var captionText = document.getElementById("caption");
captionText.innerHTML = element.alt;
}



// $(document).ready(function () {
//     $('#calendar').eCalendar({
//
//  weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//         months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//         textArrows: {previous: '<', next: '>'},
//         eventTitle: 'Events',
//         url: '',
//         events: [
//             {title: 'Event 1', description: 'Description 1', datetime: new Date(2019, 7, 15, 17)},
//             {title: 'Event 2', description: 'Description 2', datetime: new Date(2019, 7, 14, 16)},
//             {title: 'Event 3', description: 'jQueryScript.Net', datetime: new Date(2019, 7, 10, 16)}
//         ]});
// });
