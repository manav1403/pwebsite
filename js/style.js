//add animated image caropusel
		var pic = document.querySelectorAll('.img');
		var pic1 = document.querySelectorAll('.overlay');
		var pic2 = document.querySelectorAll('.p-4');
		var currentpic = 0;
		var t =0;
        var picInterval = setInterval(nextpic,2000);

function nextpic(){
	pic1[t].style.opacity="0";
	pic2[t].style.opacity="0";
	pic[0].style.backgroundImage= "url(img/p"+currentpic+".png)";
	pic1[currentpic+1].style.opacity=".7";
	pic2[currentpic+1].style.opacity="1";
	t=currentpic+1
	currentpic = (currentpic+1)%4;
	console.log(currentpic);
   
}
		
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });