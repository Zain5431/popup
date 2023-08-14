// Create the popup element
function showAndHidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    setTimeout(function() {
      popup.style.display = 'none';
    }, 5000); // 5 seconds in milliseconds
  }

  setTimeout(showAndHidePopup, 20000); // 20 seconds in milliseconds
