
  // Get the elements by their ID
	var popupLink = document.getElementById("popup-link");
	var popupWindow = document.getElementById("popup-window");
	var thank = document.getElementById("ty");
	var shr = document.getElementById("share");
	var closeButton = document.getElementById("close-button");
	var submitButton = document.getElementById("submit-button");
	var signupButton = document.getElementById("signup");
	var cls = false;             // Message
	var isclicked = false;
	
	

	// Write the message into the page
	//var el = document.getElementById('blackboard');
	//el.innerHTML = msg;
	


  // Show the pop-up window when the link is clicked
  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
	
    popupWindow.style.display = "block";
  });
     // Show the pop-up window when the link is clicked

  
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
	 cls=true;
  });
  



