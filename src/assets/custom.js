// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = "block";
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

//Add function for the navigation
// Accordion

function myFunction(id) {
  var x = document.getElementById(id);

  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";

    x.previousElementSibling.className += " w3-theme-d1";
  } else {
    x.className = x.className.replace("w3-show", "");

    x.previousElementSibling.className = x.previousElementSibling.className.replace(
      " w3-theme-d1",
      ""
    );
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button

function openNav() {
  var x = document.getElementById("navDemo");

  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
