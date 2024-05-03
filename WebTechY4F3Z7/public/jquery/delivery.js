


$(document).ready(function(){
    function startAnimation() {
        // Define the animation
        $('#car').animate({
            left: '+=250px', // Move 250 pixels to the left from the current position

        }, 2000,function() {
            // Animation complete, restart animation
            $('#car').css({

                transform: 'scaleX(-1)' // Adjust the initial width
            });
            back();  // Call startAnimation() recursively to repeat the animation
        });
            
       
    }
    function back() {
        // Define the animation
        $('#car').animate({
            left: '-=250px', // Move 250 pixels to the left from the current position
        
        }, 2000,function() {
            // Animation complete, restart animation
            $('#car').css({
                // Reset the left position to 40%
  
                transform: 'scaleX(1)' // Adjust the initial width
            });
            startAnimation();  // Call startAnimation() recursively to repeat the animation
        });
        
    }
    // Start the animation on load
    startAnimation();
});



