// Copyright Year
let date = document.querySelector('#date');
const d = new Date;
date.innerHTML = d.getFullYear();
// Copyright Year End

//
$(window).on("load", function() {
	const cancelIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="cancel-icon"
      style="cursor: pointer; position: absolute; top: 10px; right: 10px;"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;
	

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

	// $(".navbar-toggler-icon").on('click', function() {
	// 	setTimeout(() => {
	// 		$(".navbar-toggler-icon .bi-x-lg ").append(cancelIcon)
	// 	}, 1000)
	// });
})
// 


// 
$(document).ready(function() {
	const cancelIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="cancel-icon"
      style="cursor: pointer; position: absolute; top: 10px; right: 10px;"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;
  const icon2 =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["UI/UX Designer.", "Graphics Designer.", "Student.", "Entrepreneur."],
		typeSpeed: 70*1.5,
		loop: true,
		startDelay: 200,
		showCursor: true,
		fadeOut: true
	});

	$('.typed-cursor').addClass('cursor-typed'); 
	
	console.log($('.navbar-toggler > span > svg')[0].classList.value == 'navbar-toggler-icon' );

	

	if (typeof jQuery !== 'undefined') {
		$('.navbar-toggler').click( function(){

			if($('.navbar-toggler > span')[0].classList.value == 'navbar-toggler-icon'){
				$('.navbar-toggler > span').toggleClass();			
				$('.navbar-toggler > span > svg').toggleClass();
				$('.navbar-toggler > span').addClass('bi-x-lg white');
				$('.navbar-toggler > span > svg').addClass('bi-x-lg white');
			}else{
				$('.navbar-toggler > span').toggleClass();
				$('.navbar-toggler > span > svg').toggleClass();
				$('.navbar-toggler > span').addClass('navbar-toggler-icon');
				$('.navbar-toggler > span > svg').addClass('bi-x-lg white hidden');
			}
	
		});
	  } else {
		// Fallback to vanilla JavaScript
		document.querySelector('.navbar-toggler').addEventListener('click', function () {
			const togglerSpan = document.querySelector('.navbar-toggler > span');
			const togglerSvg = document.querySelector('.navbar-toggler > span > svg');
		  
			if (togglerSpan.classList.value === 'navbar-toggler-icon') {
			  // Clear all classes
			  togglerSpan.className = '';
			  togglerSvg.className = '';
		  
			  // Add the new classes
			  togglerSpan.classList.add('bi-x-lg', 'white');
			  togglerSvg.classList.add('bi-x-lg', 'white');
			} else {
			  // Clear all classes
			  togglerSpan.className = '';
			  togglerSvg.className = '';
		  
			  // Add the default classes back
			  togglerSpan.classList.add('navbar-toggler-icon');
			  togglerSvg.classList.add('bi-x-lg', 'white', 'hidden');
			}
		  });
	  }


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});


	


	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});


	$("[data-fancybox]").fancybox();


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});



	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

	function updatePopoverTrigger() {
		const triggerType = window.innerWidth < 768 ? 'none' : 'hover';
		// const triggerType = 'hover';
		$('[data-toggle="popover"]').popover('dispose'); // Destroy any existing popovers
		$('[data-toggle="popover"]').popover({
		  trigger: triggerType
		});
	  }
  
	  // Set trigger on page load
	  updatePopoverTrigger();
  
	  // Update trigger on window resize
	  $(window).on('resize', updatePopoverTrigger);

});
// 
















