// Create the popup element
var popup = document.createElement('div');
popup.id = 'popup';
popup.style.display = 'none';
popup.innerHTML = '<p>This is a popup!</p>';
document.body.appendChild(popup);

// Function to show the popup and then hide it after 5 seconds
function showAndHidePopup() {
  popup.style.display = 'block';

  setTimeout(function() {
    popup.style.display = 'none';
  }, 5000); // 5 seconds in milliseconds
}

// Call the showAndHidePopup function after 20 seconds
setTimeout(showAndHidePopup, 20000); // 20 seconds in milliseconds
