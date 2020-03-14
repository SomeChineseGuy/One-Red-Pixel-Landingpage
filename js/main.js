$(document).ready(function() {
    // All init files
    //  new WOW().init();
    //  var rellax = new Rellax('.rellax', {
    // });
    setTimeout(() => {
        var widget = $("#instagram #eapps-instagram-feed-1 > a[href$='https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instagram-feed&utm_term=undefined&utm_campaign=free-widget']")
        widget.hide()
    }, 1000);
    var autumnCount = 0;
	var winterCount = 0;
	var springCount = 0;
	var summerCount = 0;

	// Whenever autumn is clicked, run this function
	$("#btn1").click(function(){
	
		$("#section2").css("transform","translateY(calc(-100vh + 120px))");
		$("#section3").css("transform","translateY(calc(-100vh + 80px))");
		$("#section4").css("transform","translateY(calc(-100vh + 40px))");
		winterCount = 0;
		springCount = 0;
		summerCount = 0;

	});

    // Whenever summer is clicked, run this function
    $("#btn4").click(function(){

      if(summerCount==0)
      {
        $("#section2").css("transform","translateY(calc(0vh - 40px))");
        $("#section3").css("transform","translateY(calc(0vh - 80px))");
        $("#section4").css("transform","translateY(calc(0vh - 120px))");
        summerCount = 1;
        springCount = 1;
        winterCount = 1;
      }
      else if(summerCount==1)
      {
        $("#section4").css("transform","translateY(calc(-100vh + 40px))");
        summerCount = 0;
      }

    });

    // Whenever spring is clicked, run this function
    $("#btn3").click(function(){

      if(springCount==0)
      {
        $("#section2").css("transform","translateY(calc(0vh - 40px))");
        $("#section3").css("transform","translateY(calc(0vh - 80px))");
        springCount = 1;
        winterCount = 1;
      }
      else if(springCount==1)
      {
        $("#section3").css("transform","translateY(calc(-100vh + 80px))");
        $("#section4").css("transform","translateY(calc(-100vh + 40px))");
        springCount = 0;
        summerCount = 0;
      }

    });

    // Whenever winter is clicked, run this function
    $("#btn2").click(function(){

      if(winterCount==0)
      {
        $("#section2").css("transform","translateY(calc(0vh - 40px))");
        winterCount = 1;
      }
      else if(winterCount==1)
      {
        $("#section2").css("transform","translateY(calc(-100vh + 120px))");
        $("#section3").css("transform","translateY(calc(-100vh + 80px))");
        $("#section4").css("transform","translateY(calc(-100vh + 40px))");
        winterCount = 0;
        springCount = 0;
        summerCount = 0;
      }

    });
});
