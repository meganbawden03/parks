var request;                         // Latest image to be requested
var $current;                        // Image currently being shown 
var cache = {};                      // Cache object
var $frame = $('#photo-viewer');     // Container for image
var $thumbs = $('.thumb');           // Thumbnails
var popupWindow = document.getElementById("display");
var msg = ''; 
var msg2 = ''; 
function crossfade($img) {           // Function to fade between images
                                     // Pass in new image as parameter
  if ($current) {                    // If there is currently an image showing
    $current.stop().fadeOut('slow'); // Stop any animation & fade it out
  }

  $img.css({                         // Set the CSS margins for the image
    marginLeft: -$img.width() / 2,   // Negative margin of half image's width
    marginTop: -$img.height() / 2    // Negative margin of half image's height
  });

  $img.stop().fadeTo('slow', 1);     // Stop animation on new image & fade in
  
  $current = $img;                   // New image becomes current image

}

$(document).on('click', '.thumb', function(e){ // When a thumb is clicked on
  var $img,                               // Create local variable called $img
      src = this.href;                    // Store path to image
      request = src;                      // Store latest image request
  
  e.preventDefault();                     // Stop default link behavior
  
  $thumbs.removeClass('active');          // Remove active from all thumbs
  $(this).addClass('active');             // Add active to clicked thumb

  if (cache.hasOwnProperty(src)) {        // If cache contains this image
    if (cache[src].isLoading === false) { // And if isLoading is false
      crossfade(cache[src].$img);         // Call crossfade() function
    }
  } else {                                // Otherwise it is not in cache
    $img = $('<img/>');                   // Store empty <img/> element in $img
    cache[src] = {                        // Store this image in cache
      $img: $img,                         // Add the path to the image
      isLoading: true                     // Set isLoading property to false
    };

    // Next few lines will run when image has loaded but are prepared first
    $img.on('load', function(){           // When image has loaded
      $img.hide();                        // Hide it
      // Remove is-loading class from frame & append new image to it
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false;       // Update isLoading in cache
      // If still most recently requested image then
      if (request === src) {
        crossfade($img);                  // Call crossfade() function
      }                                   // Solves asynchronous loading issue
    });

    $frame.addClass('is-loading');        // Add is-loading class to frame

    $img.attr({                           // Set attributes on <img> element
      'src': src,                         // Add src attribute to load image
      'alt': this.title || ''             // Add title if one was given in link
    });

  }
  	var el = document.getElementById('blackboard');
	var ell = document.getElementById('blackboards');
	msg=this.title;
	el.innerHTML = msg;
	if(this.title =="Midnight Moon")
    {

	//'Midnight Moon';
	msg2='Cypress Groves Midnight Moon cheese is a delightful Dutch-style cheese made from pasteurized goats milk and aged for at least six months, resulting in a firm texture and complex flavor profile. With its nutty undertones and caramel-like sweetness, Midnight Moon is a versatile cheese that pairs beautifully with fruits, nuts, and a glass of crisp white wine.';
    }
	if(this.title =="Merlot Bellavitano")
    {
	msg2='Merlot BellaVitano is a unique cheese crafted by soaking wheels of BellaVitano Gold in Merlot wine, resulting in a rich and fruity flavor profile with hints of berry and plum. Its creamy texture and complex taste make it a delightful pairing with charcuterie or enjoyed on its own with a glass of red wine.';
    } 
	if(this.title =="Double Cream Brie")
    {
	msg2='D Affinois Double Cream Brie is a luscious and velvety French cheese known for its rich, buttery flavor and smooth, creamy texture. Crafted with precision, this indulgent double cream Brie showcases the perfect balance of mild sweetnessand a luxurious melt-in-your-mouth consistency.'
    }
	if(this.title =="Oregon Blue")
    {
	msg2='Rogue Creamerys iconic Oregon Blue, originating in 1954 as the West Coasts first cave-aged, Roquefort-style blue cheese, remains a classic favorite. Approachable and fruity, it delights with a balanced "blue" character and a subtle touch of sweet honey.';
    } 
	if(this.title =="Le Créameux")
    {
	msg2='Kaltbach Le Crémeux is a luxurious Swiss cheese aged in the natural sandstone caves of Kaltbach, developing a velvety texture and rich, nutty flavor. With its smooth consistency and subtle hints of caramel and earthiness, Kaltbach Le Crémeux is a decadent choice for cheese connoisseurs.'
    } 
	ell.innerHTML = msg2;
});

// Final line runs once when rest of script has loaded to show the first image
$('.thumb').eq(0).click();                // Simulate click on first thumb