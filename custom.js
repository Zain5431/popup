
    console.log("Creating popup element");
    var popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.display = 'none';
    popup.innerHTML = '<p>This is a popup!</p>';
    console.log("Popup element created:", popup);
    
    document.body.appendChild(popup);
    
    
    function showAndHidePopup() {
      popup.style.display = 'block';
    
      setTimeout(function() {
        popup.style.display = 'none';
      }, 5000); // 5 seconds in milliseconds
    }
    
    setTimeout(showAndHidePopup, 2000); 
    
