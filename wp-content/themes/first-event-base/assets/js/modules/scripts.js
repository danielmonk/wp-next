jQuery('document').ready(function($){
	
	$(function(){
		$('#menu-primary li a').on('click', function (e) {
			e.preventDefault();                   // prevent default anchor behavior
			var goTo = this.getAttribute("href"); // store anchor href
		
			$('.home-section').addClass('selected'); 
			$('.svg img').addClass('zoomed'); 

			setTimeout(function(){
				window.location = goTo;
			}, 1500); // time in ms
		}); 
	});
    // Slideout feature
    // $('#slideout h3').on('click', function(){
    //     $(this).parent().toggleClass('out');
    // });

    // $('#slideout_inner').on('click', function(e){
	// 	e.preventDefault();
    // });

    // header

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('header').addClass('nav-up');
        } else {
           $('header').removeClass('nav-up');
        }
    });

	// $(function () {
	// 	let $div_li = $(".tab_menu ul li");
	// 	$div_li.on('click', function () {
	// 		$(this).addClass("selected").siblings().removeClass("selected");
	// 		let index = $(this).index();
	// 		$(".tab_box>div").hide();
	// 		$(".tab_box>div").eq(index).show().siblings().toggleClass('hide');
	// 	});
	// });


	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

	// var start = moment('2021-04-01');
    // var end = moment('2021-05-31');
    // var formattedPercentage = 0;
    
    // var interval = setInterval(function(){
    //   var now = moment();
    //   var percentage = now.diff(start) / end.diff(start) * 100;

    //   if (percentage > 100) {
    //     formattedPercentage = 100;
    //     clearInterval(interval);
    //   } else {
    //     formattedPercentage = percentage.toFixed(2);
    //   }
    //   // Use formattedPercentage as you need
    //   $('#example-progress-bar .progress-bar').width(formattedPercentage+'%').html(formattedPercentage+'%')

    // }, 500);

    // var player = new Vimeo.Player($('iframe'));
    // // Auto-Play video
    // player.play();
    // $('.test-div').hide();
    // player.on('play', function(data){
    //   $('.test-div').fadeOut();
    // });
    
    // player.on('ended', function(data){     
    //   $('.test-div').fadeIn();
    // });

    // var livePlayer = new Vimeo.Player($('iframe'));
    // // Auto-Play video
    // livePlayer.play();
    // livePlayer.on('play', function(data){
	// 	$('.live-stream-wrapper .embed-container').addClass('large');
    // });
    // livePlayer.on('ended', function(data){
    //   $('.live-stream-wrapper .embed-container').removeClass('large');
    // });


	$(function(){
		$('#menu-primary li a').click(function (e) {
			e.preventDefault();                   // prevent default anchor behavior
			var goTo = this.getAttribute("href"); // store anchor href
		
			$('.home-section').addClass('selected'); 
			$('.svg img').addClass('zoomed'); 

			setTimeout(function(){
				window.location = goTo;
			}, 1500); // time in ms
		}); 
	});

	





	// Set the date we're counting down to

	// var countDownDate = new Date("Apr 29, 2021 10:06:20").getTime();

	// // Update the count down every 1 second
	// var x = setInterval(function() {

	//   // Get today's date and time
	//   var now = new Date().getTime();
		
	//   // Find the distance between now and the count down date
	//   var distance = countDownDate - now;
		
	//   // Time calculations for days, hours, minutes and seconds
	//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
	//   // Output the result in an element with id="demo"
	//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	//   + minutes + "m " + seconds + "s ";
		
	//   // If the count down is over, write some text
	//   var streamPlayer = new Vimeo.Player($('iframe'));
	//   // Auto-Play video
	
	//   if (distance < 0) {
	//     clearInterval(x);
	//     streamPlayer.play();
	//     document.getElementById("demo").innerHTML = "EXPIRED";
	//   }
	// }, 1000);

    // if ($(window).width() < 960) {
    //     console.log('Less than 960');
    //     $('.menu-container').hide();
        
    //     $(".navbar-toggler").click(function(){
    //         $('.menu-container').slideToggle();
    //     });
    //  }
    
    // // Home section

});